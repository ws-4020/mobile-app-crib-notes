import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {WebView as RNWebView} from 'react-native-webview';
import {WebViewScrollEvent} from 'react-native-webview/lib/WebViewTypes';

type Props = {
  uri: string;
  onScrollEnd: () => void;
};

export const WebView: React.FC<Props> = ({uri, onScrollEnd}) => {
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
      androidLayerType="software"
      style={styles.container}
      source={{uri}}
      onScroll={handleScroll}
      onError={(error) => console.log('onError', error)}
      onHttpError={(error) => console.log('onHttpError', error)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
