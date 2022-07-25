/**
 * ログインします。
 * @returns アカウントの切り替え結果
 */
import {useMutation} from 'react-query';

import {login} from '../utils/login';

export const useLoginService = () => {
  return useMutation(async (arg: {accountId: string; password: string}) => login(arg.accountId, arg.password));
};
