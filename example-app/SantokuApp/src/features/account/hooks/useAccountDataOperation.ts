import {useCallback} from 'react';
import {useQueryClient} from 'react-query';

import {AccountData} from '../types/AccountData';

export const useAccountDataOperation = () => {
  const queryClient = useQueryClient();
  const login = useCallback(
    (accountData: AccountData) => {
      queryClient.setQueryData<AccountData>(['account', 'accountData'], accountData);
    },
    [queryClient],
  );
  const agreedToTerms = useCallback(
    (agreedVersion: string) => {
      queryClient.setQueryData<AccountData>(['account', 'accountData'], prev => ({
        ...(prev ?? {}),
        terms: {termsAgreementStatus: {hasAgreed: true, agreedVersion}},
      }));
    },
    [queryClient],
  );
  return {login, agreedToTerms};
};
