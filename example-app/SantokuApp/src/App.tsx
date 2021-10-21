import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {activateKeepAwake} from 'expo-keep-awake';
import {RootStackNav} from 'navigation';
import React from 'react';

import {BundledMessagesLoader, loadMessages} from './framework';
import {firebaseConfig} from './framework/firebase';
import {log} from './framework/logging';

import analytics from '@react-native-firebase/analytics';

export const App = () => {
  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }

  if (!firebaseConfig.isDummy) {
    // Firebase Crashlyticsの初期化
    require('@react-native-firebase/crashlytics');
    // Firebase Analyticsの有効化
    analytics().setAnalyticsCollectionEnabled(true);
  }
  // アプリ内で使用するメッセージのロード
  loadMessages(new BundledMessagesLoader()).catch(() => {
    // アプリにバンドルしているメッセージのロードは失敗しない想定
    log.error('Failed to load message.', 'BundledMessagesLoadingFailure');
  });

  const routeNameRef = React.useRef<string>();
  const navigationRef = React.useRef<NavigationContainerRef>(null);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

      if (previousRouteName !== currentRouteName) {
        await analytics().logScreenView({
          screen_name: currentRouteName,
          screen_class: currentRouteName,
        });
      }
      routeNameRef.current = currentRouteName;
    }}>
      <RootStackNav />
    </NavigationContainer>
  );
};
