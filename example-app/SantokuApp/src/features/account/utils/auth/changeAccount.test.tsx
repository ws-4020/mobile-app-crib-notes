import {act} from '@testing-library/react-hooks';
import {renderHook} from '@testing-library/react-native';
import * as accountApi from 'features/backend/apis/account/account';
import {AccountLoginResponseStatus} from 'features/backend/apis/model';
import * as csrfToken from 'features/backend/utils/refreshCsrfToken';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {PasswordNotFoundError} from '../../errors/PasswordNotFoundError';
import {useChangeAccount} from '../../hooks/useChangeAccount';
import * as loadPassword from '../secure-storage/loadPassword';

const wrapper: React.ComponentType<React.ProviderProps<void>> = ({children}) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('changeAccount', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();

  beforeEach(() => {
    spyLoginApi.mockClear();
    spyRefreshCsrfToken.mockClear();
  });

  test('セキュアストレージからパスワードを取得してログインAPIを呼び出しているかの検証', async () => {
    const spySecureStorageAdapter = jest.spyOn(loadPassword, 'loadPassword').mockResolvedValue('password123');
    const {result} = renderHook(() => useChangeAccount(), {wrapper});
    await act(async () => {
      const res = await result.current.mutateAsync({accountId: '123456789'});
      expect(res).toEqual({status: AccountLoginResponseStatus.COMPLETE});
      expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapter).toHaveBeenCalledWith('123456789');
    });
  });

  test('セキュアストレージからパスワードを取得できなかった場合の検証', async () => {
    jest.spyOn(loadPassword, 'loadPassword').mockResolvedValue(null);
    const {result} = renderHook(() => useChangeAccount(), {wrapper});
    await act(async () => {
      const changeAccount = result.current.mutateAsync({accountId: '123456789'});
      await expect(changeAccount).rejects.toThrowError(PasswordNotFoundError);
    });
  });
});
