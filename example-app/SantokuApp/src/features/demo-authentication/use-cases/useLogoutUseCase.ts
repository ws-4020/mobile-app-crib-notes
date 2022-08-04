import {useCallback} from 'react';

import {useLogout} from '../services/useLogout';
import {handleError} from '../utils/handleError';

export const useLogoutUseCase = () => {
  const mutationLogout = useLogout();
  const logout = useCallback(async () => {
    try {
      await mutationLogout.mutateAsync();
      alert(`ログアウト成功しました`);
    } catch (e) {
      handleError(e);
    }
  }, [mutationLogout]);
  return {logout, isLoading: mutationLogout.isLoading};
};
