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

const DEEP_LINK_SCHEME = require('../constants/deepLink').DEEP_LINK_SCHEME;
const DEEP_LINK_DOMAIN = require('../constants/deepLink').DEEP_LINK_DOMAIN;

module.exports = (pathPrefix = undefined) => {
  const data = [
    {
      scheme: DEEP_LINK_SCHEME,
    },
    {
      host: DEEP_LINK_DOMAIN,
    },
    {
      path: withPathPrefix(pathPrefix, `/`),
    },
    {
      path: withPathPrefix(pathPrefix, `/home`),
    },
    {
      pathPattern: withPathPrefix(pathPrefix, `/questions/.*`),
    },
    {
      path: withPathPrefix(pathPrefix, `/demo/app-info`),
    },
  ];
  return {
    autoVerify: true,
    action: 'VIEW',
    data,
    category: ['BROWSABLE', 'DEFAULT'],
  };
};

const withPathPrefix = (pathPrefix, path) => {
  return pathPrefix ? `/${pathPrefix}${path}` : path;
};
