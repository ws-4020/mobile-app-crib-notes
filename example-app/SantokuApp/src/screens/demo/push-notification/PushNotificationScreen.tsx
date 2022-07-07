import {useNavigation} from '@react-navigation/native';
import {DemoStackParamList} from 'navigation/types';
import React, {useEffect} from 'react';
import {Linking, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Divider, Icon, Text} from 'react-native-elements';

import {SelectPicker} from '../../../components/picker';
import {usePushNotification} from './usePushNotification';

const openReadme = async () => {
  await Linking.openURL(
    'https://github.com/ws-4020/mobile-app-crib-notes/blob/feature/add-readme-for-push-notification-demo/example-app/SantokuApp/src/screens/demo/push-notification',
  );
};

const ReadmeButton = () => (
  <TouchableOpacity onPress={openReadme}>
    <Icon name="launch" color="rgba(50,50,50,0.5)" size={15} />
  </TouchableOpacity>
);

const ScreenName = 'PushNotification';
const Screen: React.FC = () => {
  const {
    authStatus,
    token,
    requestUserPermission,
    getToken,
    notifyMessageToAll,
    notifyMessageToMe,
    openSettings,
    channels,
    channelKey,
    onSelectedChannelChange,
  } = usePushNotification();

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({headerRight: ReadmeButton});
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>【現在のPermissionのステータス】</Text>
          <Text>{authStatus ?? 'Permissionのステータスが表示されます'}</Text>
        </View>
        <View style={styles.elementContainer}>
          <Button onPress={requestUserPermission} title="Permissionのステータス表示" />
        </View>
        <View style={styles.elementContainer}>
          <Button onPress={requestUserPermission} title="Permissionの許可" />
        </View>
        <View style={styles.elementContainer}>
          <Button onPress={requestUserPermission} title="Permissionの仮許可" />
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【FCM登録トークン】</Text>
          <Text selectable>{token ?? 'FCM登録トークンが表示されます'}</Text>
        </View>
        <View style={styles.elementContainer}>
          <Button onPress={getToken} title="FCM登録トークンの取得" />
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【通知メッセージ】</Text>
          <View style={styles.elementContainer}>
            <SelectPicker
              items={channels}
              selectedItemKey={channelKey}
              onSelectedItemChange={onSelectedChannelChange}
              placeholder="チャンネルを選択してください"
              textInputProps={{style: {borderBottomWidth: 1, borderBottomColor: 'gray'}}}
            />
          </View>
          <View style={styles.elementContainer}>
            <Button onPress={notifyMessageToAll} title="Pushメッセージ一斉送信" />
          </View>
          <View style={styles.elementContainer}>
            <Button onPress={notifyMessageToMe} title="Pushメッセージを自分に送信" />
          </View>
        </View>
        <View>
          <Text>【通知設定】</Text>
          <View style={styles.elementContainer}>
            <Button onPress={openSettings} title="Push通知の設定" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const PushNotificationScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
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
  elementContainer: {
    padding: 20,
  },
});
