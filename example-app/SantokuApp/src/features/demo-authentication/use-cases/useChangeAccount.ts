import {useAuthCommands} from 'features/account/services/auth/useAuthCommands';
import {useCallback} from 'react';

import {useAccountIdInput} from '../client-states/useAccountIdInput';
import {handleError} from '../utils/handleError';

export const useChangeAccount = () => {
  const [accountIdInput] = useAccountIdInput();
  const authCommands = useAuthCommands();
  const changeAccount = useCallback(async () => {
    try {
      const accountLoginResponse = await authCommands.changeAccount({accountId: accountIdInput});
      alert(`ログイン成功しました state=${accountLoginResponse.status}`);
    } catch (e) {
      handleError(e);
    }
  }, [authCommands, accountIdInput]);
  return {changeAccount, isLoading: authCommands.isChangingAccount};
};
