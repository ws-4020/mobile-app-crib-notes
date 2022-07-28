import {act} from '@testing-library/react-hooks';
import {renderHook} from '@testing-library/react-native';
import * as accountApi from 'features/backend/apis/account/account';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {useSignupService} from '../../hooks/useSignupService';
import * as savePassword from '../../utils/secure-storage/savePassword';

const wrapper: React.ComponentType<React.ProviderProps<void>> = ({children}) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

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
