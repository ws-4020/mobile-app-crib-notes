import {useCallback} from 'react';

import {useLogout as useLogoutService} from '../services/useLogout';
import {handleError} from '../utils/handleError';

export const useLogout = () => {
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
