import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import localAuthentication from '../../../framework/local-authentication'

export default class LocalAuthnTestScreen extends React.Component {
  checkIsEnrolled = async () => {
    const isEnrolled = await localAuthentication.isEnrolled();
    alert(isEnrolled)
  }

  checkIsFingerPrintSupported = async () => {
    const supportedTypes = await localAuthentication.isFingerPrintSupported();
    alert(supportedTypes);
  }

  checkIsFacialSupported = async () => {
    const supportedTypes = await localAuthentication.isFacialSupported();
    alert(supportedTypes);
  }

  checkIsIrisSupported = async () => {
    const supportedTypes = await localAuthentication.isIrisSupported();
    alert(supportedTypes);
  }

  testLocalAuthentication1 = async () => {
    const result = await localAuthentication.authenticate({promptMessage: 'Test Message', disableFallback:true})
    alert(result.success ? "success:" + result.success : "success:" + result.success + " error:" + result.error)
  }

  testLocalAuthentication2 = async () => {
    const result = await localAuthentication.authenticate({
      promptMessage:  "認証テスト",
      cancelLabel:  "キャンセル",
      fallbackLabel: "失敗時の基本認証",
      disableFallback: false,
    })
    alert(result.success ? "success:" + result.success : "success:" + result.success + " error:" + result.error)
  }


  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.checkIsEnrolled} title="デバイスの設定チェック" />
        <Button onPress={this.checkIsFingerPrintSupported} title="指紋認証サポートのチェック" />
        <Button onPress={this.checkIsFacialSupported} title="顔認証サポートのチェック" />
        <Button onPress={this.checkIsIrisSupported} title="虹彩認証のサポートのチェック" />
        <Button onPress={this.testLocalAuthentication1} title="認証の実行 Option指定2つ" />
        <Button onPress={this.testLocalAuthentication2} title="認証の実行 Option全指定" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
