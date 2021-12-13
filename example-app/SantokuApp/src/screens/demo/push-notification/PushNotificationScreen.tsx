import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {usePushNotification} from './usePushNotification';

const ScreenName = 'PushNotification';
const Screen = () => {
  const {
    authStatus,
    token,
    requestUserPermission,
    notification,
    getToken,
    onMessage,
    onNotificationOpenedApp,
    setBackgroundMessageHandler,
    getInitialNotification,
    notifyMessage,
  } = usePushNotification();

  useEffect(() => {
    const onMessageRes = onMessage();
    const onNotificationOpenedAppRes = onNotificationOpenedApp();
    setBackgroundMessageHandler();
    getInitialNotification().catch(err => console.log(err));
    return () => {
      onMessageRes();
      onNotificationOpenedAppRes();
    };
  }, [onMessage, onNotificationOpenedApp, setBackgroundMessageHandler]);

  return (
    <View style={styles.container}>
      <View>
        <Text>【通知メッセージ】</Text>
        <Text>{notification ?? '通知メッセージが表示されます'}</Text>
      </View>
      <View>
        <Text>【Permissionのステータス】</Text>
        <Text>{authStatus ?? 'Permissionのステータスが表示されます'}</Text>
      </View>
      <Button onPress={requestUserPermission} title="Permissionの許可" />
      <View>
        <Text>【FCM登録トークン】</Text>
        <Text selectable>{token ?? 'FCM登録トークンが表示されます'}</Text>
      </View>
      <Button onPress={getToken} title="FCM登録トークンの取得" />
      <Button onPress={notifyMessage} title="Pushメッセージ送信" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export const PushNotificationScreen = {
  name: ScreenName,
  component: Screen,
};
