import {useAccountContext} from 'features/account/contexts/useAccountContext';
import {useCallback} from 'react';

import {TermsAgreementOverlayShowProps} from '../components/TermsAgreementOverlay';
import {useTermsAgreementOverlay} from '../contexts/useTermsAgreementOverlay';

/**
 * AccountContextから利用規約情報を取得して、未同意の場合は利用規約を表示します。
 *
 * @example
 * const showTermsAgreementOverlay = useShowTermsAgreementOverlayUseCase();
 * showTermsAgreementOverlay(onAgree);
 */
export const useShowTermsAgreementOverlayUseCase = () => {
  const accountContext = useAccountContext();
  const termsAgreementOverlay = useTermsAgreementOverlay();

  return useCallback(
    (onAgree?: TermsAgreementOverlayShowProps['exitingCallbackOnAgreed']) => {
      const terms = accountContext.terms;
      const termsAgreementStatus = terms?.termsAgreementStatus;
      const termsOfService = terms?.termsOfService;
      if (termsOfService && termsAgreementStatus?.hasAgreed === false) {
        termsAgreementOverlay.show({termsOfService, exitingCallbackOnAgreed: onAgree, dismissible: false});
      }
    },
    [accountContext.terms, termsAgreementOverlay],
  );
};
