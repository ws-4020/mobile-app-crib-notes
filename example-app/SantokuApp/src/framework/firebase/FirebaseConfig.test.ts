import firebase from '@react-native-firebase/app';

import {firebaseConfig} from './FirebaseConfig';

describe('Firebase Config', () => {
  test('FirebaseインスタンスのOption情報を取得できるかの検証', () => {
    expect(firebaseConfig.options).toEqual({
      appId: 'mocked firebase app id',
      projectId: 'mocked firebase project id',
    });
  });
  test('Firebaseの接続情報がダミーの場合の検証', () => {
    const spy = jest.spyOn(firebase, 'app');
    spy.mockReturnValue({
      name: 'dummy',
      options: {
        appId: 'dummy firebase app id',
        projectId: 'santoku-app-dummy',
      },
      delete: jest.fn(),
      utils: jest.fn(),
      crashlytics: jest.fn(),
    });
    expect(firebaseConfig.isDummy).toEqual(true);
    spy.mockRestore();
  });
  test('Firebaseの接続情報がダミーではない場合の検証', () => {
    expect(firebaseConfig.isDummy).toEqual(false);
  });
});
