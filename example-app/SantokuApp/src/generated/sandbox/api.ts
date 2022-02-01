/**
 * Generated by orval v6.5.1 🍺
 * Do not edit manually.
 * SantokuApp Sandbox REST API
 * SantokuApp Sandbox REST API
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery,
  useInfiniteQuery,
  useMutation,
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  UseInfiniteQueryResult,
  QueryKey,
} from 'react-query';
import type {
  ListTodoResponse,
  BadRequestResponse,
  ListTodoParams,
  Todo,
  TodoRegistration,
  ListTodoInfiniteResponse,
  ListTodoByCursorParams,
  NotFoundResponse,
} from './model';
import {useSandboxCustomInstance, ErrorType} from '../../framework/backend/useCustomInstance';

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;

/**
 * List todo
 * @summary List todo
 */
export const useListTodoHook = () => {
  const listTodo = useSandboxCustomInstance<ListTodoResponse>();

  return (params?: ListTodoParams) => {
    return listTodo({url: `/todos`, method: 'get', params});
  };
};

export const getListTodoQueryKey = (params?: ListTodoParams) => [`/todos`, ...(params ? [params] : [])];

export const useListTodo = <
  TData = AsyncReturnType<ReturnType<typeof useListTodoHook>>,
  TError = ErrorType<BadRequestResponse>,
>(
  params?: ListTodoParams,
  options?: {query?: UseQueryOptions<AsyncReturnType<ReturnType<typeof useListTodoHook>>, TError, TData>},
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options || {};

  const queryKey = queryOptions?.queryKey ?? getListTodoQueryKey(params);

  const listTodo = useListTodoHook();

  const queryFn: QueryFunction<AsyncReturnType<ReturnType<typeof useListTodoHook>>> = () => listTodo(params);

  const query = useQuery<AsyncReturnType<ReturnType<typeof useListTodoHook>>, TError, TData>(queryKey, queryFn, {
    retry: false,
    ...queryOptions,
  });

  return {
    queryKey,
    ...query,
  };
};

/**
 * Create todo
 * @summary Create todo
 */
export const usePostTodoHook = () => {
  const postTodo = useSandboxCustomInstance<Todo>();

  return (todoRegistration: TodoRegistration) => {
    return postTodo({url: `/todos`, method: 'post', data: todoRegistration});
  };
};

export const usePostTodo = <TError = ErrorType<BadRequestResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    AsyncReturnType<ReturnType<typeof usePostTodoHook>>,
    TError,
    {data: TodoRegistration},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options || {};

  const postTodo = usePostTodoHook();

  const mutationFn: MutationFunction<
    AsyncReturnType<ReturnType<typeof usePostTodoHook>>,
    {data: TodoRegistration}
  > = props => {
    const {data} = props || {};

    return postTodo(data);
  };

  return useMutation<AsyncReturnType<typeof postTodo>, TError, {data: TodoRegistration}, TContext>(
    mutationFn,
    mutationOptions,
  );
};

/**
 * List todo by cursor
 * @summary List todo by cursor
 */
export const useListTodoByCursorHook = () => {
  const listTodoByCursor = useSandboxCustomInstance<ListTodoInfiniteResponse>();

  return (params?: ListTodoByCursorParams) => {
    return listTodoByCursor({url: `/todos/infinite`, method: 'get', params});
  };
};

export const getListTodoByCursorQueryKey = (params?: ListTodoByCursorParams) => [
  `/todos/infinite`,
  ...(params ? [params] : []),
];

export const useListTodoByCursorInfinite = <
  TData = AsyncReturnType<ReturnType<typeof useListTodoByCursorHook>>,
  TError = ErrorType<BadRequestResponse>,
