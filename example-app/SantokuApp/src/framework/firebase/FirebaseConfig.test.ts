import firebase from '@react-native-firebase/app';

import {firebaseConfig} from './FirebaseConfig';

const mockAppWithNonDummySettings = {
  name: 'mock',
  options: {
    appId: 'mocked firebase app id',
    projectId: 'mocked firebase project id',
  },
  delete: jest.fn(),
  utils: jest.fn(),
  crashlytics: jest.fn(),
};

const mockAppWithDummySettings = {
  name: 'dummy',
  options: {
    appId: 'dummy firebase app id',
    projectId: 'santoku-app-dummy',
  },
  delete: jest.fn(),
  utils: jest.fn(),
  crashlytics: jest.fn(),
};

describe('Firebase Config', () => {
  const spy = jest.spyOn(firebase, 'app');
  afterEach(() => {
    spy.mockClear();
  });
  test('FirebaseインスタンスのOption情報を取得できるかの検証', () => {
    spy.mockReturnValue(mockAppWithNonDummySettings);
    expect(firebaseConfig.options).toEqual({
      appId: 'mocked firebase app id',
      projectId: 'mocked firebase project id',
    });
  });
  test('Firebaseの接続情報がダミーの場合の検証', () => {
    spy.mockReturnValue(mockAppWithDummySettings);
    expect(firebaseConfig.isDummy).toEqual(true);
  });
  test('Firebaseの接続情報がダミーではない場合の検証', () => {
    spy.mockReturnValue(mockAppWithNonDummySettings);
    expect(firebaseConfig.isDummy).toEqual(false);
  });
});
