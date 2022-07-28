import {getAccountsMeTerms} from 'features/account/utils/getAccountsMeTerms';
import {getAccountsMe} from 'features/backend/apis/account/account';
import {getTerms} from 'features/terms/utils/getTerms';

import {InitialDataError} from '../errors/initialDataError';
import {AccountData} from '../types/AccountData';

const loadInitialAccountDataAsync = async (): Promise<AccountData> => {
  try {
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
  } catch (e) {
    throw new InitialDataError('Failed to load initial account data.', e);
  }
};

export {loadInitialAccountDataAsync};
