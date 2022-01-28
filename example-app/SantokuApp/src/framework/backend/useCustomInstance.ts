import Axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {applicationName, nativeApplicationVersion} from 'expo-application';
import {Platform} from 'react-native';

import {AppConfig} from '../config';

export type ErrorType<Error> = AxiosError<Error>;

const CONNECTION_TIMEOUT = 60000;
const REQUEST_TIMEOUT = 60000; // TODO: load from config

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
    // Android/iOSの場合、Connection Timeoutとしては適用されるが、データ送受信中のTimeoutとしては適用されない
    timeout: CONNECTION_TIMEOUT, // default is 0 (no timeout)
  } as AxiosRequestConfig;
};

// orvalの依存関係にないライブラリやファイルをこのファイル内でimportしていると、
// orval実行時に "Your mutator cannot be loaded so default setup has been applied" の警告が出る。
// しかし自動生成されたファイルには正しく反映され、アプリ実行時には正しく読み込まれて利用される。
// https://github.com/anymaniax/orval/issues/257
const useCustomInstance = <T>(axiosInstance: AxiosInstance): ((config: AxiosRequestConfig) => Promise<T>) => {
  const defaultAxiosConfig = getDefaultAxiosConfig();
  return async (config: AxiosRequestConfig) => {
    const abortController = new AbortController();
    const requestConfig = {
      ...defaultAxiosConfig,
      ...config,
      signal: abortController.signal,
    };
    const axiosPromise = axiosInstance(requestConfig);
    // AxiosResponse内のデータだけを返すようにする
    const promise = axiosPromise.then((response: AxiosResponse<T>) => response.data);

    // @ts-ignore
    promise.cancel = () => {
      abortController.abort();
    };

    const timeoutId = setTimeout(() => {
      abortController.abort();
    }, REQUEST_TIMEOUT);

    try {
      return await promise;
    } catch (error) {
      throw error;
    } finally {
      clearTimeout(timeoutId);
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
  SANDBOX_AXIOS_INSTANCE.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
};

const setAxiosResponseInterceptor = (
  onFullfilled: (
    value: AxiosResponse<any, any>,
  ) => (AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>) | undefined,
  onRejected: (error: any) => any | undefined,
) => {
  BACKEND_AXIOS_INSTANCE.interceptors.response.use(onFullfilled, onRejected);
  SANDBOX_AXIOS_INSTANCE.interceptors.response.use(onFullfilled, onRejected);
};

export {
  useBackendCustomInstance,
  useSandboxCustomInstance,
  setCsrfTokenHeader,
  setAxiosResponseInterceptor,
  BACKEND_AXIOS_INSTANCE,
};
