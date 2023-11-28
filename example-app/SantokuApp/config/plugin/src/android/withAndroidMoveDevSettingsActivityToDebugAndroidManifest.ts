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

import {ConfigPlugin, withAndroidManifest, AndroidConfig} from 'expo/config-plugins';
import path from 'path';

/**
 * DevSettingsActivityの設定を「main/AndroidManifest.xml」から「debug/AndroidManifest.xml」に移動します。
 * @param config ExpoConfig
 */
export const withAndroidMoveDevSettingsActivityToDebugAndroidManifest: ConfigPlugin = config => {
  return withAndroidManifest(config, async config => {
    const androidManifest = config.modResults;
    const mainApplication = androidManifest.manifest.application?.find(a => a.$['android:name'] === '.MainApplication');
    if (!mainApplication) {
      // MainApplicationは必ず存在する想定
      throw new Error('MainApplication does not exist in AndroidManifest.');
    }
    const originalDevSettingsActivity = mainApplication.activity?.find(
      a => a.$['android:name'] === 'com.facebook.react.devsupport.DevSettingsActivity',
    );
    if (!originalDevSettingsActivity) {
      return config;
    }

    await addDevSettingsActivityToDebugAndroidManifest(
      config.modRequest.platformProjectRoot,
      originalDevSettingsActivity,
    );

    const restApplication =
      androidManifest.manifest.application?.filter(a => a.$['android:name'] !== '.MainApplication') ?? [];
    const restActivity =
      mainApplication.activity?.filter(
        a => a.$['android:name'] !== 'com.facebook.react.devsupport.DevSettingsActivity',
      ) ?? [];
    config.modResults = {
      ...androidManifest,
      manifest: {
        ...androidManifest.manifest,
        application: [
          {
            ...mainApplication,
            activity: restActivity,
          },
          ...restApplication,
        ],
      },
    };
    return config;
  });
};

const addDevSettingsActivityToDebugAndroidManifest = async (
  platformProjectRoot: string,
  originalDevSettingsActivity: AndroidConfig.Manifest.ManifestActivity,
) => {
  const {readAndroidManifestAsync, writeAndroidManifestAsync} = AndroidConfig.Manifest;
  const debugAndroidManifestPath = path.resolve(platformProjectRoot, 'app/src/debug/AndroidManifest.xml');
  const originalDebugAndroidManifest = await readAndroidManifestAsync(debugAndroidManifestPath);
  if (!originalDebugAndroidManifest.manifest.application?.length) {
    // applicationは必ず存在する想定
    throw new Error('Application does not exist in debug/AndroidManifest.');
  }
  const debugApplication = originalDebugAndroidManifest.manifest.application[0];

  const debugAndroidManifest = {
    manifest: {
      ...originalDebugAndroidManifest.manifest,
      application: [{...debugApplication, activity: [{...originalDevSettingsActivity}]}],
    },
  };
  await writeAndroidManifestAsync(debugAndroidManifestPath, debugAndroidManifest);
};
