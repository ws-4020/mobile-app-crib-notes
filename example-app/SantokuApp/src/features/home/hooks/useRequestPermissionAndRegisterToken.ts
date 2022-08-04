import messaging from '@react-native-firebase/messaging';
import {getFcmToken, isGetFcmTokenError} from 'bases/firebase/utils/getFcmToken';
import {isRequestPushPermissionError, requestPushPermission} from 'bases/firebase/utils/requestPushPermission';
import {log} from 'bases/logging/utils';
import {m} from 'bases/message/utils/Message';
import {Snackbar} from 'bases/ui/components/overlay/snackbar/Snackbar';
import {usePostAccountsMeDeviceToken} from 'features//backend/apis/account/account';
import {useAccountData} from 'features/account/hooks/useAccountData';
import {useCallback} from 'react';

export const useRequestPermissionAndRegisterToken = () => {
  const {mutateAsync: callPostAccountsMeDeviceToken} = usePostAccountsMeDeviceToken();
  const {data: accountData} = useAccountData();

  const requestPermissionAndRegisterToken = useCallback(async () => {
    try {
      const authStatus = await requestPushPermission();
      if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
        const fcmToken = await getFcmToken();
        // ログイン後は必ずアカウント情報が存在している
        // アカウント情報にFCM登録トークンが含まれていない場合は、FCM登録トークンを登録する
        if (fcmToken && !accountData!.account.deviceTokens.includes(fcmToken)) {
          await callPostAccountsMeDeviceToken({data: {newDeviceToken: fcmToken}});
        }
      }
    } catch (e) {
      // Push通知のパーミッションリクエストに失敗した場合、Firebase Crashlyticsにエラーログを送信して、ユーザにはスナックバーでPush通知の受信ができない旨を伝える
      if (isRequestPushPermissionError(e)) {
        log.error(
          m('app.push.notification.requestPushPermissionError', String(e)),
          'app.push.notification.requestPushPermissionError',
        );
        Snackbar.show(m('app.push.notification.プッシュ通知の設定エラー'));
      }
      // FCMの登録トークンの取得に失敗した場合、Firebase Crashlyticsにエラーログを送信して、ユーザにはスナックバーでPush通知の受信ができない旨を伝える
      if (isGetFcmTokenError(e)) {
        log.error(m('app.push.notification.getFcmTokenError', String(e)), 'app.push.notification.getFcmTokenError');
        Snackbar.show(m('app.push.notification.プッシュ通知の設定エラー'));
      }
    }
  }, [accountData, callPostAccountsMeDeviceToken]);

  return {
    requestPermissionAndRegisterToken,
  };
};
