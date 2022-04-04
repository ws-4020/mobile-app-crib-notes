import {m} from 'framework/message';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {WebView as RNWebView, WebViewProps} from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
  WebViewProgressEvent,
  WebViewScrollEvent,
  WebViewSource,
  WebViewSourceUri,
} from 'react-native-webview/lib/WebViewTypes';

import {useSnackbar} from '../overlay';

type Props = WebViewProps & {
  /**
   * Error message when React Native WebView original onError is raised.
   * If not specified, the default message is displayed.
   * If onError is specified by the parent, this message will not be displayed.
   */
  errorMessage?: string;
  /**
   * End-of-Scroll Event.
   * Occurs every time the web page scrolls to the bottom of the content.
   */
  onScrollEnd?: () => void;
  /**
   * End-of-scroll event that occurs only once.
   * Occurs only once when the web page scroll reaches the bottom of the content.
   */
  onScrollEndOnce?: () => void;
};

const isUriSource = (source?: WebViewSource): source is WebViewSourceUri => {
  return source !== undefined && 'uri' in source;
};

export const WebView = React.forwardRef<RNWebView, Props>(function WebView(props, ref) {
  const [loadEnd, setLoadEnd] = useState(false);
  const [scrollEndCalled, setScrollEndCalled] = useState(false);
  const snackbar = useSnackbar();
  const {onScrollEnd, onScrollEndOnce, onLoadStart, onLoadProgress, onError, errorMessage, ...webViewProps} = props;

  // onLoadStartの対応だけではうまく行かなかったので、追加で対応。
  // iOSのシミュレータでは、URIが変わった直後にonLoadStart->onLoadEnd->onScroll->sScrollの順で発火しているが、
  // 一回目のhandleScrollの引数として渡されるcontentOffsetが、最後までスクロールしたときのオフセットになっていて、
  // onScrollEndが実行されてしまう。
  // 二回目のhandleScrollではcontentOffsetは0となっているので、onScrollEndは実行されない。
  // なので、とりあえず初回のonScrollではonScrollEndが実行されないように、URIが変わったかどうかを状態として持つようにする。
  // （二回目のonScrollもユーザが実際にスクロールしたわけではないが、まぁいいか）
  // Androidエミュレータでは、onLoadStart->onScroll->onLoadEndと呼ばれることもあるので、onLoadStartでsetLoadEndする
  // ロジックは残しておく。
  const [isUriChanged, setIsUriChanged] = useState(false);
  const uri = isUriSource(props.source) ? props.source.uri : undefined;
  useEffect(() => {
    setIsUriChanged(true);
  }, [uri]);

  // uriが変わった時にWebViewがページを再ロードした場合の対応
  // なお、WebViewで表示しているページ内リンクでページ遷移した場合は、onLoadStartイベントは再発行されません
  const handleLoadStart = useCallback(
    (event: WebViewNavigationEvent) => {
      setLoadEnd(false);
      setScrollEndCalled(false);
      onLoadStart?.(event);
    },
    [onLoadStart],
  );

  const handleScroll = useCallback(
    (event: WebViewScrollEvent) => {
      if (isUriChanged && event.nativeEvent.contentOffset.y > 0) {
        // URLが変わった直後の、オフセットが0ではないスクロールイベントでは、onScrollEndは発生させない。
        setIsUriChanged(false);
      } else if ((onScrollEnd || onScrollEndOnce) && loadEnd) {
        // 小数点の誤差があるため、1px分は丸め誤差として扱う
        const scrollY = event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height + 1;
        if (event.nativeEvent.contentSize.height <= scrollY) {
          if (!scrollEndCalled) {
            setScrollEndCalled(true);
            onScrollEndOnce?.();
          }
          onScrollEnd?.();
        }
      }

      props.onScroll?.(event);
    },
    [isUriChanged, loadEnd, scrollEndCalled, onScrollEnd, onScrollEndOnce, props],
  );

  // Androidの場合、onLoadEndがページのロードが完了する前に呼び出される不具合がある
  // https://github.com/react-native-webview/react-native-webview/issues/2345
  // そのため、onLoadProgressでprogressが1になったらロードが完了したと判定する
  const handleLoadProgress = useCallback(
    (event: WebViewProgressEvent) => {
      if (event.nativeEvent.progress === 1) {
        setLoadEnd(true);
      } else {
        setLoadEnd(false);
      }
      onLoadProgress?.(event);
    },
    [onLoadProgress],
  );

  const handleError = useCallback(
    (event: WebViewErrorEvent) => {
      if (onError) {
        onError(event);
      } else {
        snackbar.showWithCloseButton(errorMessage ?? m('app.webview.onError'));
      }
    },
    [errorMessage, onError, snackbar],
  );

  return (
    <RNWebView
      {...webViewProps}
      style={styles.container}
      onScroll={handleScroll}
      onLoadStart={handleLoadStart}
      onLoadProgress={handleLoadProgress}
      onError={handleError}
      ref={ref}
    />
  );
});

WebView.defaultProps = {
  // androidLayerType：WebViewの再レンダー時にクラッシュする可能性がある問題の回避策
  // https://github.com/react-native-webview/react-native-webview/issues/1915
  androidLayerType: 'software',
  startInLoadingState: true,
  // iOSでスクロールしたときに滑らかにスクロールするようにしておく。
  // https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#decelerationrate
  decelerationRate: 'normal',
  sharedCookiesEnabled: true,
  renderLoading: () => <ActivityIndicator style={styles.indicator} />,
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
