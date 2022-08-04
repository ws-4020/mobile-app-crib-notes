/**
 * 自動ログインします。
 * @returns アカウントのログイン結果
 */
import {useMutation} from 'react-query';

import {autoLogin} from './auth/autoLogin';

export const useAutoLogin = () => {
  return useMutation(autoLogin);
};
