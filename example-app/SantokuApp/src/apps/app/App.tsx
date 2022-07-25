import {firebaseConfig} from 'bases/firebase/configs/FirebaseConfig';
import {createLogger, setLogger} from 'bases/logging/utils';
import {FirebaseCrashlyticsTransport} from 'bases/logging/utils/FirebaseCrashlyticsTransport';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {WithOverlay} from '../../bases/ui/components/overlay';
import {WithAppTheme} from '../../bases/ui/components/theme';
import {AppWithInitialization} from './AppWithInitialization';

type AppProperties = {
  [key: string]: any;
};

setLogger(
  __DEV__ || firebaseConfig.isDummy
    ? createLogger({level: 'trace'})
    : createLogger({level: 'error', transports: [new FirebaseCrashlyticsTransport()]}),
);

export const App = ({isHeadless}: AppProperties) => {
  // isHeadlessを取得するためにはAppDelegate.mに変更が必要
  // https://rnfirebase.io/messaging/usage#background-application-state
  if (Platform.OS === 'ios' && isHeadless) {
    // iOSでバックグラウンド時にリモート通知を受信するとアプリケーションがサイレントに起動される
    // この時にはReact Componentを返さないようにし、useEffectなどの処理がバックグラウンドで走ることを防止する
    // Androidの場合はApp自体が読み込まれないので追加対応は必要ない
    return null;
  }

  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <SafeAreaProvider>
        <WithAppTheme>
          <WithOverlay>
            <AppWithInitialization />
          </WithOverlay>
        </WithAppTheme>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
