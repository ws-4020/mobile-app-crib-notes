import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Todo} from 'generated/sandbox/model';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React, {useCallback} from 'react';
import {ActivityIndicator, Pressable, RefreshControl, SafeAreaView, StyleSheet, View} from 'react-native';
import {Icon, ListItem, Text, FAB, Button} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';

import {useListTodoDemo} from './useListTodoDemo';

const LoadingIndicator = () => {
  return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'ListTodoDemo';
const Screen: React.FC<Props> = props => {
  const {
    refreshing,
    listTodoQuery,
    todos,
    onRefresh,
    onPressTodoItem,
    onEndReached,
    onCreate,
    onResetQueries,
    onInvalidateQueries,
  } = useListTodoDemo(props);

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4>Todo List (InfiniteQuery)</Text>
        <Text>Query Status: {listTodoQuery.status}</Text>
        <Text>isFetching: {listTodoQuery.isFetching ? 'true' : 'false'}</Text>
      </View>
      <View style={styles.body}>
        {listTodoQuery.isLoading && <LoadingIndicator />}
        {listTodoQuery.isSuccess && (
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
            {listTodoQuery.isFetching && <LoadingIndicator />}
            <FAB title="Create Todo" placement="right" onPress={onCreate} />
          </>
        )}
        {listTodoQuery.isError && <Text>List Todo APIの呼び出しに失敗しました。</Text>}
      </View>
      <View style={styles.footer}>
        <Button title="Invalidate Queries" onPress={() => onInvalidateQueries()} style={styles.button} />
        <Button title="Reset Queries" onPress={() => onResetQueries()} style={styles.button} />
      </View>
      <SafeAreaView />
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
    height: 60,
    padding: 8,
  },
  button: {
    flex: 1,
  },
});
