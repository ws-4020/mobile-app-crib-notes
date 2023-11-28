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

import {defineConfig} from 'orval';

/*
  eslint-disable-next-line import/no-default-export --
  Orvalのドキュメントに記載の通り、default exportする
  https://orval.dev/reference/configuration/overview
 */
export default defineConfig({
  backend: {
    output: {
      mode: 'tags-split',
      clean: true,
      target: 'src/features/backend/apis/api.ts',
      schemas: 'src/features/backend/apis/model',
      client: 'react-query',
      prettier: true,
      tsconfig: 'tsconfig.json',
      override: {
        query: {
          useQuery: true,
        },
        mutator: {
          path: 'src/features/backend/utils/customInstance.ts',
          name: 'backendCustomInstance',
        },
      },
    },
    input: {
      target: '../api-document/openapi.yaml',
    },
  },
  sandbox: {
    output: {
      mode: 'split',
      clean: true,
      target: 'src/features/sandbox/apis/api.ts',
      schemas: 'src/features/sandbox/apis/model',
      client: 'react-query',
      prettier: true,
      tsconfig: 'tsconfig.json',
      override: {
        query: {
          useQuery: true,
        },
        mutator: {
          path: 'src/features/backend/utils/customInstance.ts',
          name: 'sandboxCustomInstance',
        },
        operations: {
          'list-todo-by-cursor': {
            query: {
              useQuery: false,
              useInfinite: true,
              useInfiniteQueryParam: 'cursor',
            },
          },
        },
      },
    },
    input: {
      target: '../api-document/sandbox/openapi.yaml',
    },
  },
});
