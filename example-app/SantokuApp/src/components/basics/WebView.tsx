import React, {useCallback, useImperativeHandle, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
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
      const scrollY = event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height;
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
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
