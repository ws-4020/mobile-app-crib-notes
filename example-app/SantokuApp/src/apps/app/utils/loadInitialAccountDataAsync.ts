import {getAccountsMeTerms} from 'features/account/utils/auth/getAccountsMeTerms';
import {getAccountsMe} from 'features/backend/apis/account/account';
import {getTerms} from 'features/terms/utils/getTerms';

import {AccountData} from '../../../features/account/types/AccountData';
import {InitialDataError} from '../errors/initialDataError';

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
