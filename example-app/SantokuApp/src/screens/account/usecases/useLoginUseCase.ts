import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useTermsOfServiceAgreementOverlay} from 'components/overlay/termsOfService';
import {useDispatchAccountContext} from 'context/useDispatchAccountContext';
import {FormikProps} from 'formik';
import {useIsMounted} from 'framework';
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
  const isMounted = useIsMounted();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatchAccountContext = useDispatchAccountContext();
  const termsOverlay = useTermsOfServiceAgreementOverlay();
  // ログイン処理中状態
  const [isExecutingLogin, setIsExecutingLogin] = useState(false);
  const {refetch: callGetAccountMe} = useGetAccountsMe({query: {enabled: false}});
  const {mutateAsync: callLogin} = AuthenticationService.useLogin();
  const {refetch: callGetAccountsMeTerms} = useGetAccountsMeTerms({query: {enabled: false}});
  const {refetch: callGetTerms, isFetching: isFetchingTerms} = useGetTerms({query: {enabled: false}});

  const clearAccountId = useCallback(() => form.setFieldValue('accountId', ''), [form]);
  const clearPassword = useCallback(() => form.setFieldValue('password', ''), [form]);

  const createAccount = useCallback(async () => {
    // callGetTerms.dataは必ず存在する想定
    const termsOfService = (await callGetTerms()).data!.data;
    termsOverlay.show({
      termsOfService,
      exitingCallbackOnAgreed: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
        navigation.navigate('ProfileRegistration', termsOfServiceAgreementStatus);
      },
      dismissible: true,
    });
  }, [callGetTerms, navigation, termsOverlay]);
  const login = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        setIsExecutingLogin(true);
        const accountId = form.values.accountId;
        const password = form.values.password;
        await callLogin({accountId, password});
        await SecureStorageAdapter.savePassword(accountId, password);
        // callGetAccountMe.dataは必ず存在する想定
        const account = (await callGetAccountMe({throwOnError: true})).data!.data;
        const termsOfServiceAgreementStatus = (await callGetAccountsMeTerms({throwOnError: true})).data?.data;
        if (!termsOfServiceAgreementStatus?.hasAgreed) {
          // callGetTerms.dataは必ず存在する想定
          const termsOfService = (await callGetTerms({throwOnError: true})).data!.data;
          termsOverlay.show({termsOfService, dismissible: false});
        }
        dispatchAccountContext({type: 'login', account});
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
    dispatchAccountContext,
    callGetTerms,
    termsOverlay,
    isMounted,
  ]);

  return {
    clearAccountId,
    clearPassword,
    createAccount,
    login,
    isExecutingLogin,
    isExecutingCreateAccount: isFetchingTerms,
  };
};
