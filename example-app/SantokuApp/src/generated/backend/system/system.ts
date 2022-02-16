/**
 * Generated by orval v6.5.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import {useQuery, UseQueryOptions, QueryFunction, UseQueryResult, QueryKey} from 'react-query';
import type {CsrfTokenResponse} from '.././model';
import {backendCustomInstance, ErrorType} from '../../../framework/backend/useCustomInstance';

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;

/**
 * CSRFトークンを取得します。
 * @summary CSRFトークンの取得
 */
export const getCsrfToken = () => {
  return backendCustomInstance<CsrfTokenResponse>({url: `/csrf_token`, method: 'get'});
};

export const getGetCsrfTokenQueryKey = () => [`/csrf_token`];

export const useGetCsrfToken = <TData = AsyncReturnType<typeof getCsrfToken>, TError = ErrorType<unknown>>(options?: {
  query?: UseQueryOptions<AsyncReturnType<typeof getCsrfToken>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetCsrfTokenQueryKey();

  const queryFn: QueryFunction<AsyncReturnType<typeof getCsrfToken>> = () => getCsrfToken();

  const query = useQuery<AsyncReturnType<typeof getCsrfToken>, TError, TData>(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};
