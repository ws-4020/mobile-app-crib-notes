import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useSetAccountContext} from 'context/useSetAccountContext';
import {useSetTermsContext} from 'context/useSetTermsContext';
import {FormikProps} from 'formik';
import {AuthenticationService, isUnauthorizedError, SecureStorageAdapter} from 'framework/authentication';
import {m} from 'framework/message';
import {isValidForm} from 'framework/validator';
import {RootStackParamList} from 'navigation/types';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {useGetAccountsMe, useGetAccountsMeTerms, useGetTerms} from 'service';

import {LoginForm} from '../data-types';

export const useLoginUseCase = (form: FormikProps<LoginForm>) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const setAccountContext = useSetAccountContext();
  const setTermsContext = useSetTermsContext();
  // ログイン処理中状態
  const [isExecutingLogin, setIsExecutingLogin] = useState(false);
  const {refetch: getAccountMe} = useGetAccountsMe({query: {enabled: false}});
  const {mutateAsync: callLogin} = AuthenticationService.useLogin();
  const {refetch: callGetAccountsMeTerms} = useGetAccountsMeTerms();
  const {refetch: callGetTerms} = useGetTerms();

  const clearAccountId = useCallback(() => form.setFieldValue('accountId', ''), [form]);
  const clearPassword = useCallback(() => form.setFieldValue('password', ''), [form]);

  const createAccount = useCallback(() => navigation.navigate('ProfileRegistration'), [navigation]);
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
        let termsOfService;
        if (!termsOfServiceAgreementStatus?.hasAgreedValidTermsOfService) {
          termsOfService = (await callGetTerms()).data?.data;
        }
        setIsExecutingLogin(false);
        setTermsContext({termsOfService, termsOfServiceAgreementStatus});
        setAccountContext(account);
      } catch (e) {
        if (isUnauthorizedError(e)) {
          Alert.alert(m('ログイン失敗'), m('アカウントIDまたはパスワードに\n間違いがあります。'));
        }
        setIsExecutingLogin(false);
      }
    }
  }, [callGetAccountsMeTerms, callGetTerms, callLogin, form, getAccountMe, setAccountContext, setTermsContext]);

  return {
    clearAccountId,
    clearPassword,
    createAccount,
    login,
    isExecutingLogin,
  };
};
