/**
 * ログアウトします。
 */
import {useMutation} from 'react-query';

import {logout} from '../utils/logout';

export const useLogoutService = () => {
  return useMutation(() => logout());
};
