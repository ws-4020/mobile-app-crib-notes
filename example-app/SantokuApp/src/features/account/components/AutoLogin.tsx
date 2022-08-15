import {resolveErrorMessage} from 'bases/message/resolveErrorMessage';
import {useAuthCommands} from 'features/account/services/auth/useAuthCommands';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {isUnauthorizedError} from '../errors/UnauthorizedError';

export const AutoLogin: React.FC = ({children}) => {
  const [isLoggedIn] = useIsLoggedIn();
  const {autoLogin} = useAuthCommands();
  useEffect(() => {
    autoLogin().catch(e => {
      if (!isUnauthorizedError(e)) {
        const {title, message} = resolveErrorMessage(e);
        Alert.alert(title, message);
      }
    });
  }, [autoLogin]);
  // オートログイン時にエラーが発生した場合は、isLoggedInには何も値が設定されない
  if (isLoggedIn == null) {
    return null;
  }
  return <>{children}</>;
};
