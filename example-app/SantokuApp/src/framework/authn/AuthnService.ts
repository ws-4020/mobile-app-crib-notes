import {Account, AccountLoginResponse} from '../../generated/api';
import {api} from '../backend';
import {SecureStorageAdapter} from './SecureStorageAdapter';

class AccountIdNotFoundError extends Error {}
class PasswordNotFoundError extends Error {}
async function signup(nickname: string, password: string): Promise<Account> {
  const res = await api.postSignup({nickname, password});
  const accountId = res.data.accountId;
  await Promise.all([
    SecureStorageAdapter.saveActiveAccountId(accountId),
    SecureStorageAdapter.savePassword(accountId, password),
  ]);
  return res.data;
}

async function login(accountId: string): Promise<AccountLoginResponse> {
  const password = await SecureStorageAdapter.loadPassword(accountId);
  if (!password) {
    throw new PasswordNotFoundError('The password for the account ID does not exist.');
  }
  const res = await api.postLogin({accountId, password});
  return res.data;
}

async function autoLogin(): Promise<AccountLoginResponse> {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (!accountId) {
    throw new AccountIdNotFoundError('There is no auto-login enabled account.');
  }
  return login(accountId);
}

async function canAutoLogin(): Promise<boolean> {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (!accountId) {
    return false;
  }
  const password = await SecureStorageAdapter.loadPassword(accountId);
  return !!password;
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
  canAutoLogin,
  autoLogin,
  refresh,
  logout,
};
