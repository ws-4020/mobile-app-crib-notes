import {IOSConfig, ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import {copySync} from 'fs-extra';
import path from 'path';

import {copyFile} from '../utils/copyFile';

const STORYBOARD_FILE_NAME = 'SplashScreen.storyboard';
const IMAGES_XCASSETS_DIR_NAME = 'Images.xcassets';
const STORYBOARD_TEMPLATE_DIR = './config/plugin/template/ios/HelloWorld';

/**
 * テンプレートの「SplashScreen.storyboardを、「ios/[プロジェクト名]」配下にコピーします。
 *
 * 「SplashScreen」という名前でImageを追加すると、expo-splash-screenのプラグインによって定義が上書きされてしまいます。
 * そのため、Imageを追加する場合は「SplashScreen」以外の名前を付けてください。
 *
 * @see https://github.com/expo/expo/blob/main/packages/%40expo/prebuild-config/src/plugins/unversioned/expo-splash-screen/wtihIosSplashScreenStoryboardImage.ts#L19
 */
export const withOverrideStoryboard: ConfigPlugin = config => {
  return withDangerousMod(config, [
    'ios',
    async config => {
      const projectRoot = config.modRequest.projectRoot;
      const sourceRoot = IOSConfig.Paths.getSourceRoot(projectRoot);
      await copyFile(
        path.resolve(STORYBOARD_TEMPLATE_DIR, STORYBOARD_FILE_NAME),
        path.resolve(sourceRoot, STORYBOARD_FILE_NAME),
      );
      copySync(
        path.resolve(STORYBOARD_TEMPLATE_DIR, IMAGES_XCASSETS_DIR_NAME),
        path.resolve(sourceRoot, IMAGES_XCASSETS_DIR_NAME),
      );
      return config;
    },
  ]);
};
