import {act} from '@testing-library/react-hooks';

import * as loadActiveAccountId from '../secure-storage/loadActiveAccountId';
import * as loadPassword from '../secure-storage/loadPassword';
import {canAutoLogin} from './canAutoLogin';

describe('canAutoLogin', () => {
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(loadActiveAccountId, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(loadPassword, 'loadPassword');

  beforeEach(() => {
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得できる場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    await act(async () => {
      const res = await canAutoLogin();
      expect(res).toBeTruthy();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
    });
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できない場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    await act(async () => {
      const res = await canAutoLogin();
      expect(res).toBeFalsy();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).not.toHaveBeenCalled();
    });
  });

  test('セキュアストレージからパスワードを取得できない場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    await act(async () => {
      const res = await canAutoLogin();
      expect(res).toBeFalsy();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
    });
  });
});
