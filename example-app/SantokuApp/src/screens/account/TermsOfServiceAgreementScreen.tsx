import {Button} from 'components/basics/Button';
import {WebView, WebViewHandler} from 'components/basics/WebView';
import {m} from 'framework';
import React, {useRef, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useNavigateToAuthenticatedStackScreen} from 'screens/useNavigateToScreen';

const uri = {
  normal: 'https://fintan-contents.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture',
  httpError: 'https://fintan-contents.github.io/mobile-app-crib-notes/react-native/santoku/application-architectur',
  error: 'http://125.124.124.84',
};

const ScreenName = 'TermsOfServiceAgreement';
const Screen: React.FC = () => {
  const [currentUri, setCurrentUri] = useState(uri.httpError);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [isWebViewError, setIsWebViewError] = useState(false);
  const webViewHandler = useRef<WebViewHandler>(null);

  const onGoToHomeScreen = useNavigateToAuthenticatedStackScreen('Home');

  const onWebViewError = () => {
    setIsWebViewError(true);
  };

  const onReload = () => {
    setIsWebViewError(false);
    setCurrentUri(uri.normal);
    webViewHandler.current?.reload();
  };

  return (
    <View style={styles.container} testID="TermsOfServiceAgreementScreen">
      {isWebViewError ? (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{m('app.terms.有効な利用規約の取得エラー')}</Text>
          <Button title={m('リロード')} size="full" onPress={onReload} />
        </View>
      ) : (
        <WebView
          uri={currentUri}
          onScrollEnd={() => setButtonDisable(false)}
          ref={webViewHandler}
          onError={onWebViewError}
          onHttpError={onWebViewError}
        />
      )}
      <View style={styles.footer}>
        <Button title="同意" onPress={onGoToHomeScreen} disabled={buttonDisable} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  errorView: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 14,
    marginBottom: 20,
  },
  footer: {
    flex: 0,
    flexDirection: 'row-reverse',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
});

export const TermsOfServiceAgreementScreen = {
  component: Screen,
  name: ScreenName,
  options: {
    headerShown: true,
    title: '利用規約',
    presentation: 'formSheet' as const,
  },
};
