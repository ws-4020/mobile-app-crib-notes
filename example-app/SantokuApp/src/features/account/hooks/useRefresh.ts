/**
 * ログイン資格情報を再取得します。
 * @returns アカウントのログイン結果
 */
import {useMutation} from 'react-query';

import {refresh} from '../utils/auth/refresh';

export const useRefresh = () => {
  return useMutation(() => refresh());
};
