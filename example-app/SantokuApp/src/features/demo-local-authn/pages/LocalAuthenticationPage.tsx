import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {authWithFallbackUseCase} from '../use-cases/authWithFallbackUseCase';
import {authWithoutFallbackUseCase} from '../use-cases/authWithoutFallbackUseCase';
import {isEnrolledUseCase} from '../use-cases/isEnrolledUseCase';
import {isFacialSupportedUseCase} from '../use-cases/isFacialSupportedUseCase';
import {isFingerPrintSupportedUseCase} from '../use-cases/isFingerPrintSupportedUseCase';
import {isIrisSupportedUseCase} from '../use-cases/isIrisSupportedUseCase';

export const LocalAuthenticationPage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={isEnrolledUseCase} title="デバイスの設定チェック" />
      <Button onPress={isFingerPrintSupportedUseCase} title="指紋認証のサポートのチェック" />
      <Button onPress={isFacialSupportedUseCase} title="顔認証のサポートのチェック" />
      <Button onPress={isIrisSupportedUseCase} title="虹彩認証のサポートのチェック" />
      <Button onPress={authWithoutFallbackUseCase} title="認証の実行 Option指定3つ" />
      <Button onPress={authWithFallbackUseCase} title="認証の実行 Option全指定" />
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
