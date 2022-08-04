import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {throwJsErrorInAsyncProcessUseCase} from '../use-cases/throwJsErrorInAsyncProcessUseCase';
import {throwJsErrorInSyncProcessUseCase} from '../use-cases/throwJsErrorInSyncProcessUseCase';

export const ErrorInEventHandlerPage = () => {
  return (
    <View style={styles.container}>
      <Button onPress={throwJsErrorInSyncProcessUseCase} title="同期処理でエラー発生" />
      <Button onPress={throwJsErrorInAsyncProcessUseCase} title="非同期処理でエラー発生" />
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
