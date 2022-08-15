import {AccountData} from 'features/account/types/AccountData';
import {getAccountsMe} from 'features/backend/apis/account/account';
import {getTerms} from 'features/terms/services/getTerms';

import {getAccountsMeTerms} from './getAccountsMeTerms';

export const getAccuontData: () => Promise<AccountData> = async () => {
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
