import {resolveErrorMessage} from 'bases/message/resolveErrorMessage';
import {useAuthCommands} from 'features/account/services/auth/useAuthCommands';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';

import {isUnauthorizedError} from '../errors/UnauthorizedError';

export const AutoLogin: React.FC = ({children}) => {
  const {autoLogin, isAutoLoginSuccess} = useAuthCommands();
  useEffect(() => {
    autoLogin().catch(e => {
      if (!isUnauthorizedError(e)) {
        const {title, message} = resolveErrorMessage(e);
        Alert.alert(title, message);
      }
    });
  }, [autoLogin]);
  // オートログインが成功するまで画面表示しない
  if (!isAutoLoginSuccess) {
    return null;
  }
  return <>{children}</>;
};
