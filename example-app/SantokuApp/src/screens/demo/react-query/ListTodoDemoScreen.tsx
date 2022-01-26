import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useListTodoInfinite} from 'framework/backend/api/sandbox';
import {Todo} from 'generated/sandboxApi';
import {DemoStackParamList} from 'navigation/types';
import React, {useCallback, useMemo, useState} from 'react';
import {ActivityIndicator, Pressable, RefreshControl, StyleSheet, View} from 'react-native';
import {Icon, ListItem, Text} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';

import {EditTodoDemoScreen} from './EditTodoDemoScreen';

const ScreenName = 'ListTodoDemo';
const Screen = ({navigation}: NativeStackScreenProps<DemoStackParamList, typeof ScreenName>) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {status, isLoading, isFetching, isSuccess, isError, data, refetch} = useListTodoInfinite();

  const todos = useMemo(() => {
    if (isSuccess && data) {
      return data.pages.map(page => page.data).flat();
    } else {
      return [];
    }
  }, [isSuccess, data]);

  const onRefresh = () => {
    setRefreshing(true);
    refetch()
      .catch(e => console.log(e))
      .finally(() => {
        setRefreshing(false);
      });
  };

  const onPressTodoItem = useCallback(
    (todoId: number) => {
      navigation.navigate(EditTodoDemoScreen.name, {todoId});
    },
    [navigation],
  );

  const renderTodo = ({item}: {item: Todo}) => {
    return (
      <Pressable onPress={() => onPressTodoItem(item.id)}>
        <ListItem style={styles.todo}>
          <Icon name="event-note" type="material" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text h4>List Todo (InfiniteQuery)</Text>
      <Text>Status: {status}</Text>
      {isLoading && <ActivityIndicator />}
      {isSuccess && (
        <>
          <FlatList
            data={todos}
            renderItem={renderTodo}
            initialNumToRender={20}
            refreshing={refreshing}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
          {isFetching && <ActivityIndicator />}
        </>
      )}
      {isError && <Text>List Todo APIの呼び出しに失敗しました。</Text>}
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
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
});
