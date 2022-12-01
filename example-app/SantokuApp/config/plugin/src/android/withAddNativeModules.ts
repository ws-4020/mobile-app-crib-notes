import {ConfigPlugin, withPlugins} from '@expo/config-plugins';

import {withAddNativeModulePackages} from './withAddNativeModulePackages';
import {withCopyTemplateJavaFile} from './withCopyTemplateJavaFile';

const NATIVE_MODULE_DIR = './config/plugin/template/android/app/src/main/java/com/helloworld';
const THROW_ERROR_MODULE_FILE_NAME = 'ThrowErrorModule.java';
const THROW_ERROR_PACKAGE_FILE_NAME = 'ThrowErrorPackage.java';

/**
 * アプリで作成したNativeModulesを追加します。
 */
export const withAddNativeModules: ConfigPlugin = config => {
  return withPlugins(config, [
    [withCopyTemplateJavaFile, {srcDir: NATIVE_MODULE_DIR, fileName: THROW_ERROR_MODULE_FILE_NAME}],
    [withCopyTemplateJavaFile, {srcDir: NATIVE_MODULE_DIR, fileName: THROW_ERROR_PACKAGE_FILE_NAME}],
    withAddNativeModulePackages,
  ]);
};
