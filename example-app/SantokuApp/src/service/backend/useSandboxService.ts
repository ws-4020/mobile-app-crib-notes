import {AxiosResponse} from 'axios';
import {ErrorType} from 'framework/backend/useCustomInstance';
import {NotFoundResponse} from 'generated/backend/model';
import {
  useGetTodo,
  useListTodo,
  useListTodoByCursorInfinite as useListTodoByCursorInfiniteApi,
  usePostTodo as usePostTodoApi,
  usePutTodo as usePutTodoApi,
  useDeleteTodo as useDeleteTodoApi,
} from 'generated/sandbox/api';
import {
  ErrorResponse,
  ListTodoByCursorParams,
  ListTodoInfiniteResponse,
  ListTodoParams,
  Todo,
  TodoRegistration,
} from 'generated/sandbox/model';
import {UseInfiniteQueryOptions, UseMutationOptions, useQuery, useQueryClient} from 'react-query';

import {SandboxService} from './SandboxService';
import {BackendServiceQueryOptions, getQueryOptions} from './base';

const sandboxService = new SandboxService();

// Sandbox API

const useListTodoByCursorInfinite = (
  params?: ListTodoByCursorParams,
  options?: {query?: UseInfiniteQueryOptions<AxiosResponse<ListTodoInfiniteResponse>, ErrorType<ErrorResponse>>},
) => {
  return useListTodoByCursorInfiniteApi(params, {
    query: {
      getNextPageParam: lastPage => {
        return lastPage.data.nextCursor;
      },
    },
    ...options,
  });
};

const usePostTodo = (options?: {
  mutation?: UseMutationOptions<AxiosResponse<Todo>, ErrorType<ErrorResponse>, {data: TodoRegistration}>;
}) => {
  const queryClient = useQueryClient();
  return usePostTodoApi({
    mutation: {
      onSuccess: () => sandboxService.resetQueries(queryClient),
    },
    ...options,
  });
};

const usePutTodo = (options?: {
  mutation?: UseMutationOptions<
    AxiosResponse<Todo>,
    ErrorType<ErrorResponse>,
    {todoId: number; data: TodoRegistration}
  >;
}) => {
  const queryClient = useQueryClient();
  return usePutTodoApi({
    mutation: {
      onSuccess: (_, variables) => sandboxService.resetQueries(queryClient, variables.todoId),
    },
    ...options,
  });
};

const useDeleteTodo = (options?: {
  mutation?: UseMutationOptions<AxiosResponse<void>, ErrorType<NotFoundResponse>, {todoId: number}>;
}) => {
  const queryClient = useQueryClient();
  return useDeleteTodoApi({
    mutation: {
      onSuccess: (_, variables) => sandboxService.resetQueries(queryClient, variables.todoId),
    },
    ...options,
  });
};

// Advanced Hooks

// Dependent Queries
const useGetTodoDetails = (params?: ListTodoParams, options?: BackendServiceQueryOptions) => {
  return useQuery(['useGetTodoDetails', params], () => sandboxService.getTodoDetails(params), {
    ...getQueryOptions(options),
  });
};

export {
  sandboxService,
  useGetTodo,
  useListTodo,
  useListTodoByCursorInfinite,
  usePostTodo,
  usePutTodo,
  useDeleteTodo,
  useGetTodoDetails,
};
