/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import {useQuery, UseQueryOptions, QueryFunction, UseQueryResult, QueryKey} from 'react-query';
import type {Template} from '.././model';
import {backendCustomInstance, ErrorType} from '../../../bases/backend/customInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * 入力のテンプレート一覧を取得します。
 * @summary テンプレート一覧取得
 */
export const getTemplates = (signal?: AbortSignal) => {
  return backendCustomInstance<Template[]>({url: `/templates`, method: 'get', signal});
};

export const getGetTemplatesQueryKey = () => [`/templates`];

export type GetTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof getTemplates>>>;
export type GetTemplatesQueryError = ErrorType<unknown>;

export const useGetTemplates = <
  TData = Awaited<ReturnType<typeof getTemplates>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getTemplates>>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetTemplatesQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTemplates>>> = ({signal}) => getTemplates(signal);

  const query = useQuery<Awaited<ReturnType<typeof getTemplates>>, TError, TData>(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};
