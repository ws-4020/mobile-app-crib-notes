import React, {useCallback, useImperativeHandle, useRef} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {WebView as RNWebView} from 'react-native-webview';
import {WebViewErrorEvent, WebViewHttpErrorEvent, WebViewScrollEvent} from 'react-native-webview/lib/WebViewTypes';

export type WebViewHandler = {
  reload: () => void;
};

type Props = {
  uri: string;
  onScrollEnd: () => void;
  onError?: (event: WebViewErrorEvent) => void;
  onHttpError?: (event: WebViewHttpErrorEvent) => void;
};

export const WebView = React.forwardRef<WebViewHandler, Props>(function WebView(
  {uri, onScrollEnd, onError, onHttpError},
  ref,
) {
  const webViewRef = useRef<RNWebView>(null);

  useImperativeHandle(ref, () => ({
    reload: () => {
      webViewRef.current?.reload();
    },
  }));

  const handleScroll = useCallback(
    (event: WebViewScrollEvent) => {
      // 小数点の誤差があるため、1px分は丸め誤差として扱う
      const scrollY = event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height + 1;
      if (event.nativeEvent.contentSize.height <= scrollY) {
        onScrollEnd();
      }
    },
    [onScrollEnd],
  );

  return (
    <RNWebView
      // androidLayerType：WebViewを再レンダー時にクラッシュする可能性がある問題の回避策
      // https://github.com/react-native-webview/react-native-webview/issues/1915
      androidLayerType="software"
      style={styles.container}
      source={{uri}}
      onScroll={handleScroll}
      onError={onError}
      onHttpError={onHttpError}
      ref={webViewRef}
      startInLoadingState
      renderLoading={() => <ActivityIndicator style={styles.indicator} size="large" color="#0000ff" />}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
