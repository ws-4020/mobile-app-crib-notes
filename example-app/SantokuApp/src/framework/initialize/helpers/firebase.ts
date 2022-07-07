// import時の副作用を防ぐためにimport typeにしてます。
import notifee, {AndroidImportance} from '@notifee/react-native';
import type crashlyticsModule from '@react-native-firebase/crashlytics';
import {firebaseConfig, launchedId} from 'framework';

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

const createMessagingChannels = async () => {
  await notifee.createChannels([
    {
      id: 'emergencyChannel',
      name: 'Emergency notification',
      sound: 'default',
      importance: AndroidImportance.HIGH,
    },
    {
      id: 'highChannel',
      name: 'High notification',
      sound: 'default',
      importance: AndroidImportance.DEFAULT,
    },
    {
      id: 'middleChannel',
      name: 'Middle notification',
      sound: 'default',
      importance: AndroidImportance.LOW,
    },
    {
      id: 'lowChannel',
      name: 'Low notification',
      sound: 'default',
      importance: AndroidImportance.MIN,
    },
  ]);
};

export {initializeFirebaseCrashlyticsAsync, createMessagingChannels};
