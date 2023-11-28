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

import {ConfigPlugin, withInfoPlist} from 'expo/config-plugins';

/**
 * ATS（App Transport Security）を有効化します。
 * @param config ExpoConfig
 */
export const withIosEnabledATS: ConfigPlugin = config => {
  return withInfoPlist(config, config => {
    config.modResults = {...config.modResults, NSAppTransportSecurity: undefined};
    return config;
  });
};
