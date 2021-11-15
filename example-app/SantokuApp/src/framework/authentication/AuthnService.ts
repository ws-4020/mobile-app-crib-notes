import {api} from '../../backend/BackendService';
import {Account, AccountLoginResponse} from '../../generated/api';

class CsrfToken {
  isInitialized: boolean = false;
  tokenValue: string = '';
}

class AuthnContext {
  isAuthorized: boolean = false;
  accountId: string = '';
}

const csrfToken = new CsrfToken();

async function getCsrfToken(): Promise<string | undefined> {
  if (csrfToken.isInitialized) {
    return undefined;
  }
  const token = await api.getCsrfToken();
  csrfToken.isInitialized = true;
  csrfToken.tokenValue = token.data.csrfTokenValue ?? '';
  return token.data.csrfTokenValue;
}

function requestOptions() {
  return {
    headers: {
      'Content-Type': 'Application/json',
      'X-CSRF-TOKEN': csrfToken.tokenValue,
    },
  };
}

async function signup(nickname: string, password: string): Promise<Account> {
  if (!csrfToken.isInitialized) {
    await getCsrfToken();
  }
  const res = await api.postSignup({nickname, password}, requestOptions());
  return res.data;
}

async function login(accountId: string, password: string): Promise<AccountLoginResponse> {
  const res = await api.postLogin({accountId, password}, requestOptions());
  return res.data;
}

async function logout(): Promise<void> {
  await api.postLogout(requestOptions());
}

const context = new AuthnContext();

export const AuthnService = {
  getCsrfToken,
  signup,
  login,
  logout,
  context,
  csrfToken,
};
