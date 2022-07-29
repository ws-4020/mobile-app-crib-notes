import {logout} from 'features/account/utils/auth/logout';
import {useMutation} from 'react-query';

export const useLogout = () => {
  return useMutation(() => logout());
};
