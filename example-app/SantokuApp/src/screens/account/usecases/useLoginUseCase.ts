import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useTermsOfServiceAgreementOverlay} from 'components/overlay/termsOfService';
import {useSetAccountContext} from 'context/useSetAccountContext';
import {FormikProps} from 'formik';
import {AuthenticationService, isUnauthorizedError, SecureStorageAdapter} from 'framework/authentication';
import {m} from 'framework/message';
import {isValidForm} from 'framework/validator';
import {TermsOfServiceAgreementStatus} from 'generated/backend/model';
import {RootStackParamList} from 'navigation/types';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {useGetAccountsMe, useGetAccountsMeTerms, useGetTerms} from 'service';

import {LoginForm} from '../data-types';

export const useLoginUseCase = (form: FormikProps<LoginForm>) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const setAccountContext = useSetAccountContext();
  const termsOverlay = useTermsOfServiceAgreementOverlay();
  // ログイン処理中状態
  const [isExecutingLogin, setIsExecutingLogin] = useState(false);
  const {refetch: getAccountMe} = useGetAccountsMe({query: {enabled: false}});
  const {mutateAsync: callLogin} = AuthenticationService.useLogin();
  const {refetch: callGetAccountsMeTerms} = useGetAccountsMeTerms();
  const {refetch: callGetTerms, isFetching: isFetchingTerms} = useGetTerms();

  const clearAccountId = useCallback(() => form.setFieldValue('accountId', ''), [form]);
  const clearPassword = useCallback(() => form.setFieldValue('password', ''), [form]);

  const createAccount = useCallback(async () => {
    const termsOfService = (await callGetTerms()).data?.data;
    // termsOfServiceは必ず返却される想定
    if (termsOfService) {
      termsOverlay.show({
        termsOfService,
        exitingCallbackOnAgreed: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
          navigation.navigate('ProfileRegistration', termsOfServiceAgreementStatus);
        },
        dismissible: true,
      });
    }
  }, [callGetTerms, navigation, termsOverlay]);
  const login = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        setIsExecutingLogin(true);
        const accountId = form.values.accountId;
        const password = form.values.password;
        await callLogin({accountId, password});
        await SecureStorageAdapter.savePassword(accountId, password);
        const account = (await getAccountMe({throwOnError: true})).data?.data;
        const termsOfServiceAgreementStatus = (await callGetAccountsMeTerms({throwOnError: true})).data?.data;
        if (!termsOfServiceAgreementStatus?.hasAgreedValidTermsOfService) {
          const termsOfService = (await callGetTerms({throwOnError: true})).data?.data;
          // termsOfServiceは必ず返却される想定
          if (termsOfService) {
            termsOverlay.show({termsOfService, dismissible: false});
          }
        }
        setIsExecutingLogin(false);
        setAccountContext(account);
      } catch (e) {
        if (isUnauthorizedError(e)) {
          Alert.alert(m('ログイン失敗'), m('アカウントIDまたはパスワードに\n間違いがあります。'));
        }
        setIsExecutingLogin(false);
      }
    }
  }, [callGetAccountsMeTerms, callGetTerms, callLogin, form, getAccountMe, setAccountContext, termsOverlay]);

  return {
    clearAccountId,
    clearPassword,
    createAccount,
    login,
    isExecutingLogin,
    isExecutingCreateAccount: isFetchingTerms,
  };
};
