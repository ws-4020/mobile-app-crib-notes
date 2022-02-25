import {useCallback, useMemo, useState} from 'react';
import {useQueryClient} from 'react-query';
import {useListTodoByCursorInfinite} from 'service/backend';

import {CreateTodoDemoScreen} from './CreateTodoDemoScreen';
import {EditTodoDemoScreen} from './EditTodoDemoScreen';
import {ListTodoDemoScreenProps} from './ListTodoDemoScreen';

export const useListTodoDemo = ({navigation}: ListTodoDemoScreenProps) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const listTodoQuery = useListTodoByCursorInfinite();

  const todos = useMemo(() => {
    if (listTodoQuery.isSuccess && listTodoQuery.data) {
      const pages = listTodoQuery.data.pages;
      return pages.map(page => page.data.content).flat();
    } else {
      return [];
    }
  }, [listTodoQuery]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    listTodoQuery.refetch().finally(() => {
      setRefreshing(false);
    });
  }, [listTodoQuery]);

  const onPressTodoItem = useCallback(
    (todoId: number) => {
      navigation.navigate(EditTodoDemoScreen.name, {todoId});
    },
    [navigation],
  );

  const onEndReached = useCallback(() => {
    if (listTodoQuery.hasNextPage) {
      listTodoQuery.fetchNextPage().catch(() => {});
    }
  }, [listTodoQuery]);

  const onCreate = useCallback(() => {
    navigation.navigate(CreateTodoDemoScreen.name);
  }, [navigation]);

  const onResetQueries = useCallback(async () => {
    await queryClient.resetQueries();
  }, [queryClient]);

  const onInvalidateQueries = useCallback(async () => {
    await queryClient.invalidateQueries();
  }, [queryClient]);

  return {
    refreshing,
    listTodoQuery,
    todos,
    onRefresh,
    onPressTodoItem,
    onEndReached,
    onCreate,
    onResetQueries,
    onInvalidateQueries,
  };
};
