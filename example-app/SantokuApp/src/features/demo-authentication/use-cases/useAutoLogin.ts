import {useAuthCommands} from 'features/account/services/auth/useAuthCommands';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';

export const useAutoLogin = () => {
  const authCommands = useAuthCommands();
  const autoLogin = useCallback(async () => {
    try {
      const accountLoginResponse = await authCommands.autoLogin();
      if (accountLoginResponse) {
        alert(`自動ログイン成功しました state=${accountLoginResponse.status}`);
      }
    } catch (e) {
      handleError(e);
    }
  }, [authCommands]);
  return {autoLogin, isLoading: authCommands.isAutoLoggingIn};
};
