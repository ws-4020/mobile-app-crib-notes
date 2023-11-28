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

import messaging from '@react-native-firebase/messaging';

import mockedFirebase from './app';

const mock: Omit<
  ReturnType<typeof messaging>,
  // nativeとemitterはprivateなのでここでは除外しておく。
  'native' | 'emitter'
> = {
  app: mockedFirebase.app(),
  isAutoInitEnabled: true,
  setAutoInitEnabled: jest.fn(),
  getInitialNotification: jest.fn(),
  getToken: jest.fn(),
  getIsHeadless: jest.fn(),
  deleteToken: jest.fn(),
  onMessage: jest.fn(),
  onNotificationOpenedApp: jest.fn(),
  onTokenRefresh: jest.fn(),
  requestPermission: jest.fn(),
  registerDeviceForRemoteMessages: jest.fn(),
  isDeviceRegisteredForRemoteMessages: true,
  unregisterDeviceForRemoteMessages: jest.fn(),
  getAPNSToken: jest.fn(),
  hasPermission: jest.fn(),
  onDeletedMessages: jest.fn(),
  onMessageSent: jest.fn(),
  onSendError: jest.fn(),
  setBackgroundMessageHandler: jest.fn(),
  sendMessage: jest.fn(),
  subscribeToTopic: jest.fn(),
  unsubscribeFromTopic: jest.fn(),
  getDidOpenSettingsForNotification: jest.fn(),
  setOpenSettingsForNotificationsHandler: jest.fn(),
  setDeliveryMetricsExportToBigQuery: jest.fn(),
  isSupported: jest.fn().mockResolvedValue(true),
  experimentalSetDeliveryMetricsExportedToBigQueryEnabled: jest.fn(),
  setAPNSToken: jest.fn(),
};

export default () => mock;
