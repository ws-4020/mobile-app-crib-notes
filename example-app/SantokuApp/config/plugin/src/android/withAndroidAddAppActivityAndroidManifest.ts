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

import {ConfigPlugin, withAndroidManifest} from 'expo/config-plugins';

/**
 * AppActivityをAndroidManifest.xmlに追加します。
 * @param config ExpoConfig
 */
export const withAndroidAddAppActivityAndroidManifest: ConfigPlugin = config => {
  return withAndroidManifest(config, config => {
    const androidManifest = config.modResults;
    const mainApplication = androidManifest.manifest.application?.find(a => a.$['android:name'] === '.MainApplication');
    if (!mainApplication) {
      // MainApplicationは必ず存在する想定
      throw new Error('MainApplication does not exist in AndroidManifest.');
    }
    const originalMainActivity = mainApplication.activity?.find(a => a.$['android:name'] === '.MainActivity');
    if (!originalMainActivity) {
      throw new Error('MainActivity does not exist in AndroidManifest application.');
    }
    const mainActivity = {
      ...originalMainActivity,
      $: {
        'android:name': '.MainActivity',
        'android:theme': '@style/Theme.App.SplashScreen',
        'android:exported': 'true' as const,
      },
    };
    const restApplication =
      androidManifest.manifest.application?.filter(a => a.$['android:name'] !== '.MainApplication') ?? [];
    const restActivity = mainApplication.activity?.filter(a => a.$['android:name'] !== '.MainActivity') ?? [];

    config.modResults = {
      ...androidManifest,
      manifest: {
        ...androidManifest.manifest,
        application: [
          {
            ...mainApplication,
            activity: [
              mainActivity,
              {
                $: {
                  ...originalMainActivity.$,
                  'android:name': '.AppActivity',
                  'android:exported': 'false',
                  'android:theme': undefined,
                },
              },
              ...restActivity,
            ],
          },
          ...restApplication,
        ],
      },
    };
    return config;
  });
};
