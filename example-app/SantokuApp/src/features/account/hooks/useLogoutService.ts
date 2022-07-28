/**
 * ログアウトします。
 */
import {useMutation} from 'react-query';

import {logout} from '../utils/auth/logout';

export const useLogoutService = () => {
  return useMutation(() => logout());
};