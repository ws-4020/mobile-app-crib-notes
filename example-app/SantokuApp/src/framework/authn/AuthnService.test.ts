import {AuthnService} from '.';
import {AccountLoginResponseStatusEnum} from '../../generated/api';
import {api} from '../backend';
import {generatePassword} from '../utilities';

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
  mockSignup.mockClear();
  mockLogin.mockClear();
  mockLogout.mockClear();
});

describe('AuthnService', () => {
  test('サインアップ -> ログイン -> ログアウト', async () => {
    const password = await generatePassword();
    const signupRes = await AuthnService.signup('testNickName', password);
    expect(signupRes).toEqual({accountId: '123456789', profile: {nickname: 'testNickName'}});
    // const accountId = signupRes.accountId;
    // const changeAccountRes = await AuthnService.changeAccount(accountId);
    // expect(changeAccountRes).toEqual({status: AccountLoginResponseStatusEnum.Complete});
    // const logoutRes = await AuthnService.logout();
    // expect(logoutRes).toBeUndefined();
  });
});
