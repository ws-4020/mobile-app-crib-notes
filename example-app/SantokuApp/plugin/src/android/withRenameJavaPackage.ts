import {ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import fs from 'fs';
import path from 'path';

import {getMainActivityDir} from '../utils/getMainActivityDir';

const withRenameJavaPackage: ConfigPlugin<{fileName: string; currentPackageName: string}> = (
  config,
  {fileName, currentPackageName = 'com.helloworld'},
) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      if (!config.android?.package) {
        // packageは必ず設定されている想定
        throw new Error('Package is not set.');
      }
      const projectRoot = config.modRequest.projectRoot;
      const filePath = path.resolve(await getMainActivityDir(projectRoot), fileName);
      try {
        if (fs.lstatSync(filePath).isFile()) {
          let contents = fs.readFileSync(filePath).toString();
          contents = contents.replace(new RegExp(currentPackageName, 'g'), config.android.package);
          fs.writeFileSync(filePath, contents);
        }
        return config;
      } catch (e) {
        throw new Error(`Cannot rename package of ${fileName}. ${String(e)}.`);
      }
    },
  ]);
};

export default withRenameJavaPackage;
