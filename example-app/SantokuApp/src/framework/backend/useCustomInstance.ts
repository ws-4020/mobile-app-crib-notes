import Axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {applicationName, nativeApplicationVersion} from 'expo-application';
import {RequestTimeoutError} from 'framework/error/RequestTimeoutError';
import {Platform} from 'react-native';

import {AppConfig} from '../config';

export type ErrorType<Error> = AxiosError<Error>;

const REQUEST_TIMEOUT = AppConfig.requestTimeout;

const backendUrl = `${AppConfig.santokuAppBackendUrl}/api`;
const sandboxUrl = `${AppConfig.santokuAppBackendUrl}/api/sandbox`;
const BACKEND_AXIOS_INSTANCE = Axios.create({baseURL: backendUrl});
const SANDBOX_AXIOS_INSTANCE = Axios.create({baseURL: sandboxUrl});
const BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION = Axios.create({baseURL: backendUrl});

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
  } as AxiosRequestConfig;
};

// orvalの依存関係にないライブラリやファイルをこのファイル内でimportしていると、
// orval実行時に "Your mutator cannot be loaded so default setup has been applied" の警告が出る。
// しかし自動生成されたファイルには正しく反映され、アプリ実行時には正しく読み込まれて利用される。
// https://github.com/anymaniax/orval/issues/257
const useCustomInstance = <T>(
  axiosInstance: AxiosInstance,
): ((config: AxiosRequestConfig) => Promise<AxiosResponse<T>>) => {
  const defaultAxiosConfig = getDefaultAxiosConfig();
  return async (config: AxiosRequestConfig) => {
    // TODO: React Native / Expo のバージョンアップ時にJestを27以降にバージョンアップできたらCancelTokenからAbortControllerへ移行する
    const source = Axios.CancelToken.source();
    const requestConfig = {
      ...defaultAxiosConfig,
      ...config,
      cancelToken: source.token,
    };
    const promise = axiosInstance(requestConfig);

    // @ts-ignore
    promise.cancel = () => {
      source.cancel('Query was cancelled by React Query');
    };

    let timeoutId;
    if (REQUEST_TIMEOUT) {
      timeoutId = setTimeout(() => {
        source.cancel('Query was cancelled by Request Timeout');
      }, REQUEST_TIMEOUT);
    }

    try {
      return await promise;
    } catch (error) {
      // TODO: AbortControllerへの移行時に処理を見直す
      // AbortControllerでabortした場合はErrorにはならず、responseがundefinedになる
      if (Axios.isCancel(error)) {
        const cancelError = error as {message: string};
        if (cancelError.message === 'Query was cancelled by Request Timeout') {
          throw new RequestTimeoutError('Request Timeout');
        }
      }
      throw error;
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  };
};

const useBackendCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<AxiosResponse<T>>) => {
  return useCustomInstance(BACKEND_AXIOS_INSTANCE);
};

const useSandboxCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<AxiosResponse<T>>) => {
  return useCustomInstance(SANDBOX_AXIOS_INSTANCE);
};

const setCsrfTokenHeader = (csrfTokenHeaderName: string, csrfTokenValue: string) => {
  BACKEND_AXIOS_INSTANCE.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
};

const setAxiosResponseInterceptor = (
  onFulfilled: (
    value: AxiosResponse<any, any>,
  ) => (AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>) | undefined,
  onRejected: (error: any) => any | undefined,
) => {
  BACKEND_AXIOS_INSTANCE.interceptors.response.use(onFulfilled, onRejected);
};

export {
  useBackendCustomInstance,
  useSandboxCustomInstance,
  setCsrfTokenHeader,
  setAxiosResponseInterceptor,
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
};
