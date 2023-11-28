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

import notifee from '@notifee/react-native';
export * from '@notifee/react-native/dist/types/Library';
export * from '@notifee/react-native/dist/types/Notification';
export * from '@notifee/react-native/dist/types/Trigger';
export * from '@notifee/react-native/dist/types/NotificationIOS';
export * from '@notifee/react-native/dist/types/NotificationAndroid';

const mock: typeof notifee = {
  cancelAllNotifications: jest.fn(),
  cancelDisplayedNotifications: jest.fn(),
  cancelTriggerNotifications: jest.fn(),
  cancelNotification: jest.fn(),
  cancelDisplayedNotification: jest.fn(),
  cancelTriggerNotification: jest.fn(),
  createChannel: jest.fn(),
  createChannels: jest.fn(),
  createChannelGroup: jest.fn(),
  createChannelGroups: jest.fn(),
  deleteChannel: jest.fn(),
  deleteChannelGroup: jest.fn(),
  displayNotification: jest.fn(),
  openAlarmPermissionSettings: jest.fn(),
  createTriggerNotification: jest.fn(),
  getTriggerNotificationIds: jest.fn(),
  getDisplayedNotifications: jest.fn(),
  getTriggerNotifications: jest.fn(),
  getChannel: jest.fn(),
  isChannelCreated: jest.fn(),
  isChannelBlocked: jest.fn(),
  getChannels: jest.fn(),
  getChannelGroup: jest.fn(),
  getChannelGroups: jest.fn(),
  getInitialNotification: jest.fn(),
  onBackgroundEvent: jest.fn(),
  onForegroundEvent: jest.fn(),
  openNotificationSettings: jest.fn(),
  registerForegroundService: jest.fn(),
  stopForegroundService: jest.fn(),
  requestPermission: jest.fn(),
  setNotificationCategories: jest.fn(),
  getNotificationCategories: jest.fn(),
  getNotificationSettings: jest.fn(),
  getBadgeCount: jest.fn(),
  setBadgeCount: jest.fn(),
  incrementBadgeCount: jest.fn(),
  decrementBadgeCount: jest.fn(),
  openBatteryOptimizationSettings: jest.fn(),
  isBatteryOptimizationEnabled: jest.fn(),
  getPowerManagerInfo: jest.fn(),
  openPowerManagerSettings: jest.fn(),
  hideNotificationDrawer: jest.fn(),
  SDK_VERSION: '5.4.1',
};

// 複数のファイルでnotifeeをimportしていた場合に、redefineされないようにモックが存在するか確認
if (!__mocks.notifee) {
  Object.defineProperty(__mocks, 'notifee', {value: mock});
}

export default mock;
