import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatchAccountContext} from 'context/useDispatchAccountContext';
import {FormikProps} from 'formik';
import {AuthenticationService, isUnauthorizedError, SecureStorageAdapter} from 'framework/authentication';
import {m} from 'framework/message';
import {isValidForm} from 'framework/validator';
import {RootStackParamList} from 'navigation/types';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {useGetAccountsMe} from 'service';

import {LoginForm} from '../data-types';

export const useLoginUseCase = (form: FormikProps<LoginForm>) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatchAccountContext = useDispatchAccountContext();
  // ログイン処理中状態
  const [isExecutingLogin, setIsExecutingLogin] = useState(false);
  const {refetch: getAccountMe} = useGetAccountsMe({query: {enabled: false}});
  const {mutateAsync: callLogin} = AuthenticationService.useLogin();

  const clearAccountId = useCallback(() => form.setFieldValue('accountId', ''), [form]);
  const clearPassword = useCallback(() => form.setFieldValue('password', ''), [form]);

  const createAccount = useCallback(() => navigation.navigate('Profile'), [navigation]);
  const login = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        setIsExecutingLogin(true);
        const accountId = form.values.accountId;
        const password = form.values.password;
        await callLogin({accountId, password});
        await SecureStorageAdapter.savePassword(accountId, password);
        const account = (await getAccountMe({throwOnError: true})).data?.data;
        dispatchAccountContext({type: 'login', account});
      } catch (e) {
        if (isUnauthorizedError(e)) {
          Alert.alert(m('ログイン失敗'), m('アカウントIDまたはパスワードに\n間違いがあります。'));
        }
      } finally {
        setIsExecutingLogin(false);
      }
    }
  }, [callLogin, form, getAccountMe, dispatchAccountContext]);

  return {
    clearAccountId,
    clearPassword,
    createAccount,
    login,
    isExecutingLogin,
  };
};
