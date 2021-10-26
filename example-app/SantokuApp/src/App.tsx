import type crashlyticsType from '@react-native-firebase/crashlytics';
import {NavigationContainer} from '@react-navigation/native';
import {activateKeepAwake} from 'expo-keep-awake';
import {RootStackNav} from 'navigation';
import React from 'react';

import {BundledMessagesLoader, loadMessages} from './framework';
import {firebaseConfig} from './framework/firebase';
import {log} from './framework/logging';
import {launchedId} from './framework/utilities/id';

export const App = () => {
  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }

  if (!firebaseConfig.isDummy) {
    // Firebase Crashlyticsの初期化
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // 型は、typeofで明示するようにします。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const crashlytics = require('@react-native-firebase/crashlytics').default as typeof crashlyticsType;
    // アプリの起動IDを設定
    launchedId()
      .then((value) => crashlytics().setAttribute('launchedId', value))
      .catch(() => {
        log.error('Failed to get launchedId.', 'LaunchedIdGettingFailure');
      });
  }
  // アプリ内で使用するメッセージのロード
  loadMessages(new BundledMessagesLoader()).catch(() => {
    // アプリにバンドルしているメッセージのロードは失敗しない想定
    log.error('Failed to load message.', 'BundledMessagesLoadingFailure');
  });

  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
};
