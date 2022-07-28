/**
 * アカウントを切り替えます。
 * @returns アカウントの切り替え結果
 */
import {useMutation} from 'react-query';

import {changeAccount} from '../utils/auth/changeAccount';

export const useChangeAccount = () => {
  return useMutation((arg: {accountId: string}) => changeAccount(arg.accountId));
};
