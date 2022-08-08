import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {throwNativeErrorInAsyncProcess} from '../use-cases/throwNativeErrorInAsyncProcess';
import {throwNativeErrorInSyncProcess} from '../use-cases/throwNativeErrorInSyncProcess';

export const ErrorInNativeModulePage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={throwNativeErrorInSyncProcess} title="Native Modules内の同期処理でエラー発生" />
      <Button onPress={throwNativeErrorInAsyncProcess} title="Native Modules内の非同期処理でエラー発生" />
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
