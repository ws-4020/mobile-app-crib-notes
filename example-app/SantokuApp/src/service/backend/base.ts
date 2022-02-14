import {AxiosResponse} from 'axios';
import {UseInfiniteQueryResult, UseMutationResult, UseQueryResult} from 'react-query';

export type BackendServiceQueryOptions = {
  enabled?: boolean;
  disableGlobalErrorHandler?: boolean;
};

export type BackendServiceMutationOptions = {
  disableGlobalErrorHandler?: boolean;
};

export const getQueryOptions = (options?: BackendServiceQueryOptions) => {
  return {
    enabled: options?.enabled ?? true,
    meta: {disableGlobalErrorHandler: options?.disableGlobalErrorHandler ?? false},
  };
};

export const getMutationOptions = (options?: BackendServiceMutationOptions) => {
  return {
    meta: {disableGlobalErrorHandler: options?.disableGlobalErrorHandler ?? false},
  };
};

export const convertQueryResult = <TData, TError>(queryResult: UseQueryResult<AxiosResponse<TData>, TError>) => {
  return {
    ...queryResult,
    data: queryResult.data?.data,
  };
};

export const convertInfiniteQueryResult = <TData, TError>(
  queryResult: UseInfiniteQueryResult<AxiosResponse<TData>, TError>,
) => {
  return {
    ...queryResult,
    data: {
      ...queryResult.data,
      pages: queryResult.data?.pages.map(page => page.data) ?? [],
    },
  };
};

export const convertMutationResult = <TData, TError, TVariable, TContext>(
  mutationResult: UseMutationResult<AxiosResponse<TData>, TError, TVariable, TContext>,
): UseMutationResult<TData, TError, TVariable, TContext> => {
  return {
    ...mutationResult,
    data: mutationResult.data?.data,
    mutateAsync: async (variables: TVariable) => {
      const response = await mutationResult.mutateAsync(variables);
      return response.data;
    },
  } as unknown as UseMutationResult<TData, TError, TVariable, TContext>;
};

export const convertQueriesResult = <TData, TError>(queryResults: UseQueryResult<AxiosResponse<TData>, TError>[]) => {
  return {
    queries: queryResults,
    isError: queryResults.some(query => query.isError),
    isSuccess: queryResults.every(query => query.isSuccess),
    isIdle: queryResults.every(query => query.isIdle),
    isLoading: queryResults.some(query => query.isLoading),
    isFetching: queryResults.some(query => query.isFetching),
    data: queryResults.map(query => query.data?.data).filter(data => data !== undefined),
    refetch: async () => {
      await Promise.all(queryResults.map(query => query.refetch()));
    },
  };
};