>(
  params?: ListTodoByCursorParams,
  options?: {
    query?: UseInfiniteQueryOptions<AsyncReturnType<ReturnType<typeof useListTodoByCursorHook>>, TError, TData>;
  },
): UseInfiniteQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options || {};

  const queryKey = queryOptions?.queryKey ?? getListTodoByCursorQueryKey(params);

  const listTodoByCursor = useListTodoByCursorHook();

  const queryFn: QueryFunction<AsyncReturnType<ReturnType<typeof useListTodoByCursorHook>>> = ({pageParam}) =>
    listTodoByCursor({cursor: pageParam, ...params});

  const query = useInfiniteQuery<AsyncReturnType<ReturnType<typeof useListTodoByCursorHook>>, TError, TData>(
    queryKey,
    queryFn,
    {retry: false, ...queryOptions},
  );

  return {
    queryKey,
    ...query,
  };
};

/**
 * Get todo
 * @summary Get todo
 */
export const useGetTodoHook = () => {
  const getTodo = useSandboxCustomInstance<Todo>();

  return (todoId: string) => {
    return getTodo({url: `/todos/${todoId}`, method: 'get'});
  };
};

export const getGetTodoQueryKey = (todoId: string) => [`/todos/${todoId}`];

export const useGetTodo = <
  TData = AsyncReturnType<ReturnType<typeof useGetTodoHook>>,
  TError = ErrorType<NotFoundResponse>,
>(
  todoId: string,
  options?: {query?: UseQueryOptions<AsyncReturnType<ReturnType<typeof useGetTodoHook>>, TError, TData>},
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetTodoQueryKey(todoId);

  const getTodo = useGetTodoHook();

  const queryFn: QueryFunction<AsyncReturnType<ReturnType<typeof useGetTodoHook>>> = () => getTodo(todoId);

  const query = useQuery<AsyncReturnType<ReturnType<typeof useGetTodoHook>>, TError, TData>(queryKey, queryFn, {
    enabled: !!todoId,
    retry: false,
    ...queryOptions,
  });

  return {
    queryKey,
    ...query,
  };
};

/**
 * Update todo
 * @summary Update todo
 */
export const usePutTodoHook = () => {
  const putTodo = useSandboxCustomInstance<Todo>();

  return (todoId: string, todoRegistration: TodoRegistration) => {
    return putTodo({url: `/todos/${todoId}`, method: 'put', data: todoRegistration});
  };
};

export const usePutTodo = <TError = ErrorType<BadRequestResponse | NotFoundResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    AsyncReturnType<ReturnType<typeof usePutTodoHook>>,
    TError,
    {todoId: string; data: TodoRegistration},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options || {};

  const putTodo = usePutTodoHook();

  const mutationFn: MutationFunction<
    AsyncReturnType<ReturnType<typeof usePutTodoHook>>,
    {todoId: string; data: TodoRegistration}
  > = props => {
    const {todoId, data} = props || {};

    return putTodo(todoId, data);
  };

  return useMutation<AsyncReturnType<typeof putTodo>, TError, {todoId: string; data: TodoRegistration}, TContext>(
    mutationFn,
    mutationOptions,
  );
};

/**
 * Delete todo
 * @summary Delete todo
 */
export const useDeleteTodoHook = () => {
  const deleteTodo = useSandboxCustomInstance<void>();

  return (todoId: string) => {
    return deleteTodo({url: `/todos/${todoId}`, method: 'delete'});
  };
};

export const useDeleteTodo = <TError = ErrorType<NotFoundResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    AsyncReturnType<ReturnType<typeof useDeleteTodoHook>>,
    TError,
    {todoId: string},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options || {};

  const deleteTodo = useDeleteTodoHook();

  const mutationFn: MutationFunction<
    AsyncReturnType<ReturnType<typeof useDeleteTodoHook>>,
    {todoId: string}
  > = props => {
    const {todoId} = props || {};

    return deleteTodo(todoId);
  };

  return useMutation<AsyncReturnType<typeof deleteTodo>, TError, {todoId: string}, TContext>(
    mutationFn,
    mutationOptions,
  );
};
