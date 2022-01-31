import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useLoadingOverlay} from 'components/overlay';
import {useListTodoByCursorInfinite} from 'generated/sandbox/api';
import {Todo} from 'generated/sandbox/model';
import {DemoStackParamList} from 'navigation/types';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, Pressable, RefreshControl, StyleSheet, View} from 'react-native';
import {Icon, ListItem, Text, FAB} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import { CreateTodoDemoScreen } from 'screens';

import {EditTodoDemoScreen} from './EditTodoDemoScreen';

const ScreenName = 'ListTodoDemo';
const Screen = ({navigation}: NativeStackScreenProps<DemoStackParamList, typeof ScreenName>) => {
  const loadingOverlay = useLoadingOverlay();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {status, isLoading, isFetching, isSuccess, isError, data, refetch, hasNextPage, fetchNextPage} =
    useListTodoByCursorInfinite(undefined, {
      query: {
        getNextPageParam: lastPage => {
          return lastPage.nextCursor;
        },
      },
    });

  useEffect(() => {
    if (isLoading) {
      loadingOverlay.show();
    } else {
      loadingOverlay.hide();
    }
  }, [isLoading, loadingOverlay]);

  const todos = useMemo(() => {
    if (isSuccess && data) {
      return data.pages.map(page => page.content).flat();
    } else {
      return [];
    }
  }, [isSuccess, data]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
      .catch(e => console.log(e))
      .finally(() => {
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

  const renderTodo = ({item}: {item: Todo}) => {
    return (
      <Pressable onPress={() => onPressTodoItem(item.id)}>
        <ListItem containerStyle={styles.todo}>
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
      <Text h4>Todo List (InfiniteQuery)</Text>
      <View style={styles.header}>
        <Text>Query Status: {status}</Text>
        <View>
          <Text>isFetching: {isFetching ? 'true' : 'false'}</Text>
          {isFetching && <ActivityIndicator />}
        </View>
      </View>
      {isLoading && <ActivityIndicator />}
      {isSuccess && (
        <FlatList
          data={todos}
          renderItem={renderTodo}
          refreshing={refreshing}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          onEndReached={onEndReached}
        />
      )}
      {isError && <Text>List Todo APIの呼び出しに失敗しました。</Text>}
      <FAB title="Create Todo" placement="right" onPress={onCreate} />
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
    flexDirection: 'column',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    backgroundColor: 'transparent',
  },
});
