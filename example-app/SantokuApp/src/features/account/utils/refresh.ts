/**
 * ログイン資格情報を再取得します。
 * @returns アカウントのログイン結果
 */
import {AccountLoginResponse} from '../../backend/apis/model';
import {autoLogin} from './autoLogin';

export const refresh = (): Promise<AccountLoginResponse> => {
  return autoLogin();
};
