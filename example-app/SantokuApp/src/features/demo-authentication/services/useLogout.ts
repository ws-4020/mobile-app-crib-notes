import {logout} from 'features/account/services/auth/logout';
import {useMutation} from 'react-query';

export const useLogout = () => {
  return useMutation(() => logout());
};
