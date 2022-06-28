/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from 'react-query';
import type {
  Account,
  BadRequestResponse,
  AccountRegistration,
  AccountLoginResponse,
  UnauthorizedResponse,
  AccountLogin,
  ForbiddenResponse,
  AvatarImage,
  UpdateDeviceToken,
  TermsOfServiceAgreementStatus,
  AccountDeletion,
  Like,
} from '.././model';
import {backendCustomInstance, ErrorType} from '../../../framework/backend/customInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * アカウントを登録します。アカウントの登録には、ニックネームとパスワードが必要です。

 * @summary アカウントの登録
 */
export const postSignup = (accountRegistration: AccountRegistration) => {
  return backendCustomInstance<Account>({
    url: `/signup`,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: accountRegistration,
  });
};

export type PostSignupMutationResult = NonNullable<Awaited<ReturnType<typeof postSignup>>>;
export type PostSignupMutationBody = AccountRegistration;
export type PostSignupMutationError = ErrorType<BadRequestResponse>;

export const usePostSignup = <TError = ErrorType<BadRequestResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof postSignup>>, TError, {data: AccountRegistration}, TContext>;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof postSignup>>, {data: AccountRegistration}> = props => {
    const {data} = props ?? {};

    return postSignup(data);
  };

  return useMutation<Awaited<ReturnType<typeof postSignup>>, TError, {data: AccountRegistration}, TContext>(
    mutationFn,
    mutationOptions,
  );
};
/**
 * アカウントIDとパスワードを指定してログインします。

 * @summary ログインする
 */
export const postLogin = (accountLogin: AccountLogin) => {
  return backendCustomInstance<AccountLoginResponse>({
    url: `/login`,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: accountLogin,
  });
};

export type PostLoginMutationResult = NonNullable<Awaited<ReturnType<typeof postLogin>>>;
export type PostLoginMutationBody = AccountLogin;
export type PostLoginMutationError = ErrorType<BadRequestResponse | UnauthorizedResponse>;

export const usePostLogin = <
  TError = ErrorType<BadRequestResponse | UnauthorizedResponse>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof postLogin>>, TError, {data: AccountLogin}, TContext>;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof postLogin>>, {data: AccountLogin}> = props => {
    const {data} = props ?? {};

    return postLogin(data);
  };

  return useMutation<Awaited<ReturnType<typeof postLogin>>, TError, {data: AccountLogin}, TContext>(
    mutationFn,
    mutationOptions,
  );
};
/**
 * ログアウトします。
 * @summary ログアウトする
 */
export const postLogout = () => {
  return backendCustomInstance<void>({url: `/logout`, method: 'post'});
};

export type PostLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof postLogout>>>;

export type PostLogoutMutationError = ErrorType<BadRequestResponse | ForbiddenResponse>;

export const usePostLogout = <
  TError = ErrorType<BadRequestResponse | ForbiddenResponse>,
  TVariables = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof postLogout>>, TError, TVariables, TContext>;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof postLogout>>, TVariables> = () => {
    return postLogout();
  };

  return useMutation<Awaited<ReturnType<typeof postLogout>>, TError, TVariables, TContext>(mutationFn, mutationOptions);
};
/**
 * アカウントIDをキーとして登録されているアカウントを取得する。

 * @summary アカウントの取得
 */
export const getAccountsAccountId = (accountId: string, signal?: AbortSignal) => {
  return backendCustomInstance<Account>({url: `/accounts/${accountId}`, method: 'get', signal});
};

export const getGetAccountsAccountIdQueryKey = (accountId: string) => [`/accounts/${accountId}`];

export type GetAccountsAccountIdQueryResult = NonNullable<Awaited<ReturnType<typeof getAccountsAccountId>>>;
export type GetAccountsAccountIdQueryError = ErrorType<unknown>;

