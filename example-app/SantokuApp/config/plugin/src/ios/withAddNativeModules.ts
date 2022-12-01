import {ConfigPlugin, IOSConfig, withXcodeProject} from '@expo/config-plugins';
import path from 'path';

import {copyFile} from '../utils/copyFile';
import {PbxProjectConfig} from './PbxProjectConfig';
import {PbxProject} from './types/pbxproj';

export const withAddNativeModules: ConfigPlugin = config => {
  return withXcodeProject(config, async config => {
    const pbxProject = PbxProjectConfig.getPbxProject(config);
    const projectRoot = config.modRequest.projectRoot;
    const nativeModulesDir = 'config/plugin/template/ios';

    await copyFile(
      path.join(projectRoot, nativeModulesDir, 'RCTThrowErrorModule.h'),
      path.join(IOSConfig.Paths.getSourceRoot(projectRoot), 'RCTThrowErrorModule.h'),
    );
    await copyFile(
      path.join(projectRoot, nativeModulesDir, 'RCTThrowErrorModule.m'),
      path.join(IOSConfig.Paths.getSourceRoot(projectRoot), 'RCTThrowErrorModule.m'),
    );

    const projectName = IOSConfig.XcodeUtils.getProjectName(projectRoot);

    const added = addNativeModuleToGroup(pbxProject, projectName, `${projectName}/RCTThrowErrorModule.h`);
    config.modResults = addNativeModuleToGroup(added, projectName, `${projectName}/RCTThrowErrorModule.m`);
    return config;
  });
};

const addNativeModuleToGroup = (pbxProject: PbxProject, projectName: string, filePath: string): PbxProject => {
  return IOSConfig.XcodeUtils.addBuildSourceFileToGroup({
    filepath: filePath,
    groupName: projectName,
    project: pbxProject,
  }) as PbxProject;
};
