// import時の副作用を防ぐためにimport typeにしてます。
import type crashlyticsModule from '@react-native-firebase/crashlytics';
import messaging, {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {activateKeepAwake} from 'expo-keep-awake';
import * as SplashScreen from 'expo-splash-screen';
import {AppNavigatorOptions} from 'navigation/types';
import {Alert} from 'react-native';

import {BundledMessagesLoader, firebaseConfig, launchedId, loadMessages} from '../../framework';

type TermsAgreement = {
  hasAgreedValidTermsOfService: boolean;
  agreedTermsOfServiceVersion: string;
};

type InitialData = {
  terms?: TermsAgreement;
};

export type NavigatorOptions = {
  [navigatorName: string]: {
    initialRouteName?: string;
  };
};

export type NavigationArgs = {screen: string; params?: object};

export const initialize = async (
  setNavigatorOptions: React.Dispatch<React.SetStateAction<NavigatorOptions>>,
  setReservedSnackbarMessage: React.Dispatch<React.SetStateAction<string | undefined>>,
  setReservedNavigation: React.Dispatch<React.SetStateAction<NavigationArgs | undefined>>,
) => {
  // 開発中は画面がスリープしないように設定
  if (__DEV__) {
    activateKeepAwake();
  }

  // Firebase Crashlyticsの初期化
  await initializeFirebaseCrashlyticsAsync();

  // アプリ内で使用するメッセージのロード
  await loadBundledMessagesAsync();

  // 通知受信時処理を行うためのハンドラ設定
  setNotificationHandlers(setReservedSnackbarMessage, setReservedNavigation);

  // アプリ未起動時に通知をタップしてアプリを起動した場合の通知パラメータ取得
  const initialNotificationMessage = await handleInitialNotificationAsync();

  // TODO: ディープリンクから起動した場合のパラメータ取得
  // TODO: 強制アップデート対象バージョンかどうかの確認
  // TODO: キャッシュの削除

  // バックエンドから初期データを取得
  const initialData = await loadInitialDataAsync();

  // TODO: 読み込んだ初期データをFirebase Crashlyticsの設定に反映

  // 初期画面の決定
  const initialNavigatorOptions = getInitialNavigatorOptions(initialData, initialNotificationMessage);
  setNavigatorOptions(initialNavigatorOptions);
};

export const hideSplashScreen = async () => {
  // スプラッシュスクリーンを閉じる前に100ms程度は待たないと、コンポーネントのレンダリングが完了せず画面が一瞬白くなってしまいます。
  // expo-app-loadingでも200ms待っているので、ここでも200ms待つようにしています。
  // cf: https://github.com/expo/expo/blob/sdk-41/packages/expo-app-loading/src/AppLoadingNativeWrapper.tsx#L27
  await new Promise(resolve => setTimeout(resolve, 200));
  try {
    await SplashScreen.hideAsync();
  } catch (e) {
    // 既にSplashScreenが消えていた場合はそのまま継続
  }
};

const initializeFirebaseCrashlyticsAsync = async () => {
  if (!firebaseConfig.isDummy) {
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // 型は、typeofで明示するようにします。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const crashlytics = require('@react-native-firebase/crashlytics').default as typeof crashlyticsModule;
    // アプリの起動IDを設定
    try {
      const id = await launchedId();
      await crashlytics().setAttribute('launchedId', id);
    } catch (e) {
      throw new Error('Failed to get launchedId.');
    }
  }
};

const loadBundledMessagesAsync = async () => {
  try {
    await loadMessages(new BundledMessagesLoader());
  } catch (e) {
    // アプリにバンドルしているメッセージのロードは失敗しない想定
    throw new Error('Failed to load message.');
  }
};

const setNotificationHandlers = (
  setReservedSnackbarMessage: React.Dispatch<React.SetStateAction<string | undefined>>,
  setReservedNavigation: React.Dispatch<React.SetStateAction<NavigationArgs | undefined>>,
) => {
  // アプリを前面で操作中に通知を受信した際に行う処理
  messaging().onMessage(message => {
    if (message.notification) {
      // アプリ操作中に受信した場合は通知内容をスナックバーに表示し、通知データに応じた処理は行わない
      const snackBarText = [message.notification.title, message.notification.body].join('\n');
      setReservedSnackbarMessage(snackBarText);
    }
  });

  // アプリがバックグラウンド状態で通知を受信した場合に、通知領域から通知をタップしてアプリを前面に移動した際に行う処理
  messaging().onNotificationOpenedApp(message => {
    if (message.data?.type) {
      switch (message.data.type) {
        case 'StartedTimetable': {
          // ホーム画面へ遷移
          const args = getNavigationArgsFromNotification(message);
          if (args) {
            setReservedNavigation(args);
          }
          break;
        }
        default: {
          // 動作確認用に一旦Alertを表示しておく
          const alertTitle = 'アプリ停止中に通知を受信しました';
          const alertText = [
            `タイトル: ${message.notification?.title ?? ''}`,
            `本文: ${message.notification?.body ?? ''}`,
            `データ: ${JSON.stringify(message.data)}`,
          ].join('\n');
          Alert.alert(alertTitle, alertText);
          break;
        }
      }
    }
  });
};

const handleInitialNotificationAsync = async () => {
  // アプリが起動していなかった間に受信した通知を確認し、届いていれば処理を行う
  const message = await messaging().getInitialNotification();
  if (message) {
    if (message.data?.type) {
      switch (message.data.type) {
        case 'StartedTimetable': {
          // 初期画面の決定は後続処理で行うためここでは何もしない
          break;
        }
        default: {
          // 動作確認用に一旦Alertを表示しておく
          const alertTitle = 'アプリ停止中に通知を受信しました';
          const alertText = [
            `タイトル: ${message.notification?.title ?? ''}`,
            `本文: ${message.notification?.body ?? ''}`,
            `データ: ${JSON.stringify(message.data)}`,
          ].join('\n');
          Alert.alert(alertTitle, alertText);
          break;
        }
      }
    }
  }
  // 後続の初期画面決定で使うためにmessageを返しておく
  return message;
};

const loadInitialDataAsync = async (): Promise<InitialData> => {
  // 利用規約同意状態を取得
  const terms = await getAccountMeTerms();
  return {
    terms,
  };
};

const getNavigationArgsFromNotification = (
  notificationMessage: FirebaseMessagingTypes.RemoteMessage | null,
): NavigationArgs | null => {
  // 通知パラメータがあればそれに応じた画面へ
  if (notificationMessage?.data?.type) {
    switch (notificationMessage.data.type) {
      case 'StartedTimetable': {
        // ホーム画面へ遷移する
        return {
          screen: 'AuthenticatedStackNav',
          params: {
            screen: 'MainTabNav',
            params: {
              screen: 'HomeStackNav',
              params: {
                screen: 'HomeDetail',
              },
            },
          },
        };
      }
      default: {
        return null;
      }
    }
  } else {
    return null;
  }
};

const getInitialNavigatorOptions = (
  initialData: InitialData,
  initialNotificationMessage: FirebaseMessagingTypes.RemoteMessage | null,
): AppNavigatorOptions => {
  // TODO: 未認証状態ならログイン画面へ

  // 利用規約に同意していなければ利用規約画面へ
  if (!initialData.terms?.hasAgreedValidTermsOfService) {
    return {
      RootStackNav: {
        initialRouteName: 'TermsOfServiceAgreement',
      },
    };
  }

  // TODO: チーム未参加状態ならチーム新規登録画面へ

  // 通知パラメータがあればそれに応じた画面へ
  if (initialNotificationMessage?.data?.type) {
    switch (initialNotificationMessage.data.type) {
      case 'StartedTimetable': {
        // ホーム画面
        return {
          RootStackNav: {
            initialRouteName: 'AuthenticatedStackNav',
          },
          AuthenticatedStackNav: {
            initialRouteName: 'MainTabNav',
          },
          MainTabNav: {
            initialRouteName: 'HomeStackNav',
          },
          HomeStackNav: {
            initialRouteName: 'Home',
          },
        };
      }
      default: {
        break;
      }
    }
  }

  // TODO: ディープリンクパラメータがあればそれに応じた画面へ

  // 何もなければ初期設定に従う
  return {};
};

// OpenAPI generatorで生成されたコードを導入するまでの一時的なMock
export const getAccountMeTerms = async () => {
  return await new Promise<TermsAgreement>(resolve =>
    setTimeout(
      () =>
        resolve({
          hasAgreedValidTermsOfService: false,
          agreedTermsOfServiceVersion: '1.0.0',
        }),
      100,
    ),
  );
};
