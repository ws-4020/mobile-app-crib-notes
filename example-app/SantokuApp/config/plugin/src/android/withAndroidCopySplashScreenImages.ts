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

import {AndroidConfig, ConfigPlugin, withDangerousMod} from 'expo/config-plugins';
import path from 'path';

import {copyDir} from '../utils/copyDir';

export type CopySplashScreenImagesProps = {
  ldpi?: string;
  mdpi?: string;
  hdpi?: string;
  xhdpi?: string;
  xxhdpi?: string;
  xxxhdpi?: string;
};

/**
 * スプラッシュスクリーン用の画像をコピーします。
 * dpi毎に、画像が配置されているディレクトリを指定します。
 * @param config ExpoConfig
 * @param props CopySplashscreenImagesProps
 */
export const withAndroidCopySplashScreenImages: ConfigPlugin<CopySplashScreenImagesProps> = (config, props) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      const resourceDir = await AndroidConfig.Paths.getResourceFolderAsync(config.modRequest.projectRoot);
      Object.entries(props).forEach(([dpi, srcPath]) => {
        srcPath &&
          copyDir(path.resolve(config.modRequest.projectRoot, srcPath), path.resolve(resourceDir, `drawable-${dpi}`));
      });
      return config;
    },
  ]);
};
