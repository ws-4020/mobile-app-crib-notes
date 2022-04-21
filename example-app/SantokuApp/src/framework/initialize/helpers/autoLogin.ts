import {AuthenticationService, isUnauthorizedError} from '../../authentication';
import {InitialDataError} from './initialDataError';

export const autoLogin = async () => {
  try {
    await AuthenticationService.autoLogin();
  } catch (e) {
    if (!isUnauthorizedError(e)) {
      throw new InitialDataError(e);
    }
    throw e;
  }
};
