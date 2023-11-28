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

const withAndroidAppBuildGradleForRelease = require('./app.plugin.js').withAndroidAppBuildGradleForRelease;
const withIosEnabledATS = require('./app.plugin.js').withIosEnabledATS;
const withIosSetCredentials = require('./app.plugin.js').withIosSetCredentials;
const generateDeepLinkIntentFilter = require('./utils/generateDeepLinkIntentFilter');

const deepLinkIntentFilter = generateDeepLinkIntentFilter();

module.exports = config => {
  return {
    android: {
      intentFilters: [deepLinkIntentFilter],
    },
    plugins: [
      // このアプリで用意しているAndroid用のプラグイン
      withAndroidAppBuildGradleForRelease,

      // このアプリで用意しているiOS用のプラグイン
      withIosEnabledATS,
      [
        withIosSetCredentials,
        {
          developmentTeam: '7Y9M87SSC3',
          codeSignStyle: 'Manual',
          provisioningProfileSpecifier: 'SantokuApp AppStore Development',
        },
      ],
    ],
  };
};
