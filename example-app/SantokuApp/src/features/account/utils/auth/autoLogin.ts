import {AccountLoginResponse} from 'features/backend/apis/model';

import {ActiveAccountIdNotFoundError} from '../../errors/ActiveAccountIdNotFoundError';
import {loadActiveAccountId} from '../secure-storage/loadActiveAccountId';
import {changeAccount} from './changeAccount';

/**
 * 自動ログインします。
 * @returns アカウントのログイン結果
 */
export const autoLogin = async (): Promise<AccountLoginResponse> => {
  const accountId = await loadActiveAccountId();
  if (!accountId) {
    throw new ActiveAccountIdNotFoundError('There is no auto-login enabled account.');
  }
  return changeAccount(accountId);
};
