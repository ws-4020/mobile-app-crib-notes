import {TermsOfServiceAgreementStatus} from '../../backend/apis/model';

export type TermsOfServiceAgreementStatusWithCreatedAt = TermsOfServiceAgreementStatus & {
  createdAt: string;
};
