import {Button} from 'components/button/Button';
import {WebView} from 'components/webview/WebView';
import {m} from 'framework';
import {TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {FullWindowOverlay} from '../FullWindowOverlay';
import {ModalBackdrop} from './ModalBackdrop';
import {ModalContainer} from './ModalContainer';
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
};

export const TermsOfServiceAgreement: React.FC<TermsOfServiceAgreementProps> = ({
  visible,
  close,
  termsOfService,
  dismissible = true,
  enteringCallback,
  exitingCallback,
  exitingCallbackOnAgreed,
  children,
}) => {
  const {
    webViewSource,
    isWebViewError,
    onWebViewError,
    webViewRef,
    onReload,
    onScrollEndOnce,
    onAgree,
    composeExitingCallback,
    isDisabledAgreementButton,
  } = useTermsOfServiceAgreementUseCase(close, termsOfService, exitingCallback, exitingCallbackOnAgreed);

  return (
    <>
      {children}
      <FullWindowOverlay>
        <ModalBackdrop
          isVisible={visible}
          onPress={dismissible ? close : undefined}
          enteringCallback={enteringCallback}
          exitingCallback={composeExitingCallback}>
          <ModalContainer isVisible={visible} style={styles.modalContainer}>
            <View style={styles.container} testID="TermsOfServiceAgreement">
              <View style={styles.header}>
                <Text style={styles.headerText}>{m('利用規約')}</Text>
              </View>
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
          </ModalContainer>
        </ModalBackdrop>
      </FullWindowOverlay>
    </>
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
