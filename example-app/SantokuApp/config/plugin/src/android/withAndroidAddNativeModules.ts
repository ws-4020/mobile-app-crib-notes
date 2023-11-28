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

import {ConfigPlugin, withPlugins} from 'expo/config-plugins';

import {withAndroidAddNativeModulePackages} from './withAndroidAddNativeModulePackages';
import {withAndroidCopyTemplateJavaFile} from './withAndroidCopyTemplateJavaFile';
import {ANDROID} from '../constants';

const THROW_ERROR_MODULE_FILE_NAME = 'ThrowErrorModule.java';
const THROW_ERROR_PACKAGE_FILE_NAME = 'ThrowErrorPackage.java';

/**
 * アプリで作成したNativeModulesを追加します。
 * @param config ExpoConfig
 */
export const withAndroidAddNativeModules: ConfigPlugin = config => {
  return withPlugins(config, [
    [
      withAndroidCopyTemplateJavaFile,
      {srcDir: ANDROID.PLUGIN_TEMPLATE_MAIN_ACTIVITY_DIR, fileName: THROW_ERROR_MODULE_FILE_NAME},
    ],
    [
      withAndroidCopyTemplateJavaFile,
      {srcDir: ANDROID.PLUGIN_TEMPLATE_MAIN_ACTIVITY_DIR, fileName: THROW_ERROR_PACKAGE_FILE_NAME},
    ],
    withAndroidAddNativeModulePackages,
  ]);
};
