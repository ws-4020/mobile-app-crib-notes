import React, {useCallback} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {WebView as RNWebView, WebViewProps} from 'react-native-webview';
import {WebViewScrollEvent} from 'react-native-webview/lib/WebViewTypes';

type Props = WebViewProps & {
  onScrollEnd?: () => void;
};

export const WebView = React.forwardRef<RNWebView, Props>(function WebView(props, ref) {
  const {onScrollEnd, ...webViewProps} = props;

  const handleScroll = useCallback(
    (event: WebViewScrollEvent) => {
      // 小数点の誤差があるため、1px分は丸め誤差として扱う
      const scrollY = event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height + 1;
      if (event.nativeEvent.contentSize.height <= scrollY) {
        onScrollEnd?.();
      }

      props.onScroll?.(event);
    },
    [onScrollEnd, props],
  );

  return <RNWebView {...webViewProps} style={styles.container} onScroll={handleScroll} ref={ref} />;
});

WebView.defaultProps = {
  // androidLayerType：WebViewの再レンダー時にクラッシュする可能性がある問題の回避策
  // https://github.com/react-native-webview/react-native-webview/issues/1915
  androidLayerType: 'software',
  startInLoadingState: true,
  renderLoading: () => <ActivityIndicator style={styles.indicator} size="large" color="#0000ff" />,
};

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
