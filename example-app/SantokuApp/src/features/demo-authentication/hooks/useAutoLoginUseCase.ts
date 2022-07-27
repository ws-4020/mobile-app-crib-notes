import {useAutoLoginService} from 'features/account/hooks/useAutoLoginService';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';

export const useAutoLoginUseCase = () => {
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
