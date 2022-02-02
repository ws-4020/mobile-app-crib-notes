import Axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {applicationName, nativeApplicationVersion} from 'expo-application';
import {ApplicationError} from 'framework/error/ApplicationError';
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
const useCustomInstance = <T>(axiosInstance: AxiosInstance): ((config: AxiosRequestConfig) => Promise<T>) => {
  const defaultAxiosConfig = getDefaultAxiosConfig();
  return async (config: AxiosRequestConfig) => {
    // TODO: React Native / Expo のバージョンアップ時にJestを27以降にバージョンアップできたらCancelTokenからAbortControllerへ移行する
    const source = Axios.CancelToken.source();
    const requestConfig = {
      ...defaultAxiosConfig,
      ...config,
      cancelToken: source.token,
    };
    const axiosPromise = axiosInstance(requestConfig);
    // AxiosResponseではなくその中のデータだけを返すようにする
    const promise = axiosPromise.then((response: AxiosResponse<T> | undefined) => {
      if (response) {
        return response.data;
      }
      // abortControllerでabortされた場合はcatchに来るのではなくthenに来てresponseがundefinedになる
      throw new ApplicationError('Request Timeout');
    });

    // @ts-ignore
    promise.cancel = () => {
      source.cancel('Query was cancelled by React Query');
    };

    let timeoutId;
    if (REQUEST_TIMEOUT) {
      timeoutId = setTimeout(() => {
        source.cancel('Query was cancelled by React Query');
      }, REQUEST_TIMEOUT);
    }

    try {
      return await promise;
    } catch (error) {
      throw error;
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  };
};

const useBackendCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  return useCustomInstance(BACKEND_AXIOS_INSTANCE);
};

const useSandboxCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  return useCustomInstance(SANDBOX_AXIOS_INSTANCE);
};

const setCsrfTokenHeader = (csrfTokenHeaderName: string, csrfTokenValue: string) => {
  BACKEND_AXIOS_INSTANCE.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
};

const setAxiosResponseInterceptor = (
  onFullfilled: (
    value: AxiosResponse<any, any>,
  ) => (AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>) | undefined,
  onRejected: (error: any) => any | undefined,
) => {
  BACKEND_AXIOS_INSTANCE.interceptors.response.use(onFullfilled, onRejected);
};

export {
  useBackendCustomInstance,
  useSandboxCustomInstance,
  setCsrfTokenHeader,
  setAxiosResponseInterceptor,
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
};
