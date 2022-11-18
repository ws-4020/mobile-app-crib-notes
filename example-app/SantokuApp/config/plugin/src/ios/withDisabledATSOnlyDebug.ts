import {ConfigPlugin, withXcodeProject, IOSConfig, InfoPlist} from '@expo/config-plugins';
import plist from '@expo/plist';
import fs from 'fs';
import path from 'path';

import {copyFile} from '../utils/copyFile';
import {PbxProjectConfig} from './PbxProjectConfig';
import {PbxProject} from './types/pbxproj';

export const withDisabledATSOnlyDebug: ConfigPlugin = config => {
  return withXcodeProject(config, async config => {
    const projectRoot = config.modRequest.projectRoot;
    const infoPlistPath = IOSConfig.Paths.getInfoPlistPath(projectRoot);
    const debugPlistPath = path.resolve(path.dirname(infoPlistPath), 'Debug.plist');

    await copyInfoPlistAsDebugPlist(infoPlistPath, debugPlistPath);

    disableATS(debugPlistPath);

    const pbxProject = config.modResults as PbxProject;
    const projectName = IOSConfig.XcodeUtils.getProjectName(config.modRequest.projectRoot);
    const addedDebugPlistPbxProject = addDebugPlistToGroup(pbxProject, projectName, debugPlistPath);

    config.modResults = setDebugPlistToBuildConfiguration(addedDebugPlistPbxProject, projectName);
    return config;
  });
};

const copyInfoPlistAsDebugPlist = async (infoPlistPath: string, debugPlistPath: string) => {
  await copyFile(infoPlistPath, debugPlistPath);
};

const disableATS = (debugPlistPath: string) => {
  const debugPlist = plist.parse(fs.readFileSync(debugPlistPath).toString()) as InfoPlist;
  const disabledAts = {...debugPlist, NSAppTransportSecurity: {NSAllowsArbitraryLoads: true}};
  fs.writeFileSync(debugPlistPath, plist.build(disabledAts));
};

const addDebugPlistToGroup = (pbxProject: PbxProject, projectName: string, debugPlistPath: string): PbxProject => {
  return IOSConfig.XcodeUtils.addResourceFileToGroup({
    filepath: debugPlistPath,
    groupName: projectName,
    project: pbxProject,
    isBuildFile: false,
  }) as PbxProject;
};

const setDebugPlistToBuildConfiguration = (pbxProject: PbxProject, projectName: string): PbxProject => {
  const buildConfigurations = PbxProjectConfig.getBuildConfigurations(pbxProject);
  const editedBuildConfigurations = buildConfigurations.reduce((prev, buildConfiguration) => {
    const id = Object.keys(buildConfiguration)[0];
    if (buildConfiguration[id].name === 'Debug') {
      if ('INFOPLIST_FILE' in buildConfiguration[id].buildSettings) {
        return {
          ...prev,
          [id]: {
            ...buildConfiguration[id],
            buildSettings: {
              ...buildConfiguration[id].buildSettings,
              INFOPLIST_FILE: `${projectName}/Debug.plist`,
            },
          },
        };
      }
    }

    return {
      ...prev,
      ...buildConfiguration,
    };
  }, {});
  return PbxProjectConfig.mergeBuildConfigurations(pbxProject, editedBuildConfigurations);
};
