import {isGetFcmTokenError} from 'bases/firebase/messaging/getFcmToken';
import {log} from 'bases/logging';
import {m} from 'bases/message/Message';
import {useCallback} from 'react';
import {Alert} from 'react-native';

import {useLogout} from '../services/useLogout';

export const useLogoutUseCase = () => {
  const {mutateAsync: callLogout, isLoading} = useLogout();
  const logout = useCallback(async () => {
    try {
      await callLogout();
    } catch (e) {
      // 基本的にはFCM登録トークンの取得は失敗しない想定ですが、もし失敗した場合は、Firebase Crashlyticsにログを送信してアラートを表示します。
      if (isGetFcmTokenError(e)) {
        log.error(m('app.push.notification.getFcmTokenError', String(e)), 'app.push.notification.getFcmTokenError');
        Alert.alert(m('app.account.ログアウトエラータイトル'), m('app.account.ログアウトエラー本文'));
      }
    }
  }, [callLogout]);
  return {logout, isLoading};
};
