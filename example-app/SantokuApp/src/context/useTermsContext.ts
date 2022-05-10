import {createUseContextAndProvider} from 'framework/utilities';
import {TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';

export type TermsContext = {
  termsOfServiceAgreementStatus?: TermsOfServiceAgreementStatus;
  termsOfService?: TermsOfService;
};
export const [useTermsContext, TermsContextProvider] = createUseContextAndProvider<TermsContext>();
