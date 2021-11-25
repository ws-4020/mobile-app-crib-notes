import axios from 'axios';

import {AccountApi, SystemApi, TeamApi, TermsApi} from '../../generated/api';
import {AppConfig} from '../config';

const instance = axios.create();

export const systemApi = new SystemApi(undefined, `${AppConfig.santokuAppBackendUrl}/api`, instance);
export const accountApi = new AccountApi(undefined, `${AppConfig.santokuAppBackendUrl}/api`, instance);
export const termsApi = new TermsApi(undefined, `${AppConfig.santokuAppBackendUrl}/api`, instance);
export const teamApi = new TeamApi(undefined, `${AppConfig.santokuAppBackendUrl}/api`, instance);

export async function csrfToken() {
  const token = await systemApi.getCsrfToken();
  const csrfTokenValue = token.data.csrfTokenValue;
  const csrfTokenHeaderName = token.data.csrfTokenHeaderName;
  instance.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
}