export const useGetAccountsAccountId = <
  TData = Awaited<ReturnType<typeof getAccountsAccountId>>,
  TError = ErrorType<unknown>,
>(
  accountId: string,
  options?: {query?: UseQueryOptions<Awaited<ReturnType<typeof getAccountsAccountId>>, TError, TData>},
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAccountsAccountIdQueryKey(accountId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAccountsAccountId>>> = ({signal}) =>
    getAccountsAccountId(accountId, signal);

  const query = useQuery<Awaited<ReturnType<typeof getAccountsAccountId>>, TError, TData>(queryKey, queryFn, {
    enabled: !!accountId,
    ...queryOptions,
  });

  return {
    queryKey,
    ...query,
  };
};

/**
 * アバターを取得する。

 * @summary アバターを取得する
 */
export const getAccountsAccountIdAvatar = (accountId: string, signal?: AbortSignal) => {
  return backendCustomInstance<AvatarImage>({url: `/accounts/${accountId}/avatar`, method: 'get', signal});
};

export const getGetAccountsAccountIdAvatarQueryKey = (accountId: string) => [`/accounts/${accountId}/avatar`];

export type GetAccountsAccountIdAvatarQueryResult = NonNullable<Awaited<ReturnType<typeof getAccountsAccountIdAvatar>>>;
export type GetAccountsAccountIdAvatarQueryError = ErrorType<unknown>;

export const useGetAccountsAccountIdAvatar = <
  TData = Awaited<ReturnType<typeof getAccountsAccountIdAvatar>>,
  TError = ErrorType<unknown>,
>(
  accountId: string,
  options?: {query?: UseQueryOptions<Awaited<ReturnType<typeof getAccountsAccountIdAvatar>>, TError, TData>},
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAccountsAccountIdAvatarQueryKey(accountId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAccountsAccountIdAvatar>>> = ({signal}) =>
    getAccountsAccountIdAvatar(accountId, signal);

  const query = useQuery<Awaited<ReturnType<typeof getAccountsAccountIdAvatar>>, TError, TData>(queryKey, queryFn, {
    enabled: !!accountId,
    ...queryOptions,
  });

  return {
    queryKey,
    ...query,
  };
};

/**
 * ログイン済みのアカウントを取得する。

 * @summary ログイン済みアカウントの取得
 */
export const getAccountsMe = (signal?: AbortSignal) => {
  return backendCustomInstance<Account>({url: `/accounts/me`, method: 'get', signal});
};

export const getGetAccountsMeQueryKey = () => [`/accounts/me`];

export type GetAccountsMeQueryResult = NonNullable<Awaited<ReturnType<typeof getAccountsMe>>>;
export type GetAccountsMeQueryError = ErrorType<ForbiddenResponse>;

export const useGetAccountsMe = <
  TData = Awaited<ReturnType<typeof getAccountsMe>>,
  TError = ErrorType<ForbiddenResponse>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getAccountsMe>>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAccountsMeQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAccountsMe>>> = ({signal}) => getAccountsMe(signal);

  const query = useQuery<Awaited<ReturnType<typeof getAccountsMe>>, TError, TData>(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * ログイン済みアカウントのアバターを取得する。

 * @summary ログイン済みアカウントのアバターを取得する
 */
export const getAccountsMeAvatar = (signal?: AbortSignal) => {
  return backendCustomInstance<AvatarImage>({url: `/accounts/me/avatar`, method: 'get', signal});
};

export const getGetAccountsMeAvatarQueryKey = () => [`/accounts/me/avatar`];

export type GetAccountsMeAvatarQueryResult = NonNullable<Awaited<ReturnType<typeof getAccountsMeAvatar>>>;
export type GetAccountsMeAvatarQueryError = ErrorType<unknown>;

export const useGetAccountsMeAvatar = <
  TData = Awaited<ReturnType<typeof getAccountsMeAvatar>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getAccountsMeAvatar>>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAccountsMeAvatarQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAccountsMeAvatar>>> = ({signal}) =>
    getAccountsMeAvatar(signal);

  const query = useQuery<Awaited<ReturnType<typeof getAccountsMeAvatar>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions,
  );

  return {
    queryKey,
    ...query,
  };
};

/**
 * ログイン済みアカウントのアバターを登録する。

 * @summary ログイン済みアカウントのアバターを登録する
 */
export const putAccountsMeAvatar = (avatarImage: AvatarImage) => {
  const formData = new FormData();
  if (avatarImage.avatarImage !== undefined) {
    formData.append('avatarImage', avatarImage.avatarImage);
  }

  return backendCustomInstance<void>({
    url: `/accounts/me/avatar`,
    method: 'put',
    headers: {'Content-Type': 'multipart/form-data'},
    data: formData,
  });
};

export type PutAccountsMeAvatarMutationResult = NonNullable<Awaited<ReturnType<typeof putAccountsMeAvatar>>>;
export type PutAccountsMeAvatarMutationBody = AvatarImage;
export type PutAccountsMeAvatarMutationError = ErrorType<unknown>;

export const usePutAccountsMeAvatar = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof putAccountsMeAvatar>>, TError, {data: AvatarImage}, TContext>;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof putAccountsMeAvatar>>, {data: AvatarImage}> = props => {
    const {data} = props ?? {};

    return putAccountsMeAvatar(data);
  };

  return useMutation<Awaited<ReturnType<typeof putAccountsMeAvatar>>, TError, {data: AvatarImage}, TContext>(
    mutationFn,
    mutationOptions,
  );
};
/**
 * ログイン済みアカウントのデバイス登録トークンを更新する。

 * @summary ログイン済みアカウントのデバイス登録トークンの更新
 */
