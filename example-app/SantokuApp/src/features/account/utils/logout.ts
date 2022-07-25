/**
 * ログアウトします。
 */
import {refreshCsrfToken} from 'bases/backend';
import {getFcmToken} from 'bases/firebase/utils/getFcmToken';
import {postAccountsMeDeviceToken, postLogout} from 'features/backend/apis/account/account';

import {clientLogout} from './clientLogout';

export const logout = async (): Promise<void> => {
  const fcmToken = await getFcmToken();
  await postAccountsMeDeviceToken({oldDeviceToken: fcmToken});
  await postLogout();
  await refreshCsrfToken();
  await clientLogout();
};
