import {useCallback} from 'react';

import {useAccountId} from './useAccountId';
import {useAccountIdInput} from './useAccountIdInput';

export const useCopyAccountIdInputUseCase = () => {
  const [accountId] = useAccountId();
  const [, setAccountIdInput] = useAccountIdInput();
  const copyAccountIdInput = useCallback(() => {
    if (accountId) {
      setAccountIdInput(accountId);
    }
  }, [accountId, setAccountIdInput]);
  return {copyAccountIdInput};
};
