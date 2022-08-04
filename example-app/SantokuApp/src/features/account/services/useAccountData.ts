import {getAccountsMe} from 'features/backend/apis/account/account';
import {getTerms} from 'features/terms/services/getTerms';
import {useQuery} from 'react-query';

import {getAccountsMeTerms} from './getAccountsMeTerms';

const queryKey = ['account', 'accountData'];

export const useAccountData = ({
  enabled,
  meta,
}: {enabled?: boolean; meta?: {disableGlobalErrorHandler?: boolean}} = {}) => {
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
    {enabled, meta, staleTime: Infinity},
  );
};
