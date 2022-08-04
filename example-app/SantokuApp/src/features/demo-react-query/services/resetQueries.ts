import {getGetTodoQueryKey, getListTodoByCursorQueryKey, getListTodoQueryKey} from 'features/sandbox/apis/api';
import {QueryClient} from 'react-query';

export const resetQueries = async (queryClient: QueryClient, todoId?: number) => {
  await queryClient.resetQueries(getListTodoQueryKey());
  await queryClient.resetQueries(getListTodoByCursorQueryKey());
  if (todoId) {
    await queryClient.resetQueries(getGetTodoQueryKey(todoId));
  }
};
