import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {throwNativeErrorInAsyncProcessUseCase} from '../use-cases/throwNativeErrorInAsyncProcessUseCase';
import {throwNativeErrorInSyncProcessUseCase} from '../use-cases/throwNativeErrorInSyncProcessUseCase';

export const ErrorInNativeModulePage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={throwNativeErrorInSyncProcessUseCase} title="Native Modules内の同期処理でエラー発生" />
      <Button onPress={throwNativeErrorInAsyncProcessUseCase} title="Native Modules内の非同期処理でエラー発生" />
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
