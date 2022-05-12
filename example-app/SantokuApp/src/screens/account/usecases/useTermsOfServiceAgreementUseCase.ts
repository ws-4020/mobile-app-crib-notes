import {TermsOfService} from 'generated/backend/model';
import {useCallback, useRef, useState} from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import {usePostAccountsMeTerms} from 'service';

import {useNavigateToRootStackScreen} from '../../useNavigateToScreen';

export const useTermsOfServiceAgreementUseCase = (termsOfService: TermsOfService) => {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [isWebViewError, setIsWebViewError] = useState(false);
  const webViewRef = useRef<RNWebView>(null);
  const onGoToHomeScreen = useNavigateToRootStackScreen('AuthenticatedStackNav');
  const {mutateAsync: callPostAccountsMeTerms, isLoading} = usePostAccountsMeTerms();

  const termUrl = termsOfService?.url;
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
        hasAgreed: true,
        agreedVersion: termsOfService?.version,
      });
      onGoToHomeScreen();
    } catch {
      // 個別のエラーハンドリングは不要
    }
  }, [callPostAccountsMeTerms, onGoToHomeScreen, termsOfService?.version]);
  return {
    termUrl,
    isWebViewError,
    onWebViewError,
    webViewRef,
    onReload,
    onScrollEndOnce,
    onAgree,
    isDisabledAgreementButton: buttonDisable || isLoading,
  };
};
