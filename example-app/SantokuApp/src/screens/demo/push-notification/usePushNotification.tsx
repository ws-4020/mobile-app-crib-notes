import messaging from '@react-native-firebase/messaging';
import {useCallback, useState} from 'react';

import {accountApi, AppConfig} from '../../../framework';
import {ApiResponseError} from "../../../framework/backend";
import axios from "axios";

export const usePushNotification = () => {
  const [authStatus, setAuthStatus] = useState<string>();
  const [token, setToken] = useState<string>();
  const [notification, setNotification] = useState<string>();

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

  const onMessage = useCallback(() => {
    return messaging().onMessage(message => {
      setNotification(
        JSON.stringify({
          notification: message.notification,
          data: message.data,
        }),
      );
    });
  }, []);

  const onNotificationOpenedApp = useCallback(() => {
    return messaging().onNotificationOpenedApp(message => {
      setNotification(
        JSON.stringify({
          notification: message.notification,
          data: message.data,
        }),
      );
    });
  }, []);

  const setBackgroundMessageHandler = useCallback(() => {
    // awaitするものはなく、Promiseで返却するものもないのでignoreしておく
    // eslint-disable-next-line @typescript-eslint/require-await
    return messaging().setBackgroundMessageHandler(async message => {
      const parsedMessage = JSON.stringify({
        notification: message.notification,
        data: message.data,
      });
      console.log(`setBackgroundMessageHandler. message=[${parsedMessage}]`);
    });
  }, []);

  const getInitialNotification = useCallback(async () => {
    const message = await messaging().getInitialNotification();
    if (message) {
      setNotification(
        JSON.stringify({
          notification: message.notification,
          data: message.data,
        }),
      );
    }
  }, []);

  const registerFcmToken = useCallback(async () => {
    try {
      await accountApi.postAccountsMeDeviceToken({newDeviceToken: token});
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      alert(e);
    }
  }, [token]);

  const notifyMessage = useCallback(async () => {
    try {
      await axios.put(AppConfig.santokuAppBackendUrl + '/api/sandbox/push-notification/all');
    } catch (e) {
      alert(e);
    }
  }, []);

  return {
    authStatus,
    token,
    requestUserPermission,
    getToken,
    notification,
    onMessage,
    onNotificationOpenedApp,
    setBackgroundMessageHandler,
    getInitialNotification,
    registerFcmToken,
    notifyMessage,
  };
};
