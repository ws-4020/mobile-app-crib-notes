import {useAutoLogin as useAutoLoginService} from 'features/account/services/useAutoLogin';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';

export const useAutoLogin = () => {
  const mutationAutoLogin = useAutoLoginService();
  const autoLogin = useCallback(async () => {
    try {
      const accountLoginResponse = await mutationAutoLogin.mutateAsync();
      alert(`自動ログイン成功しました state=${accountLoginResponse.status}`);
    } catch (e) {
      handleError(e);
    }
  }, [mutationAutoLogin]);
  return {autoLogin, isLoading: mutationAutoLogin.isLoading};
};
