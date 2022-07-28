import {useLogout} from 'features/account/hooks/useLogout';
import {useCallback} from 'react';

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
