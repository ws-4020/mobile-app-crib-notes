/**
 * クライアント側のログアウト処理を実施します。
 */
import crashlytics from '@react-native-firebase/crashlytics';
import {deleteFcmToken} from 'bases/firebase/utils/deleteFcmToken';
import {log} from 'bases/logging/utils';
import {m} from 'bases/message/utils/Message';

import {SecureStorageAdapter} from './SecureStorageAdapter';

export const clientLogout = async (): Promise<void> => {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (accountId) {
    await SecureStorageAdapter.deleteActiveAccountId();
    await SecureStorageAdapter.deletePassword(accountId);
  }
  await crashlytics().setUserId('');
  try {
    // FCMに登録されている登録トークンを削除します。
    // FCMから登録トークンを削除することで、SantokuApp Backend以外からPush通知を送信した場合も、通知を受信しなくなります。
    // もし、Firebase Consoleからキャンペーン送信するなど、SantokuApp Backendを経由しないPush通知をログアウト後も受け取りたい場合は、
    // FCMに登録されている登録トークンは削除しないでください。
    await deleteFcmToken();
  } catch (e) {
    // 基本的にはFCM登録トークンの削除は失敗しない想定ですが、もし失敗した場合はログアウト後もSantokuApp Backendを経由しないPush通知は受信できてしまいます。
    log.error(m('app.push.notification.deleteFcmTokenError', String(e)), 'app.push.notification.deleteFcmTokenError');
  }
};
