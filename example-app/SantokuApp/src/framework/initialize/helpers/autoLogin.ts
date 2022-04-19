import axios from 'axios';

import {AuthenticationService, UnauthorizedError} from '../../authentication';
import {InitialDataError} from './initialDataError';

export const autoLogin = async () => {
  try {
    await AuthenticationService.autoLogin();
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response?.status === 401) {
        await AuthenticationService.clientLogout();
        throw new UnauthorizedError(e);
      }
    }
    throw new InitialDataError(e);
  }
};
