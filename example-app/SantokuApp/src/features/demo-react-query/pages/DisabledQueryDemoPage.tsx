import React from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useDisabledQueryEnabled} from '../client-states/useDisabledQueryEnabled';
import {useDisabledQueryRefreshUseCase} from '../use-cases/useDisabledQueryRefreshUseCase';
import {useDisabledQueryResetUseCase} from '../use-cases/useDisabledQueryResetUseCase';
import {useDisabledQueryTodosUseCase} from '../use-cases/useDisabledQueryTodosUseCase';
import {useDisabledQueryToggleQueryEnabledUseCase} from '../use-cases/useDisabledQueryToggleQueryEnabledUseCase';

export const DisabledQueryDemoPage: React.FC = () => {
  const {todos, status, isIdle, isLoading, isSuccess, isError} = useDisabledQueryTodosUseCase();
  const [queryEnabled] = useDisabledQueryEnabled();
  const {refresh} = useDisabledQueryRefreshUseCase();
  const {toggleQueryEnabled} = useDisabledQueryToggleQueryEnabledUseCase();
  const {reset} = useDisabledQueryResetUseCase();

  return (
    <View style={styles.container}>
      <Text>Query Status: {status}</Text>
      <Text>Query Enabled: {queryEnabled ? 'true' : 'false'}</Text>
      <View style={styles.block}>
        <Text h4>Query Data</Text>
        <ScrollView>
          {isIdle && <Text>データ読み込み停止中</Text>}
          {isLoading && <ActivityIndicator size="large" />}
          {isSuccess &&
            todos.map((todo, index) => {
              return <Text key={index}>{todo.title}</Text>;
            })}
          {isError && <Text>Todo一覧の取得に失敗しました</Text>}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text>QueryがDisableに設定されている場合、自動refetchによるデータの更新は行われません。</Text>
        <Text>QueryがDisableに設定されている場合も、手動refetchによるデータの更新は行えます。</Text>
        <View style={styles.buttons}>
          <Button title={queryEnabled ? 'Disable query' : 'Enable query'} onPress={toggleQueryEnabled} />
          <Button title="Manual fetch" onPress={refresh} />
          <Button title="Reset Queries" onPress={reset} />
        </View>
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
    flex: 1,
  },
  footer: {},
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
