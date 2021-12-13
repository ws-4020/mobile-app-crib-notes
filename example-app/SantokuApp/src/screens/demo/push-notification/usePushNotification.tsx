import messaging from '@react-native-firebase/messaging';
import {useCallback, useState} from 'react';

import {teamApi} from '../../../framework';

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
      console.log('getInitialNotification');
      setNotification(
        JSON.stringify({
          notification: message.notification,
          data: message.data,
        }),
      );
    }
  }, []);

  const notifyMessage = useCallback(async () => {
    try {
      const res = await teamApi.putTeamsTeamIdTimetablesTimetableId('1', '2');
      console.log(res);
    } catch (e) {
      console.log(e);
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
    notifyMessage,
  };
};
