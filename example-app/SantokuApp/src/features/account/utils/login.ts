/**
 * ログインします。
 * @param accountId アカウントID
 * @param password パスワード
 * @returns アカウントの切り替え結果
 */
import crashlytics from '@react-native-firebase/crashlytics';
import axios from 'axios';
import {refreshCsrfToken} from 'bases/backend';
import {postLogin} from 'features/backend/apis/account/account';
import {AccountLoginResponse} from 'features/backend/apis/model';

import {UnauthorizedError} from '../errors/UnauthorizedError';
import {SecureStorageAdapter} from './SecureStorageAdapter';

export const login = async (accountId: string, password: string): Promise<AccountLoginResponse> => {
  try {
    const res = await postLogin({accountId, password});
    await refreshCsrfToken();
    await SecureStorageAdapter.saveActiveAccountId(accountId);
    await crashlytics().setUserId(accountId);

    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response?.status === 401) {
        throw new UnauthorizedError(e);
      }
    }
    throw e;
  }
};
