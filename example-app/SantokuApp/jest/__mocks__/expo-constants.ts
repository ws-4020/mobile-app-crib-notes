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

import ExpoConstants from 'expo-constants';

import {wrapProperty} from '../utils/wrapProperty';

export const Constants = wrapProperty(ExpoConstants, {
  expoConfig: {
    name: 'SantokuApp',
    slug: 'santokuApp',
    extra: {
      termsUrl: 'https://www.tis.co.jp/termsofuse/',
      santokuAppBackendUrl: 'http://localhost:9080',
      requestTimeout: undefined,
      appStoreAppUrl: 'itms-apps://itunes.apple.com/jp/app/{appleAppId}',
      googlePlayAppUrl: 'https://play.google.com/store/apps/details?id={applicationId}',
      mobileAppCribNotesWebsiteUrl: 'https://fintan-contents.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/Fintan-contents/mobile-app-crib-notes',
      mswEnabled: false,
    },
  },
});

export default Constants;
