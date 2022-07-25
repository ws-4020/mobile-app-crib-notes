/**
 * アカウントを切り替えます。
 * @returns アカウントの切り替え結果
 */
import {useMutation} from 'react-query';

import {changeAccount} from '../utils/changeAccount';

export const useChangeAccountService = () => {
  return useMutation((arg: {accountId: string}) => changeAccount(arg.accountId));
};
