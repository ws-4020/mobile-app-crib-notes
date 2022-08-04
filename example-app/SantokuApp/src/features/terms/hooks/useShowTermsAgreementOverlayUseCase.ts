import {useAccountData} from 'features/account/hooks/useAccountData';
import {useCallback} from 'react';

import {TermsAgreementOverlay} from '../components/TermsAgreementOverlay';
import {TermsAgreementOverlayShowProps} from '../components/TermsAgreementOverlayComponent';

/**
 * AccountContextから利用規約情報を取得して、未同意の場合は利用規約を表示します。
 *
 * @example
 * const showTermsAgreementOverlay = useShowTermsAgreementOverlayUseCase();
 * showTermsAgreementOverlay(onAgree);
 */
export const useShowTermsAgreementOverlayUseCase = () => {
  const {data: accountData} = useAccountData();

  return useCallback(
    (onAgree?: TermsAgreementOverlayShowProps['exitingCallbackOnAgreed']) => {
      const terms = accountData?.terms;
      const termsAgreementStatus = terms?.termsAgreementStatus;
      const termsOfService = terms?.termsOfService;
      if (termsOfService && termsAgreementStatus?.hasAgreed === false) {
        TermsAgreementOverlay.show({termsOfService, exitingCallbackOnAgreed: onAgree, dismissible: false});
      }
    },
    [accountData?.terms],
  );
};
