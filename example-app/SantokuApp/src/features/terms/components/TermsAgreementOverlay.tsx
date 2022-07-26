import {TermsAgreementOverlayShowProps} from 'apps/app/providers/WithTermsAgreementOverlay';
import {m} from 'bases/message/utils/Message';
import {Button} from 'bases/ui/components/button/Button';
import {OverlayBackdrop} from 'bases/ui/components/overlay/OverlayBackdrop';
import {OverlayContainer} from 'bases/ui/components/overlay/OverlayContainer';
import {WebView} from 'bases/ui/components/webview/WebView';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {useButtonDisableClientState} from '../hooks/useButtonDisableClientState';
import {useComposedExitingCallbackUseCase} from '../hooks/useComposedExitingCallbackUseCase';
import {useIsWebViewErrorClientState} from '../hooks/useIsWebViewErrorClientState';
import {useOnAgreeUseCase} from '../hooks/useOnAgreeUseCase';
import {useOnScrollEndOnceUseCase} from '../hooks/useOnScrollEndOnceUseCase';
import {useOnWebViewErrorUseCase} from '../hooks/useOnWebViewErrorUseCase';
import {useResetWebViewErrorUseCase} from '../hooks/useResetWebViewErrorUseCase';
import {useWebViewSource} from '../hooks/useWebViewSource';

export type TermsAgreementOverlayProps = TermsAgreementOverlayShowProps & {
  visible: boolean;
  close: () => void;
  contentViewTestID?: string;
};

export const TermsAgreementOverlay: React.FC<TermsAgreementOverlayProps> = ({
  visible,
  close,
  termsOfService,
  dismissible = true,
  enteringCallback,
  exitingCallback,
  exitingCallbackOnAgreed,
  contentViewTestID,
}) => {
  const [isWebViewError] = useIsWebViewErrorClientState();
  const [buttonDisable] = useButtonDisableClientState();
  const {webViewSource} = useWebViewSource(termsOfService);
  const {composedExitingCallback} = useComposedExitingCallbackUseCase();
  const {resetWebViewError} = useResetWebViewErrorUseCase();
  const {onScrollEndOnce} = useOnScrollEndOnceUseCase();
  const {onWebViewError} = useOnWebViewErrorUseCase();
  const {onAgree, isLoading} = useOnAgreeUseCase(termsOfService);

  return (
    <OverlayBackdrop
      isVisible={visible}
      onPress={dismissible ? close : undefined}
      enteringCallback={enteringCallback}
      exitingCallback={composedExitingCallback}>
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
              onError={onWebViewError}
              onHttpError={onWebViewError}
            />
          )}
          <View style={styles.footer}>
            <Button title={m('同意')} onPress={onAgree} disabled={buttonDisable || isLoading} />
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
