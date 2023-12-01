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

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const copyright = 'Copyright 2023 TIS Inc.';
const orval = 'Generated by orval';

const licenseComment = `/**
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
 */`;

const addLicenseToFiles = directory => {
  const files = fs.readdirSync(directory, {withFileTypes: true, recursive: true});
  files.forEach(file => {
    const filePath = path.join(directory, file.name);
    if (file.isDirectory() && !file.name.includes('node_modules')) {
      addLicenseToFiles(filePath);
    } else {
      if (file.name.endsWith('.js') || file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
        try {
          const data = fs.readFileSync(filePath, 'utf-8');
          if (!data.includes(copyright) && !data.includes(orval)) {
            const commentWithContent = licenseComment + '\n\n' + data;
            fs.writeFileSync(filePath, commentWithContent);
          }
        } catch (error) {
          console.error(`Error occurred while processing the file ${filePath}: ${error.message}`);
        }
      }
    }
  });
};

addLicenseToFiles(`${rootDir}/src`);
