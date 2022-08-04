import {getAccountsMe} from 'features/backend/apis/account/account';
import {getTerms} from 'features/terms/utils/getTerms';
import {useQuery} from 'react-query';

import {getAccountsMeTerms} from '../utils/auth/getAccountsMeTerms';

const queryKey = ['account', 'accountData'];

export const useAccountData = (options?: {
  enabled?: boolean;
  staleTime?: number;
  meta?: {disableGlobalErrorHandler?: boolean};
}) => {
  return useQuery(
    queryKey,
    async () => {
      const account = (await getAccountsMe()).data;
      const termsAgreementStatus = (await getAccountsMeTerms()).data;
      let termsOfService;
      if (!termsAgreementStatus.hasAgreed) {
        termsOfService = (await getTerms()).data;
      }
      return {
        account,
        terms: {termsAgreementStatus, termsOfService},
      };
    },
    options,
  );
};
