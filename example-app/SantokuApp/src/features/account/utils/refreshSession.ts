import axios, {AxiosResponse} from 'axios';
import {ApplicationError} from 'bases/core/error/ApplicationError';
import {sendErrorLog} from 'bases/error/sendErrorLog';
import {
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
  setAxiosResponseInterceptor,
} from 'features/backend/utils/customInstance';
import {refreshCsrfToken} from 'features/backend/utils/refreshCsrfToken';

import {SecureStorageAdapter} from './SecureStorageAdapter';

// 共通リトライ処理に必要なAPI呼び出しだけは、自動生成コードに依存しない形で用意する
const autoLogin = async () => {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (!accountId) {
    throw new ApplicationError('There is no auto-login enabled account.');
  }
  const password = await SecureStorageAdapter.loadPassword(accountId);
  if (!password) {
    throw new ApplicationError('The password for the account ID does not exist.');
  }
  await BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.post('/login', {accountId, password});
};

const refreshSession = async () => {
  await autoLogin();
  await refreshCsrfToken();
};

const setRefreshSessionInterceptor = () => {
  const onFulfilled = (response: AxiosResponse) => {
    return response;
  };
  const onRejected = async (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        try {
          await refreshSession();
          return await BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.request(error.config);
        } catch (e) {
          sendErrorLog(e);
          throw error;
        }
      }
    }
    throw error;
  };
  setAxiosResponseInterceptor(onFulfilled, onRejected);
};

export {refreshSession, setRefreshSessionInterceptor};
