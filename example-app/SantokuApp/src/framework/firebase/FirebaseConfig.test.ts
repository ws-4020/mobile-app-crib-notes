import firebase from '@react-native-firebase/app';

import {FirebaseConfig, firebaseConfig} from './FirebaseConfig';

const mockNonDummySettings = {
  name: 'nonDummy',
  options: {
    appId: 'non dummy firebase app id',
    projectId: 'non dummy',
  },
  delete: jest.fn(),
  utils: jest.fn(),
  crashlytics: jest.fn(),
};

const mockDummySettings = {
  name: 'dummy',
  options: {
    appId: 'dummy firebase app id',
    projectId: 'dummy',
  },
  delete: jest.fn(),
  utils: jest.fn(),
  crashlytics: jest.fn(),
};

describe('Firebase Config', () => {
  test('Firebaseインスタンス名を指定していない場合はFirebaseインスタンス名がデフォルト値になることの検証', () => {
    expect(firebaseConfig.name).toEqual('DEFAULT');
  });
  test('指定したFirebaseインスタンス名を取得できるかの検証', () => {
    expect(new FirebaseConfig('testApp').name).toEqual('testApp');
  });
  test('FirebaseインスタンスのOption情報を取得できるかの検証', () => {
    expect(firebaseConfig.options).toEqual({
      appId: 'mocked firebase app id',
      projectId: 'mocked firebase project id',
    });
  });
  test('Firebaseの接続情報がダミーの場合の検証', () => {
    const spy = jest.spyOn(firebase, 'app');
    spy.mockReturnValue(mockDummySettings);
    expect(new FirebaseConfig().isDummy).toEqual(true);
    spy.mockRestore();
  });
  test('Firebaseの接続情報がダミーではない場合の検証', () => {
    const spy = jest.spyOn(firebase, 'app');
    spy.mockReturnValue(mockNonDummySettings);
    expect(new FirebaseConfig().isDummy).toEqual(false);
    spy.mockRestore();
  });
});
