import * as Application from 'expo-application';
import {AppConfig} from 'framework/config';
import {ApplicationError} from 'framework/error/ApplicationError';
import {Alert, Linking, Platform} from 'react-native';
import {getAppUpdates} from 'service';

import {m} from '../../message';
import {InitialDataError} from './initialDataError';

const openStoreLink = () => {
  const link = AppConfig.storeUrl;
  if (!link) {
    return;
  }
  Linking.canOpenURL(link)
    .then(() => {
      Linking.openURL(link).catch(() => {
        // ストアリンクを開けない場合は何もしない
      });
    })
    .catch(() => () => {
      // ストアリンクを開けない場合は何もしない
    });
};

const requestAppUpdates = () => {
  const type = Platform.OS;
  const version = Application.nativeApplicationVersion;
  if (type !== 'ios' && type !== 'android') {
    throw new InitialDataError(`Not supported type.type=[${type}]`);
  }
  if (!version) {
    throw new InitialDataError('Invalid version.');
  }

  return getAppUpdates(type, version);
};

export async function getUpdateRequired() {
  try {
    return (await requestAppUpdates()).data;
  } catch (e) {
    throw new InitialDataError('Failed to verify if the app needs to be updated.', e);
  }
}

export function showUpdateRequiredDialog(supportedVersion: string) {
  Alert.alert(
    m('アプリアップデート'),
    m(
      '現在のバージョン({0})ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。',
      supportedVersion,
    ),
    [
      {
        text: m('OK'),
        onPress: () => openStoreLink(),
      },
    ],
  );
}

export class UpdateRequiredError extends ApplicationError {
  public supportedVersion: string;
  constructor(message = 'The app needs to be updated', supportedVersion: string) {
    super(message);
    this.supportedVersion = supportedVersion;
  }
}

export function isUpdateRequiredError(error: unknown): error is UpdateRequiredError {
  return error instanceof UpdateRequiredError;
}
