import {NavigationContainer} from '@react-navigation/native';
import {activateKeepAwake} from 'expo-keep-awake';
import {RootStackNav} from 'navigation';
import React, {useState} from 'react';

import {BundledMessagesLoader, loadMessages} from './framework';
import {firebaseConfig} from './framework/firebase';
import {log} from './framework/logging';

export const App = () => {
  const [initialized, setInitialized] = useState(false);

  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }

  if (!firebaseConfig.isDummy) {
    // Firebase Crashlyticsの初期化
    require('@react-native-firebase/crashlytics');
  }
  // アプリ内で使用するメッセージのロード
  loadMessages(new BundledMessagesLoader())
    .then(() => setInitialized(true))
    .catch(() => {
      // アプリにバンドルしているメッセージのロードは失敗しない想定
      log.error('Failed to load message.', 'BundledMessagesLoadingFailure');
    });

  return (
    <>
      {initialized && (
        <NavigationContainer>
          <RootStackNav />
        </NavigationContainer>
      )}
    </>
  );
};
