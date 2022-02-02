import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useListTodoByCursorInfinite} from 'generated/sandbox/api';
import {Todo} from 'generated/sandbox/model';
import {DemoStackParamList} from 'navigation/types';
import React, {useCallback, useMemo, useState} from 'react';
import {ActivityIndicator, Pressable, RefreshControl, StyleSheet, View} from 'react-native';
import {Icon, ListItem, Text, FAB, Button} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {useQueryClient} from 'react-query';

import {CreateTodoDemoScreen} from './CreateTodoDemoScreen';
import {EditTodoDemoScreen} from './EditTodoDemoScreen';

const ScreenName = 'ListTodoDemo';
const Screen = ({navigation}: NativeStackScreenProps<DemoStackParamList, typeof ScreenName>) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const {status, isLoading, isFetching, isSuccess, isError, data, refetch, hasNextPage, fetchNextPage} =
    useListTodoByCursorInfinite(undefined, {
      query: {
        getNextPageParam: lastPage => {
          return lastPage.nextCursor;
        },
      },
    });

  const todos = useMemo(() => {
    if (isSuccess && data) {
      return data.pages.map(page => page.content).flat();
    } else {
      return [];
    }
  }, [isSuccess, data]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => {
      setRefreshing(false);
    });
  }, [refetch]);

  const onPressTodoItem = useCallback(
    (todoId: number) => {
      navigation.navigate(EditTodoDemoScreen.name, {todoId});
    },
    [navigation],
  );

  const onEndReached = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage().catch(() => {});
    }
  }, [fetchNextPage, hasNextPage]);

  const onCreate = useCallback(() => {
    navigation.navigate(CreateTodoDemoScreen.name);
  }, [navigation]);

  const onResetQueries = useCallback(async () => {
    await queryClient.resetQueries();
  }, [queryClient]);

  const onInvalidateQueries = useCallback(async () => {
    await queryClient.invalidateQueries();
  }, [queryClient]);

  const renderTodo = useCallback(
    ({item}: {item: Todo}) => {
      return (
        <Pressable onPress={() => onPressTodoItem(item.id)}>
          <ListItem containerStyle={styles.todo}>
            <Icon name="event-note" type="material" />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
          </ListItem>
        </Pressable>
      );
    },
    [onPressTodoItem],
  );

  const renderLoadingIndicator = useCallback(() => {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4>Todo List (InfiniteQuery)</Text>
        <Text>Query Status: {status}</Text>
        <Text>isFetching: {isFetching ? 'true' : 'false'}</Text>
      </View>
      <View style={styles.body}>
        {isLoading && renderLoadingIndicator()}
        {isSuccess && (
          <>
            {todos && (
              <FlatList
                data={todos}
                renderItem={renderTodo}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                onEndReached={onEndReached}
              />
            )}
            {!todos && <Text>Todoが登録されていません。</Text>}
            {isFetching && renderLoadingIndicator()}
            <FAB title="Create Todo" placement="right" onPress={onCreate} />
          </>
        )}
        {isError && <Text>List Todo APIの呼び出しに失敗しました。</Text>}
      </View>
      <View style={styles.footer}>
        <Button title="Invalidate Queries" onPress={() => onInvalidateQueries()} style={styles.button} />
        <Button title="Reset Queries" onPress={() => onResetQueries()} style={styles.button} />
      </View>
    </View>
  );
};

export const ListTodoDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 8,
  },
  body: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#aaaaaa',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    backgroundColor: 'transparent',
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  button: {
    flex: 1,
  },
});
