import * as Application from 'expo-application';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';

import {useAppUpdates} from '../hooks/useAppUpdates';
import {showUpdateRequiredDialog} from '../utils/showUpdateRequiredDialog';

const WithCheckAppUpdates: React.FC = ({children}) => {
  const {appUpdates} = useAppUpdates(Platform.OS, Application.nativeApplicationVersion);

  useEffect(() => {
    if (appUpdates?.updateRequired) {
      showUpdateRequiredDialog(appUpdates.supportedVersion);
    }
  }, [appUpdates]);
  if (appUpdates === undefined || appUpdates.updateRequired) {
    return null;
  }

  return <>{children}</>;
};

export {WithCheckAppUpdates};
