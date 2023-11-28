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
const listDependencies = require("./list-dependencies");

listDependencies().then(dependencies => {
  const licenses = dependencies.map(({
    name,
    version,
    licenseName,
    type,
    libraryId,
    url,
  }) => {
    return [
      name,
      version || '',
      licenseName,
      type,
      libraryId,
      url || '',
    ].join(',');
  });

  licenses.splice(0, 0, [
    'name',
    'version',
    'licenseName',
    'type',
    'libraryId',
    'url',
  ].join(','));
  
  // licenses.forEach(s => console.log(s));

  const outputDir = `${__dirname}/dist`;
  fs.mkdirSync(outputDir, {recursive: true});
  const csvPath = `${outputDir}/licenses.csv`;
  fs.writeFileSync(csvPath, licenses.join('\n'));
  console.info(`${csvPath} にCSVファイルを出力しました`)
});
