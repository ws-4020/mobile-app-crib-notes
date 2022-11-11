import {ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import fs from 'fs';
import path from 'path';

import {copyFile} from '../utils/copyFile';
import {getMainActivityDir} from './getMainActivityDir';

const withCopyTemplateJavaFile: ConfigPlugin<{srcDir: string; fileName: string}> = (config, {srcDir, fileName}) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      if (!config.android?.package) {
        // packageは必ず設定されている想定
        throw new Error('Package is not set.');
      }
      const projectRoot = config.modRequest.projectRoot;
      const src = path.resolve(projectRoot, srcDir, fileName);
      const dest = path.resolve(await getMainActivityDir(projectRoot), fileName);
      await copyFile(src, dest);
      renameJavaPackage(dest, 'com.helloworld', config.android.package);
      return config;
    },
  ]);
};

const renameJavaPackage = (filePath: string, fromPackageName: string, toPackageName: string) => {
  try {
    if (fs.lstatSync(filePath).isFile()) {
      let contents = fs.readFileSync(filePath).toString();
      contents = contents.replace(new RegExp(fromPackageName, 'g'), toPackageName);
      fs.writeFileSync(filePath, contents);
    }
  } catch (e) {
    throw new Error(`Cannot rename package of ${filePath} from ${fromPackageName} to ${toPackageName}. ${String(e)}.`);
  }
};

export default withCopyTemplateJavaFile;
