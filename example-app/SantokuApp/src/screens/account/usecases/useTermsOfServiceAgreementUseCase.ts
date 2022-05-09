import {TermsOfService} from 'generated/backend/model';
import {useCallback, useMemo, useRef, useState} from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import {usePostAccountsMeTerms} from 'service';

export const useTermsOfServiceAgreementUseCase = (termsOfService?: TermsOfService, onAgreed?: () => void) => {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [isWebViewError, setIsWebViewError] = useState(false);
  const webViewRef = useRef<RNWebView>(null);
  const {mutateAsync: callPostAccountsMeTerms, isLoading} = usePostAccountsMeTerms();

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
      await callPostAccountsMeTerms({
        hasAgreedValidTermsOfService: true,
        agreedTermsOfServiceVersion: termsOfService?.latestTermsOfServiceVersion,
      });
      onAgreed?.();
    } catch {
      // 個別のエラーハンドリングは不要
    }
  }, [callPostAccountsMeTerms, onAgreed, termsOfService?.latestTermsOfServiceVersion]);
  return {
    webViewSource,
    isWebViewError,
    onWebViewError,
    webViewRef,
    onReload,
    onScrollEndOnce,
    onAgree,
    isDisabledAgreementButton: buttonDisable || isLoading,
  };
};
