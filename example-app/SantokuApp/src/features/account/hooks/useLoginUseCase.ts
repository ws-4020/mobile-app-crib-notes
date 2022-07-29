import {useIsMounted} from 'bases/core/utils/useIsMounted';
import {m} from 'bases/message/utils/Message';
import {isValidForm} from 'bases/validator/utils';
import {FormikProps} from 'formik';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';

import {isUnauthorizedError} from '../errors/UnauthorizedError';
import {LoginForm} from '../types/LoginForm';
import {savePassword} from '../utils/secure-storage/savePassword';
import {useAccountDataOperation} from './useAccountDataOperation';
import {useGetAccountsMe} from './useGetAccountsMe';
import {useGetAccountsMeTerms} from './useGetAccountsMeTerms';
import {useIsLoggedIn} from './useIsLoggedIn';
import {useLogin} from './useLogin';
import {useTerms} from './useTerms';

export const useLoginUseCase = (form: FormikProps<LoginForm>) => {
  const isMounted = useIsMounted();
  const [isExecutingLogin, setIsExecutingLogin] = useState(false);
  const {termsOfService} = useTerms();
  const {mutateAsync: callLogin} = useLogin();
  const accountDataOperation = useAccountDataOperation();
  const {refetch: callGetAccountMe} = useGetAccountsMe({query: {enabled: false}});
  const {refetch: callGetAccountsMeTerms} = useGetAccountsMeTerms({query: {enabled: false}});
  const [, setIsLoggedIn] = useIsLoggedIn();
  const login = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        setIsExecutingLogin(true);
        const accountId = form.values.accountId;
        const password = form.values.password;
        await callLogin({accountId, password});
        await savePassword(accountId, password);
        // callGetAccountMe.dataは必ず存在する想定
        const account = (await callGetAccountMe({throwOnError: true})).data!.data;
        const termsAgreementStatus = (await callGetAccountsMeTerms({throwOnError: true})).data?.data;
        // 利用規約を取得できていない場合はボタンを非活性にしているので、termsOfServiceは必ず存在する想定
        accountDataOperation.login({account, terms: {termsAgreementStatus, termsOfService: termsOfService!.data}});
        setIsLoggedIn(true);
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
  }, [
    form,
    callLogin,
    callGetAccountMe,
    callGetAccountsMeTerms,
    accountDataOperation,
    termsOfService,
    setIsLoggedIn,
    isMounted,
  ]);
  return {login, isExecutingLogin};
};
