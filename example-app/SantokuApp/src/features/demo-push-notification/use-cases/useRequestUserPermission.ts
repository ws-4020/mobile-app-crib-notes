import messaging from '@react-native-firebase/messaging';
import {useCallback} from 'react';

import {useAuthStatus} from '../client-states/useAuthStatus';
import {requestUserPermission} from '../services/requestUserPermission';

export const useRequestUserPermission = () => {
  const [, setAuthStatus] = useAuthStatus();
  const requestPermission = useCallback(async () => {
    const authStatus = await requestUserPermission();
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
  }, [setAuthStatus]);
  return {requestUserPermission: requestPermission};
};
