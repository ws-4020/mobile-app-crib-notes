import {ApplicationError} from 'bases/core/error/ApplicationError';
import * as Application from 'expo-application';
import {getAppUpdates} from 'features/backend/apis/system/system';
import {Platform} from 'react-native';

import {UpdateRequiredError} from '../errors/UpdateRequiredError';

const requestAppUpdates = (type: typeof Platform.OS, version: typeof Application.nativeApplicationVersion) => {
  if (type !== 'ios' && type !== 'android') {
    throw new ApplicationError(`Not supported type. type=[${type}]`);
  }
  if (!version) {
    throw new ApplicationError(`Invalid version. version=[${String(version)}]`);
  }

  return getAppUpdates(type, version);
};

export async function checkAppUpdates(type: typeof Platform.OS, version: typeof Application.nativeApplicationVersion) {
  const appUpdates = (await requestAppUpdates(type, version)).data;
  if (appUpdates.updateRequired) {
    throw new UpdateRequiredError(appUpdates.message, appUpdates.supportedVersion);
  }
}
