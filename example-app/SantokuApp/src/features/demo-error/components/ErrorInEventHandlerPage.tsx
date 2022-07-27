import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {throwJsErrorInAsyncProcess} from '../utils/throwJsErrorInAsyncProcess';
import {throwJsErrorInSyncProcess} from '../utils/throwJsErrorInSyncProcess';

export const ErrorInEventHandlerPage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={throwJsErrorInSyncProcess} title="同期処理でエラー発生" />
      <Button onPress={throwJsErrorInAsyncProcess} title="非同期処理でエラー発生" />
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
