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

import {ConfigPlugin, withDangerousMod} from 'expo/config-plugins';
import fs from 'fs';
import path from 'path';

import {getMainActivityDir} from './getMainActivityDir';
import {copyFile} from '../utils/copyFile';

/**
 * テンプレートに存在するファイルを、「android/app/main/java/[パッケージ名]」配下にコピーします。
 * @param config ExpoConfig
 * @param srcDir テンプレートファイルが存在するディレクトリ
 * @param fileName テンプレートファイル名
 */
export const withAndroidCopyTemplateJavaFile: ConfigPlugin<{srcDir: string; fileName: string}> = (
  config,
  {srcDir, fileName},
) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      if (!config.android?.package) {
        // packageは必ず設定されている想定
        throw new Error('Package is not set.');
      }
      const projectRoot = config.modRequest.projectRoot;
      const src = path.resolve(projectRoot, srcDir, fileName);
      const dest = path.resolve(await getMainActivityDir(projectRoot), fileName);
      copyFile(src, dest);
      renameJavaPackage(dest, 'com.helloworld', config.android.package);
      return config;
    },
  ]);
};

const renameJavaPackage = (filePath: string, fromPackageName: string, toPackageName: string) => {
  try {
    if (fs.lstatSync(filePath).isFile()) {
      let contents = fs.readFileSync(filePath).toString();
      contents = contents.replace(new RegExp(fromPackageName, 'g'), toPackageName);
      fs.writeFileSync(filePath, contents);
    }
  } catch (e) {
    throw new Error(`Cannot rename package of ${filePath} from ${fromPackageName} to ${toPackageName}. ${String(e)}.`);
  }
};