export const postAccountsMeDeviceToken = (updateDeviceToken: UpdateDeviceToken) => {
  return backendCustomInstance<void>({
    url: `/accounts/me/device-token`,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: updateDeviceToken,
  });
};

export type PostAccountsMeDeviceTokenMutationResult = NonNullable<
  Awaited<ReturnType<typeof postAccountsMeDeviceToken>>
>;
export type PostAccountsMeDeviceTokenMutationBody = UpdateDeviceToken;
export type PostAccountsMeDeviceTokenMutationError = ErrorType<unknown>;

export const usePostAccountsMeDeviceToken = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postAccountsMeDeviceToken>>,
    TError,
    {data: UpdateDeviceToken},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postAccountsMeDeviceToken>>,
    {data: UpdateDeviceToken}
  > = props => {
    const {data} = props ?? {};

    return postAccountsMeDeviceToken(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof postAccountsMeDeviceToken>>,
    TError,
    {data: UpdateDeviceToken},
    TContext
  >(mutationFn, mutationOptions);
};
/**
 * ログイン済みアカウントの有効な利用規約に同意しているかの状態を取得します。

 * @summary ログイン済みアカウントの利用規約同意状態確認
 */
export const getAccountsMeTerms = (signal?: AbortSignal) => {
  return backendCustomInstance<TermsOfServiceAgreementStatus>({url: `/accounts/me/terms`, method: 'get', signal});
};

export const getGetAccountsMeTermsQueryKey = () => [`/accounts/me/terms`];

export type GetAccountsMeTermsQueryResult = NonNullable<Awaited<ReturnType<typeof getAccountsMeTerms>>>;
export type GetAccountsMeTermsQueryError = ErrorType<unknown>;

export const useGetAccountsMeTerms = <
  TData = Awaited<ReturnType<typeof getAccountsMeTerms>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getAccountsMeTerms>>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAccountsMeTermsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAccountsMeTerms>>> = ({signal}) =>
    getAccountsMeTerms(signal);

  const query = useQuery<Awaited<ReturnType<typeof getAccountsMeTerms>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions,
  );

  return {
    queryKey,
    ...query,
  };
};

