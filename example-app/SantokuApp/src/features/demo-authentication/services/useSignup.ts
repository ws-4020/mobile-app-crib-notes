import {signup} from 'features/account/services/auth/signup';
import {useMutation} from 'react-query';

export const useSignup = () => {
  return useMutation((arg: {nickname: string; password: string}) => signup(arg.nickname, arg.password));
};
