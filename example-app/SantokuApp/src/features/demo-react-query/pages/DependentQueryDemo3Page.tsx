import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useTodoDetails} from '../services/useTodoDetails';
import {useDependentQuery3RefreshUseCase} from '../use-cases/useDependentQuery3RefreshUseCase';
import {useDependentQuery3ReloadUseCase} from '../use-cases/useDependentQuery3ReloadUseCase';
import {useListTodoTodosUseCase} from '../use-cases/useListTodoTodosUseCase';

export const DependentQueryDemo3Page: React.FC = () => {
  const {isIdle, isLoading, isRefetching, isSuccess, isError} = useTodoDetails();
  const {refresh} = useDependentQuery3RefreshUseCase();
  const {reload} = useDependentQuery3ReloadUseCase();
  const {todos} = useListTodoTodosUseCase();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refresh} />}>
        <View>
          <Text h4>Query Status</Text>
          <Text>{`isIdle: ${isIdle.toString()}, isLoading: ${isLoading.toString()}, isFetching: ${isRefetching.toString()}, isSuccess: ${isSuccess.toString()}, isError: ${isError.toString()}`}</Text>
        </View>
        <View>
          <Text h4>Query Data</Text>
          <Text>Todo詳細取得結果</Text>
          {isError && <Text>データの取得に失敗しました</Text>}
          {isLoading && <ActivityIndicator size="large" color="blue" />}
          <View style={styles.details}>
            {todos?.map((todo, index) => {
              return <Text key={index}>{todo?.title}</Text>;
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text>※画面下方向へのスワイプで画面が更新されます。</Text>
        <View>
          <Button title="Reload" onPress={reload} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  details: {
    marginLeft: 8,
  },
  footer: {
    alignItems: 'flex-end',
  },
});
