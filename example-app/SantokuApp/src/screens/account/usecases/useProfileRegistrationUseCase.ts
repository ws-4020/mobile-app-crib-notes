import {useSetAccountContext} from 'context/useSetAccountContext';
import {useSetTermsContext} from 'context/useSetTermsContext';
import {FormikProps} from 'formik';
import {AuthenticationService, isUnauthorizedError} from 'framework/authentication';
import {generatePassword} from 'framework/utilities';
import {isValidForm} from 'framework/validator';
import {useCallback, useState} from 'react';
import {useGetTerms} from 'service';

import {ProfileForm} from '../data-types';

export const useProfileRegistrationUseCase = (form: FormikProps<ProfileForm>) => {
  // サインアップ処理中状態
  const [isExecutingSignup, setIsExecutingSignup] = useState(false);
  const {mutateAsync: callSignup} = AuthenticationService.useSignup();
  const {mutateAsync: callLogin} = AuthenticationService.useLogin();
  const {refetch: callGetTerms} = useGetTerms();
  const setAccountContext = useSetAccountContext();
  const setTermsContext = useSetTermsContext();

  const clearNickname = useCallback(() => form.setFieldValue('nickname', ''), [form]);

  const signup = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        setIsExecutingSignup(true);
        const nickname = form.values.nickname;
        const password = await generatePassword();
        const account = await callSignup({nickname, password});
        await callLogin({accountId: account.accountId, password});
        const termsOfService = (await callGetTerms({throwOnError: true})).data?.data;
        setIsExecutingSignup(false);
        setTermsContext({termsOfService});
        setAccountContext(account);
      } catch (e) {
        // ここではサインアップに成功したaccountId、passwordを使用してログインしているため、UnauthorizedErrorが発生しない想定です。
        // もし発生した場合は、クライアント側のログアウト処理を実施後、想定外のエラーとしてアプリをクラッシュさせて、Firebase Crashlyticsにエラーログを送信します。
        if (isUnauthorizedError(e)) {
          await AuthenticationService.clientLogout();
          throw e;
        }
        setIsExecutingSignup(false);
      }
    }
  }, [callGetTerms, callLogin, callSignup, form, setAccountContext, setTermsContext]);

  return {
    clearNickname,
    signup,
    isExecutingSignup,
  };
};
