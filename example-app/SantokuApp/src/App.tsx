import {NavigationContainer} from '@react-navigation/native';
import {activateKeepAwake} from 'expo-keep-awake';
import {RootStackNav} from 'navigation';
import React from 'react';

import {BundledSystemMessagesLoader, loadSystemMessages} from './framework/message';

export const App = () => {
  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }

  // Firebase Crashlyticsの初期化
  require('@react-native-firebase/crashlytics');
  // アプリ内で使用するメッセージのロード
  loadSystemMessages(new BundledSystemMessagesLoader()).catch(() => {
    // アプリにバンドルしているメッセージのロードは失敗しない想定
  });

  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
};
