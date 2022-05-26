import messaging from '@react-native-firebase/messaging';
import axios, {AxiosError} from 'axios';
import {ErrorResponse} from 'generated/backend/model';
import {useCallback, useState} from 'react';
import {Linking, Platform} from 'react-native';

import {AppConfig} from '../../../framework';

type AuthStatusType = 'NOT_DETERMINED' | 'DENIED' | 'AUTHORIZED' | 'PROVISIONAL';

const settings = async () => {
  if (Platform.OS === 'ios') {
    // アプリの設定画面を開く
    await Linking.openSettings();
  } else if (Platform.OS === 'android') {
    // sendIntentでエラーが発生するためアプリの通知設定画面を表示することができない
    // React Nativeの0.67で修正版がリリースされている
    // https://github.com/facebook/react-native/pull/29000
    // そのため、アプリの設定画面を開く
    await Linking.openSettings();
  }
};

export const usePushNotification = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatusType>();
  const [token, setToken] = useState<string>();

  const requestUserPermission = useCallback(async () => {
    const authStatus = await messaging().requestPermission();
    switch (authStatus) {
      case messaging.AuthorizationStatus.NOT_DETERMINED:
        setAuthStatus('NOT_DETERMINED');
        break;
      case messaging.AuthorizationStatus.DENIED:
        setAuthStatus('DENIED');
        break;
      case messaging.AuthorizationStatus.AUTHORIZED:
        setAuthStatus('AUTHORIZED');
        break;
      case messaging.AuthorizationStatus.PROVISIONAL:
        setAuthStatus('PROVISIONAL');
        break;
    }
  }, []);

  const getToken = useCallback(async () => {
    const fcmToken = await messaging().getToken();
    setToken(fcmToken);
  }, []);

  const notifyMessageToAll = useCallback(async () => {
    try {
      await axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/all`);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          alert(axiosError.response.data.message);
          return;
        }
        alert(e);
      }
    }
  }, []);

  const notifyMessageToMe = useCallback(async () => {
    if (token) {
      try {
        await axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/single/${token}`);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const axiosError = e as AxiosError<ErrorResponse>;
          if (axiosError.response) {
            alert(axiosError.response.data.message);
            return;
          }
          alert(e);
        }
      }
      return;
    }
    alert('FCM登録トークンを取得してください');
  }, [token]);

  return {
    authStatus,
    token,
    requestUserPermission,
    getToken,
    notifyMessageToAll,
    notifyMessageToMe,
    settings,
  };
};
