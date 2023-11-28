/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import crashlytics from '@react-native-firebase/crashlytics';

import mockedFirebase from './app';

const mock: Omit<
  ReturnType<typeof crashlytics>,
  // nativeとemitterはprivateなのでここでは除外しておく。
  'native' | 'emitter'
> = {
  app: mockedFirebase.app(),
  checkForUnsentReports: jest.fn(),
  crash: jest.fn(),
  deleteUnsentReports: jest.fn(),
  didCrashOnPreviousExecution: jest.fn(),
  isCrashlyticsCollectionEnabled: true, // なぜか型定義上`true`しか許容されない、、、
  log: jest.fn(),
  sendUnsentReports: jest.fn(),
  setAttribute: jest.fn(),
  setAttributes: jest.fn(),
  setCrashlyticsCollectionEnabled: jest.fn(),
  setUserId: jest.fn(),
  recordError: jest.fn(),
};

// 複数のファイルでcrashlyticsをimportしていた場合に、redefineされないようにモックが存在するか確認
if (!__mocks.crashlytics) {
  Object.defineProperty(__mocks, 'crashlytics', {value: mock});
}

export default () => mock;
