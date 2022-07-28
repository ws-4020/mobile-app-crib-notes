import messaging from '@react-native-firebase/messaging';
import {useCallback} from 'react';

import {requestUserPermission} from '../utils/requestUserPermission';
import {useAuthStatus} from './useAuthStatus';

export const useRequestUserPermissionUseCase = () => {
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
