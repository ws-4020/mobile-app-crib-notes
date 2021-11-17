import {Account, AccountLoginResponse} from '../../generated/api';
import {api} from '../backend';

async function signup(nickname: string, password: string): Promise<Account> {
  const res = await api.postSignup({nickname, password});
  // TODO セキュアストレージに格納
  return res.data;
}

async function login(accountId: string): Promise<AccountLoginResponse> {
  // TODO セキュアストレージから取得
  const password = '';
  const res = await api.postLogin({accountId, password});
  return res.data;
}

async function autoLogin(): Promise<AccountLoginResponse> {
  // TODO セキュアストレージから取得
  const accountId = '';
  return login(accountId);
}

async function refresh(): Promise<AccountLoginResponse> {
  return autoLogin();
}

async function logout(): Promise<void> {
  await api.postLogout();
}

export const AuthnService = {
  signup,
  login,
  refresh,
  logout,
};
