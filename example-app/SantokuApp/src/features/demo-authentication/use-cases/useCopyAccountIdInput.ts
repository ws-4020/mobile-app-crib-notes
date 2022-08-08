import {useCallback} from 'react';

import {useAccountId} from '../client-states/useAccountId';
import {useAccountIdInput} from '../client-states/useAccountIdInput';

export const useCopyAccountIdInput = () => {
  const [accountId] = useAccountId();
  const [, setAccountIdInput] = useAccountIdInput();
  const copyAccountIdInput = useCallback(() => {
    if (accountId) {
      setAccountIdInput(accountId);
    }
  }, [accountId, setAccountIdInput]);
  return {copyAccountIdInput};
};
