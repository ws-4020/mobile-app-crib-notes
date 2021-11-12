import {StackActions, useNavigation} from '@react-navigation/native';
import {useAppTheme} from 'components/theme';
import * as SplashScreen from 'expo-splash-screen';
import {m} from 'framework';
import {log} from 'framework/logging';
import {useIsMounted} from 'framework/utilities/useIsMounted';
import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';
import RNExitApp from 'react-native-exit-app';

const ScreenName = 'InitialScreen';
const Screen: React.FC = () => {
  const navigation = useNavigation();
  const isMounted = useIsMounted();
  const appTheme = useAppTheme();

  const prepare = useCallback(async () => {
    // TODO: 利用規約同意状態取得APIを呼び出す処理に置き換え
    const hasAgreedValidTermsOfService = await new Promise((resolve) => resolve(false));
    if (!hasAgreedValidTermsOfService) {
      navigation.dispatch(StackActions.replace('TermsOfServiceAgreement'));
    } else {
      navigation.dispatch(StackActions.replace('AuthenticatedStackNav'));
    }
    // スプラッシュスクリーンを閉じる前に100ms程度は待たないと、コンポーネントのレンダリングが完了せず画面が一瞬白くなってしまいます。
    // expo-app-loadingでも200ms待っているので、ここでも200ms待つようにしています。
    // cf: https://github.com/expo/expo/blob/sdk-41/packages/expo-app-loading/src/AppLoadingNativeWrapper.tsx#L27
    await new Promise((resolve) => setTimeout(resolve, 200));
    try {
      await SplashScreen.hideAsync();
    } catch (e) {
      // 既にSplashScreenが消えていた場合はそのまま継続
    }
  }, [navigation]);

  const onError = useCallback(() => {
    Alert.alert(m('初期化エラー'), m('app.初期化エラー'), [
      {
        text: 'OK',
        style: 'default',
        onPress: () => {
          RNExitApp.exitApp();
        },
      },
    ]);
  }, []);

  useEffect(() => {
    prepare().catch(() => {
      log.error('Failed to load initial data.', 'InitialDataLoadingFailure');
      if (isMounted()) {
        onError();
      }
    });
  }, [prepare, isMounted, onError]);

  return (
    <View style={styles.container} testID="InitialScreen">
      <ActivityIndicator size="large" color={appTheme.colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const InitialScreen = {
  component: Screen,
  name: ScreenName,
};
