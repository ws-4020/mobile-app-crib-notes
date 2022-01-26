import {DefaultApi, ListTodoResponse, Todo, TodoRegistration} from 'generated/sandboxApi/api';
import {
  MutationKey,
  QueryKey,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  useQueryClient,
  UseQueryOptions,
} from 'react-query';

import {
  ApiError,
  axiosInstance,
  defaultOpenApiConfiguration,
  useBackendInfiniteQuery,
  useBackendMutation,
  useBackendQuery,
} from './base';

// DEBUG
const basePath = `http://10.0.2.2:9080/api/sandbox`;
const sandboxApiClient = new DefaultApi(defaultOpenApiConfiguration, basePath, axiosInstance);

// GET /sandbox/todos
const useListTodo = (
  queryKey?: QueryKey,
  queryParameters?: {page?: number},
  queryOptions?: UseQueryOptions<ListTodoResponse, ApiError, ListTodoResponse>,
) => {
  const key = queryKey ?? ['/sandbox/todos', queryParameters];
  const queryFn = () => {
    return sandboxApiClient.listTodo(queryParameters?.page);
  };
  return useBackendQuery(key, queryFn, queryOptions);
};

// GET /sandbox/todos (Infinite)
const useListTodoInfinite = (
  queryKey?: QueryKey,
  queryParameters?: {page?: number; limit?: number},
  queryOptions?: UseInfiniteQueryOptions<ListTodoResponse, ApiError, ListTodoResponse>,
) => {
  const key = queryKey ?? ['/sandbox/todos', queryParameters, 'InfiniteQuery'];
  const initialPage = queryParameters?.page ?? 1;
  const queryFn = ({pageParam = initialPage}) => {
    return sandboxApiClient.listTodo(pageParam);
  };
  const options = {
    ...queryOptions,
    getNextPageParam: (lastPage: {nextPage: number | null; data: Todo[]}) => {
      return lastPage.nextPage ? lastPage.nextPage : false;
    },
  };
  return useBackendInfiniteQuery(key, queryFn, options);
};

// POST /sandbox/todos
const usePostTodo = (
  mutationKey?: MutationKey,
  mutationOptions?: UseMutationOptions<Todo, ApiError, TodoRegistration, unknown>,
) => {
  const key = mutationKey ?? ['/sandbox/todos', 'POST'];
  const mutationFn = (todoRegistration: TodoRegistration) => {
    return sandboxApiClient.postTodo(todoRegistration);
  };
  return useBackendMutation(key, mutationFn, mutationOptions);
};

// GET /sandbox/todos/:id
const useGetTodo = (todoId: number, queryKey?: QueryKey, queryOptions?: UseQueryOptions<Todo, ApiError, Todo>) => {
  const key = queryKey ?? [`/sandbox/todos/${todoId}`];
  const queryFn = () => {
    return sandboxApiClient.getTodo(todoId.toString());
  };
  return useBackendQuery(key, queryFn, queryOptions);
};

// PUT /sandbox/todos/:id
const usePutTodo = (
  todoId: number,
  mutationKey?: MutationKey,
  mutationOptions?: UseMutationOptions<Todo, ApiError, TodoRegistration, unknown>,
) => {
  const queryClient = useQueryClient();
  const key = mutationKey ?? [`/sandbox/todos/${todoId}`, 'PUT'];
  const mutationFn = (todoRegistration: TodoRegistration) => {
    return sandboxApiClient.putTodo(todoId.toString(), todoRegistration);
  };
  const options = {
    onSuccess: (data: Todo) => {
      queryClient.setQueryData([`/sandbox/todos/${todoId}`], data);
      queryClient.resetQueries(['/sandbox/todos']).catch(() => {});
    },
    ...mutationOptions,
  };
  return useBackendMutation(key, mutationFn, options);
};

// DELETE /sandbox/todos/:id
const useDeleteTodo = (
  todoId: number,
  mutationKey?: MutationKey,
  mutationOptions?: UseMutationOptions<void, ApiError, void, unknown>,
) => {
  const key = mutationKey ?? [`/sandbox/todos/${todoId}`, 'DELETE'];
  const mutationFn = () => {
    return sandboxApiClient.deleteTodo(todoId.toString());
  };
  return useBackendMutation(key, mutationFn, mutationOptions);
};

export {useListTodo, useListTodoInfinite, usePostTodo, useGetTodo, usePutTodo, useDeleteTodo};
