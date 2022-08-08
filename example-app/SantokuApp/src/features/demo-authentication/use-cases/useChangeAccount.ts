import {useChangeAccount as useChangeAccountService} from 'features/account/services/useChangeAccount';
import {useCallback} from 'react';

import {useAccountIdInput} from '../client-states/useAccountIdInput';
import {handleError} from '../utils/handleError';

export const useChangeAccount = () => {
  const [accountIdInput] = useAccountIdInput();
  const mutationChangeAccount = useChangeAccountService();
  const changeAccount = useCallback(async () => {
    try {
      const accountLoginResponse = await mutationChangeAccount.mutateAsync({accountId: accountIdInput});
      alert(`ログイン成功しました state=${accountLoginResponse.status}`);
    } catch (e) {
      handleError(e);
    }
  }, [mutationChangeAccount, accountIdInput]);
  return {changeAccount, isLoading: mutationChangeAccount.isLoading};
};
