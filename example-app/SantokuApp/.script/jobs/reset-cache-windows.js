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

module.exports = [
  // Android related build artifacts and caches
  {
    name: 'Delete Android build artifacts and build cache',
    enabled: true,
    commands: [
      {
        command: 'gradlew',
        args: ['clean'],
        cwd: 'android',
      },
      {
        command: 'gradlew',
        args: ['--stop'],
        cwd: 'android',
      },
    ],
  },

  // React Native related build artifacts and caches
  {
    name: 'Delete React Native cache',
    enabled: true,
    commands: [
      {
        command: 'del',
        args: ['/F', '/Q', '%temp%\\react-*'],
      },
    ],
  },
  {
    name: 'Delete Metro bundler cache',
    enabled: true,
    commands: [
      {
        command: 'del',
        args: ['/F', '/Q', '%temp%\\metro-*'],
      },
      {
        command: 'del',
        args: ['/F', '/Q', '%temp%\\haste-map-metro-*'],
      },
    ],
  },
  {
    name: 'Delete NPM modules',
    enabled: true,
    commands: [
      {
        command: 'del',
        args: ['/F', '/Q', 'node_modules'],
      },
      {
        command: 'npm',
        args: ['cache', 'verify'],
      },
    ],
  },
  {
    name: 'Clean install NPM modules and Pods',
    enabled: true,
    commands: [
      {
        command: 'npm',
        args: ['-s', 'clean-install'],
      },
    ],
  },
];
