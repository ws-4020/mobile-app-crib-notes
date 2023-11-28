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

import {ConfigPlugin, withAppBuildGradle} from 'expo/config-plugins';

/**
 * libraryのライセンス一覧を取得するpluginを追加します。
 * @param config ExpoConfig
 */
export const withAndroidAddLicensePlugin: ConfigPlugin = config => {
  return withAppBuildGradle(config, config => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = apply(config.modResults.contents);
    } else {
      throw new Error('In this app, only groovy is supported as the language for build.gradle.');
    }
    return config;
  });
};

const apply = (buildGradle: string): string => {
  // plugins block は記述場所に制限がある。他の plugin 追加とコンフリクトしないようにするため既存の biuldGradle を挟み込むように追加する
  return `
plugins {
  id "com.jaredsburrows.license" version "0.9.3"
}
${buildGradle}

licenseReport {
  generateCsvReport  = false
  generateHtmlReport = false
  generateJsonReport = true  // android/app/build/reports/licenses/licenseReleaseReport.json
  generateTextReport = false
}
`.trimStart();
};
