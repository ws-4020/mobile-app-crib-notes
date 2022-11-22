import {ConfigPlugin, IOSConfig, withXcodeProject} from '@expo/config-plugins';
import fs from 'fs';
import path from 'path';

import {copyFile} from '../utils/copyFile';
import {PbxProjectConfig} from './PbxProjectConfig';
import {PbxProject} from './types/pbxproj';

export const withAddPersonalAccountConfig: ConfigPlugin = config => {
  return withXcodeProject(config, async config => {
    const pbxProject = PbxProjectConfig.getPbxProject(config);
    const projectRoot = config.modRequest.projectRoot;
    const personalAccountConfigPath = 'config/plugin/template/ios/PersonalAccount.xcconfig';

    try {
      const stats = fs.statSync(personalAccountConfigPath);
      if (!stats.isFile()) {
        return config;
      }
    } catch (e) {
      console.warn('Failed to copy personal account config.', e);
      return config;
    }

    await copyPersonalAccountConfig(
      path.join(projectRoot, personalAccountConfigPath),
      path.join(IOSConfig.Paths.getSourceRoot(projectRoot), 'PersonalAccount.xcconfig'),
    );

    const fileUuid = pbxProject.generateUuid();
    const fileRef = pbxProject.generateUuid();

    const addedPbxProject = addPersonalAccountConfigToGroup(pbxProject, projectRoot, fileUuid, fileRef);
    config.modResults = setBaseConfigurationReference(addedPbxProject, fileRef);
    return config;
  });
};

const copyPersonalAccountConfig = async (src: string, dest: string) => {
  await copyFile(src, dest);
};

const addPersonalAccountConfigToGroup = (
  pbxProject: PbxProject,
  projectRoot: string,
  fileUuid: string,
  fileRef: string,
): PbxProject => {
  const projectName = IOSConfig.XcodeUtils.getProjectName(projectRoot);
  const plistFilePath = `${projectName}/PersonalAccount.xcconfig`;
  return IOSConfig.XcodeUtils.addResourceFileToGroup({
    filepath: plistFilePath,
    groupName: projectName,
    project: pbxProject,
    isBuildFile: false,
    fileUuid,
    fileRef,
  }) as PbxProject;
};

const setBaseConfigurationReference = (pbxProject: PbxProject, fileRef: string) => {
  const buildConfigurations = PbxProjectConfig.getBuildConfigurations(pbxProject);

  const editedBuildConfigurations = buildConfigurations.reduce((prev, buildConfiguration) => {
    const id = Object.keys(buildConfiguration)[0];
    if (!buildConfiguration[id].baseConfigurationReference) {
      return {
        ...prev,
        [id]: {
          ...buildConfiguration[id],
          baseConfigurationReference: fileRef,
        },
      };
    }

    return {
      ...prev,
      ...buildConfiguration,
    };
  }, {});
  return PbxProjectConfig.mergeBuildConfigurations(pbxProject, editedBuildConfigurations);
};
