import {ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import path from 'path';

import {copyFile} from '../utils/copyFile';
import {getMainActivityDir} from '../utils/getMainActivityDir';

const withCopyJavaFile: ConfigPlugin<{srcPath: string; fileName: string}> = (config, {srcPath, fileName}) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      const projectRoot = config.modRequest.projectRoot;
      const src = path.resolve(projectRoot, srcPath, fileName);
      const dest = path.resolve(await getMainActivityDir(projectRoot), fileName);
      await copyFile(src, dest);
      return config;
    },
  ]);
};

export default withCopyJavaFile;
