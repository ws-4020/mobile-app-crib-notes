import messaging from '@react-native-firebase/messaging';
import {resolveErrorMessage} from 'bases/error/resolveErrorMessage';
import {sendErrorLog} from 'bases/error/sendErrorLog';
import {enhanceValidator} from 'bases/validator/utils';
import {activateKeepAwake} from 'expo-keep-awake';
import {setRefreshSessionInterceptor} from 'features/account/services/auth/refreshSession';
import {refreshCsrfToken} from 'features/backend/utils/refreshCsrfToken';
import {useCallback, useMemo, useState} from 'react';

import {isInitialDataError} from '../errors/initialDataError';
import {initializeFirebaseCrashlyticsAsync} from '../services/initializeFirebaseCrashlyticsAsync';
import {loadBundledMessagesAsync} from '../services/loadBundledMessagesAsync';
import {AppInitialData} from '../types/AppInitialData';

type Initializing = {
  code: 'Initializing';
};
type InitializeSuccessResult = {
  code: 'Success';
  data: {initialData: AppInitialData};
};
type InitializeFailedResult = {
  code: 'Failed';
  title: string;
  message: string;
};

type InitializationResult = Initializing | InitializeSuccessResult | InitializeFailedResult;

const initializeCoreFeatures = async () => {
  // 開発中は画面がスリープしないように設定
  if (__DEV__) {
    await activateKeepAwake();
  }

  // Firebase Crashlyticsの初期化
  await initializeFirebaseCrashlyticsAsync();
  // アプリ内で使用するメッセージのロード
  await loadBundledMessagesAsync();
  // メッセージのロード後にYupの設定をする必要がある
  enhanceValidator();
};

const loadData = async () => {
  // アプリ未起動の間に届いた通知メッセージの取得
  // このアプリでは初期画面の決定に利用するのみで、それ以外の個別の処理は行わない
  const notification = (await messaging().getInitialNotification()) ?? undefined;

  // TODO: ディープリンクから起動した場合のパラメータ取得

  // TODO: キャッシュの削除
  const initialData = {notification};
  return {initialData};
};

export const useAppInitializeUseCase = () => {
  const [initializationResult, setInitializationResult] = useState<InitializationResult>({code: 'Initializing'});

  const initialize = useCallback(async () => {
    await initializeCoreFeatures();
    // CsrfTokenを取得し、AxiosInstanceのデフォルトヘッダに設定
    await refreshCsrfToken();
    // AxiosInstanceに401の時のリトライ処理を追加
    setRefreshSessionInterceptor();

    // 初期データの読み込み
    try {
      const data = await loadData();

      setInitializationResult({code: 'Success', data});
      // await hideSplashScreen();
    } catch (e) {
      if (isInitialDataError(e)) {
        const {title, message} = resolveErrorMessage(e.cause);
        sendErrorLog(e.cause);
        setInitializationResult({code: 'Failed', title, message});
      } else {
        throw e;
      }
    }
  }, []);

  return useMemo(
    () => ({
      initialize,
      initializationResult,
    }),
    [initializationResult, initialize],
  );
};
