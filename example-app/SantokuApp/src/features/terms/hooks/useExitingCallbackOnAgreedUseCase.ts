import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {useCallback} from 'react';

import {useAgreedClientState} from './useAgreedClientState';
import {useIsExitedClientState} from './useIsExitedClientState';

export const useExitingCallbackOnAgreedUseCase = (
  exitingCallbackOnAgreed?: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => unknown,
) => {
  const [isExited, setIsExited] = useIsExitedClientState();
  const [agreedStatus, setAgreedStatus] = useAgreedClientState();
  const exitOnAgreed = useCallback(() => {
    if (isExited && agreedStatus) {
      try {
        exitingCallbackOnAgreed?.(agreedStatus);
      } finally {
        setIsExited(false);
        setAgreedStatus(undefined);
      }
    }
  }, [agreedStatus, exitingCallbackOnAgreed, isExited, setAgreedStatus, setIsExited]);
  return {exitOnAgreed};
};
