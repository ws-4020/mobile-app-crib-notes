import {AccountDataDependingComponent} from 'framework/initialize/withAccountData';
import {createUseContextAndProvider} from 'framework/utilities';
import {TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {FullWindowOverlay} from '../FullWindowOverlay';
import {TermsOfServiceAgreement, TermsOfServiceAgreementProps} from './TermsOfServiceAgreement';

type TermsOfServiceProps = {
  termsOfService: TermsOfService;
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

const WithTermsOfServiceAgreementOverlay: AccountDataDependingComponent = ({accountData, children}) => {
  const [state, setState] = useState<TermsOfServiceAgreementProps>({
    visible: false,
    close: () => {},
    termsOfService: {version: '', url: ''},
  });
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
    const terms = accountData.terms;
    const termsOfServiceAgreementStatus = terms?.termsOfServiceAgreementStatus;
    const termsOfService = terms?.termsOfService;
    if (termsOfService && termsOfServiceAgreementStatus?.hasAgreed === false) {
      setState({
        visible: true,
        dismissible: false,
        termsOfService,
        close,
      });
    }
  }, [close, accountData.terms]);

  return (
    <TermsOfServiceAgreementOverlayContextProvider value={termsOfServiceAgreementOverlayContext}>
      {children}
      <FullWindowOverlay>
        <TermsOfServiceAgreement {...state} />
      </FullWindowOverlay>
    </TermsOfServiceAgreementOverlayContextProvider>
  );
};

export {WithTermsOfServiceAgreementOverlay, useTermsOfServiceAgreementOverlay};
