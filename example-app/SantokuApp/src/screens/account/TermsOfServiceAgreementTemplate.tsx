import {Button} from 'components/button/Button';
import {WebView} from 'components/webview/WebView';
import {m} from 'framework';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {TermsOfService} from '../../generated/backend/model';
import {useTermsOfServiceAgreementUseCase} from './usecases';

type Props = {
  termsOfService?: TermsOfService;
  onAgreed?: () => void;
};

export const TermsOfServiceAgreementTemplate: React.FC<Props> = ({termsOfService, onAgreed}) => {
  const {
    webViewSource,
    isWebViewError,
    onWebViewError,
    webViewRef,
    onReload,
    onScrollEndOnce,
    onAgree,
    isDisabledAgreementButton,
  } = useTermsOfServiceAgreementUseCase(termsOfService, onAgreed);

  return (
    <View style={styles.container} testID="TermsOfServiceAgreementScreen">
      {isWebViewError ? (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{m('app.terms.有効な利用規約の取得エラー')}</Text>
          <Button title={m('リロード')} size="full" onPress={onReload} />
        </View>
      ) : (
        <WebView
          source={webViewSource}
          onScrollEndOnce={onScrollEndOnce}
          ref={webViewRef}
          onError={onWebViewError}
          onHttpError={onWebViewError}
        />
      )}
      <View style={styles.footer}>
        <Button title={m('同意')} onPress={onAgree} disabled={isDisabledAgreementButton} />
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
