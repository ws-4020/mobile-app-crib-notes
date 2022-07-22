import {SelectPicker} from 'components/picker';
import {log} from 'framework/logging';
import {DemoStackParamList} from 'navigation/types';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';

import {SpecAndSourceCodeLink} from '../useSpecAndSouceCodeLink';
import {usePushNotification} from './usePushNotification';

const ScreenName = 'PushNotification';
const Screen: React.FC = () => {
  const {
    authStatus,
    token,
    getPermissionStatus,
    requestUserPermissionWithoutOptions,
    requestUserPermissionWithProvisional,
    getToken,
    notifyMessageToAll,
    notifyMessageToMe,
    openSettings,
    channels,
    channelKey,
    onSelectedChannelChange,
  } = usePushNotification();

  useEffect(() => {
    getPermissionStatus().catch(e => log.trace(`Failed to get permission status. cause=[${String(e)}]`));
    getToken().catch(e => log.trace(`Failed to get token. cause=[${String(e)}]`));
  }, [getPermissionStatus, getToken]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SpecAndSourceCodeLink feature="push-notification" />
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【現在のPermissionのステータス】</Text>
          <Text>{authStatus ?? 'Permissionのステータスが表示されます'}</Text>
        </View>
        <View style={styles.elementContainer}>
          <Button onPress={requestUserPermissionWithoutOptions} title="Permissionの許可" />
        </View>
        <Text>
          一度でも許可ダイアログで許可もしくは拒否すると、それ以降はステータスを`PROVISIONAL`に変更できなくなります
        </Text>
        <View style={styles.elementContainer}>
          <Button onPress={requestUserPermissionWithProvisional} title="Permissionの仮許可" />
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【FCM登録トークン】</Text>
          <Text selectable>{token ?? ''}</Text>
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
          <Text>OSのPush通知設定画面に遷移します</Text>
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
