import {
  useGetAccountsAccountId,
  useGetAccountsAccountIdAvatar,
  useGetAccountsMe,
  useGetAccountsMeAvatar,
  useGetAccountsMeTerms,
  usePostAccountsMeDeviceToken,
  usePostAccountsMeTerms,
  usePostLogin,
  usePostLogout,
  usePostSignup,
  usePutAccountsMeAvatar,
  useDeleteAccountsMeDelete,
} from 'generated/backend/account/account';

import {
  BackendServiceMutationOptions,
  BackendServiceQueryOptions,
  convertMutationResult,
  convertQueryResult,
  getMutationOptions,
  getQueryOptions,
} from './base';

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

export const usePutAccountsMeAvatarService = (options?: BackendServiceMutationOptions) => {
  const mutation = usePutAccountsMeAvatar({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};

export const useDeleteAccountsMeDeleteService = (options?: BackendServiceMutationOptions) => {
  const mutation = useDeleteAccountsMeDelete({mutation: getMutationOptions(options)});
  return convertMutationResult(mutation);
};
