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

import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const authWithFallback = async () => {
  const result = await LocalAuthentication.authenticate({
    promptMessage: '認証テスト',
    cancelLabel: 'キャンセル',
    fallbackLabel: '失敗時の基本認証',
    disableDeviceFallback: false,
    requireConfirmation: false,
  });
  alert(JSON.stringify(result));
};
