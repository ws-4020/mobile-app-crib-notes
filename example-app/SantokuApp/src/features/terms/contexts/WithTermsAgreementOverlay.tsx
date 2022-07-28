import {FullWindowOverlay} from 'bases/ui/components/overlay/FullWindowOverlay';
import {TermsAgreementOverlay, TermsAgreementOverlayProps} from 'features/terms/components/TermsAgreementOverlay';
import {
  TermsAgreementOverlayContextType,
  TermsAgreementOverlayProvider,
} from 'features/terms/contexts/useTermsAgreementOverlay';
import React, {useCallback, useMemo, useState} from 'react';

/**
 * 利用規約をOverlay表示するコンポーネント。
 */
const WithTermsAgreementOverlay: React.FC = ({children}) => {
  const [state, setState] = useState<
    Omit<TermsAgreementOverlayProps, 'termsOfService'> & Partial<Pick<TermsAgreementOverlayProps, 'termsOfService'>>
  >({
    visible: false,
    close: () => {},
  });
  const close = useCallback(() => setState(prevState => ({...prevState, visible: false})), []);
  const show = useCallback(
    (props: Omit<TermsAgreementOverlayProps, 'visible' | 'close'>) => {
      setState({
        ...props,
        visible: true,
        close,
      });
    },
    [close],
  );

  const termsOfServiceAgreementOverlayContext = useMemo<TermsAgreementOverlayContextType>(
    () => ({
      show,
      close,
    }),
    [close, show],
  );

  return (
    <TermsAgreementOverlayProvider value={termsOfServiceAgreementOverlayContext}>
      {children}
      <FullWindowOverlay>
        {state.termsOfService && <TermsAgreementOverlay {...state} termsOfService={state.termsOfService} />}
      </FullWindowOverlay>
    </TermsAgreementOverlayProvider>
  );
};

export {WithTermsAgreementOverlay};
