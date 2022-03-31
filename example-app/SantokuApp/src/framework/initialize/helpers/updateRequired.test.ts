import {AppConfig} from 'framework/config';
import {BundledMessagesLoader, loadMessages} from 'framework/message';
import {Alert, Linking} from 'react-native';

import {InitialDataError} from './initialDataError';
import {
  getUpdateRequired,
  isUpdateRequiredError,
  openStoreLink,
  showUpdateRequiredDialog,
  UpdateRequiredError,
} from './updateRequired';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('openStoreLink', () => {
  it('storeUrlが空文字の場合は何もしない', async () => {
    jest.spyOn(AppConfig, 'storeUrl', 'get').mockReturnValue('');
    const spyOpenURL = jest.spyOn(Linking, 'openURL');
    await openStoreLink();
    expect(spyOpenURL).not.toHaveBeenCalled();
  });
  it('canOpenURLの戻り値がfalseの場合はストアリンクを開かない', async () => {
    jest.spyOn(AppConfig, 'storeUrl', 'get').mockReturnValue('http://dummy');
    jest.spyOn(Linking, 'canOpenURL').mockRejectedValue(false);
    const spyOpenURL = jest.spyOn(Linking, 'openURL');
    await openStoreLink();
    expect(spyOpenURL).not.toHaveBeenCalled();
  });
  it('条件が揃うとストアリンクを開く', async () => {
    jest.spyOn(AppConfig, 'storeUrl', 'get').mockReturnValue('http://dummy');
    jest.spyOn(Linking, 'canOpenURL').mockResolvedValue(true);
    const spyOpenURL = jest.spyOn(Linking, 'openURL');
    await openStoreLink();
    expect(spyOpenURL).toHaveBeenCalledWith('http://dummy');
  });
});

describe('getUpdateRequired', () => {
  it('Platformがwebの場合はInitialDataErrorがスローされること', async () => {
    await expect(() => getUpdateRequired('web', '0.0.1')).rejects.toThrow(
      new InitialDataError('Not supported type.type=[web]'),
    );
  });
  it('nativeApplicationVersionがnullの場合はInitialDataErrorがスローされること', async () => {
    await expect(() => getUpdateRequired('android', null)).rejects.toThrow(new InitialDataError('Invalid version.'));
  });
  it('getAppUpdatesがエラーをスローした場合はInitialDataErrorがスローされること', async () => {
    jest.mock('service', () => {
      return {
        getAppUpdates: () => {
          throw new Error('dummy');
        },
      };
    });
    await expect(() => getUpdateRequired('android', '0.1.1')).rejects.toThrow(
      new InitialDataError('Failed to verify if the app needs to be updated.', new Error('dummy')),
    );
  });
});

describe('showUpdateRequiredDialog', () => {
  it('showUpdateRequiredDialog', () => {
    const spyAlert = jest.spyOn(Alert, 'alert');
    showUpdateRequiredDialog('0.0.1');
    expect(spyAlert).toHaveBeenCalledWith(
      'アプリアップデート',
      '現在のバージョン(0.0.1)ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。',
      expect.anything(),
    );
  });
});

describe('isUpdateRequiredError', () => {
  it('UpdateRequiredError is UpdateRequiredError', () => {
    expect(isUpdateRequiredError(new UpdateRequiredError('dummy', '0.0.1'))).toBeTruthy();
  });
});
