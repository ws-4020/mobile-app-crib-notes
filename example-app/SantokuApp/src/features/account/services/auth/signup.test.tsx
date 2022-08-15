import * as accountApi from 'features/backend/apis/account/account';
import * as savePassword from 'features/secure-storage/services/savePassword';

import {signup} from './signup';

describe('signup', () => {
  test('サインアップAPIを呼び出して、クレデシャルをセキュアストレージに格納しているかの検証', async () => {
    jest.mock('features/backend/apis/account/account');
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
    const spySecureStorageAdapterSavePassword = jest.spyOn(savePassword, 'savePassword');
    const res = await signup('testNickName');
    expect(res).toEqual({
      accountId: '123456789',
      profile: {nickname: 'testNickName', type: ['partner'], points: 0, totalPoints: 0},
      deviceTokens: [],
    });
    expect(spySignupApi).toHaveBeenCalledWith({nickname: 'testNickName', password: 'password123'});
    expect(spySecureStorageAdapterSavePassword).toHaveBeenCalledWith('123456789', 'password123');
  });
});
