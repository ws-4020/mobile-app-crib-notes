import {useListTodoByCursorInfinite} from 'features/sandbox/sandboxService';
import {useCallback, useMemo} from 'react';
import {useQueryClient} from 'react-query';

export type ListTodoDemoPageProps = {
  navigateToCreateTodoDemo: () => void;
  navigateToEditTodoDemo: (todoId: number) => void;
};
export const useListTodoDemo = ({
  navigateToCreateTodoDemo,
  navigateToEditTodoDemo,
}: {
  navigateToCreateTodoDemo: () => void;
  navigateToEditTodoDemo: (todoId: number) => void;
}) => {
  const queryClient = useQueryClient();
  const listTodoQuery = useListTodoByCursorInfinite();
  const {isSuccess, hasNextPage, fetchNextPage, data} = listTodoQuery;

  const todos = useMemo(() => {
    if (isSuccess && data) {
      const pages = data.pages;
      return pages.map(page => page.data.content).flat();
    } else {
      return [];
    }
  }, [isSuccess, data]);

  const onPressTodoItem = useCallback(
    (todoId: number) => {
      navigateToEditTodoDemo(todoId);
    },
    [navigateToEditTodoDemo],
  );

  const fetchNext = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage().catch(() => {});
    }
  }, [hasNextPage, fetchNextPage]);

  const create = useCallback(() => {
    navigateToCreateTodoDemo();
  }, [navigateToCreateTodoDemo]);

  const resetQueries = useCallback(async () => {
    await queryClient.resetQueries(`/todos/infinite`);
  }, [queryClient]);

  const invalidateQueries = useCallback(async () => {
    await queryClient.invalidateQueries(`/todos/infinite`);
  }, [queryClient]);

  return {
    ...listTodoQuery,
    todos,
    onPressTodoItem,
    fetchNext,
    create,
    resetQueries,
    invalidateQueries,
  };
};
