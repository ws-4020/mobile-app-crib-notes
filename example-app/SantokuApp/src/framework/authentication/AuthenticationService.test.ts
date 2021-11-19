import {AuthnService} from '.';
import {AccountLoginResponseStatusEnum} from '../../generated/api';
import {api} from '../backend';
import {ActiveAccountIdNotFoundError, PasswordNotFoundError} from './AuthenticationService';
import {SecureStorageAdapter} from './SecureStorageAdapter';

describe('AuthnService signup', () => {
  test('サインアップAPIを呼び出して、クレデシャルをセキュアストレージに格納しているかの検証', async () => {
    const spySignupApi = jest.spyOn(api, 'postSignup').mockResolvedValue({
      data: {accountId: '123456789', profile: {nickname: 'testNickName'}},
      status: 200,
      statusText: 'ok',
      headers: {},
      config: {},
    });
    const res = await AuthnService.signup('testNickName', 'password123');
    expect(res).toEqual({accountId: '123456789', profile: {nickname: 'testNickName'}});
    expect(spySignupApi).toHaveBeenCalledWith({nickname: 'testNickName', password: 'password123'});
  });
});

describe('AuthnService changeAccount', () => {
  const spyLoginApi = jest.spyOn(api, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatusEnum.Complete},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });

  beforeEach(() => {
    spyLoginApi.mockClear();
  });

  test('セキュアストレージからパスワードを取得してログインAPIを呼び出しているかの検証', async () => {
    const spySecureStorageAdapter = jest.spyOn(SecureStorageAdapter, 'loadPassword').mockResolvedValue('password123');
    const res = await AuthnService.changeAccount('123456789');
    expect(res).toEqual({status: AccountLoginResponseStatusEnum.Complete});
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spySecureStorageAdapter).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからパスワードを取得できなかった場合の検証', async () => {
    jest.spyOn(SecureStorageAdapter, 'loadPassword').mockResolvedValue(null);
    const changeAccount = AuthnService.changeAccount('123456789');
    await expect(changeAccount).rejects.toThrowError(PasswordNotFoundError);
    await expect(changeAccount).rejects.toThrowError('The password for the account ID does not exist.');
  });
});

describe('AuthnService autoLogin', () => {
  const spyLoginApi = jest.spyOn(api, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatusEnum.Complete},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const res = await AuthnService.autoLogin();
    expect(res).toEqual({status: AccountLoginResponseStatusEnum.Complete});
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const autoLogin = AuthnService.autoLogin();
    await expect(autoLogin).rejects.toThrowError(ActiveAccountIdNotFoundError);
    await expect(autoLogin).rejects.toThrowError('There is no auto-login enabled account.');
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const autoLogin = AuthnService.autoLogin();
    await expect(autoLogin).rejects.toThrowError(PasswordNotFoundError);
    await expect(autoLogin).rejects.toThrowError('The password for the account ID does not exist.');
  });
});

describe('AuthnService canAutoLogin', () => {
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得できる場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const res = await AuthnService.canAutoLogin();
    expect(res).toBeTruthy();
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できない場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const res = await AuthnService.canAutoLogin();
    expect(res).toBeFalsy();
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).not.toHaveBeenCalled();
  });

  test('セキュアストレージからパスワードを取得できない場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const res = await AuthnService.canAutoLogin();
    expect(res).toBeFalsy();
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
  });
});

describe('AuthnService refresh', () => {
  const spyLoginApi = jest.spyOn(api, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatusEnum.Complete},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const res = await AuthnService.refresh();
    expect(res).toEqual({status: AccountLoginResponseStatusEnum.Complete});
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const refresh = AuthnService.refresh();
    await expect(refresh).rejects.toThrowError(ActiveAccountIdNotFoundError);
    await expect(refresh).rejects.toThrowError('There is no auto-login enabled account.');
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const refresh = AuthnService.refresh();
    await expect(refresh).rejects.toThrowError(PasswordNotFoundError);
    await expect(refresh).rejects.toThrowError('The password for the account ID does not exist.');
  });
});

describe('AuthnService logout', () => {
  const spyLogoutApi = jest.spyOn(api, 'postLogout').mockResolvedValue({
    data: undefined,
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spySecureStorageAdapterDeleteActiveAccountId = jest.spyOn(SecureStorageAdapter, 'deleteActiveAccountId');

  beforeEach(() => {
    spyLogoutApi.mockClear();
    spySecureStorageAdapterDeleteActiveAccountId.mockClear();
  });
  test('ログアウトAPIを呼び出して、セキュアストレージからアクティブアカウントを削除しているかの検証', async () => {
    await AuthnService.logout();
    expect(spyLogoutApi).toHaveBeenCalled();
    expect(spySecureStorageAdapterDeleteActiveAccountId).toHaveBeenCalled();
  });
});
