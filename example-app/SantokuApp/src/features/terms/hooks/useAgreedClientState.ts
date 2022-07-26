import {useClientState} from 'bases/react-query/hooks/useClientState';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';

export const useAgreedClientState = () => {
  return useClientState<TermsOfServiceAgreementStatus>(['terms', 'agreedStatus']);
};
