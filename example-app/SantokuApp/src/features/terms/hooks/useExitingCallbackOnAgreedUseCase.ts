import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';

import {useAgreedClientState} from './useAgreedClientState';
import {useIsExitedClientState} from './useIsExitedClientState';

export const useExitingCallbackOnAgreedUseCase = (
  exitingCallbackOnAgreed?: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => unknown,
) => {
  const [isExited, setIsExited] = useIsExitedClientState();
  const [agreedStatus, setAgreedStatus] = useAgreedClientState();
  if (isExited && agreedStatus) {
    try {
      exitingCallbackOnAgreed?.(agreedStatus);
    } finally {
      setIsExited(false);
      setAgreedStatus(undefined);
    }
  }
};
