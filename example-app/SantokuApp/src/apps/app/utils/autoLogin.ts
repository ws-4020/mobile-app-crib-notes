import {isUnauthorizedError} from 'features/account/errors/UnauthorizedError';
import {autoLogin as accountAutoLogin} from 'features/account/utils/auth/autoLogin';
import {clientLogout} from 'features/account/utils/auth/clientLogout';

import {InitialDataError} from '../errors/initialDataError';

export const autoLogin = async () => {
  try {
    return await accountAutoLogin();
  } catch (e) {
    if (isUnauthorizedError(e)) {
      await clientLogout();
      throw e;
    }
    throw new InitialDataError(e);
  }
};
