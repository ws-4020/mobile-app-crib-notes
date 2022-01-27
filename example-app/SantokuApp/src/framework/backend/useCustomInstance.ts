import Axios, {AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import {applicationName, nativeApplicationVersion} from 'expo-application';
import {Platform} from 'react-native';

import {SecureStorageAdapter} from '../authentication/SecureStorageAdapter';
import {AppConfig} from '../config';
import {ApplicationError} from '../error/ApplicationError';

export type ErrorType<Error> = AxiosError<Error>;

const backendUrl = `${AppConfig.santokuAppBackendUrl}/api`;
const BACKEND_AXIOS_INSTANCE = Axios.create({baseURL: backendUrl});

const sandboxUrl = `http://10.0.2.2:9080/api/sandbox`; // DEBUG
const SANDBOX_AXIOS_INSTANCE = Axios.create({baseURL: sandboxUrl});

const getUserAgent = () => {
  const appName = applicationName ?? 'unknown';
  const appVersion = nativeApplicationVersion ?? 'unknown';
  const platform = Platform.OS;
  const platformVersion = Platform.Version;
  return `${appName}/${appVersion} (${platform}/${platformVersion})`;
};

const getDefaultAxiosConfig = () => {
  return {
    headers: {
      Accept: 'application/json',
      UserAgent: getUserAgent(),
    },
  };
};

// orvalの依存関係にないライブラリやファイルをこのファイル内でimportしていると、
// orval実行時に "Your mutator cannot be loaded so default setup has been applied" の警告が出る。
// しかし自動生成されたファイルには正しく反映され、アプリ実行時には正しく読み込まれて利用される。
// https://github.com/anymaniax/orval/issues/257
const useCustomInstance = <T>(axiosInstance: AxiosInstance): ((config: AxiosRequestConfig) => Promise<T>) => {
  const defaultAxiosConfig = getDefaultAxiosConfig();
  return async (config: AxiosRequestConfig) => {
    const source = Axios.CancelToken.source();
    const axiosPromise = axiosInstance({
      ...defaultAxiosConfig,
      ...config,
      cancelToken: source.token,
    }) as AxiosPromise<T>;

    // @ts-ignore
    axiosPromise.cancel = () => {
      source.cancel('Query was cancelled by React Query');
    };

    try {
      const response = await axiosPromise;
      return response.data;
    } catch (error) {
      if (Axios.isAxiosError(error) && error.response?.status === 401) {
        // Refresh session and retry
        await refreshSession();
        try {
          const retryResponse = await axiosPromise;
          return retryResponse.data;
        } catch (retryError) {
          throw error;
        }
      }
      throw error;
    }
  };
};

const useBackendCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  return useCustomInstance(BACKEND_AXIOS_INSTANCE);
};

const useSandboxCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  return useCustomInstance(SANDBOX_AXIOS_INSTANCE);
};

// 共通リトライ処理に必要なAPI呼び出しだけは、自動生成コードに依存しない形で用意する
type CsrfTokenResponse = {
  csrfTokenHeaderName: string;
  csrfTokenValue: string;
};

const setCsrfTokenHeader = (csrfTokenHeaderName: string, csrfTokenValue: string) => {
  BACKEND_AXIOS_INSTANCE.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
};

const refreshCsrfToken = async () => {
  const axiosResponse = await BACKEND_AXIOS_INSTANCE.get<CsrfTokenResponse>('/csrf_token');
  setCsrfTokenHeader(axiosResponse.data.csrfTokenHeaderName, axiosResponse.data.csrfTokenValue);
};

const autoLogin = async () => {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (!accountId) {
    throw new ApplicationError('There is no auto-login enabled account.');
  }
  const password = await SecureStorageAdapter.loadPassword(accountId);
  if (!password) {
    throw new ApplicationError('The password for the account ID does not exist.');
  }
  await BACKEND_AXIOS_INSTANCE.post('/login', {accountId, password});
};

const refreshSession = async () => {
  await autoLogin();
  await refreshCsrfToken();
};

export {useBackendCustomInstance, useSandboxCustomInstance, refreshCsrfToken};
