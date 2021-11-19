import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import localAuthentication from '../../../framework/local-authentication';

const ScreenName = 'Local Authentication';
const Screen = () => {
  const isEnrolled = async () => {
    const isEnrolled: boolean = await localAuthentication.isEnrolled();
    alert(isEnrolled);
  };

  const isFingerPrintSupported = async () => {
    const isSupported = await localAuthentication.isFingerPrintSupported();
    alert(isSupported);
  };

  const isFacialSupported = async () => {
    const isSupported = await localAuthentication.isFacialSupported();
    alert(isSupported);
  };

  const isIrisSupported = async () => {
    const isSupported = await localAuthentication.isIrisSupported();
    alert(isSupported);
  };

  const localAuthentication1 = async () => {
    const result = await localAuthentication.authenticate({
      promptMessage: 'Test Message',
      disableFallback: true,
      cancelLabel: 'キャンセル', // FallbackをOFFにしている場合は必須
    });
    alert(JSON.stringify(result));
  };

  const localAuthentication2 = async () => {
    const result = await localAuthentication.authenticate({
      promptMessage: '認証テスト',
      cancelLabel: 'キャンセル',
      fallbackLabel: '失敗時の基本認証',
      disableFallback: false,
    });
    alert(JSON.stringify(result));
  };

  return (
    <View style={styles.container}>
      <Button onPress={isEnrolled} title="デバイスの設定チェック" />
      <Button onPress={isFingerPrintSupported} title="指紋認証のサポートのチェック" />
      <Button onPress={isFacialSupported} title="顔認証のサポートのチェック" />
      <Button onPress={isIrisSupported} title="虹彩認証のサポートのチェック" />
      <Button onPress={localAuthentication1} title="認証の実行 Option指定3つ" />
      <Button onPress={localAuthentication2} title="認証の実行 Option全指定" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export const LocalAuthnScreen = {
  name: ScreenName,
  component: Screen,
};
