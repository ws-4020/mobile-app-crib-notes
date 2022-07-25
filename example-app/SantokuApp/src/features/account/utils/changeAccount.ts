/**
 * アカウントを切り替えます。
 * @param accountId アカウントID
 * @returns アカウントの切り替え結果
 */
import {AccountLoginResponse} from 'features/backend/apis/model';

import {PasswordNotFoundError} from '../errors/PasswordNotFoundError';
import {SecureStorageAdapter} from './SecureStorageAdapter';
import {login} from './login';

export const changeAccount = async (accountId: string): Promise<AccountLoginResponse> => {
  const password = await SecureStorageAdapter.loadPassword(accountId);
  if (!password) {
    throw new PasswordNotFoundError('The password for the account ID does not exist.');
  }
  return login(accountId, password);
};
