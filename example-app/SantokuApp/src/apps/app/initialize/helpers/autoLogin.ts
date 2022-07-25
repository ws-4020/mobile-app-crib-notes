import {AuthenticationService} from '../../../../features/account/AuthenticationService';
import {isUnauthorizedError} from '../../../../features/account/UnauthorizedError';
import {InitialDataError} from './initialDataError';

export const autoLogin = async () => {
  try {
    await AuthenticationService.autoLogin();
  } catch (e) {
    if (isUnauthorizedError(e)) {
      await AuthenticationService.clientLogout();
      throw e;
    }
    throw new InitialDataError(e);
  }
};
