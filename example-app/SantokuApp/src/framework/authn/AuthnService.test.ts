import {AuthnService} from '.';
import {AccountLoginResponseStatusEnum} from '../../generated/api';
import {api} from '../backend/BackendService';
import {generatePassword} from '../utilities/id';

const mockGetCsrfToken = jest.spyOn(api, 'getCsrfToken').mockResolvedValue({
  data: {csrfTokenValue: 'abcdef', csrfTokenHeaderName: 'test', csrfTokenParameterName: 'test'},
  status: 200,
  statusText: 'success',
  headers: {},
  config: {},
});

const mockSignup = jest.spyOn(api, 'postSignup').mockResolvedValue({
  data: {accountId: '123456789', profile: {nickname: 'testNickName'}},
  status: 200,
  statusText: 'success',
  headers: {},
  config: {},
});

const mockLogin = jest.spyOn(api, 'postLogin').mockResolvedValue({
  data: {status: AccountLoginResponseStatusEnum.Complete},
  status: 200,
  statusText: 'success',
  headers: {},
  config: {},
});

const mockLogout = jest.spyOn(api, 'postLogout').mockResolvedValue({
  data: undefined,
  status: 200,
  statusText: 'success',
  headers: {},
  config: {},
});

beforeEach(() => {
  mockGetCsrfToken.mockClear();
  mockSignup.mockClear();
  mockLogin.mockClear();
  mockLogout.mockClear();
});

describe('AuthnService', () => {
  test('サインアップ -> ログイン -> ログアウト', async () => {
    const csrfTokenRes = await AuthnService.getCsrfToken();
    expect(csrfTokenRes).toEqual('abcdef');
    const password = await generatePassword();
    const signupRes = await AuthnService.signup('testNickName', password);
    expect(signupRes).toEqual({accountId: '123456789', profile: {nickname: 'testNickName'}});
    const accountId = signupRes.accountId;
    const loginRes = await AuthnService.login(accountId, password);
    expect(loginRes).toEqual({status: AccountLoginResponseStatusEnum.Complete});
    const logoutRes = await AuthnService.logout();
    expect(logoutRes).toBeUndefined();
  });
});
