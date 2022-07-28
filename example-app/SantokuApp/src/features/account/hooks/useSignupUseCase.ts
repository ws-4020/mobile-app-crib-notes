import {useIsMounted} from 'bases/core/utils/useIsMounted';
import {generatePassword} from 'bases/id/utils/id';
import {log} from 'bases/logging/utils';
import {m} from 'bases/message/utils/Message';
import {isValidForm} from 'bases/validator/utils';
import {useAccountContextOperation} from 'features/account/contexts/useAccountContextOperation';
import {isUnauthorizedError} from 'features/account/errors/UnauthorizedError';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {FormikProps} from 'formik';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';

import {ProfileForm} from '../types/ProfileForm';
import {clientLogout} from '../utils/auth/clientLogout';
import {useLogin} from './useLogin';
import {usePostAccountsMeTerms} from './usePostAccountsMeTerms';
import {useSignup} from './useSignup';

export const useSignupUseCase = (
  form: FormikProps<ProfileForm>,
  termsAgreementStatus: TermsOfServiceAgreementStatus,
) => {
  // サインアップ処理中状態
  const [isExecutingSignup, setIsExecutingSignup] = useState(false);
  const {mutateAsync: callSignup} = useSignup();
  const {mutateAsync: callLogin} = useLogin();
  const {mutateAsync: callPostAccountsMeTerms} = usePostAccountsMeTerms();
  const accountContextOperation = useAccountContextOperation();
  const isMounted = useIsMounted();

  const signup = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        setIsExecutingSignup(true);
        const nickname = form.values.nickname;
        const password = await generatePassword();
        const account = await callSignup({nickname, password});
        await callLogin({accountId: account.accountId, password});
        await callPostAccountsMeTerms(termsAgreementStatus);
        accountContextOperation.login(account, {termsAgreementStatus});
      } catch (e) {
        // ここではサインアップに成功したaccountId、passwordを使用してログインしているため、UnauthorizedErrorが発生しない想定です。
        // もし発生した場合は、クライアント側のログアウト処理を実施後、Firebase Crashlyticsにエラーログを送信します。
        if (isUnauthorizedError(e)) {
          await clientLogout();
          log.error(m('app.account.signupError', String(e)), 'app.account.signupError');
          Alert.alert(m('app.account.サインアップエラータイトル'), m('app.account.サインアップエラー本文'));
        }
      } finally {
        if (isMounted()) {
          setIsExecutingSignup(false);
        }
      }
    }
  }, [form, callSignup, callLogin, callPostAccountsMeTerms, termsAgreementStatus, accountContextOperation, isMounted]);

  return {
    signup,
    isExecutingSignup,
  };
};
