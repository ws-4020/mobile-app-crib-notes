import * as Application from 'expo-application';
import React, {useEffect} from 'react';

import {useAppUpdates} from '../services/useAppUpdates';
import {showUpdateRequiredDialogUseCase} from '../use-cases/showUpdateRequiredDialogUseCase';

const AppUpdatesChecker: React.FC = ({children}) => {
  const {data: appUpdates} = useAppUpdates();

  useEffect(() => {
    if (appUpdates?.updateRequired) {
      showUpdateRequiredDialogUseCase(Application.nativeApplicationVersion!);
    }
  }, [appUpdates]);
  if (appUpdates === undefined || appUpdates.updateRequired) {
    return null;
  }

  return <>{children}</>;
};

export {AppUpdatesChecker};
