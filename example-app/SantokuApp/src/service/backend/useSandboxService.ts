import {
  useGetTodo,
  useListTodo,
  useListTodoByCursorInfinite,
  usePostTodo,
  usePutTodo,
  useDeleteTodo,
  getListTodoQueryKey,
  getListTodoByCursorQueryKey,
  getGetTodoQueryKey,
  useGetTodoHook,
} from 'generated/sandbox/api';
import {ListTodoByCursorParams, ListTodoParams} from 'generated/sandbox/model';
import {useMemo} from 'react';
import {useQueries, useQueryClient} from 'react-query';

import {
  BackendServiceMutationOptions,
  BackendServiceQueryOptions,
  convertInfiniteQueryResult,
  convertMutationResult,
  convertQueriesResult,
  convertQueryResult,
  getMutationOptions,
  getQueryOptions,
} from './base';

// Sandbox API

export const useGetTodoService = (todoId: number, options?: BackendServiceQueryOptions) => {
  const query = useGetTodo(todoId, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useListTodoService = (params?: ListTodoParams, options?: BackendServiceQueryOptions) => {
  const query = useListTodo(params, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useListTodoByCursorInfiniteService = (
  params?: ListTodoByCursorParams,
  options?: BackendServiceQueryOptions,
) => {
  const query = useListTodoByCursorInfinite(params, {
    query: {
      ...getQueryOptions(options),
      getNextPageParam: lastPage => {
        return lastPage.data.nextCursor;
      },
    },
  });
  return convertInfiniteQueryResult(query);
};

export const usePostTodoService = (options?: BackendServiceMutationOptions) => {
  const queryClient = useQueryClient();
  const mutation = usePostTodo({
    mutation: {
      ...getMutationOptions(options),
      onSuccess: async (data, variables, context) => {
        await queryClient.resetQueries(getListTodoQueryKey());
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
      },
    },
  });
  return convertMutationResult(mutation);
};

export const usePutTodoService = (options?: BackendServiceMutationOptions) => {
  const queryClient = useQueryClient();
  const mutation = usePutTodo({
    mutation: {
      ...getMutationOptions(options),
      onSuccess: async (data, variables, context) => {
        await queryClient.resetQueries(getListTodoQueryKey());
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
        await queryClient.resetQueries(getGetTodoQueryKey(variables.todoId));
      },
    },
  });
  return convertMutationResult(mutation);
};

export const useDeleteTodoService = (options?: BackendServiceMutationOptions) => {
  const queryClient = useQueryClient();
  const mutation = useDeleteTodo({
    mutation: {
      ...getMutationOptions(options),
      onSuccess: async (data, variables, context) => {
        await queryClient.resetQueries(getListTodoQueryKey());
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
        await queryClient.resetQueries(getGetTodoQueryKey(variables.todoId));
      },
    },
  });
  return convertMutationResult(mutation);
};

// Advanced Hooks

// Dependent Queries
export const useGetTodoDetailsService = (params?: ListTodoParams, options?: BackendServiceQueryOptions) => {
  const listTodoQuery = useListTodoService(params, options);
  const todos = useMemo(() => {
    return listTodoQuery.data?.content ?? [];
  }, [listTodoQuery]);
  const getTodoHook = useGetTodoHook();
  const getTodoQueries = useQueries(
    todos.map(todo => {
      return {
        queryKey: getGetTodoQueryKey(todo.id),
        queryFn: () => getTodoHook(todo.id),
      };
    }),
  );
  const convertedResult = convertQueriesResult(getTodoQueries);
  return {
    ...convertedResult,
    refetch: async () => {
      await listTodoQuery.refetch();
      await convertedResult.refetch();
    },
  };
};
