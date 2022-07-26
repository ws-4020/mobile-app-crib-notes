import {createUseContextAndProvider} from 'bases/core/contexts/createUseContextAndProvider';

import {TermsAgreementOverlayShowProps} from '../components/TermsAgreementOverlay';

export type TermsAgreementOverlayContextType = {
  show: (props: TermsAgreementOverlayShowProps) => void;
  close: () => void;
};

/**
 * 利用規約の表示。
 *
 * @example
 * const termsAgreementOverlay = useTermsAgreementOverlay();
 * termsAgreementOverlay.show({termsOfService: {version: '1.0.0', url: AppConfig.termsUrl, ...}})
 */
export const [useTermsAgreementOverlay, TermsAgreementOverlayProvider] =
  createUseContextAndProvider<TermsAgreementOverlayContextType>();
