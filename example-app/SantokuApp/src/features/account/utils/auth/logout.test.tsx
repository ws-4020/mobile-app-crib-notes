import {act} from '@testing-library/react-hooks';
import {renderHook} from '@testing-library/react-native';
import * as accountApi from 'features/backend/apis/account/account';
import * as csrfToken from 'features/backend/utils/refreshCsrfToken';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {useLogout} from '../../hooks/useLogout';
import * as deleteActiveAccountId from '../secure-storage/deleteActiveAccountId';
import * as deletePassword from '../secure-storage/deletePassword';
import * as loadActiveAccountId from '../secure-storage/loadActiveAccountId';

const wrapper: React.ComponentType<React.ProviderProps<void>> = ({children}) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('AuthenticationService logout', () => {
  const spyAccountsMeDeviceTokenApi = jest.spyOn(accountApi, 'postAccountsMeDeviceToken').mockImplementation();
  const spyLogoutApi = jest.spyOn(accountApi, 'postLogout').mockResolvedValue({
    data: undefined,
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(loadActiveAccountId, 'loadActiveAccountId');
  const spySecureStorageAdapterDeleteActiveAccountId = jest.spyOn(deleteActiveAccountId, 'deleteActiveAccountId');
  const spySecureStorageAdapterDeletePassword = jest.spyOn(deletePassword, 'deletePassword');

  beforeEach(() => {
    spyLogoutApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterDeleteActiveAccountId.mockClear();
    spySecureStorageAdapterDeletePassword.mockClear();
  });
  test('ログアウトAPIを呼び出して、セキュアストレージからアクティブアカウントを削除しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    const {result} = renderHook(() => useLogout(), {wrapper});
    await act(async () => {
      await result.current.logout();
      expect(spyAccountsMeDeviceTokenApi).toHaveBeenCalled();
      expect(spyLogoutApi).toHaveBeenCalled();
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapterDeleteActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterDeletePassword).toHaveBeenCalledWith('123456789');
      expect(__mocks.crashlytics.setUserId).toHaveBeenCalledWith('');
    });
  });
  test('ログインしたアカウントIDがnullの場合はセキュアストレージの削除が呼ばれないことを確認', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const {result} = renderHook(() => useLogout(), {wrapper});
    await act(async () => {
      await result.current.logout();
      expect(spyAccountsMeDeviceTokenApi).toHaveBeenCalled();
      expect(spyLogoutApi).toHaveBeenCalled();
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapterDeleteActiveAccountId).not.toHaveBeenCalled();
      expect(spySecureStorageAdapterDeletePassword).not.toHaveBeenCalled();
    });
  });
});
