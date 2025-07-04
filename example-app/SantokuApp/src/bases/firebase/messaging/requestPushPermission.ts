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
import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {PermissionsAndroid, Platform} from 'react-native';

export const requestPushPermission = async () => {
  try {
    // AndroidのAPIレベル33以降はPUSH通知送信のためにユーザによる権限の許可が必要だが、
    // messaging().requestPermission()では権限を要求するダイアログが表示されないため
    // 以下の実装でダイアログ表示と権限状態の取得を行う。
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const permissionStatus = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      if (permissionStatus === 'granted') {
        return messaging.AuthorizationStatus.AUTHORIZED;
      }
      return messaging.AuthorizationStatus.DENIED;
    }

    return await messaging().requestPermission();
  } catch (e) {
    throw new RequestPushPermissionError('Failed to request push permission.', e, 'RequestPushPermissionError');
  }
};

export class RequestPushPermissionError extends ApplicationError {}

export function isRequestPushPermissionError(error: unknown): error is RequestPushPermissionError {
  return error instanceof RequestPushPermissionError;
}
