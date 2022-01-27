import {defineConfig} from 'orval';

export default defineConfig({
  backend: {
    output: {
      mode: 'split',
      target: 'src/generated/backend/api.ts',
      schemas: 'src/generated/backend/model',
      client: 'react-query',
      prettier: true,
      tsconfig: 'tsconfig.json',
      override: {
        query: {
          useQuery: true,
          options: {
            cacheTime: 1000,
            staleTime: 1000,
          },
        },
        mutator: {
          path: 'src/framework/backend/useCustomInstance.ts',
          name: 'useBackendCustomInstance',
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
      target: 'src/generated/sandbox/api.ts',
      schemas: 'src/generated/sandbox/model',
      client: 'react-query',
      prettier: true,
      tsconfig: 'tsconfig.json',
      override: {
        query: {
          useQuery: true,
          options: {
            cacheTime: 1000,
            staleTime: 1000,
          },
        },
        mutator: {
          path: 'src/framework/backend/useCustomInstance.ts',
          name: 'useSandboxCustomInstance',
        },
        operations: {
          'list-todo': {
            query: {
              useQuery: false,
              useInfinite: true,
              useInfiniteQueryParam: 'page',
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
