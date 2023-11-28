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

export type PbxProject = {[key: string]: unknown} & {hash: PbxProjectHash; generateUuid: () => string};
export type PbxProjectHash = {[key: string]: unknown} & {project: PbxProjectProject};
export type PbxProjectProject = {[key: string]: unknown} & {objects: PbxProjectObjects};
export type PbxProjectObjects = {[key: string]: unknown} & {XCBuildConfiguration: PbxProjectXCBuildConfigurationId};
export type PbxProjectXCBuildConfigurationId = {[key: string]: PbxProjectXCBuildConfiguration};
export type PbxProjectXCBuildConfiguration = {[key: string]: unknown} & {
  buildSettings: PbxProjectXCBuildConfigurationBuildSettings;
};
export type PbxProjectXCBuildConfigurationBuildSettings = {[key: string]: unknown} & {
  PRODUCT_BUNDLE_IDENTIFIER?: string;
  DEVELOPMENT_TEAM?: string;
  CODE_SIGN_STYLE?: string;
};
