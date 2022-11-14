import {ConfigPlugin, withPlugins} from '@expo/config-plugins';

import {withAddAppActivityAndroidManifest} from './withAddAppActivityAndroidManifest';
import {withCopyMainActivity} from './withCopyMainActivity';
import {withCopyTemplateJavaFile} from './withCopyTemplateJavaFile';

const MAIN_ACTIVITY_TEMPLATE_DIR = './plugin/template/android/app/src/main/java/com/helloworld';
const MAIN_ACTIVITY_FILE_NAME = 'MainActivity.java';
const APP_ACTIVITY_CLASS_NAME = 'AppActivity';

/**
 * Transition中にActivityのbackgroundが表示される問題があるため、Splash Screen用とReact Native用にActivityを分けます。
 * https://github.com/software-mansion/react-native-screens/issues/380
 *
 * 1. 「MainActivity.java」を「AppActivity.java」というファイル名でコピー（併せて、「AppActivity.java」のクラス名を「AppActivity」に変更）
 * 2. テンプレートのMainActivity.javaを「android/app/src/main/[パッケージ名]」にコピー（既存のMainActivity.javaを上書き）
 * 3. AndroidManifest.xmlにAppActivityを追加
 *
 * 1でMainActivity.javaを単純にリネームしないでコピーしているのは、MainActivity.javaが存在しないとExpo prebuild中にエラーが発生するためです。
 */
export const withAddAppActivity: ConfigPlugin = config => {
  return withPlugins(config, [
    [withCopyTemplateJavaFile, {srcDir: MAIN_ACTIVITY_TEMPLATE_DIR, fileName: MAIN_ACTIVITY_FILE_NAME}],
    [withCopyMainActivity, {toClassName: APP_ACTIVITY_CLASS_NAME}],
    withAddAppActivityAndroidManifest,
  ]);
};
