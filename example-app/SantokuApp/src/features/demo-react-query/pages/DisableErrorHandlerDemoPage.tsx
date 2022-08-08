import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useDisableErrorHandlerRefreshCustomErrorQuery} from '../use-cases/useDisableErrorHandlerRefreshCustomErrorQuery';
import {useDisableErrorHandlerRefreshCustomErrorQueryWithoutGlobalErrorHandling} from '../use-cases/useDisableErrorHandlerRefreshCustomErrorQueryWithoutGlobalErrorHandling';
import {useDisableErrorHandlerRefreshDefaultQuery} from '../use-cases/useDisableErrorHandlerRefreshDefaultQuery';

export const DisableErrorHandlerDemoPage: React.FC = () => {
  const {refresh: refreshDefaultQuery} = useDisableErrorHandlerRefreshDefaultQuery();
  const {refresh: refreshCustomQuery} = useDisableErrorHandlerRefreshCustomErrorQuery();
  const {refresh: refreshCustomErrorQueryWithoutGlobalErrorHandling} =
    useDisableErrorHandlerRefreshCustomErrorQueryWithoutGlobalErrorHandling();

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text h4>デフォルトエラー処理</Text>
        <Text>グローバルエラーハンドラーで設定した処理が実行されます</Text>
        <Button title="スナックバーを表示" onPress={refreshDefaultQuery} />
      </View>
      <View style={styles.block}>
        <Text h4>デフォルト + カスタム処理</Text>
        <Text>QueryOptionsのonErrorで設定した内容は、グローバルエラーハンドラーの処理に加えて実行されます</Text>
        <Button title="スナックバー + Alertを表示" onPress={refreshCustomQuery} />
      </View>
      <View style={styles.block}>
        <Text h4>カスタム処理のみ</Text>
        <Text>
          グローバルエラーハンドラーの処理は、QueryOptionsのmetaを設定することで無効化できるように実装しています。
        </Text>
        <Button title="Alertのみ表示" onPress={refreshCustomErrorQueryWithoutGlobalErrorHandling} />
      </View>
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  block: {
    marginVertical: 8,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
