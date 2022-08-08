import {resolveErrorMessage} from 'bases/message/resolveErrorMessage';
import {useCallback} from 'react';
import {Alert} from 'react-native';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {isUnauthorizedError} from '../errors/UnauthorizedError';
import {canAutoLogin} from '../services/auth/canAutoLogin';
import {useAutoLogin} from '../services/useAutoLogin';

export const useAutoLoginUseCase = () => {
  const [, setIsLoggedIn] = useIsLoggedIn();
  const {mutateAsync: callAutoLogin} = useAutoLogin();
  const autoLogin = useCallback(async () => {
    if (await canAutoLogin()) {
      try {
        await callAutoLogin();
        setIsLoggedIn(true);
      } catch (e) {
        if (isUnauthorizedError(e)) {
          setIsLoggedIn(false);
        }
        const {title, message} = resolveErrorMessage(e);
        Alert.alert(title, message);
      }
      return;
    }
    setIsLoggedIn(false);
  }, [callAutoLogin, setIsLoggedIn]);
  return {autoLogin};
};
