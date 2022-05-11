import {createUseContextAndProvider} from 'framework/utilities';
import {TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {InitialDataDependingComponent} from '../../../framework/initialize';
import {TermsOfServiceAgreement, TermsOfServiceAgreementProps} from './TermsOfServiceAgreement';

type TermsOfServiceProps = {
  termsOfService?: TermsOfService;
  /**
   * Overlayの背景をタップした時に閉じるかどうかの設定。
   * デフォルトはtrue（閉じる）です。
   */
  dismissible?: boolean;
  /**
   * iOSの場合、アニメーションが終わった後に呼び出されます。
   * Androidの場合、アニメーションが始まった時に呼び出されます。
   */
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
  exitingCallbackOnAgreed?: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => unknown;
};

type TermsOfServiceAgreementOverlayContextType = {
  show: (props: TermsOfServiceProps) => void;
};

const [useTermsOfServiceAgreementOverlay, TermsOfServiceAgreementOverlayContextProvider] =
  createUseContextAndProvider<TermsOfServiceAgreementOverlayContextType>();

const WithTermsOfServiceAgreementOverlay: InitialDataDependingComponent = ({children, initialData}) => {
  const [state, setState] = useState<TermsOfServiceAgreementProps>({visible: false, close: () => {}});
  const close = useCallback(() => setState(prevState => ({...prevState, visible: false})), []);

  const termsOfServiceAgreementOverlayContext = useMemo<TermsOfServiceAgreementOverlayContextType>(
    () => ({
      show: (props: TermsOfServiceProps) => {
        setState({
          ...props,
          visible: true,
          close,
        });
      },
    }),
    [close],
  );

  useEffect(() => {
    if (initialData.accountData.terms?.termsOfServiceAgreementStatus?.hasAgreedValidTermsOfService === false) {
      setState({
        visible: true,
        dismissible: false,
        termsOfService: initialData.accountData.terms.termsOfService,
        close,
      });
    }
  }, [
    close,
    initialData.accountData.terms?.termsOfService,
    initialData.accountData.terms?.termsOfServiceAgreementStatus?.hasAgreedValidTermsOfService,
  ]);

  return (
    <TermsOfServiceAgreementOverlayContextProvider value={termsOfServiceAgreementOverlayContext}>
      <TermsOfServiceAgreement {...state}>{children}</TermsOfServiceAgreement>
    </TermsOfServiceAgreementOverlayContextProvider>
  );
};

export {WithTermsOfServiceAgreementOverlay, useTermsOfServiceAgreementOverlay};
