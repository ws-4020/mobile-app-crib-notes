import * as Application from 'expo-application';
import * as SecureStore from 'expo-secure-store';
import '@testing-library/jest-native/extend-expect';
import {render, screen, waitFor} from '@testing-library/react-native';
import {BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION} from 'features/backend/utils/customInstance';
import {initialData} from 'fixtures/msw/datas';
import {setupServer} from 'msw/node';
import React from 'react';

import {initialDb} from '../../fixtures/msw/db';
import {handlers} from '../../fixtures/msw/handlers';
import {App} from './App';

// jest.mock('react-native/Libraries/Utilities/DevSettings.js', () => {
//   return {addMenuItem: jest.fn};
// });
// jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'get').mockResolvedValue({
//   status: 200,
//   data: {
//     csrfTokenHeaderName: 'X-CSRF-TOKEN',
//     csrfTokenValue: 'dummy',
//   },
// });
// jest.mock('features/backend/apis/system/system', () => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const originalModule = jest.requireActual('features/backend/apis/system/system');
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   return {
//     ...originalModule,
//     getAppUpdates: jest.fn(() => {
//       return Promise.resolve({
//         status: 200,
//         data: {
//           updateRequired: false,
//           supportedVersion: 'dummy',
//           message: 'dummy',
//         },
//       });
//     }),
//   };
// });
//
// jest.mock('features/backend/apis/account/account', () => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const originalModule = jest.requireActual('features/backend/apis/account/account');
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   return {
//     ...originalModule,
// getAccountsMe: jest.fn(() => {
//   return Promise.resolve({
//     status: 200,
//     data: {
//       accountId: '123456789',
//       deviceTokens: [],
//     },
//   });
// }),
// getAccountsMeTerms: jest.fn(() => {
//   return Promise.resolve({
//     status: 200,
//     data: {
//       hasAgreed: true,
//       agreedVersion: '1.0.0',
//     },
//   });
// }),
//     postLogin: jest.fn(() => {
//       return Promise.resolve({
//         status: 200,
//         data: {
//           status: 'COMPLETE',
//         },
//       });
//     }),
//   };
// });
//
// jest.mock('features/backend/apis/terms/terms', () => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const originalModule = jest.requireActual('features/backend/apis/terms/terms');
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   return {
//     ...originalModule,
//     getTerms: jest.fn(),
//   };
// });

const server = setupServer(...handlers);
beforeAll(async () => {
  initialDb();
  await initialData();
  server.listen();
});
afterAll(() => server.close());

beforeEach(() => {
  // 画面遷移時のアニメーションが、コンポーネントのアンマウント後にステートを更新してしまうようで、
  // テストは成功するものの、エラーログが出力されてしまう。
  // タイマーを使わないようにして、アニメーションを動かさないことで回避しているつもり。
  jest.useFakeTimers();
});

jest.mock('expo-application', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalModule = jest.requireActual('expo-application');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originalModule,
    nativeApplicationVersion: '0.1.0',
  };
});
jest.mock('expo-secure-store', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalModule = jest.requireActual('expo-secure-store');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originalModule,
    getItemAsync: jest.fn((key: string) => {
      return Promise.resolve('santoku');
    }),
  };
});

describe('App', () => {
  it('マウントされたときに正常にレンダリングされること', async () => {
    const result = render(<App />);
    await waitFor(
      () => {
        result.rerender(<App />);
        expect(screen.queryByTestId('HomePage')).not.toBeNull();
        expect(screen).toMatchSnapshot();
      },
      {timeout: 300000},
    );
  }, 300000);
});
