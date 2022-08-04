import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {useRequestPermissionAndRegisterTokenUseCase} from '../use-cases/useRequestPermissionAndRegisterTokenUseCase';

export const HomePage: React.VFC = () => {
  // Push通知の許可ダイアログ表示とFCM登録トークンの登録・更新
  const {requestPermissionAndRegisterToken} = useRequestPermissionAndRegisterTokenUseCase();
  useEffect(() => {
    requestPermissionAndRegisterToken().catch(() => {
      // requestPermissionAndRegisterTokenでエラーハンドリングを実施しているので、ここでは特に何もしない
    });
  }, [requestPermissionAndRegisterToken]);

  return (
    <View style={styles.container} testID="HomePage">
      <Text h2>開発中</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
