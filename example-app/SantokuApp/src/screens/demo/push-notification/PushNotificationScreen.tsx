import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';

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
    registerFcmToken,
    removeFcmToken,
    notifyMessageToAll,
    notifyMessageToMe,
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
  }, [onMessage, onNotificationOpenedApp, setBackgroundMessageHandler, getInitialNotification]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>【Permissionのステータス】</Text>
          <Text>{authStatus ?? 'Permissionのステータスが表示されます'}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={requestUserPermission} title="Permissionの許可" />
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【FCM登録トークン】</Text>
          <Text selectable>{token ?? 'FCM登録トークンが表示されます'}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={getToken} title="FCM登録トークンの取得" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={registerFcmToken} title="FCM登録トークンをバックエンドに登録" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={removeFcmToken} title="FCM登録トークンをバックエンドから削除" />
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【通知メッセージ】</Text>
          <Text>{notification ?? '通知メッセージが表示されます'}</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={notifyMessageToAll} title="Pushメッセージ一斉送信" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={notifyMessageToMe} title="Pushメッセージを自分に送信" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  notificationMessageContainer: {},
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});

export const PushNotificationScreen = {
  name: ScreenName,
  component: Screen,
};
