import {AndroidConfig, ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import path from 'path';

import {copyFile} from '../utils/copyFile';

const SPLASH_SCREEN_XML_TEMPLATE_FILE = './config/plugin/template/android/app/src/main/res/drawable/splashscreen.xml';

/**
 * テンプレートの「splashscreen.xml」を、「android/app/main/res/drawable」配下にコピーします。
 * @param config ExpoConfig
 */
export const withCopyTemplateSplashScreenXml: ConfigPlugin = config => {
  return withDangerousMod(config, [
    'android',
    async config => {
      const resourceDir = await AndroidConfig.Paths.getResourceFolderAsync(config.modRequest.projectRoot);
      await copyFile(SPLASH_SCREEN_XML_TEMPLATE_FILE, path.resolve(resourceDir, 'drawable/splashscreen.xml'));
      return config;
    },
  ]);
};
