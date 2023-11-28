/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ExportedConfigWithProps, XcodeProject} from 'expo/config-plugins';

import {PbxProject, PbxProjectXCBuildConfigurationId} from './types/pbxproj';

const getPbxProject = (config: ExportedConfigWithProps<XcodeProject>): PbxProject => {
  return config.modResults as PbxProject;
};

const getBuildConfigurations = (pbxProject: PbxProject): PbxProjectXCBuildConfigurationId[] => {
  const objects = pbxProject.hash.project.objects;
  const xcBuildConfigurations = objects.XCBuildConfiguration;
  const xcBuildConfigurationIds = Object.keys(xcBuildConfigurations);

  return xcBuildConfigurationIds
    .filter(id => !id.endsWith('_comment'))
    .map(id => ({
      [id]: {
        ...xcBuildConfigurations[id],
      },
    }));
};

const mergeBuildConfigurations = (pbxProject: PbxProject, buildConfigurations: PbxProjectXCBuildConfigurationId) => {
  // pbxProjectのprototypeを消さないように、Object.assignでマージしています。
  return Object.assign(pbxProject, {
    ...pbxProject,
    hash: {
      ...pbxProject.hash,
      project: {
        ...pbxProject.hash.project,
        objects: {
          ...pbxProject.hash.project.objects,
          XCBuildConfiguration: {
            ...pbxProject.hash.project.objects.XCBuildConfiguration,
            ...buildConfigurations,
          },
        },
      },
    },
  });
};

export const PbxProjectConfig = {
  getPbxProject,
  getBuildConfigurations,
  mergeBuildConfigurations,
};
