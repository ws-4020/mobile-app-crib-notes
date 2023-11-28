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

import {ConfigPlugin, withAndroidStyles} from 'expo/config-plugins';

/**
 * Avoid image shifting occurs when the splash screen changes from theme background to ImageView shown by expo-splash-screen
 * cf.) https://github.com/crazycodeboy/react-native-splash-screen/issues/241
 * @param config ExpoConfig
 */
export const withAndroidDisabledWindowDrawsSystemBarBackgrounds: ConfigPlugin = config => {
  return withAndroidStyles(config, config => {
    const styles = config.modResults.resources.style ?? [];
    const filtered = styles?.filter(s => s.$.name !== 'Theme.App.SplashScreen');
    const originalSplashScreenStyle = styles.find(s => s.$.name === 'Theme.App.SplashScreen');
    const splashScreenStyle = originalSplashScreenStyle
      ? [
          {
            $: originalSplashScreenStyle.$,
            item: [
              ...originalSplashScreenStyle.item,
              {
                _: 'false',
                $: {
                  name: 'android:windowDrawsSystemBarBackgrounds',
                },
              },
            ],
          },
        ]
      : [];
    config.modResults = {resources: {...config.modResults.resources, style: [...filtered, ...splashScreenStyle]}};
    return config;
  });
};
