import {throwErrorAsyncProcess, throwErrorSyncProcess} from '@santoku/throw-native-error';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const throwNativeErrorInSyncProcess = async () => {
  await throwErrorSyncProcess();
};

const throwNativeErrorInAsyncProcess = async () => {
  await throwErrorAsyncProcess();
};

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
