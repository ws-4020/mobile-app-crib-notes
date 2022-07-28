import {useChangeAccount} from 'features/account/hooks/useChangeAccount';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';
import {useAccountIdInput} from './useAccountIdInput';

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
