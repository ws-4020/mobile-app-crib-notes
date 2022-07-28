import {act} from '@testing-library/react-hooks';
import {renderHook} from '@testing-library/react-native';
import * as accountApi from 'features/backend/apis/account/account';
import {AccountLoginResponseStatus} from 'features/backend/apis/model';
import * as csrfToken from 'features/backend/utils/refreshCsrfToken';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {ActiveAccountIdNotFoundError} from '../../errors/ActiveAccountIdNotFoundError';
import {PasswordNotFoundError} from '../../errors/PasswordNotFoundError';
import {useRefresh} from '../../hooks/useRefresh';
import * as loadActiveAccountId from '../secure-storage/loadActiveAccountId';
import * as loadPassword from '../secure-storage/loadPassword';

const wrapper: React.ComponentType<React.ProviderProps<void>> = ({children}) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

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
    const {result} = renderHook(() => useRefresh(), {wrapper});
    await act(async () => {
      const res = await result.current.mutateAsync();
      expect(res).toEqual({status: AccountLoginResponseStatus.COMPLETE});
      expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
    });
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const {result} = renderHook(() => useRefresh(), {wrapper});
    await act(async () => {
      const refresh = result.current.mutateAsync();
      await expect(refresh).rejects.toThrowError(ActiveAccountIdNotFoundError);
    });
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const {result} = renderHook(() => useRefresh(), {wrapper});
    await act(async () => {
      const refresh = result.current.mutateAsync();
      await expect(refresh).rejects.toThrowError(PasswordNotFoundError);
    });
  });
});
