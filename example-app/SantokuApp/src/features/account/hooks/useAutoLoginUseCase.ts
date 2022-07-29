import {resolveErrorMessage} from 'bases/error/resolveErrorMessage';
import {useCallback} from 'react';
import {Alert} from 'react-native';

import {isUnauthorizedError} from '../errors/UnauthorizedError';
import {canAutoLogin} from '../utils/auth/canAutoLogin';
import {useAutoLogin} from './useAutoLogin';
import {useIsLoggedIn} from './useIsLoggedIn';

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
