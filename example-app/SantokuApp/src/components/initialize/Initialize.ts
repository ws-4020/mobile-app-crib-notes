// import時の副作用を防ぐためにimport typeにしてます。
import type crashlyticsModule from '@react-native-firebase/crashlytics';
import {activateKeepAwake} from 'expo-keep-awake';
import * as SplashScreen from 'expo-splash-screen';
import {Alert} from 'react-native';
import RNExitApp from 'react-native-exit-app';

import {BundledMessagesLoader, loadMessages, m} from '../../framework';
import {firebaseConfig} from '../../framework/firebase';
import {log} from '../../framework/logging';
import {launchedId} from '../../framework/utilities/id';

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

export const initialize = async () => {
  // 開発中は画面がスリープしないように設定
  if (__DEV__) {
    activateKeepAwake();
  }

  // Firebase Crashlyticsの初期化
  await initializeFirebaseCrashlyticsAsync();

  // アプリ内で使用するメッセージのロード
  await loadBundledMessagesAsync();

  // TODO: 通知をタップして起動した場合のパラメータ取得
  // TODO: ディープリンクから起動した場合のパラメータ取得
  // TODO: 強制アップデート対象バージョンかどうかの確認
  // TODO: キャッシュの削除

  // バックエンドから初期データを取得
  const initialData = await loadInitialDataAsync();

  // TODO: 読み込んだ初期データをFirebase Crashlyticsの設定に反映

  // 初期画面の決定
  return getInitialNavigatorOptions(initialData);
};

export const hideSplashScreen = async () => {
  // スプラッシュスクリーンを閉じる前に100ms程度は待たないと、コンポーネントのレンダリングが完了せず画面が一瞬白くなってしまいます。
  // expo-app-loadingでも200ms待っているので、ここでも200ms待つようにしています。
  // cf: https://github.com/expo/expo/blob/sdk-41/packages/expo-app-loading/src/AppLoadingNativeWrapper.tsx#L27
  await new Promise((resolve) => setTimeout(resolve, 200));
  try {
    await SplashScreen.hideAsync();
  } catch (e) {
    // 既にSplashScreenが消えていた場合はそのまま継続
  }
};

export const showErrorDialog = () => {
  Alert.alert(m('初期化エラー'), m('app.初期化エラー'), [
    {
      text: 'OK',
      style: 'default',
      onPress: () => {
        RNExitApp.exitApp();
      },
    },
  ]);
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
      log.error('Failed to get launchedId.', 'LaunchedIdGettingFailure');
    }
  }
};

const loadBundledMessagesAsync = async () => {
  try {
    await loadMessages(new BundledMessagesLoader());
  } catch (e) {
    // アプリにバンドルしているメッセージのロードは失敗しない想定
    log.error('Failed to load message.', 'BundledMessagesLoadingFailure');
  }
};

const loadInitialDataAsync = async (): Promise<InitialData> => {
  // 利用規約同意状態を取得
  const terms = (await getAccountMeTerms()) as TermsAgreement;
  return {
    terms,
  };
};

const getInitialNavigatorOptions = (initialData: InitialData): NavigatorOptions => {
  // TODO: 未認証状態ならログイン画面へ
  // TODO: チーム未参加状態ならチーム新規登録画面へ
  // TODO: 通知パラメータがあればそれに応じた画面へ
  // TODO: ディープリンクパラメータがあればそれに応じた画面へ
  if (!initialData.terms?.hasAgreedValidTermsOfService) {
    // 利用規約同意画面
    return {
      RootStackNav: {
        initialRouteName: 'TermsOfServiceAgreement',
      },
    };
  } else {
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
};

// OpenAPI generatorで生成されたコードを導入するまでの一時的なMock
export const getAccountMeTerms = async () => {
  return await new Promise((resolve) =>
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
