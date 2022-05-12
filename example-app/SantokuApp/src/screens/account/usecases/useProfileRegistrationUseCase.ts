import {useDispatchAccountContext} from 'context/useDispatchAccountContext';
import {FormikProps} from 'formik';
import {AuthenticationService, isUnauthorizedError} from 'framework/authentication';
import {generatePassword} from 'framework/utilities';
import {isValidForm} from 'framework/validator';
import {TermsOfServiceAgreementStatus} from 'generated/backend/model';
import {useCallback, useState} from 'react';
import {usePostAccountsMeTerms} from 'service';

import {ProfileForm} from '../data-types';

export const useProfileRegistrationUseCase = (
  form: FormikProps<ProfileForm>,
  termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus,
) => {
  // サインアップ処理中状態
  const [isExecutingSignup, setIsExecutingSignup] = useState(false);
  const {mutateAsync: callSignup} = AuthenticationService.useSignup();
  const {mutateAsync: callLogin} = AuthenticationService.useLogin();
  const {mutateAsync: callPostAccountsMeTerms} = usePostAccountsMeTerms();
  const dispatchAccountContext = useDispatchAccountContext();

  const clearNickname = useCallback(() => form.setFieldValue('nickname', ''), [form]);

  const signup = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        setIsExecutingSignup(true);
        const nickname = form.values.nickname;
        const password = await generatePassword();
        const account = await callSignup({nickname, password});
        await callLogin({accountId: account.accountId, password});
        await callPostAccountsMeTerms(termsOfServiceAgreementStatus);
        setIsExecutingSignup(false);
        dispatchAccountContext({type: 'login', account});
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
  }, [callLogin, callPostAccountsMeTerms, callSignup, form, dispatchAccountContext, termsOfServiceAgreementStatus]);

  return {
    clearNickname,
    signup,
    isExecutingSignup,
  };
};
