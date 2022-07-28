import {useIsMounted} from 'bases/core/utils/useIsMounted';
import {m} from 'bases/message/utils/Message';
import {isValidForm} from 'bases/validator/utils';
import {FormikProps} from 'formik';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';

import {useAccountContextOperation} from '../contexts/useAccountContextOperation';
import {isUnauthorizedError} from '../errors/UnauthorizedError';
import {LoginForm} from '../types/LoginForm';
import {savePassword} from '../utils/secure-storage/savePassword';
import {useGetAccountsMeService} from './useGetAccountsMeService';
import {useGetAccountsMeTermsService} from './useGetAccountsMeTermsService';
import {useLoginService} from './useLoginService';
import {useTerms} from './useTerms';

export const useLoginUseCase = (form: FormikProps<LoginForm>) => {
  const isMounted = useIsMounted();
  const [isExecutingLogin, setIsExecutingLogin] = useState(false);
  const {termsOfService} = useTerms();
  const {mutateAsync: callLogin} = useLoginService();
  const accountContextOperation = useAccountContextOperation();
  const {refetch: callGetAccountMe} = useGetAccountsMeService({query: {enabled: false}});
  const {refetch: callGetAccountsMeTerms} = useGetAccountsMeTermsService({query: {enabled: false}});
  const login = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        // TODO: ここはもっとServiceに寄せても良さそう
        setIsExecutingLogin(true);
        const accountId = form.values.accountId;
        const password = form.values.password;
        await callLogin({accountId, password});
        await savePassword(accountId, password);
        // callGetAccountMe.dataは必ず存在する想定
        const account = (await callGetAccountMe({throwOnError: true})).data!.data;
        const termsAgreementStatus = (await callGetAccountsMeTerms({throwOnError: true})).data?.data;
        // 利用規約を取得できていない場合はボタンを非活性にしているので、termsOfServiceは必ず存在する想定
        accountContextOperation.login(account, {termsAgreementStatus, termsOfService: termsOfService!.data});
      } catch (e) {
        if (isUnauthorizedError(e)) {
          Alert.alert(m('ログイン失敗'), m('アカウントIDまたはパスワードに\n間違いがあります。'));
        }
      } finally {
        if (isMounted()) {
          setIsExecutingLogin(false);
        }
      }
    }
  }, [form, callLogin, callGetAccountMe, callGetAccountsMeTerms, accountContextOperation, termsOfService, isMounted]);
  return {login, isExecutingLogin};
};
