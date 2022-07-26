import {act} from '@testing-library/react-hooks';
import {renderHook} from '@testing-library/react-native';
import * as csrfToken from 'bases/backend/refreshCsrfToken';
import * as accountApi from 'features/backend/apis/account/account';
import {AccountLoginResponseStatus} from 'features/backend/apis/model';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {ActiveAccountIdNotFoundError} from './errors/ActiveAccountIdNotFoundError';
import {PasswordNotFoundError} from './errors/PasswordNotFoundError';
import {useAutoLoginService} from './hooks/useAutoLoginService';
import {useChangeAccountService} from './hooks/useChangeAccountService';
import {useLogoutService} from './hooks/useLogoutService';
import {useRefreshService} from './hooks/useRefreshService';
import {useSignupService} from './hooks/useSignupService';
import {SecureStorageAdapter} from './utils/SecureStorageAdapter';
import {canAutoLogin} from './utils/canAutoLogin';

const wrapper: React.ComponentType<React.ProviderProps<void>> = ({children}) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('AuthenticationService signup', () => {
  test('サインアップAPIを呼び出して、クレデシャルをセキュアストレージに格納しているかの検証', async () => {
    jest.mock('../../generated/backend/account/account');
    const spySignupApi = jest.spyOn(accountApi, 'postSignup').mockResolvedValue({
      data: {
        accountId: '123456789',
        profile: {nickname: 'testNickName', type: ['partner'], points: 0, totalPoints: 0},
        deviceTokens: [],
      },
      status: 200,
      statusText: 'ok',
      headers: {},
      config: {},
    });
    const spySecureStorageAdapterSavePassword = jest.spyOn(SecureStorageAdapter, 'savePassword');
    const {result} = renderHook(() => useSignupService(), {wrapper});
    await act(async () => {
      const res = await result.current.mutateAsync({nickname: 'testNickName', password: 'password123'});
      expect(res).toEqual({
        accountId: '123456789',
        profile: {nickname: 'testNickName', type: ['partner'], points: 0, totalPoints: 0},
        deviceTokens: [],
      });
      expect(spySignupApi).toHaveBeenCalledWith({nickname: 'testNickName', password: 'password123'});
      expect(spySecureStorageAdapterSavePassword).toHaveBeenCalledWith('123456789', 'password123');
    });
  });
});

describe('AuthenticationService changeAccount', () => {
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
    const spySecureStorageAdapter = jest.spyOn(SecureStorageAdapter, 'loadPassword').mockResolvedValue('password123');
    const {result} = renderHook(() => useChangeAccountService(), {wrapper});
    await act(async () => {
      const res = await result.current.mutateAsync({accountId: '123456789'});
      expect(res).toEqual({status: AccountLoginResponseStatus.COMPLETE});
      expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapter).toHaveBeenCalledWith('123456789');
    });
  });

  test('セキュアストレージからパスワードを取得できなかった場合の検証', async () => {
    jest.spyOn(SecureStorageAdapter, 'loadPassword').mockResolvedValue(null);
    const {result} = renderHook(() => useChangeAccountService(), {wrapper});
    await act(async () => {
      const changeAccount = result.current.mutateAsync({accountId: '123456789'});
      await expect(changeAccount).rejects.toThrowError(PasswordNotFoundError);
    });
  });
});

describe('AuthenticationService autoLogin', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const {result} = renderHook(() => useAutoLoginService(), {wrapper});
    await act(async () => {
      const res = await result.current.mutateAsync();
      expect(res).toEqual({status: AccountLoginResponseStatus.COMPLETE});
      expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
      expect(__mocks.crashlytics.setUserId).toHaveBeenCalledWith('123456789');
    });
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const {result} = renderHook(() => useAutoLoginService(), {wrapper});
    await act(async () => {
      const autoLogin = result.current.mutateAsync();
      await expect(autoLogin).rejects.toThrowError(ActiveAccountIdNotFoundError);
    });
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const {result} = renderHook(() => useAutoLoginService(), {wrapper});
    await act(async () => {
      const autoLogin = result.current.mutateAsync();
      await expect(autoLogin).rejects.toThrowError(PasswordNotFoundError);
    });
  });
});

describe('AuthenticationService canAutoLogin', () => {
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

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

describe('AuthenticationService refresh', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const {result} = renderHook(() => useRefreshService(), {wrapper});
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
    const {result} = renderHook(() => useRefreshService(), {wrapper});
    await act(async () => {
      const refresh = result.current.mutateAsync();
      await expect(refresh).rejects.toThrowError(ActiveAccountIdNotFoundError);
    });
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const {result} = renderHook(() => useRefreshService(), {wrapper});
    await act(async () => {
      const refresh = result.current.mutateAsync();
      await expect(refresh).rejects.toThrowError(PasswordNotFoundError);
    });
  });
});

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
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterDeleteActiveAccountId = jest.spyOn(SecureStorageAdapter, 'deleteActiveAccountId');
  const spySecureStorageAdapterDeletePassword = jest.spyOn(SecureStorageAdapter, 'deletePassword');

  beforeEach(() => {
    spyLogoutApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterDeleteActiveAccountId.mockClear();
    spySecureStorageAdapterDeletePassword.mockClear();
  });
  test('ログアウトAPIを呼び出して、セキュアストレージからアクティブアカウントを削除しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    const {result} = renderHook(() => useLogoutService(), {wrapper});
    await act(async () => {
      await result.current.mutateAsync();
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
    const {result} = renderHook(() => useLogoutService(), {wrapper});
    await act(async () => {
      await result.current.mutateAsync();
      expect(spyAccountsMeDeviceTokenApi).toHaveBeenCalled();
      expect(spyLogoutApi).toHaveBeenCalled();
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapterDeleteActiveAccountId).not.toHaveBeenCalled();
      expect(spySecureStorageAdapterDeletePassword).not.toHaveBeenCalled();
    });
  });
});
