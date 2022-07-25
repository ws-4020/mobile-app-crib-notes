import {createUseContextAndProvider} from 'bases/utilities';
import {Account, TermsOfService, TermsOfServiceAgreementStatus} from 'features/backend/apis/model';

export type Terms = {
  termsAgreementStatus?: TermsOfServiceAgreementStatus;
  termsOfService?: TermsOfService;
};

export type AccountContext = {
  account?: Account;
  terms?: Terms;
  isLoggedIn: boolean;
};
export const [useAccountContext, AccountContextProvider] = createUseContextAndProvider<AccountContext>();
