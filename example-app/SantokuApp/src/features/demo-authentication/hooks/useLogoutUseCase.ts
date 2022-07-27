import {useLogoutService} from 'features/account/hooks/useLogoutService';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';

export const useLogoutUseCase = () => {
  const mutationLogout = useLogoutService();
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
