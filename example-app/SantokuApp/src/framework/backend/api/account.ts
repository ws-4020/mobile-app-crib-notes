import {MutationKey, QueryKey, UseMutationOptions, useQueryClient, UseQueryOptions} from 'react-query';

import {
  Account,
  AccountApi,
  AccountLogin,
  AccountLoginResponse,
  AccountRegistration,
  UpdateDeviceToken,
} from '../../../generated/api';
import {
  ApiError,
  axiosInstance,
  basePath,
  defaultOpenApiConfiguration,
  useBackendMutation,
  useBackendQuery,
} from './base';

const accountApiClient = new AccountApi(defaultOpenApiConfiguration, basePath, axiosInstance);

// POST /signup
const usePostSignup = (
  mutationKey?: MutationKey,
  mutationOptions?: UseMutationOptions<Account, ApiError, AccountRegistration, unknown>,
) => {
  const key = mutationKey ?? ['/signup'];
  const mutationFn = (accountRegistration: AccountRegistration) => {
    return accountApiClient.postSignup(accountRegistration);
  };
  return useBackendMutation(key, mutationFn, mutationOptions);
};

// POST /login
const usePostLogin = (
  mutationKey?: MutationKey,
  mutationOptions?: UseMutationOptions<AccountLoginResponse, ApiError, AccountLogin, unknown>,
) => {
  const key = mutationKey ?? ['/login'];
  const mutationFn = (accountLogin: AccountLogin) => {
    return accountApiClient.postLogin(accountLogin);
  };
  return useBackendMutation(key, mutationFn, mutationOptions);
};

// POST /logout
const usePostLogout = (
  mutationKey?: MutationKey,
  mutationOptions?: UseMutationOptions<void, ApiError, void, unknown>,
) => {
  const key = mutationKey ?? ['/logout'];
  const mutationFn = () => {
    return accountApiClient.postLogout();
  };
  return useBackendMutation(key, mutationFn, mutationOptions);
};

// GET /accounts/me
const useGetAccountsMe = (queryKey?: QueryKey, queryOptions?: UseQueryOptions<Account, ApiError, Account>) => {
  const key = queryKey ?? ['/accounts/me'];
  const queryFn = () => {
    return accountApiClient.getAccountsMe();
  };
  return useBackendQuery(key, queryFn, queryOptions);
};

// POST /accounts/me/device-token
const usePostAccountsMeDeviceToken = (
  mutationKey?: MutationKey,
  mutationOptions?: UseMutationOptions<void, ApiError, UpdateDeviceToken, unknown>,
) => {
  const queryClient = useQueryClient();
  const key = mutationKey ?? ['/accounts/me/deviceToken'];
  const mutationFn = () => {
    return accountApiClient.postAccountsMeDeviceToken();
  };
  const options = {
    onSettled: () => {
      queryClient.invalidateQueries(['/accounts/me']).catch(() => {});
    },
    ...mutationOptions,
  };
  return useBackendMutation(key, mutationFn, options);
};

export {usePostSignup, usePostLogin, usePostLogout, useGetAccountsMe, usePostAccountsMeDeviceToken};
