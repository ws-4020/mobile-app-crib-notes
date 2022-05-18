import {useAccountContext} from 'context/useAccountContext';
import {useCallback} from 'react';

import {TermsAgreementOverlayShowProps} from './WithTermsAgreementOverlay';
import {useTermsAgreementOverlay} from './useTermsAgreementOverlayContext';

export const useShowTermsAgreementOverlay = () => {
  const accountContext = useAccountContext();
  const termsAgreementOverlay = useTermsAgreementOverlay();

  return useCallback(
    (onAgree?: TermsAgreementOverlayShowProps['exitingCallbackOnAgreed']) => {
      const terms = accountContext.terms;
      const termsAgreementStatus = terms?.termsAgreementStatus;
      const termsOfService = terms?.termsOfService;
      if (termsOfService && termsAgreementStatus?.hasAgreed === false) {
        termsAgreementOverlay.show({termsOfService, exitingCallbackOnAgreed: onAgree});
      }
    },
    [accountContext.terms, termsAgreementOverlay],
  );
};
