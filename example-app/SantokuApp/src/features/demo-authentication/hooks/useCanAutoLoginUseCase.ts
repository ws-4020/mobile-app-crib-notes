import {canAutoLogin as accountCanAutoLogin} from 'features/account/utils/auth/canAutoLogin';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';

export const useCanAutoLoginUseCase = () => {
  const canAutoLogin = useCallback(async () => {
    try {
      const res = await accountCanAutoLogin();
      alert(res ? '自動ログイン可能です' : '自動ログインできません');
    } catch (e) {
      handleError(e);
    }
  }, []);
  return {canAutoLogin};
};
