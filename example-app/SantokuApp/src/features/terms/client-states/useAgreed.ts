import {useClientState} from 'bases/react-query/utils/useClientState';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';

export const useAgreed = () => {
  return useClientState<TermsOfServiceAgreementStatus>(['terms', 'agreedStatus']);
};
