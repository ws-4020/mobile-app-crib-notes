/**
 * サインアップします。
 * @returns アカウント
 */
import {postSignup} from 'features//backend/apis/account/account';
import {Account} from 'features//backend/apis/model';
import * as savePassword from 'features/secure-storage/services/savePassword';

export const signup = async (nickname: string, password: string): Promise<Account> => {
  const res = await postSignup({nickname, password});
  const accountId = res.data.accountId;
  await savePassword.savePassword(accountId, password);
  return res.data;
};
