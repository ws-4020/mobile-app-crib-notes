import crashlytics from '@react-native-firebase/crashlytics';
import {NavigationContainer} from '@react-navigation/native';
import {activateKeepAwake} from 'expo-keep-awake';
import {RootStackNav} from 'navigation';
import React from 'react';

export const App = () => {
  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }

  // Firebase Crashlyticsの初期化
  crashlytics();

  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
};
