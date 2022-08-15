import {getAccountsMe} from 'features/backend/apis/account/account';
import {getTerms} from 'features/terms/services/getTerms';
import {useQuery} from 'react-query';

import {getAccountsMeTerms} from './getAccountsMeTerms';

const queryKey = ['account', 'accountData'];

const getAccuontData = async () => {
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
};

export const useAccountData = (args: {enabled?: boolean; meta?: {disableGlobalErrorHandler?: boolean}} = {}) => {
  const query = useQuery(queryKey, getAccuontData, {enabled: args.enabled, meta: args.meta, staleTime: Infinity});
  return {...query, accountData: query.data};
};
