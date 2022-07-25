import {log, m, useIsMounted} from 'bases';
import {AuthenticationService} from 'features/account/AuthenticationService';
import {isUnauthorizedError} from 'features/account/UnauthorizedError';
import {generatePassword} from 'bases/utilities';
import {isValidForm} from 'bases/validator';
import {useAccountContextOperation} from 'features/account/useAccountContextOperation';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {FormikProps} from 'formik';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {usePostAccountsMeTerms} from 'service';

import {ProfileForm} from '../data-types';

export const useProfileRegistrationUseCase = (
  form: FormikProps<ProfileForm>,
  termsAgreementStatus: TermsOfServiceAgreementStatus,
) => {
  // サインアップ処理中状態
  const [isExecutingSignup, setIsExecutingSignup] = useState(false);
  const {mutateAsync: callSignup} = AuthenticationService.useSignup();
  const {mutateAsync: callLogin} = AuthenticationService.useLogin();
  const {mutateAsync: callPostAccountsMeTerms} = usePostAccountsMeTerms();
  const accountContextOperation = useAccountContextOperation();
  const isMounted = useIsMounted();

  const clearNickname = useCallback(() => form.setFieldValue('nickname', ''), [form]);

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
          await AuthenticationService.clientLogout();
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
    clearNickname,
    signup,
    isExecutingSignup,
  };
};
