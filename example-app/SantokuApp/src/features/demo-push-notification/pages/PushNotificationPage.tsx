import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';

import {useAuthStatus} from '../client-states/useAuthStatus';
import {useToken} from '../client-states/useToken';
import {useGetTokenUseCase} from '../use-cases/useGetTokenUseCase';
import {useNotifyMessageToAllUseCase} from '../use-cases/useNotifyMessageToAllUseCase';
import {useNotifyMessageToMeUseCase} from '../use-cases/useNotifyMessageToMeUseCase';
import {useOpenSettingsUseCase} from '../use-cases/useOpenSettingsUseCase';
import {useRequestUserPermissionUseCase} from '../use-cases/useRequestUserPermissionUseCase';

export const PushNotificationPage: React.FC = () => {
  const [authStatus] = useAuthStatus();
  const [token] = useToken();
  const {requestUserPermission} = useRequestUserPermissionUseCase();
  const {getToken} = useGetTokenUseCase();
  const {notifyMessageToAll} = useNotifyMessageToAllUseCase();
  const {notifyMessageToMe} = useNotifyMessageToMeUseCase();
  const {openSettings} = useOpenSettingsUseCase();

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
