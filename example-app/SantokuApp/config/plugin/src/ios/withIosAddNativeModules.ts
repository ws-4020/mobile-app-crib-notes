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

import {ConfigPlugin, IOSConfig, withXcodeProject} from 'expo/config-plugins';
import path from 'path';

import {PbxProjectConfig} from './PbxProjectConfig';
import {PbxProject} from './types/pbxproj';
import {IOS} from '../constants';
import {copyFile} from '../utils/copyFile';

const THROW_ERROR_MODULE_HEADER_FILE_NAME = 'RCTThrowErrorModule.h';
const THROW_ERROR_MODULE_FILE_NAME = 'RCTThrowErrorModule.m';

/**
 * アプリで独自に作成したNativeModulesを追加します。
 * @param config ExpoConfig
 */
export const withIosAddNativeModules: ConfigPlugin = config => {
  return withXcodeProject(config, config => {
    const pbxProject = PbxProjectConfig.getPbxProject(config);
    const projectRoot = config.modRequest.projectRoot;

    copyFile(
      path.join(projectRoot, IOS.PLUGIN_TEMPLATE_SOURCE_DIR, THROW_ERROR_MODULE_HEADER_FILE_NAME),
      path.join(IOSConfig.Paths.getSourceRoot(projectRoot), THROW_ERROR_MODULE_HEADER_FILE_NAME),
    );
    copyFile(
      path.join(projectRoot, IOS.PLUGIN_TEMPLATE_SOURCE_DIR, THROW_ERROR_MODULE_FILE_NAME),
      path.join(IOSConfig.Paths.getSourceRoot(projectRoot), THROW_ERROR_MODULE_FILE_NAME),
    );

    const projectName = IOSConfig.XcodeUtils.getProjectName(projectRoot);

    const added = addNativeModuleToGroup(
      pbxProject,
      projectName,
      `${projectName}/${THROW_ERROR_MODULE_HEADER_FILE_NAME}`,
    );
    config.modResults = addNativeModuleToGroup(added, projectName, `${projectName}/${THROW_ERROR_MODULE_FILE_NAME}`);
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
