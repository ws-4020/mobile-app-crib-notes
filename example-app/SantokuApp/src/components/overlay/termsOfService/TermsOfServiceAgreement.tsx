import {Button} from 'components/button/Button';
import {WebView} from 'components/webview/WebView';
import {m} from 'framework';
import {TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {OverlayBackdrop} from './OverlayBackdrop';
import {OverlayContainer} from './OverlayContainer';
import {useTermsOfServiceAgreementUseCase} from './useTermsOfServiceAgreementUseCase';

export type TermsOfServiceAgreementProps = {
  visible: boolean;
  close: () => void;
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
  contentViewTestID?: string;
};

export const TermsOfServiceAgreement: React.FC<TermsOfServiceAgreementProps> = ({
  visible,
  close,
  termsOfService,
  dismissible = true,
  enteringCallback,
  exitingCallback,
  exitingCallbackOnAgreed,
  contentViewTestID,
}) => {
  const {
    webViewSource,
    isWebViewError,
    onWebViewError,
    webViewRef,
    resetWebViewError,
    onScrollEndOnce,
    onAgree,
    composeExitingCallback,
    isDisabledAgreementButton,
  } = useTermsOfServiceAgreementUseCase(close, termsOfService, exitingCallback, exitingCallbackOnAgreed);

  return (
    <OverlayBackdrop
      isVisible={visible}
      onPress={dismissible ? close : undefined}
      enteringCallback={enteringCallback}
      exitingCallback={composeExitingCallback}>
      <OverlayContainer isVisible={visible} style={styles.modalContainer}>
        <View style={styles.container} testID={contentViewTestID}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{m('利用規約')}</Text>
          </View>
          {isWebViewError ? (
            <View style={styles.errorView}>
              <Text style={styles.errorText}>{m('app.terms.有効な利用規約の取得エラー')}</Text>
              <Button title={m('リロード')} size="full" onPress={resetWebViewError} />
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
      </OverlayContainer>
    </OverlayBackdrop>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
  header: {
    alignSelf: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
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
