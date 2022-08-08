import {log} from 'bases/logging';
import {m} from 'bases/message/Message';
import {isValidForm} from 'bases/validator';
import {isUnauthorizedError} from 'features/account/errors/UnauthorizedError';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {FormikProps} from 'formik';
import {useCallback} from 'react';
import {Alert} from 'react-native';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {clientLogout} from '../services/auth/clientLogout';
import {useAccountDataOperation} from '../services/useAccountDataOperation';
import {useSignup as useSignupService} from '../services/useSignup';
import {ProfileForm} from '../types/ProfileForm';

export const useSignup = (form: FormikProps<ProfileForm>, termsAgreementStatus: TermsOfServiceAgreementStatus) => {
  // サインアップ処理中状態
  const {mutateAsync: callSignup, isLoading} = useSignupService();
  const [, setIsLoggedIn] = useIsLoggedIn();
  const accountDataOperation = useAccountDataOperation();

  const signup = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        const nickname = form.values.nickname;
        const accountData = await callSignup({nickname, termsAgreementStatus});
        accountDataOperation.signup(accountData);
        setIsLoggedIn(true);
      } catch (e) {
        // ここではサインアップに成功したaccountId、passwordを使用してログインしているため、UnauthorizedErrorが発生しない想定です。
        // もし発生した場合は、クライアント側のログアウト処理を実施後、Firebase Crashlyticsにエラーログを送信します。
        if (isUnauthorizedError(e)) {
          await clientLogout();
          log.error(m('app.account.signupError', String(e)), 'app.account.signupError');
          Alert.alert(m('app.account.サインアップエラータイトル'), m('app.account.サインアップエラー本文'));
        }
      }
    }
  }, [form, callSignup, termsAgreementStatus, accountDataOperation, setIsLoggedIn]);

  return {
    signup,
    isExecutingSignup: isLoading,
  };
};
