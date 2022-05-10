import {useSetAccountContext} from 'context/useSetAccountContext';
import {Account} from 'generated/backend/model';
import {useCallback} from 'react';

export const useOnAgreedTermsOfService = (account: Account) => {
  const setAccountContext = useSetAccountContext();
  return useCallback(() => {
    setAccountContext(account);
  }, [account, setAccountContext]);
};
