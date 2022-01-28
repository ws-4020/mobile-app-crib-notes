import axios, {AxiosResponse} from 'axios';

import {SecureStorageAdapter} from '../authentication/SecureStorageAdapter';
import {ApplicationError} from '../error/ApplicationError';
import {refreshCsrfToken} from './refreshCsrfToken';
import {BACKEND_AXIOS_INSTANCE, setAxiosResponseInterceptor} from './useCustomInstance';

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
  await BACKEND_AXIOS_INSTANCE.post('/login', {accountId, password});
};

const refreshSession = async () => {
  await autoLogin();
  await refreshCsrfToken();
};

const setRefreshSessionInterceptor = () => {
  const onFullfilled = (response: AxiosResponse) => {
    return response;
  };
  const onRejected = async (error: unknown) => {
    if (axios.isAxiosError(error)) {
      await refreshSession();
      return await axios.request(error.config);
    }
  };
  setAxiosResponseInterceptor(onFullfilled, onRejected);
};

export {refreshSession, setRefreshSessionInterceptor};
