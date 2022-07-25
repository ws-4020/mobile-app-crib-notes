import {isGetFcmTokenError} from 'bases/firebase/utils/getFcmToken';
import {log} from 'bases/logging/utils';
import {m} from 'bases/message/utils/Message';
import {Button} from 'bases/ui/components/button';
import {AuthenticationService} from 'features/account/AuthenticationService';
import {useAccountContextOperation} from 'features/account/useAccountContextOperation';
import React, {useCallback} from 'react';
import {Alert, GestureResponderEvent, StyleSheet} from 'react-native';

type HeaderRightLogoutButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  isLoading: boolean;
};

const HeaderRightLogoutButton: React.FC<HeaderRightLogoutButtonProps> = ({onPress, isLoading}) => {
  return (
    <Button
      title={m('ログアウト')}
      size="small"
      type="clear"
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
      onPress={onPress}
      loading={isLoading}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 14,
    color: '#4b6bbd',
  },
  buttonStyle: {
    height: undefined,
  },
});

type CloseThisNavigatorButtonProps = {
  tintColor?: string;
};

export const useLogoutButton = () => {
  const accountContextOperation = useAccountContextOperation();
  const {mutateAsync: callLogout, isLoading} = AuthenticationService.useLogout();
  const logout = useCallback(async () => {
    try {
      await callLogout();
      accountContextOperation.logout();
    } catch (e) {
      // 基本的にはFCM登録トークンの取得は失敗しない想定ですが、もし失敗した場合は、Firebase Crashlyticsにログを送信してアラートを表示します。
      if (isGetFcmTokenError(e)) {
        log.error(m('app.push.notification.getFcmTokenError', String(e)), 'app.push.notification.getFcmTokenError');
        Alert.alert(m('app.account.ログアウトエラータイトル'), m('app.account.ログアウトエラー本文'));
      }
    }
  }, [accountContextOperation, callLogout]);
  // NativeStackNavigatorのheaderRightに合わせたコンポーネント。
  const LogoutButton: React.FC<CloseThisNavigatorButtonProps> = () => (
    <HeaderRightLogoutButton onPress={logout} isLoading={isLoading} />
  );

  return {LogoutButton};
};
