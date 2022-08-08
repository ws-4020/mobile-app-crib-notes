import {m} from 'bases/message/Message';
import {isValidForm} from 'bases/validator';
import {FormikProps} from 'formik';
import {useCallback} from 'react';
import {Alert} from 'react-native';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {isUnauthorizedError} from '../errors/UnauthorizedError';
import {useAccountDataOperation} from '../services/useAccountDataOperation';
import {useLogin} from '../services/useLogin';
import {useTerms} from '../services/useTerms';
import {LoginForm} from '../types/LoginForm';

export const useLoginUseCase = (form: FormikProps<LoginForm>) => {
  const {termsOfService} = useTerms();
  const {mutateAsync: callLogin, isLoading} = useLogin();
  const [, setIsLoggedIn] = useIsLoggedIn();
  const accountDataOperation = useAccountDataOperation();
  const login = useCallback(async () => {
    if (await isValidForm(form)) {
      try {
        const accountId = form.values.accountId;
        const password = form.values.password;
        // 利用規約を取得できていない場合はボタンを非活性にしているので、termsOfServiceは必ず存在する想定
        const accountData = await callLogin({accountId, password, termsOfService: termsOfService!.data});
        accountDataOperation.login(accountData);
        setIsLoggedIn(true);
      } catch (e) {
        if (isUnauthorizedError(e)) {
          Alert.alert(m('ログイン失敗'), m('アカウントIDまたはパスワードに\n間違いがあります。'));
        }
      }
    }
  }, [form, callLogin, termsOfService, accountDataOperation, setIsLoggedIn]);
  return {login, isExecutingLogin: isLoading};
};
