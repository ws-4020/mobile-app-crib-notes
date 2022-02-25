import {
  useGetTodo,
  useListTodo as useListTodoApi,
  useListTodoByCursorInfinite as useListTodoByCursorInfiniteApi,
  usePostTodo as usePostTodoApi,
  usePutTodo as usePutTodoApi,
  useDeleteTodo as useDeleteTodoApi,
  getListTodoQueryKey,
  getListTodoByCursorQueryKey,
  getGetTodoQueryKey,
  listTodo,
  getTodo,
} from 'generated/sandbox/api';
import {ListTodoByCursorParams, ListTodoParams} from 'generated/sandbox/model';
import {QueryClient, useQuery, useQueryClient} from 'react-query';

const useListTodo = (params?: ListTodoParams, options?: {enabled: boolean}) => {
  return useListTodoApi(params, {
    query: {
      enabled: options?.enabled,
    },
  });
};

const useListTodoByCursorInfinite = (params?: ListTodoByCursorParams) => {
  return useListTodoByCursorInfiniteApi(params, {
    query: {
      getNextPageParam: lastPage => {
        return lastPage.data.nextCursor;
      },
    },
  });
};

const usePostTodo = () => {
  const queryClient = useQueryClient();
  return usePostTodoApi({
    mutation: {
      onSuccess: () => resetQueries(queryClient),
    },
  });
};

const usePutTodo = () => {
  const queryClient = useQueryClient();
  return usePutTodoApi({
    mutation: {
      onSuccess: (_, variables) => resetQueries(queryClient, variables.todoId),
    },
  });
};

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useDeleteTodoApi({
    mutation: {
      onSuccess: (_, variables) => resetQueries(queryClient, variables.todoId),
    },
  });
};

// Dependent Queries
const useGetTodoDetails = (params?: ListTodoParams, options?: {enabled: boolean}) => {
  return useQuery(['useGetTodoDetails', params], () => getTodoDetails(params), {
    enabled: options?.enabled,
  });
};

const resetQueries = async (queryClient: QueryClient, todoId?: number) => {
  await queryClient.resetQueries(getListTodoQueryKey());
  await queryClient.resetQueries(getListTodoByCursorQueryKey());
  if (todoId) {
    await queryClient.resetQueries(getGetTodoQueryKey(todoId));
  }
};

const getTodoDetails = async (params?: ListTodoParams) => {
  const response = await listTodo(params);
  const todos = response.data.content;
  if (todos) {
    return Promise.all(todos.map(todo => getTodo(todo.id)));
  }
};

export {
  useGetTodo,
  useListTodo,
  useListTodoByCursorInfinite,
  usePostTodo,
  usePutTodo,
  useDeleteTodo,
  useGetTodoDetails,
};
