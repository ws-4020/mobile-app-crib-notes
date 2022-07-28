// import時の副作用を防ぐためにimport typeにしてます。
import type crashlyticsModule from '@react-native-firebase/crashlytics';
import {firebaseConfig} from 'bases/firebase/configs/FirebaseConfig';
import {launchedId} from 'bases/id/utils/id';

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
    } catch {
      throw new Error('Failed to get launchedId.');
    }
  }
};

export {initializeFirebaseCrashlyticsAsync};