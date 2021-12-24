import messaging from '@react-native-firebase/messaging';
import {useNavigationContainerRef} from '@react-navigation/core';
import {useSnackbar} from 'components/snackbar';
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
  getNavigationArgsFromNotification,
  NavigatorOptions,
} from './helpers';

type InitializeContextValue = {
  initialized: boolean;
  navigatorOptions: AppNavigatorOptions;
};

const [useInitializeContext, InitializeContextProvider] = createUseContextAndProvider<InitializeContextValue>();

const WithInitializeContext: React.FC = ({children}) => {
  const [error, setError] = useState<unknown>();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [navigatorOptions, setNavigatorOptions] = useState<NavigatorOptions>([]);
  const snackbar = useSnackbar();
  const navigationContainerRef = useNavigationContainerRef();
  const {setReservedNavigationArgs} = useNavigationContainerContext();

  const contextValue = useMemo(() => {
    return {
      initialized,
      navigatorOptions,
    };
  }, [initialized, navigatorOptions]);

  const initialize = useCallback(async () => {
    if (!navigationContainerRef || !snackbar) {
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
    // アプリを前面で操作中に通知を受信した際に行う処理
    messaging().onMessage(message => {
      if (message.notification) {
        // アプリ操作中に受信した場合は通知内容をスナックバーに表示し、通知データに応じた処理は行わない
        const snackBarText = message.notification.body ?? message.notification.title;
        if (snackBarText) {
          snackbar.show(snackBarText);
        }
      }
    });
    // アプリがバックグラウンド状態の時に通知を受信し、通知領域から通知をタップしてアプリが前面に移動した際に行う処理
    messaging().onNotificationOpenedApp(message => {
      // バックグラウンド時に受信した場合は通知を開いた際に通知内容に応じた画面へ遷移する
      const navigationArgs = getNavigationArgsFromNotification(message);
      if (navigationArgs) {
        if (navigationContainerRef.isReady()) {
          navigationContainerRef.navigate(...navigationArgs);
        } else {
          // アプリがバックグラウンドから前面に戻った直後はまだNavigationContainerがReadyではなく画面遷移に失敗する
          // https://github.com/react-navigation/react-navigation/issues/6879
          // そのためNavigationContainerの準備ができてから画面遷移を行えるように遷移に必要な情報を残しておく
          setReservedNavigationArgs(navigationArgs);
        }
      }
    });

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
  }, [snackbar, navigationContainerRef, setReservedNavigationArgs]);

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
