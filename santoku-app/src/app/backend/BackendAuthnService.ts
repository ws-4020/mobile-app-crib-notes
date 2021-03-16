import type {Cookie} from '@react-native-community/cookies';
import CookieManager from '@react-native-community/cookies';

import {AppConfig} from '../AppConfig';

const SESSION_ID_KEY = 'NABLARCH_SID';

const login = async (_idToken: string) => {
  return Promise.resolve();
};

const logout = async () => {
  return Promise.resolve();
};

const ping = async () => {
  return Promise.resolve();
};

async function getSessionId(): Promise<Cookie> {
  const cookies = await CookieManager.get(AppConfig.STATEFUL_AUTH_DOMAIN);
  return cookies[SESSION_ID_KEY];
}

export const BackendAuthnService = {
  login,
  logout,
  ping,
  getSessionId,
};
