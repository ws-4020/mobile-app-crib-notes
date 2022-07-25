/**
 * アクティブなアカウントIDとそれに該当するパスワードがセキュアストアに存在するかをチェックします。
 * @returns 自動ログイン可能な場合はtrue、そうでない場合はfalse
 */
import {SecureStorageAdapter} from './SecureStorageAdapter';

export const canAutoLogin = async (): Promise<boolean> => {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (!accountId) {
    return false;
  }
  const password = await SecureStorageAdapter.loadPassword(accountId);
  return !!password;
};
