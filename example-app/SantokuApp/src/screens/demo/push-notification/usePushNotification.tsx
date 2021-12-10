import messaging from '@react-native-firebase/messaging';
import {useCallback, useState} from 'react';

export const usePushNotification = () => {
  const [authStatus, setAuthStatus] = useState();
  const [token, setToken] = useState<string>();
  const [notification, setNotification] = useState<string>();

  const requestUserPermission = useCallback(async () => {
    const authStatus = await messaging().requestPermission();
    setAuthStatus(authStatus);
  }, []);

  const getToken = useCallback(async () => {
    const fcmToken = await messaging().getToken();
    console.log(`fcmToken: ${fcmToken}`);
    setToken(fcmToken);
  }, []);

  const onMessage = useCallback(() => {
    return messaging().onMessage(message => {
      console.log('onMessage');
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
      console.log('onNotificationOpenedApp');
      setNotification(
        JSON.stringify({
          notification: message.notification,
          data: message.data,
        }),
      );
    });
  }, []);

  const getInitialNotification = useCallback(async () => {
    const message = await messaging().getInitialNotification();
    if (message) {
      console.log('getInitialNotification');
      setNotification(
        JSON.stringify({
          notification: message.notification,
          data: message.data,
        }),
      );
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
    getInitialNotification,
  };
};
