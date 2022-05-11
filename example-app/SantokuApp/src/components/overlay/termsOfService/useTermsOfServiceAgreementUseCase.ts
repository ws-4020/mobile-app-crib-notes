import {useAccountContext} from 'context/useAccountContext';
import {TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import {usePostAccountsMeTerms} from 'service';

export const useTermsOfServiceAgreementUseCase = (
  close: () => void,
  termsOfService?: TermsOfService,
  exitingCallback?: (finished: boolean) => unknown,
  exitingCallbackOnAgreed?: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => unknown,
) => {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [isWebViewError, setIsWebViewError] = useState(false);
  const webViewRef = useRef<RNWebView>(null);
  const {mutateAsync: callPostAccountsMeTerms, isLoading} = usePostAccountsMeTerms();
  const accountContext = useAccountContext();
  const [agreedStatus, setAgreedStatus] = useState<TermsOfServiceAgreementStatus>();
  const [isExited, setIsExited] = useState(false);

  const termUrl = termsOfService?.url;
  const webViewSource = useMemo(() => {
    return termUrl ? {uri: termUrl} : undefined;
  }, [termUrl]);

  const onWebViewError = useCallback(() => {
    setIsWebViewError(true);
  }, []);

  const onReload = useCallback(() => {
    setIsWebViewError(false);
    webViewRef.current?.reload();
  }, []);

  const onScrollEndOnce = useCallback(() => setButtonDisable(false), []);

  const onAgree = useCallback(async () => {
    try {
      const termsOfServiceAgreementStatus = {
        hasAgreedValidTermsOfService: true,
        agreedTermsOfServiceVersion: termsOfService?.latestTermsOfServiceVersion,
      };
      if (accountContext.isLoggedIn) {
        await callPostAccountsMeTerms(termsOfServiceAgreementStatus);
      }
      setAgreedStatus(termsOfServiceAgreementStatus);
      close();
    } catch {
      // 個別のエラーハンドリングは不要
    }
  }, [accountContext.isLoggedIn, callPostAccountsMeTerms, close, termsOfService?.latestTermsOfServiceVersion]);

  const composeExitingCallback = useCallback(
    (finished: boolean) => {
      try {
        exitingCallback?.(finished);
      } finally {
        setIsExited(true);
      }
    },
    [exitingCallback],
  );

  useEffect(() => {
    if (isExited && agreedStatus) {
      try {
        exitingCallbackOnAgreed?.(agreedStatus);
      } finally {
        setIsExited(false);
        setAgreedStatus(undefined);
      }
    }
  }, [exitingCallbackOnAgreed, agreedStatus, isExited]);

  return {
    webViewSource,
    isWebViewError,
    onWebViewError,
    webViewRef,
    onReload,
    onScrollEndOnce,
    onAgree,
    composeExitingCallback,
    isDisabledAgreementButton: buttonDisable || isLoading,
  };
};
