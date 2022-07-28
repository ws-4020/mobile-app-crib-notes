import {Todo} from 'features/sandbox/apis/model';
import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, FAB, Icon, ListItem, Text} from 'react-native-elements';

import {useNextUseCase} from '../hooks/list-todo/useNextUseCase';
import {useRefreshTodoUseCase} from '../hooks/list-todo/useRefreshTodoUseCase';
import {useTodos} from '../hooks/list-todo/useTodos';
import {useInvalidateTodos} from '../hooks/todo/useInvalidateTodos';
import {useResetTodos} from '../hooks/todo/useResetTodos';

const LoadingIndicator = () => {
  return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export type ListTodoDemoPageProps = {
  navigateToCreateTodoDemo: () => void;
  navigateToEditTodoDemo: (todoId: number) => void;
};
export const ListTodoDemoPage: React.FC<ListTodoDemoPageProps> = ({
  navigateToCreateTodoDemo,
  navigateToEditTodoDemo,
}) => {
  const {todos, status, isSuccess, isError, isLoading, isRefetching, isFetchingNextPage} = useTodos();
  const {resetTodos} = useResetTodos();
  const {invalidateTodos} = useInvalidateTodos();
  const {refreshTodo} = useRefreshTodoUseCase();
  const {next} = useNextUseCase();

  const renderTodo = useCallback(
    ({item}: {item: Todo}) => {
      return (
        <Pressable onPress={() => navigateToEditTodoDemo(item.id)}>
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
    [navigateToEditTodoDemo],
  );

  const renderFooter = useCallback(() => {
    if (!isFetchingNextPage) return null;

    return <LoadingIndicator />;
  }, [isFetchingNextPage]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4>Todo List (InfiniteQuery)</Text>
        <Text>Query Status: {status}</Text>
        <Text>isRefetching: {isRefetching.toString()}</Text>
        <Text>isFetchingNextPage: {isFetchingNextPage.toString()}</Text>
      </View>
      <View style={styles.body}>
        {isError && <Text>List Todo APIの呼び出しに失敗しました。</Text>}
        {isLoading && <ActivityIndicator size="large" color="blue" />}
        {isSuccess && (
          <>
            {todos && (
              <FlatList
                data={todos}
                renderItem={renderTodo}
                refreshing={isRefetching && !isFetchingNextPage}
                onRefresh={refreshTodo}
                onEndReached={next}
                ListFooterComponent={renderFooter}
              />
            )}
            {!todos && <Text>Todoが登録されていません。</Text>}
            <FAB title="Create Todo" placement="right" onPress={navigateToCreateTodoDemo} />
          </>
        )}
      </View>
      <View style={styles.footer}>
        <Button title="Invalidate Queries" onPress={invalidateTodos} style={styles.button} />
        <Button title="Reset Queries" onPress={resetTodos} style={styles.button} />
      </View>
      <SafeAreaView />
    </View>
  );
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
    height: 60,
    padding: 8,
  },
  button: {
    flex: 1,
  },
});