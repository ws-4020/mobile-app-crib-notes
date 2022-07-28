import {AccountLoginResponse} from 'features/backend/apis/model';

import {ActiveAccountIdNotFoundError} from '../../errors/ActiveAccountIdNotFoundError';
import {SecureStorageAdapter} from '../SecureStorageAdapter';
import {changeAccount} from './changeAccount';

/**
 * 自動ログインします。
 * @returns アカウントのログイン結果
 */
export const autoLogin = async (): Promise<AccountLoginResponse> => {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (!accountId) {
    throw new ActiveAccountIdNotFoundError('There is no auto-login enabled account.');
  }
  return changeAccount(accountId);
};
