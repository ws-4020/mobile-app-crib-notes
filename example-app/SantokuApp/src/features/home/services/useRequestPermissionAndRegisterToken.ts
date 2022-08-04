import messaging from '@react-native-firebase/messaging';
import {getFcmToken} from 'bases/firebase/utils/getFcmToken';
import {requestPushPermission} from 'bases/firebase/utils/requestPushPermission';
import {useAccountData} from 'features/account/services/useAccountData';
import {postAccountsMeDeviceToken} from 'features/backend/apis/account/account';
import {useCallback} from 'react';

export const useRequestPermissionAndRegisterToken = () => {
  const {data: accountData} = useAccountData();
  const requestPermissionAndRegisterToken = useCallback(async () => {
    const authStatus = await requestPushPermission();
    if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      const fcmToken = await getFcmToken();
      // ログイン後は必ずアカウント情報が存在している
      // アカウント情報にFCM登録トークンが含まれていない場合は、FCM登録トークンを登録する
      if (fcmToken && !accountData!.account.deviceTokens.includes(fcmToken)) {
        await postAccountsMeDeviceToken({newDeviceToken: fcmToken});
      }
    }
  }, [accountData]);
  return {requestPermissionAndRegisterToken};
};