/**
 * ログイン済みアカウントにおいて、指定された利用規約のバージョンに同意します。

 * @summary ログイン済みアカウントの利用規約同意
 */
export const postAccountsMeTerms = (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
  return backendCustomInstance<TermsOfServiceAgreementStatus>({
    url: `/accounts/me/terms`,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: termsOfServiceAgreementStatus,
  });
};

export type PostAccountsMeTermsMutationResult = NonNullable<Awaited<ReturnType<typeof postAccountsMeTerms>>>;
export type PostAccountsMeTermsMutationBody = TermsOfServiceAgreementStatus;
export type PostAccountsMeTermsMutationError = ErrorType<BadRequestResponse>;

export const usePostAccountsMeTerms = <TError = ErrorType<BadRequestResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postAccountsMeTerms>>,
    TError,
    {data: TermsOfServiceAgreementStatus},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postAccountsMeTerms>>,
    {data: TermsOfServiceAgreementStatus}
  > = props => {
    const {data} = props ?? {};

    return postAccountsMeTerms(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof postAccountsMeTerms>>,
    TError,
    {data: TermsOfServiceAgreementStatus},
    TContext
  >(mutationFn, mutationOptions);
};
/**
 * ログイン済みアカウントを削除します。

アカウントの削除にパスワードを要求するので、DELETEメソッドではなくPOSTメソッドを利用しています。

参考: [4.3.5. DELETE - RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.5)

> A payload within a DELETE request message has no defined semantics;
> sending a payload body on a DELETE request might cause some existing
> implementations to reject the request.

 * @summary ログイン済みアカウント削除
 */
export const deleteAccountsMeDelete = (accountDeletion: AccountDeletion) => {
  return backendCustomInstance<void>({
    url: `/accounts/me/delete`,
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: accountDeletion,
  });
};

export type DeleteAccountsMeDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAccountsMeDelete>>>;
export type DeleteAccountsMeDeleteMutationBody = AccountDeletion;
export type DeleteAccountsMeDeleteMutationError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | ForbiddenResponse
>;

export const useDeleteAccountsMeDelete = <
  TError = ErrorType<BadRequestResponse | UnauthorizedResponse | ForbiddenResponse>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteAccountsMeDelete>>,
    TError,
    {data: AccountDeletion},
    TContext
  >;
}) => {
  const {mutation: mutationOptions} = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteAccountsMeDelete>>,
    {data: AccountDeletion}
  > = props => {
    const {data} = props ?? {};

    return deleteAccountsMeDelete(data);
  };

  return useMutation<Awaited<ReturnType<typeof deleteAccountsMeDelete>>, TError, {data: AccountDeletion}, TContext>(
    mutationFn,
    mutationOptions,
  );
};
/**
 * いいね済の質問と回答およびコメントを取得します。
 * @summary いいね済の取得
 */
export const getAccountsMeLikesEventsEventId = (signal?: AbortSignal) => {
  return backendCustomInstance<Like>({url: `/accounts/me/likes`, method: 'get', signal});
};

export const getGetAccountsMeLikesEventsEventIdQueryKey = () => [`/accounts/me/likes`];

export type GetAccountsMeLikesEventsEventIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAccountsMeLikesEventsEventId>>
>;
export type GetAccountsMeLikesEventsEventIdQueryError = ErrorType<unknown>;

export const useGetAccountsMeLikesEventsEventId = <
  TData = Awaited<ReturnType<typeof getAccountsMeLikesEventsEventId>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getAccountsMeLikesEventsEventId>>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAccountsMeLikesEventsEventIdQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAccountsMeLikesEventsEventId>>> = ({signal}) =>
    getAccountsMeLikesEventsEventId(signal);

  const query = useQuery<Awaited<ReturnType<typeof getAccountsMeLikesEventsEventId>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions,
  );

  return {
    queryKey,
    ...query,
  };
};
