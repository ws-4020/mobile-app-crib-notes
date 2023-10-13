import Axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {AppConfig} from 'bases/core/configs/AppConfig';
import {applicationName, nativeApplicationVersion} from 'expo-application';
import {RequestTimeoutError} from 'features/backend/errors/RequestTimeoutError';
import {Platform} from 'react-native';

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

/**
 * 指定されたsignalを組み合わせて、一つのsignalを返却します。
 *
 * ＜参考＞
 * MDNには、AbortSignal.anyというメソッドが存在していますが、React Nativeではまだ実装されていないようです。
 * https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static
 * https://github.com/facebook/react-native/blob/v0.72.5/packages/react-native/types/modules/globals.d.ts#L480
 */
const combineSignals = (s1: AbortSignal, s2: AbortSignal) => {
  const signals = [s1, s2];
  const controller = new AbortController();
  const signal = controller.signal;
  const removeListeners: (() => void)[] = [];
  const handleChildSignalAbort = () => {
    controller.abort();
  };

  for (const s of signals) {
    if (s.aborted) {
      // 既にabortされている場合は、新しいsignalをabortします
      controller.abort();
      break;
    }
    s.addEventListener('abort', handleChildSignalAbort);
    removeListeners.push(() => s.removeEventListener('abort', handleChildSignalAbort));
  }
  // React NativeはaddEventListenerのOptionとしてsignalがサポートされていないため、abortした場合に自動でListenerを削除できません
  // https://github.com/facebook/react-native/blob/v0.72.5/packages/react-native/types/modules/globals.d.ts#L495
  // https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
  // そのため、cleanup関数を返却して、呼び出し元でListenerを削除できるようにします
  const cleanup = () => removeListeners.forEach(r => r());
  return {signal, cleanup};
};

const customInstance = <T>(
  axiosInstance: AxiosInstance,
): ((config: AxiosRequestConfig) => Promise<AxiosResponse<T>>) => {
  const defaultAxiosConfig = getDefaultAxiosConfig();
  return (config: AxiosRequestConfig) => {
    const timeoutAbortController = new AbortController();
    const timeoutSignal = timeoutAbortController.signal;
    // axiosのRequestConfigに含まれるsignalは、GenericAbortSignalという型で定義されています。
    // GenericAbortSignalは、機能が最小限に抑えられており、React NativeのAbortSignalと互換性がありません。
    // https://github.com/axios/axios/blob/v1.5.1/index.d.ts#L232
    // https://github.com/facebook/react-native/blob/v0.72.5/packages/react-native/types/modules/globals.d.ts#L480
    // このアプリで生成するAbortSignalは、React Nativeの型定義に従った機能が提供されているはずなので、GenericAbortSignalをAbortSignalに型変換します。
    const combinedSignal = config.signal
      ? combineSignals(timeoutSignal, config.signal as AbortSignal)
      : {signal: timeoutAbortController.signal, cleanup: undefined};

    const requestConfig = {
      ...defaultAxiosConfig,
      ...config,
      signal: combinedSignal.signal,
    };

    const promise = axiosInstance(requestConfig);

    // MDNには、AbortSignal.timeoutが存在しますが、React Nativeではまだ実装されていないようです。
    // https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static
    // https://github.com/facebook/react-native/blob/v0.72.5/packages/react-native/types/modules/globals.d.ts#L480
    // そのため、setTimeoutを使用して、timeoutを実現します。
    let timeoutId: NodeJS.Timeout | null;
    if (REQUEST_TIMEOUT) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        // MDNには、AbortController.abortの引数としてreasonを受け取れるように記載されていますが、React Nativeでは実装されていないようです。
        // https://developer.mozilla.org/ja/docs/Web/API/AbortSignal/abort_static
        // https://github.com/facebook/react-native/blob/v0.72.5/packages/react-native/types/modules/globals.d.ts#L527
        timeoutAbortController.abort();
      }, REQUEST_TIMEOUT);
    }

    return promise
      .catch(error => {
        if (Axios.isCancel(error)) {
          if (timeoutSignal.aborted) {
            // MDNには、AbortSignal.reasonが存在しますが、React Nativeでは実装されていないようです。
            // https://developer.mozilla.org/ja/docs/Web/API/AbortSignal/reason
            // https://github.com/facebook/react-native/blob/v0.72.5/packages/react-native/types/modules/globals.d.ts#L480
            // そのため、AbortSignalのreasonをthrowしないで、RequestTimeoutErrorを直接throwしています。
            throw new RequestTimeoutError('Request Timeout');
          }
        }
        throw error;
      })
      .finally(() => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        combinedSignal.cleanup?.();
      });
  };
};

const backendCustomInstance = <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return customInstance<T>(BACKEND_AXIOS_INSTANCE)(config);
};

const sandboxCustomInstance = <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return customInstance<T>(SANDBOX_AXIOS_INSTANCE)(config);
};

const setCsrfTokenHeader = (csrfTokenHeaderName: string, csrfTokenValue: string) => {
  BACKEND_AXIOS_INSTANCE.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
};

const setAxiosResponseInterceptor = (
  onFulfilled?: (value: AxiosResponse<any, any>) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>,
  onRejected?: (error: any) => any,
) => {
  BACKEND_AXIOS_INSTANCE.interceptors.response.use(onFulfilled, onRejected);
};

export {
  backendCustomInstance,
  sandboxCustomInstance,
  setCsrfTokenHeader,
  setAxiosResponseInterceptor,
  BACKEND_AXIOS_INSTANCE,
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
};
