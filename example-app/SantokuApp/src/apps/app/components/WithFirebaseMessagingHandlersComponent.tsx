import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';

import {useRegisterNotificationMessageListener} from '../hooks/useRegisterNotificationMessageListener';
import {useRegisterNotificationOnOpenedAppListener} from '../hooks/useRegisterNotificationOnOpenedAppListener';
import {AppInitialData} from '../types/AppInitialData';

type Props = {
  initialData: AppInitialData;
  navigateIfRequired: (message: FirebaseMessagingTypes.RemoteMessage, initialData: AppInitialData) => void;
};
export const WithFirebaseMessagingHandlersComponent: React.FC<Props> = ({
  children,
  initialData,
  navigateIfRequired,
}) => {
  const {registerNotificationMessageListener} = useRegisterNotificationMessageListener();
  const {registerNotificationOnOpenedAppListener} = useRegisterNotificationOnOpenedAppListener(
    initialData,
    navigateIfRequired,
  );

  useEffect(() => {
    return registerNotificationMessageListener();
  }, [registerNotificationMessageListener]);

  useEffect(() => {
    return registerNotificationOnOpenedAppListener();
  }, [registerNotificationOnOpenedAppListener]);

  return <>{children}</>;
};
