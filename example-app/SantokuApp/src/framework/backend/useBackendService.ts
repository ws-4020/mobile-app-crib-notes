import {AxiosResponse} from 'axios';
import {
  useGetAccountsAccountId,
  useGetAccountsAccountIdAvatar,
  useGetAccountsMe,
  useGetAccountsMeAvatar,
  useGetAccountsMeTerms,
  useGetCsrfToken,
  useGetTeamsTeamId,
  useGetTeamsTeamIdTimetableTemplates,
  useGetTeamsTeamIdTimetableTemplatesTemplateId,
  useGetTeamsTeamIdTimetables,
  useGetTeamsTeamIdTimetablesTimetableId,
  useGetTerms,
  usePostAccountsMeDeviceToken,
  usePostAccountsMeTerms,
  usePostLogin,
  usePostLogout,
  usePostSignup,
  usePostTeams,
  usePostTeamsTeamIdInvitationCode,
  usePostTeamsTeamIdJoin,
  usePostTeamsTeamIdTimetableTemplates,
  usePostTeamsTeamIdTimetables,
  usePutAccountsMeAvatar,
  usePutTeamsTeamIdTimetableTemplatesTemplateId,
  usePutTeamsTeamIdTimetablesTimetableId,
  useDeleteAccountsMeDelete,
} from 'generated/backend/api';
import {GetTeamsTeamIdTimetablesParams, GetTeamsTeamIdTimetableTemplatesParams} from 'generated/backend/model';
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
import {UseInfiniteQueryResult, UseMutationResult, useQueries, useQueryClient, UseQueryResult} from 'react-query';

type BackendServiceQueryOptions = {
  enabled?: boolean;
  disableGlobalErrorHandler?: boolean;
};

type BackendServiceMutationOptions = {
  disableGlobalErrorHandler?: boolean;
};

const getQueryOptions = (options?: BackendServiceQueryOptions) => {
  return {
    enabled: options?.enabled ?? true,
    meta: {disableGlobalErrorHandler: options?.disableGlobalErrorHandler ?? false},
  };
};

const getMutationOptions = (options?: BackendServiceMutationOptions) => {
  return {
    meta: {disableGlobalErrorHandler: options?.disableGlobalErrorHandler ?? false},
  };
};

const convertQueryResult = <TData, TError>(queryResult: UseQueryResult<AxiosResponse<TData>, TError>) => {
  return {
    ...queryResult,
    data: queryResult.data?.data,
  };
};

const convertInfiniteQueryResult = <TData, TError>(
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

const convertMutationResult = <TData, TError, TVariable, TContext>(
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

const convertQueriesResult = <TData, TError>(queryResults: UseQueryResult<AxiosResponse<TData>, TError>[]) => {
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

// Backend API

export const useGetAccountsAccountIdService = (accountId: string, options?: BackendServiceQueryOptions) => {
  const query = useGetAccountsAccountId(accountId, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetAccountsAccountIdAvatarService = (accountId: string, options?: BackendServiceQueryOptions) => {
  const query = useGetAccountsAccountIdAvatar(accountId, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetAccountsMeService = (options?: BackendServiceQueryOptions) => {
  const query = useGetAccountsMe({query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetAccountsMeAvatarService = (options?: BackendServiceQueryOptions) => {
  const query = useGetAccountsMeAvatar({query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetAccountsMeTermsService = (options?: BackendServiceQueryOptions) => {
  const query = useGetAccountsMeTerms({query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetCsrfTokenService = (options?: BackendServiceQueryOptions) => {
  const query = useGetCsrfToken({query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTeamsTeamIdService = (teamId: string, options?: BackendServiceQueryOptions) => {
  const query = useGetTeamsTeamId(teamId, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTeamsTeamIdTimetableTemplatesService = (
  teamId: string,
  params?: GetTeamsTeamIdTimetableTemplatesParams,
  options?: BackendServiceQueryOptions,
) => {
  const query = useGetTeamsTeamIdTimetableTemplates(teamId, params, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTeamsTeamIdTimetableTemplatesTemplateIdService = (
  teamId: string,
  templateId: string,
  options?: BackendServiceQueryOptions,
) => {
  const query = useGetTeamsTeamIdTimetableTemplatesTemplateId(teamId, templateId, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTeamsTeamIdTimetablesService = (
  teamId: string,
  params?: GetTeamsTeamIdTimetablesParams,
  options?: BackendServiceQueryOptions,
) => {
  const query = useGetTeamsTeamIdTimetables(teamId, params, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTeamsTeamIdTimetablesTimetableIdService = (
  teamId: string,
  timetableId: string,
  options?: BackendServiceQueryOptions,
) => {
  const query = useGetTeamsTeamIdTimetablesTimetableId(teamId, timetableId, {query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const useGetTermsService = (options?: BackendServiceQueryOptions) => {
  const query = useGetTerms({query: getQueryOptions(options)});
  return convertQueryResult(query);
};

export const usePostAccountsMeDeviceTokenService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostAccountsMeDeviceToken({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostAccountsMeTermsService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostAccountsMeTerms({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostLoginService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostLogin({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostLogoutService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostLogout({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostSignupService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostSignup({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostTeamsService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeams({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostTeamsTeamIdInvitationCodeService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeamsTeamIdInvitationCode({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostTeamsTeamIdJoinService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeamsTeamIdJoin({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostTeamsTeamIdTimetableTemplatesService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeamsTeamIdTimetableTemplates({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePostTeamsTeamIdTimetablesService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePostTeamsTeamIdTimetables({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePutAccountsMeAvatarService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePutAccountsMeAvatar({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePutTeamsTeamIdTimetableTemplatesTemplateIdService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePutTeamsTeamIdTimetableTemplatesTemplateId({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const usePutTeamsTeamIdTimetablesTimetableIdService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePutTeamsTeamIdTimetablesTimetableId({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const useDeleteAccountsMeDeleteService = (options?: BackendServiceMutationOptions) => {
  const mutation = useDeleteAccountsMeDelete({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

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
