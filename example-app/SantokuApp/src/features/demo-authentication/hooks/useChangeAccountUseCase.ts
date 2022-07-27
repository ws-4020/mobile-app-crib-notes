import {useChangeAccountService} from 'features/account/hooks/useChangeAccountService';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';
import {useAccountIdInput} from './useAccountIdInput';

export const useChangeAccountUseCase = () => {
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
