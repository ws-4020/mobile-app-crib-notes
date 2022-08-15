import * as accountApi from 'features/backend/apis/account/account';
import {AccountLoginResponseStatus} from 'features/backend/apis/model';
import * as csrfToken from 'features/backend/utils/refreshCsrfToken';
import * as loadActiveAccountId from 'features/secure-storage/services/loadActiveAccountId';
import * as loadPassword from 'features/secure-storage/services/loadPassword';

import {ActiveAccountIdNotFoundError} from '../../errors/ActiveAccountIdNotFoundError';
import {PasswordNotFoundError} from '../../errors/PasswordNotFoundError';
import {refresh} from './refresh';

describe('refresh', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(loadActiveAccountId, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(loadPassword, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const res = await refresh();
    expect(res).toEqual({status: AccountLoginResponseStatus.COMPLETE});
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spyRefreshCsrfToken).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const refreshPromise = refresh();
    await expect(refreshPromise).rejects.toThrowError(ActiveAccountIdNotFoundError);
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const refreshPromise = refresh();
    await expect(refreshPromise).rejects.toThrowError(PasswordNotFoundError);
  });
});
