import {NavigationContainer} from '@react-navigation/native';
import type {ParamListBase} from '@react-navigation/routers';
import {activateKeepAwake} from 'expo-keep-awake';
import {RootStackNav} from 'navigation';
import React from 'react';

import {BundledMessagesLoader, loadMessages} from './framework';
import {firebaseConfig} from './framework/firebase';
import {log} from './framework/logging';

// React Navigation の useNavigation/Link/ref 等のデフォルトタイプを指定
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }
}

export const App = () => {
  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }

  if (!firebaseConfig.isDummy) {
    // Firebase Crashlyticsの初期化
    require('@react-native-firebase/crashlytics');
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
