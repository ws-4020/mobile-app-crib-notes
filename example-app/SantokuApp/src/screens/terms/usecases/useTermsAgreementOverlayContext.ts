import {createUseContextAndProvider} from 'framework/utilities';

import {TermsAgreementOverlayShowProps} from '../WithTermsAgreementOverlay';

export type TermsAgreementOverlayContextType = {
  show: (props: TermsAgreementOverlayShowProps) => void;
  close: () => void;
};
export const [useTermsAgreementOverlay, TermsAgreementOverlayProvider] =
  createUseContextAndProvider<TermsAgreementOverlayContextType>();
