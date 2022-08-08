import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';

import {useAuthStatus} from '../client-states/useAuthStatus';
import {useToken} from '../client-states/useToken';
import {useGetToken} from '../use-cases/useGetToken';
import {useNotifyMessageToAll} from '../use-cases/useNotifyMessageToAll';
import {useNotifyMessageToMe} from '../use-cases/useNotifyMessageToMe';
import {useOpenSettings} from '../use-cases/useOpenSettings';
import {useRequestUserPermission} from '../use-cases/useRequestUserPermission';

export const PushNotificationPage: React.FC = () => {
  const [authStatus] = useAuthStatus();
  const [token] = useToken();
  const {requestUserPermission} = useRequestUserPermission();
  const {getToken} = useGetToken();
  const {notifyMessageToAll} = useNotifyMessageToAll();
  const {notifyMessageToMe} = useNotifyMessageToMe();
  const {openSettings} = useOpenSettings();

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
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【通知メッセージ】</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={notifyMessageToAll} title="Pushメッセージ一斉送信" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={notifyMessageToMe} title="Pushメッセージを自分に送信" />
          </View>
        </View>
        <View>
          <Text>【通知設定】</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={openSettings} title="Push通知の設定" />
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
