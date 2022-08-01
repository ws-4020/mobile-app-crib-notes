import * as Application from 'expo-application';
import React, {useEffect} from 'react';

import {useAppUpdates} from '../hooks/useAppUpdates';
import {showUpdateRequiredDialog} from '../utils/showUpdateRequiredDialog';

const WithCheckAppUpdates: React.FC = ({children}) => {
  const {data: appUpdates} = useAppUpdates();

  useEffect(() => {
    if (appUpdates?.updateRequired) {
      showUpdateRequiredDialog(Application.nativeApplicationVersion!);
    }
  }, [appUpdates]);
  if (appUpdates === undefined || appUpdates.updateRequired) {
    return null;
  }

  return <>{children}</>;
};

export {WithCheckAppUpdates};
