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

import {ConfigPlugin, withStringsXml} from 'expo/config-plugins';

/**
 * Avoid image shifting occurs when the splash screen changes from theme background to ImageView shown by expo-splash-screen
 * cf.) https://github.com/expo/expo/tree/master/packages/expo-splash-screen#-optional-customize-statusbar-1
 * @param config ExpoConfig
 */
export const withAndroidEnabledStatusBarTranslucent: ConfigPlugin = config => {
  return withStringsXml(config, config => {
    const strings = config.modResults.resources.string ?? [];
    const filtered = strings?.filter(s => s.$.name !== 'expo_splash_screen_status_bar_translucent');
    config.modResults = {
      resources: {
        ...config.modResults.resources,
        string: [
          ...filtered,
          {
            $: {
              name: 'expo_splash_screen_status_bar_translucent',
              translatable: 'false',
            },
            _: 'true',
          },
        ],
      },
    };
    return config;
  });
};
