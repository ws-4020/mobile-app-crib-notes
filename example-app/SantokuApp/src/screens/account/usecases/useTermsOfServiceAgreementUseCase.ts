import {CommonActions} from '@react-navigation/core';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useCallback, useMemo, useRef, useState} from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import {usePostAccountsMeTerms} from 'service';

import {useSetTermsContext} from '../../../context/useSetTermsContext';
import {useTermsContext} from '../../../context/useTermsContext';
import {AuthenticatedStackParamList} from '../../../navigation/types';

export const useTermsOfServiceAgreementUseCase = () => {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [isWebViewError, setIsWebViewError] = useState(false);
  const webViewRef = useRef<RNWebView>(null);
  const {mutateAsync: callPostAccountsMeTerms, isLoading} = usePostAccountsMeTerms();
  const termsContext = useTermsContext();
  const setTermsContext = useSetTermsContext();

  const termUrl = termsContext.termsOfService?.url;

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

  const navigation = useNavigation<NavigationProp<AuthenticatedStackParamList>>();
  const onGoToMainTabNav = useCallback(
    () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'MainTabNav'}],
        }),
      ),
    [navigation],
  );

  const onAgree = useCallback(async () => {
    try {
      const termsOfServiceAgreementStatus = (
        await callPostAccountsMeTerms({
          hasAgreedValidTermsOfService: true,
          agreedTermsOfServiceVersion: termsContext.termsOfService?.latestTermsOfServiceVersion,
        })
      ).data;
      setTermsContext({termsOfService: termsContext.termsOfService, termsOfServiceAgreementStatus});
      onGoToMainTabNav();
      // onAgreed?.();
    } catch {
      // 個別のエラーハンドリングは不要
    }
  }, [callPostAccountsMeTerms, onGoToMainTabNav, setTermsContext, termsContext.termsOfService]);
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
