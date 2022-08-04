import {useAutoLogin} from 'features/account/services/useAutoLogin';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';

export const useAutoLoginUseCase = () => {
  const mutationAutoLogin = useAutoLogin();
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
