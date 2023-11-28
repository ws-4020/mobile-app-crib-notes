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

import {ConfigPlugin, withMainApplication} from 'expo/config-plugins';

/**
 * アプリで作成したNative ModulesのReact Packageを追加します。
 * @param config ExpoConfig
 */
export const withAndroidAddNativeModulePackages: ConfigPlugin = config => {
  return withMainApplication(config, config => {
    if (config.modResults.language === 'java') {
      config.modResults.contents = apply(config.modResults.contents);
    } else {
      throw new Error('In this app, only java is supported as the language for MainApplication.');
    }
    return config;
  });
};

const apply = (mainApplication: string): string => {
  return mainApplication.replace(
    /protected\s+List<ReactPackage>\s+getPackages\(\)\s+{[\s\S]*List<ReactPackage>\s+packages\s+=\s+new PackageList\(this\).getPackages\(\)/,
    `protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      packages.add(new ThrowErrorPackage());`,
  );
};
