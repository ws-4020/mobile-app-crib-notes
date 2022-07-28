import {ApplicationError} from 'bases/core/error/ApplicationError';
import {BundledMessagesLoader} from 'bases/message/utils/BundledMessageLoader';
import {loadMessages} from 'bases/message/utils/Message';
import {getAppUpdates} from 'features/backend/apis/system/system';

import {checkAppUpdates} from './checkAppUpdates';


jest.mock('features/backend/apis/system/system');

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});
beforeEach(() => {
  jest.resetAllMocks();
});

describe('checkAppUpdates', () => {
  it('Platformがwebの場合はApplicationErrorがスローされること', async () => {
    await expect(() => checkAppUpdates('web', '0.0.1')).rejects.toThrow(
      new ApplicationError('Not supported type. type=[web]'),
    );
  });
  it('nativeApplicationVersionがnullの場合はApplicationErrorがスローされること', async () => {
    await expect(() => checkAppUpdates('android', null)).rejects.toThrow(
      new ApplicationError('Invalid version. version=[null]'),
    );
  });
  it('getAppUpdatesがエラーをスローした場合はそのエラーがスローされること', async () => {
    (getAppUpdates as jest.Mock).mockImplementation(() => {
      throw new Error('dummy');
    });

    await expect(() => checkAppUpdates('android', '0.1.1')).rejects.toThrow(new Error('dummy'));
  });
});
