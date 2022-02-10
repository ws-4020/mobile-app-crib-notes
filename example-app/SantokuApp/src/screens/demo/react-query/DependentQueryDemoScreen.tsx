import {getGetTodoQueryKey, useGetTodoHook, useListTodo} from 'generated/sandbox/api';
import {DemoStackParamList} from 'navigation/types';
import React, {useCallback, useMemo, useState} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {useQueries, useQueryClient} from 'react-query';

const ScreenName = 'DependentQueryDemo';
const Screen = () => {
  const [queryEnabled, setQueryEnabled] = useState<boolean>(false);
  const [queryLog, setQueryLog] = useState<string[]>([]);
  const addQueryLog = useCallback((log: string) => {
    setQueryLog(prevLogs => [...prevLogs, log]);
  }, []);
  const queryClient = useQueryClient();
  const queryParameters = {page: 1, size: 5};

  const listTodoQuery = useListTodo(queryParameters, {
    query: {
      enabled: queryEnabled,
      onSettled: () => addQueryLog('listTodoQuery finished.'),
    },
  });

  const todos = useMemo(() => {
    return listTodoQuery.isSuccess ? listTodoQuery.data.content ?? [] : [];
  }, [listTodoQuery]);

  const getTodoHook = useGetTodoHook();
  const getTodoQueries = useQueries(
    todos.map(todo => {
      return {
        queryKey: getGetTodoQueryKey(todo.id),
        queryFn: () => getTodoHook(todo.id),
        onSettled: () => addQueryLog(`getTodoQuery finished. (id=${todo.id})`),
      };
    }),
  );

  const getTodoQueriesStatus = useMemo(() => {
    if (getTodoQueries.every(query => query.isIdle)) {
      return 'idle';
    } else if (getTodoQueries.some(query => query.isLoading)) {
      return 'loading';
    } else if (getTodoQueries.every(query => query.isSuccess)) {
      return 'success';
    } else {
      return 'error';
    }
  }, [getTodoQueries]);

  const reset = useCallback(async () => {
    setQueryEnabled(false);
    await queryClient.resetQueries();
    setQueryLog([]);
  }, [queryClient]);

  return (
    <View style={styles.container}>
      <View>
        <Text h4>Query Status</Text>
        <Text>listTodoQuery Status: {listTodoQuery.status}</Text>
        <Text>getTodoQueries Status: {getTodoQueriesStatus}</Text>
      </View>
      <View style={styles.block}>
        <Text h4>Query Data</Text>
        <ScrollView>
          {listTodoQuery.isLoading && <ActivityIndicator size="large" />}
          {listTodoQuery.isSuccess && <Text>Todo一覧取得件数: {listTodoQuery.data.content?.length}</Text>}
          {listTodoQuery.isError && <Text>Todo一覧の取得に失敗しました</Text>}
          <Text>Todo詳細取得結果</Text>
          <View style={styles.details}>
            {getTodoQueries.map((query, index) => {
              return <Text key={index}>{query.data?.title}</Text>;
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.block}>
        <Text h4>Query Logs</Text>
        <ScrollView>
          {queryLog.map((log, index) => {
            return <Text key={index}>{log}</Text>;
          })}
        </ScrollView>
      </View>
      <View style={styles.buttons}>
        <Button title="取得開始" onPress={() => setQueryEnabled(true)} />
        <Button title="Reset Queries" onPress={reset} />
      </View>
      <SafeAreaView />
    </View>
  );
};

export const DependentQueryDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  block: {
    flex: 1,
  },
  details: {
    marginLeft: 8,
  },
  footer: {},
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
