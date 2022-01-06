import messaging from '@react-native-firebase/messaging';
import {activateKeepAwake} from 'expo-keep-awake';
import {createUseContextAndProvider} from 'framework/utilities';
import {AppNavigatorOptions} from 'navigation/types';
import {useNavigationContainerContext} from 'navigation/WithNavigationContainer';
import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

import {
  getInitialNavigatorOptions,
  initializeFirebaseCrashlyticsAsync,
  loadBundledMessagesAsync,
  loadInitialDataAsync,
  hideSplashScreen,
  useOnMessageCallback,
  useOnNotificationOpenedAppCallback,
} from './helpers';

type InitializeContextValue = {
  initialized: boolean;
};

const [useInitializeContext, InitializeContextProvider] = createUseContextAndProvider<InitializeContextValue>();

const WithInitializeContext: React.FC = ({children}) => {
  const [error, setError] = useState<unknown>();
  const [initialized, setInitialized] = useState<boolean>(false);
  const {setNavigatorOptions} = useNavigationContainerContext();
  const onMessage = useOnMessageCallback();
  const onNotificationOpenedApp = useOnNotificationOpenedAppCallback();

  const contextValue = useMemo(() => {
    return {
      initialized,
    };
  }, [initialized]);

  const initialize = useCallback(async () => {
    if (initialized) {
      return;
    }

    // 開発中は画面がスリープしないように設定
    if (__DEV__) {
      activateKeepAwake();
    }

    // Firebase Crashlyticsの初期化
    await initializeFirebaseCrashlyticsAsync();

    // アプリ内で使用するメッセージのロード
    await loadBundledMessagesAsync();

    // 通知受信時処理を行うためのハンドラ設定
    messaging().onMessage(onMessage);
    messaging().onNotificationOpenedApp(onNotificationOpenedApp);

    // アプリ未起動の間に届いた通知メッセージの取得
    // このアプリでは初期画面の決定に利用するのみで、それ以外の個別の処理は行わない
    const initialNotificationMessage = await messaging().getInitialNotification();

    // TODO: ディープリンクから起動した場合のパラメータ取得
    // TODO: 強制アップデート対象バージョンかどうかの確認
    // TODO: キャッシュの削除

    // バックエンドから初期データを取得
    const initialData = await loadInitialDataAsync();

    // TODO: 読み込んだ初期データをFirebase Crashlyticsの設定に反映

    // 初期画面の決定
    const initialNavigatorOptions = getInitialNavigatorOptions(initialData, initialNotificationMessage);
    setNavigatorOptions(initialNavigatorOptions);
  }, [initialized, onMessage, onNotificationOpenedApp, setNavigatorOptions]);

  useEffect(() => {
    initialize()
      .then(() => {
        setInitialized(true);
        hideSplashScreen().catch(() => {});
      })
      .catch(e => {
        setError(e);
      });
  }, [initialize]);

  useEffect(() => {
    if (error) {
      // 初期化処理に失敗した場合はアプリをクラッシュ扱いで終了
      throw error;
    }
  }, [error]);

  if (initialized) {
    return <InitializeContextProvider value={contextValue}>{children}</InitializeContextProvider>;
  } else {
    return null;
  }
};

export {useInitializeContext, WithInitializeContext};
