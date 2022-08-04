/**
 * アクティブなアカウントIDとそれに該当するパスワードがセキュアストアに存在するかをチェックします。
 * @returns 自動ログイン可能な場合はtrue、そうでない場合はfalse
 */
import {loadActiveAccountId} from '../secure-storage/loadActiveAccountId';
import {loadPassword} from '../secure-storage/loadPassword';

export const canAutoLogin = async (): Promise<boolean> => {
  const accountId = await loadActiveAccountId();
  if (!accountId) {
    return false;
  }
  const password = await loadPassword(accountId);
  return !!password;
};
