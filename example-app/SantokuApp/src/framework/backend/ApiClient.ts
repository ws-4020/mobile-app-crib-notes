import axios from 'axios';

import {DefaultApi} from '../../generated/api';
import {AppConfig} from '../config';

const instance = axios.create();

export const api = new DefaultApi(undefined, `${AppConfig.santokuAppBackendUrl}/api`, instance);

export async function csrfToken() {
  const token = await api.getCsrfToken();
  const csrfTokenValue = token.data.csrfTokenValue;
  const csrfTokenHeaderName = token.data.csrfTokenHeaderName;
  instance.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
}
