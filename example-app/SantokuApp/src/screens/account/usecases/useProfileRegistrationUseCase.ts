import {CommonActions} from '@react-navigation/core';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FormikProps} from 'formik';
import {AuthenticationService, isUnauthorizedError} from 'framework/authentication';
import {generatePassword} from 'framework/utilities';
import {isValidForm} from 'framework/validator';
import {Account, TermsOfService} from 'generated/backend/model';
import {RootStackParamList} from 'navigation/types';
import {useCallback, useState} from 'react';
import {useGetTerms} from 'service';

import {ProfileForm} from '../data-types';

export const useProfileRegistrationUseCase = (form: FormikProps<ProfileForm>) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // サインアップ処理中状態
  const [isExecutingSignup, setIsExecutingSignup] = useState(false);
  const {mutateAsync: callSignup} = AuthenticationService.useSignup();
  const {mutateAsync: callLogin} = AuthenticationService.useLogin();
  const {refetch: callGetTerms} = useGetTerms();

  const clearNickname = useCallback(() => form.setFieldValue('nickname', ''), [form]);

  const onGoToTermsOfServiceAgreementScreen = useCallback(
    (account: Account, termsOfService?: TermsOfService) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'TermsOfServiceAgreement', params: {account, termsOfService}}],
        }),
      ),
    [navigation],
  );

  const signup = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        setIsExecutingSignup(true);
        const nickname = form.values.nickname;
        const password = await generatePassword();
        const account = await callSignup({nickname, password});
        await callLogin({accountId: account.accountId, password});
        const termsOfService = (await callGetTerms({throwOnError: true})).data?.data;
        onGoToTermsOfServiceAgreementScreen(account, termsOfService);
      } catch (e) {
        // ここではサインアップに成功したaccountId、passwordを使用してログインしているため、UnauthorizedErrorが発生しない想定です。
        // もし発生した場合は、クライアント側のログアウト処理を実施後、想定外のエラーとしてアプリをクラッシュさせて、Firebase Crashlyticsにエラーログを送信します。
        if (isUnauthorizedError(e)) {
          await AuthenticationService.clientLogout();
          throw e;
        }
      } finally {
        setIsExecutingSignup(false);
      }
    }
  }, [callGetTerms, callLogin, callSignup, form, onGoToTermsOfServiceAgreementScreen]);

  return {
    clearNickname,
    signup,
    isExecutingSignup,
  };
};
