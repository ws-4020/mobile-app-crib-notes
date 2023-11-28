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
import {getMainActivityPath} from './getMainActivityPath';
import {copyFile} from '../utils/copyFile';

/**
 * MainActivity.javaをコピーして、指定のクラス名に変更します。
 * @param config ExpoConfig
 * @param toClassName コピー先のクラス名
 */
export const withAndroidCopyMainActivity: ConfigPlugin<{toClassName: string}> = (config, {toClassName}) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      const projectRoot = config.modRequest.projectRoot;
      const mainActivityDir = await getMainActivityDir(projectRoot);
      const mainActivityPath = await getMainActivityPath(projectRoot);
      const toPath = path.resolve(mainActivityDir, `${toClassName}.java`);
      copyFile(mainActivityPath, toPath);
      renameClassName(toPath, toClassName);
      return config;
    },
  ]);
};

const renameClassName = (mainActivityPath: string, toClassName: string) => {
  try {
    if (fs.lstatSync(mainActivityPath).isFile()) {
      let contents = fs.readFileSync(mainActivityPath).toString();
      contents = contents.replace('public class MainActivity', `public class ${toClassName}`);
      fs.writeFileSync(mainActivityPath, contents);
    }
  } catch (e) {
    throw new Error(`Cannot rename class name of MainActivity.java to ${toClassName}. ${String(e)}.`);
  }
};
