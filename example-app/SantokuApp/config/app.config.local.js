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

const withIosDisabledATS = require('./app.plugin.js').withIosDisabledATS;
const withIosSetCredentials = require('./app.plugin.js').withIosSetCredentials;
const withIosAddPersonalAccountConfig = require('./app.plugin.js').withIosAddPersonalAccountConfig;
const generateDeepLinkIntentFilter = require('./utils/generateDeepLinkIntentFilter');

const deepLinkPathPrefix = 'local';
const deepLinkIntentFilter = generateDeepLinkIntentFilter(deepLinkPathPrefix);

module.exports = config => {
  return {
    name: 'Local SantokuApp',
    android: {
      package: 'jp.fintan.mobile.SantokuApp.local',
      adaptiveIcon: {
        foregroundImage: './assets/android/ic_launcher_foreground_local.png',
      },
      googleServicesFile: './google-services-dummy.json',
      intentFilters: [deepLinkIntentFilter],
    },
    ios: {
      // ExpoのデフォルトConfigPluginでは、「$」のような記号をBundleIdentifierに設定出来なかったため、このアプリで作成した「withSetCredentials」Pluginで設定しています。
      // bundleIdentifier: 'personal.jp.fintan.mobile.SantokuApp.dev.debug.${PERSONAL_IDENTIFIER}',
      googleServicesFile: './GoogleService-Info.Dummy.plist',
      icon: './assets/ios/ic_local.png',
      infoPlist: {
        UIBackgroundModes: undefined,
      },
    },
    plugins: [
      // このアプリで用意しているiOS用のプラグイン
      withIosDisabledATS,
      [
        withIosSetCredentials,
        {
          developmentTeam: '${DEVELOPMENT_TEAM}',
          codeSignStyle: '${CODE_SIGN_STYLE}',
          bundleIdentifier: 'personal.jp.fintan.mobile.SantokuApp.local.${PERSONAL_IDENTIFIER}',
        },
      ],
      withIosAddPersonalAccountConfig,
    ],
    extra: {
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
      deepLinkPathPrefix,
    },
  };
};
