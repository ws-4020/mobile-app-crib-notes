import axios, {AxiosError, AxiosResponse} from 'axios';
import {ActiveAccountIdNotFoundError, PasswordNotFoundError} from 'framework/authentication';
import {SecureStorageAdapter} from 'framework/authentication/SecureStorageAdapter';
import {AccountApi, Configuration, ErrorResponse, SystemApi} from 'generated/api';
import {
  MutationFunction,
  MutationKey,
  QueryFunction,
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  QueryFunctionContext,
} from 'react-query';

import {AppConfig} from '../../config';
import {ApplicationError} from '../../error/ApplicationError';

// APIでエラーが発生した場合に送出するエラーです。
class ApiError extends ApplicationError {}

// APIでエラー発生時に、レスポンスが存在する場合のエラーです。
class ApiResponseError extends ApiError {
  constructor(
    cause: AxiosError,
    public response: {
      data: ErrorResponse;
      status: number;
      statusText: string;
      headers: Record<string, string>;
      request?: any;
    },
  ) {
    super(cause);
  }
}

// APIでエラー発生時に、レスポンスが存在しない場合のエラーです。
class ApiResourceAccessError extends ApiError {}

const basePath = `${AppConfig.santokuAppBackendUrl}/api`;
const defaultAxiosConfig = {
  // TODO: set axios options.
};
const defaultOpenApiConfiguration = new Configuration({
  baseOptions: defaultAxiosConfig,
});

const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        throw new ApiResponseError(axiosError, axiosError.response);
      }
      throw new ApiResourceAccessError(error);
    }
    throw new ApiError(error);
  },
);

const setCsrfTokenHeader = (csrfTokenHeaderName: string, csrfTokenValue: string) => {
  axiosInstance.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
};

const refreshCsrfToken = async () => {
  const systemApiClient = new SystemApi(defaultOpenApiConfiguration, basePath, axiosInstance);
  const axiosResponse = await systemApiClient.getCsrfToken();
  if (axiosResponse.data) {
    setCsrfTokenHeader(axiosResponse.data.csrfTokenHeaderName, axiosResponse.data.csrfTokenValue);
  }
};

const autoLogin = async () => {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (!accountId) {
    throw new ActiveAccountIdNotFoundError('There is no auto-login enabled account.');
  }
  const password = await SecureStorageAdapter.loadPassword(accountId);
  if (!password) {
    throw new PasswordNotFoundError('The password for the account ID does not exist.');
  }
  const accountApiClient = new AccountApi(defaultOpenApiConfiguration, basePath, axiosInstance);
  await accountApiClient.postLogin({accountId, password});
};

const refreshSession = async () => {
  await autoLogin();
  await refreshCsrfToken();
};

const retryQueryOnceIfUnauthorized = async <TData>(
  queryFn: QueryFunction<AxiosResponse<TData, ApiError>, QueryKey>,
  context: QueryFunctionContext<QueryKey, any>,
) => {
  try {
    const axiosResponse = await queryFn(context);
    return axiosResponse;
  } catch (error) {
    if (error instanceof ApiResponseError) {
      const status = error.response.status;
      // 401 Unauthorized の場合は一度だけ自動再ログイン後のリトライを試みる
      if (status === 401) {
        await refreshSession();
        const axiosResponse = await queryFn(context);
        return axiosResponse;
      }
    }
    throw error;
  }
};

const retryMutationOnceIfUnauthorized = async <TData, TVariables>(
  mutationFn: MutationFunction<AxiosResponse<TData>, TVariables>,
  variables: TVariables,
) => {
  try {
    const axiosResponse = await mutationFn(variables);
    return axiosResponse;
  } catch (error) {
    if (error instanceof ApiResponseError) {
      const status = error.response.status;
      // 401 Unauthorized の場合は一度だけ自動再ログイン後のリトライを試みる
      if (status === 401) {
        await refreshSession();
        const axiosResponse = await mutationFn(variables);
        return axiosResponse;
      }
    }
    throw error;
  }
};

const useBackendQuery = <TData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<AxiosResponse<TData, ApiError>, QueryKey>,
  queryOptions?: UseQueryOptions<TData, ApiError, TData>,
) => {
  const wrappedQueryFn = (context: QueryFunctionContext<QueryKey, any>) => {
    return retryQueryOnceIfUnauthorized(queryFn, context).then(response => response.data);
  };
  return useQuery(queryKey, wrappedQueryFn, queryOptions);
};

const useBackendInfiniteQuery = <TData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<AxiosResponse<TData>, QueryKey>,
  queryOptions?: UseInfiniteQueryOptions<TData, ApiError, TData>,
) => {
  const wrappedQueryFn = (context: QueryFunctionContext<QueryKey, any>) => {
    return retryQueryOnceIfUnauthorized(queryFn, context).then(response => response.data);
  };
  return useInfiniteQuery(queryKey, wrappedQueryFn, queryOptions);
};

const useBackendMutation = <TData, TError, TVariables, TContext>(
  mutationKey: MutationKey,
  mutationFn: MutationFunction<AxiosResponse<TData>, TVariables>,
  mutationOptions?: UseMutationOptions<TData, TError, TVariables, TContext>,
) => {
  const wrappedMutationFn = (variables: TVariables) => {
    return retryMutationOnceIfUnauthorized(mutationFn, variables).then(response => response.data);
  };
  return useMutation(mutationKey, wrappedMutationFn, mutationOptions);
};

export {
  ApiError,
  ApiResponseError,
  ApiResourceAccessError,
  basePath,
  defaultOpenApiConfiguration,
  axiosInstance,
  setCsrfTokenHeader,
  refreshCsrfToken,
  useBackendQuery,
  useBackendInfiniteQuery,
  useBackendMutation,
};
