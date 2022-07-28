import * as Application from 'expo-application';
import {AppUpdatesResponse} from 'features/backend/apis/model';
import {useEffect, useState} from 'react';
import {Platform} from 'react-native';

import {requestAppUpdates} from '../utils/requestAppUpdates';

// WithReactQueryの前で動作するため、React Queryが使えない
// そのため、useEffectで実装
export const useAppUpdates = (type: typeof Platform.OS, version: typeof Application.nativeApplicationVersion) => {
  const [appUpdates, setAppUpdates] = useState<AppUpdatesResponse>();

  useEffect(() => {
    const init = async () => {
      const appUpdates = await requestAppUpdates(type, version);
      setAppUpdates(appUpdates);
    };
    init().catch(() => {});
  }, [type, version]);

  return {appUpdates};
};
