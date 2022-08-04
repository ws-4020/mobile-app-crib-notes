import {useChangeAccount} from 'features/account/services/useChangeAccount';
import {useCallback} from 'react';

import {useAccountIdInput} from '../client-states/useAccountIdInput';
import {handleError} from '../utils/handleError';

export const useChangeAccountUseCase = () => {
  const [accountIdInput] = useAccountIdInput();
  const mutationChangeAccount = useChangeAccount();
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
