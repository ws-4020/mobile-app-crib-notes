import {ConfigPlugin, withPlugins} from '@expo/config-plugins';

import withCopyJavaFile from './withCopyJavaFile';
import withRenameJavaPackage from './withRenameJavaPackage';

const withCopyAndRenameJavaPackage: ConfigPlugin<{srcPath: string; fileName: string}> = (
  config,
  {srcPath, fileName},
) => {
  return withPlugins(config, [
    [withRenameJavaPackage, {fileName}],
    [withCopyJavaFile, {srcPath, fileName}],
  ]);
};

export default withCopyAndRenameJavaPackage;
