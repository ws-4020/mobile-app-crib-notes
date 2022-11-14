import {ConfigPlugin, withPlugins} from '@expo/config-plugins';

import {withAddAppActivityAndroidManifest} from './withAddAppActivityAndroidManifest';
import {withCopyTemplateJavaFile} from './withCopyTemplateJavaFile';
import {withRenameMainActivity} from './withRenameMainActivity';

const MAIN_ACTIVITY_TEMPLATE_DIR = './plugin/template/android/app/src/main/java/com/helloworld';
const MAIN_ACTIVITY_FILE_NAME = 'MainActivity.java';
const APP_ACTIVITY_CLASS_NAME = 'AppActivity';

export const withAddAppActivity: ConfigPlugin = config => {
  return withPlugins(config, [
    [withCopyTemplateJavaFile, {srcDir: MAIN_ACTIVITY_TEMPLATE_DIR, fileName: MAIN_ACTIVITY_FILE_NAME}],
    [withRenameMainActivity, {toClassName: APP_ACTIVITY_CLASS_NAME}],
    withAddAppActivityAndroidManifest,
  ]);
};
