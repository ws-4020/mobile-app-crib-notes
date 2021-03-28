import {useNavigation} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React, {useCallback, useContext, useEffect} from 'react';
import {ThemeContext} from 'react-native-elements';

import {HomeTemplate} from './HomeTemplate';

const useNavigateToDemoStackScreen = (screen: string) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('DemoStackNav', {screen}), [navigation, screen]);
};

const ScreenName = 'Home';
const Screen: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const onGoToInstructionButtonPress = useNavigateToDemoStackScreen('Instructions');
  const onViewApplicationInformationButtonPress = useNavigateToDemoStackScreen('AppInfo');
  const onGoToDemoButtonPress = useNavigateToDemoStackScreen('Demo');

  useEffect(() => {
    // スプラッシュスクリーンを閉じる前に100ms程度は待たないと、コンポーネントのレンダリングが完了せず画面が一瞬白くなってしまいます。
    // expo-app-loadingでも200ms待っているので、ここでも200ms待つようにしています。
    // cf: https://github.com/expo/expo/blob/sdk-41/packages/expo-app-loading/src/AppLoadingNativeWrapper.tsx#L27
    setTimeout(() => {
      SplashScreen.hideAsync().catch(() => {
        /* Ignore error */
      });
    }, 200);
  }, []);

  return (
    <HomeTemplate
      testID="HomeScreen"
      theme={theme}
      onGoToInstructionButtonPress={onGoToInstructionButtonPress}
      onViewApplicationInformationButtonPress={onViewApplicationInformationButtonPress}
      onGoToDemoButtonPress={onGoToDemoButtonPress}
    />
  );
};

// Navigatorに登録する情報
export const HomeScreen = {
  component: Screen,
  name: ScreenName,
};
