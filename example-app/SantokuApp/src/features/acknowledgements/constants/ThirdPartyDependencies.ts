export type ThirdPartyDependency = {
  type: string;
  id: string;
  name?: string;
  version?: string;
  repository?: string;
  licenses?: string | string[];
  licenseContentModuleId?: number;
  noticeContentModuleId?: number;
};
import {Platform} from 'react-native';
const usingTypes = Platform.select({
  ios: ['npm', 'cocoapods'],
  android: ['npm', 'gradle'],
});
export const ThirdPartyDependencies: ThirdPartyDependency[] = [
  {
    type: 'npm',
    id: 'npm:@ampproject/remapping@2.3.0',
    name: '@ampproject/remapping',
    version: '2.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/code-frame@7.10.4',
    name: '@babel/code-frame',
    version: '7.10.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/code-frame@7.24.7',
    name: '@babel/code-frame',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/compat-data@7.25.4',
    name: '@babel/compat-data',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/core@7.25.2',
    name: '@babel/core',
    version: '7.25.2',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/generator@7.2.0',
    name: '@babel/generator',
    version: '7.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4e32449bd377d3dbced215dfd66dc234994c28e561aef73dbd29d6b5a1a00484.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/generator@7.25.6',
    name: '@babel/generator',
    version: '7.25.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-annotate-as-pure@7.24.7',
    name: '@babel/helper-annotate-as-pure',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-builder-binary-assignment-operator-visitor@7.24.7',
    name: '@babel/helper-builder-binary-assignment-operator-visitor',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-compilation-targets@7.25.2',
    name: '@babel/helper-compilation-targets',
    version: '7.25.2',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-create-class-features-plugin@7.25.4',
    name: '@babel/helper-create-class-features-plugin',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-create-regexp-features-plugin@7.25.2',
    name: '@babel/helper-create-regexp-features-plugin',
    version: '7.25.2',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-define-polyfill-provider@0.6.2',
    name: '@babel/helper-define-polyfill-provider',
    version: '0.6.2',
    licenseContentModuleId:
      require('../../../assets/licenses/43571857d624621d9c1f5933339bdb3a31832919bed8143494acf1ae2fa46dc5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-environment-visitor@7.24.7',
    name: '@babel/helper-environment-visitor',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-member-expression-to-functions@7.24.8',
    name: '@babel/helper-member-expression-to-functions',
    version: '7.24.8',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-module-imports@7.24.7',
    name: '@babel/helper-module-imports',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-module-transforms@7.25.2',
    name: '@babel/helper-module-transforms',
    version: '7.25.2',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-optimise-call-expression@7.24.7',
    name: '@babel/helper-optimise-call-expression',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-plugin-utils@7.24.8',
    name: '@babel/helper-plugin-utils',
    version: '7.24.8',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-remap-async-to-generator@7.25.0',
    name: '@babel/helper-remap-async-to-generator',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-replace-supers@7.25.0',
    name: '@babel/helper-replace-supers',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-simple-access@7.24.7',
    name: '@babel/helper-simple-access',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-skip-transparent-expression-wrappers@7.24.7',
    name: '@babel/helper-skip-transparent-expression-wrappers',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-string-parser@7.24.8',
    name: '@babel/helper-string-parser',
    version: '7.24.8',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-validator-identifier@7.24.7',
    name: '@babel/helper-validator-identifier',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-validator-option@7.24.8',
    name: '@babel/helper-validator-option',
    version: '7.24.8',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helper-wrap-function@7.25.0',
    name: '@babel/helper-wrap-function',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/helpers@7.25.6',
    name: '@babel/helpers',
    version: '7.25.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/highlight@7.24.7',
    name: '@babel/highlight',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/parser@7.25.6',
    name: '@babel/parser',
    version: '7.25.6',
    licenseContentModuleId:
      require('../../../assets/licenses/2e97627cb278aa7556fb9e8817368302301a595b6c7582512b8d74c57b773652.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-bugfix-firefox-class-in-computed-class-key@7.25.3',
    name: '@babel/plugin-bugfix-firefox-class-in-computed-class-key',
    version: '7.25.3',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-bugfix-safari-class-field-initializer-scope@7.25.0',
    name: '@babel/plugin-bugfix-safari-class-field-initializer-scope',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.25.0',
    name: '@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.24.7',
    name: '@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly@7.25.0',
    name: '@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-async-generator-functions@7.20.7',
    name: '@babel/plugin-proposal-async-generator-functions',
    version: '7.20.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-class-properties@7.18.6',
    name: '@babel/plugin-proposal-class-properties',
    version: '7.18.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-decorators@7.24.7',
    name: '@babel/plugin-proposal-decorators',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-export-default-from@7.24.7',
    name: '@babel/plugin-proposal-export-default-from',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-logical-assignment-operators@7.20.7',
    name: '@babel/plugin-proposal-logical-assignment-operators',
    version: '7.20.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-nullish-coalescing-operator@7.18.6',
    name: '@babel/plugin-proposal-nullish-coalescing-operator',
    version: '7.18.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-numeric-separator@7.18.6',
    name: '@babel/plugin-proposal-numeric-separator',
    version: '7.18.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-object-rest-spread@7.20.7',
    name: '@babel/plugin-proposal-object-rest-spread',
    version: '7.20.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-optional-catch-binding@7.18.6',
    name: '@babel/plugin-proposal-optional-catch-binding',
    version: '7.18.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-optional-chaining@7.21.0',
    name: '@babel/plugin-proposal-optional-chaining',
    version: '7.21.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-proposal-private-property-in-object@7.21.0-placeholder-for-preset-env.2',
    name: '@babel/plugin-proposal-private-property-in-object',
    version: '7.21.0-placeholder-for-preset-env.2',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-async-generators@7.8.4',
    name: '@babel/plugin-syntax-async-generators',
    version: '7.8.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-class-properties@7.12.13',
    name: '@babel/plugin-syntax-class-properties',
    version: '7.12.13',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-class-static-block@7.14.5',
    name: '@babel/plugin-syntax-class-static-block',
    version: '7.14.5',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-decorators@7.24.7',
    name: '@babel/plugin-syntax-decorators',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-dynamic-import@7.8.3',
    name: '@babel/plugin-syntax-dynamic-import',
    version: '7.8.3',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-export-default-from@7.24.7',
    name: '@babel/plugin-syntax-export-default-from',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-export-namespace-from@7.8.3',
    name: '@babel/plugin-syntax-export-namespace-from',
    version: '7.8.3',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-flow@7.24.7',
    name: '@babel/plugin-syntax-flow',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-import-assertions@7.25.6',
    name: '@babel/plugin-syntax-import-assertions',
    version: '7.25.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-import-attributes@7.25.6',
    name: '@babel/plugin-syntax-import-attributes',
    version: '7.25.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-import-meta@7.10.4',
    name: '@babel/plugin-syntax-import-meta',
    version: '7.10.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-json-strings@7.8.3',
    name: '@babel/plugin-syntax-json-strings',
    version: '7.8.3',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-jsx@7.24.7',
    name: '@babel/plugin-syntax-jsx',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-logical-assignment-operators@7.10.4',
    name: '@babel/plugin-syntax-logical-assignment-operators',
    version: '7.10.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-nullish-coalescing-operator@7.8.3',
    name: '@babel/plugin-syntax-nullish-coalescing-operator',
    version: '7.8.3',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-numeric-separator@7.10.4',
    name: '@babel/plugin-syntax-numeric-separator',
    version: '7.10.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-object-rest-spread@7.8.3',
    name: '@babel/plugin-syntax-object-rest-spread',
    version: '7.8.3',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-optional-catch-binding@7.8.3',
    name: '@babel/plugin-syntax-optional-catch-binding',
    version: '7.8.3',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-optional-chaining@7.8.3',
    name: '@babel/plugin-syntax-optional-chaining',
    version: '7.8.3',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-private-property-in-object@7.14.5',
    name: '@babel/plugin-syntax-private-property-in-object',
    version: '7.14.5',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-top-level-await@7.14.5',
    name: '@babel/plugin-syntax-top-level-await',
    version: '7.14.5',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-typescript@7.25.4',
    name: '@babel/plugin-syntax-typescript',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-syntax-unicode-sets-regex@7.18.6',
    name: '@babel/plugin-syntax-unicode-sets-regex',
    version: '7.18.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-arrow-functions@7.24.7',
    name: '@babel/plugin-transform-arrow-functions',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-async-generator-functions@7.25.4',
    name: '@babel/plugin-transform-async-generator-functions',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-async-to-generator@7.24.7',
    name: '@babel/plugin-transform-async-to-generator',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-block-scoped-functions@7.24.7',
    name: '@babel/plugin-transform-block-scoped-functions',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-block-scoping@7.25.0',
    name: '@babel/plugin-transform-block-scoping',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-class-properties@7.25.4',
    name: '@babel/plugin-transform-class-properties',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-class-static-block@7.24.7',
    name: '@babel/plugin-transform-class-static-block',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-classes@7.25.4',
    name: '@babel/plugin-transform-classes',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-computed-properties@7.24.7',
    name: '@babel/plugin-transform-computed-properties',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-destructuring@7.24.8',
    name: '@babel/plugin-transform-destructuring',
    version: '7.24.8',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-dotall-regex@7.24.7',
    name: '@babel/plugin-transform-dotall-regex',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-duplicate-keys@7.24.7',
    name: '@babel/plugin-transform-duplicate-keys',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-duplicate-named-capturing-groups-regex@7.25.0',
    name: '@babel/plugin-transform-duplicate-named-capturing-groups-regex',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-dynamic-import@7.24.7',
    name: '@babel/plugin-transform-dynamic-import',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-exponentiation-operator@7.24.7',
    name: '@babel/plugin-transform-exponentiation-operator',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-export-namespace-from@7.24.7',
    name: '@babel/plugin-transform-export-namespace-from',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-flow-strip-types@7.25.2',
    name: '@babel/plugin-transform-flow-strip-types',
    version: '7.25.2',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-for-of@7.24.7',
    name: '@babel/plugin-transform-for-of',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-function-name@7.25.1',
    name: '@babel/plugin-transform-function-name',
    version: '7.25.1',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-json-strings@7.24.7',
    name: '@babel/plugin-transform-json-strings',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-literals@7.25.2',
    name: '@babel/plugin-transform-literals',
    version: '7.25.2',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-logical-assignment-operators@7.24.7',
    name: '@babel/plugin-transform-logical-assignment-operators',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-member-expression-literals@7.24.7',
    name: '@babel/plugin-transform-member-expression-literals',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-modules-amd@7.24.7',
    name: '@babel/plugin-transform-modules-amd',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-modules-commonjs@7.24.8',
    name: '@babel/plugin-transform-modules-commonjs',
    version: '7.24.8',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-modules-systemjs@7.25.0',
    name: '@babel/plugin-transform-modules-systemjs',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-modules-umd@7.24.7',
    name: '@babel/plugin-transform-modules-umd',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-named-capturing-groups-regex@7.24.7',
    name: '@babel/plugin-transform-named-capturing-groups-regex',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-new-target@7.24.7',
    name: '@babel/plugin-transform-new-target',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-nullish-coalescing-operator@7.24.7',
    name: '@babel/plugin-transform-nullish-coalescing-operator',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-numeric-separator@7.24.7',
    name: '@babel/plugin-transform-numeric-separator',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-object-rest-spread@7.24.7',
    name: '@babel/plugin-transform-object-rest-spread',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-object-super@7.24.7',
    name: '@babel/plugin-transform-object-super',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-optional-catch-binding@7.24.7',
    name: '@babel/plugin-transform-optional-catch-binding',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-optional-chaining@7.24.8',
    name: '@babel/plugin-transform-optional-chaining',
    version: '7.24.8',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-parameters@7.24.7',
    name: '@babel/plugin-transform-parameters',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-private-methods@7.25.4',
    name: '@babel/plugin-transform-private-methods',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-private-property-in-object@7.24.7',
    name: '@babel/plugin-transform-private-property-in-object',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-property-literals@7.24.7',
    name: '@babel/plugin-transform-property-literals',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-react-display-name@7.24.7',
    name: '@babel/plugin-transform-react-display-name',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-react-jsx@7.25.2',
    name: '@babel/plugin-transform-react-jsx',
    version: '7.25.2',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-react-jsx-development@7.24.7',
    name: '@babel/plugin-transform-react-jsx-development',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-react-jsx-self@7.24.7',
    name: '@babel/plugin-transform-react-jsx-self',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-react-jsx-source@7.24.7',
    name: '@babel/plugin-transform-react-jsx-source',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-react-pure-annotations@7.24.7',
    name: '@babel/plugin-transform-react-pure-annotations',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-regenerator@7.24.7',
    name: '@babel/plugin-transform-regenerator',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-reserved-words@7.24.7',
    name: '@babel/plugin-transform-reserved-words',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-runtime@7.25.4',
    name: '@babel/plugin-transform-runtime',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-shorthand-properties@7.24.7',
    name: '@babel/plugin-transform-shorthand-properties',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-spread@7.24.7',
    name: '@babel/plugin-transform-spread',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-sticky-regex@7.24.7',
    name: '@babel/plugin-transform-sticky-regex',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-template-literals@7.24.7',
    name: '@babel/plugin-transform-template-literals',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-typeof-symbol@7.24.8',
    name: '@babel/plugin-transform-typeof-symbol',
    version: '7.24.8',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-typescript@7.25.2',
    name: '@babel/plugin-transform-typescript',
    version: '7.25.2',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-unicode-escapes@7.24.7',
    name: '@babel/plugin-transform-unicode-escapes',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-unicode-property-regex@7.24.7',
    name: '@babel/plugin-transform-unicode-property-regex',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-unicode-regex@7.24.7',
    name: '@babel/plugin-transform-unicode-regex',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/plugin-transform-unicode-sets-regex@7.25.4',
    name: '@babel/plugin-transform-unicode-sets-regex',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/preset-env@7.25.4',
    name: '@babel/preset-env',
    version: '7.25.4',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/preset-flow@7.24.7',
    name: '@babel/preset-flow',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/preset-modules@0.1.6-no-external-plugins',
    name: '@babel/preset-modules',
    version: '0.1.6-no-external-plugins',
    licenseContentModuleId:
      require('../../../assets/licenses/7cd04de7ef4855d45897fe20c633be0a8c66663f5f2e1c25faf496f0958daaf3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/preset-react@7.24.7',
    name: '@babel/preset-react',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/preset-typescript@7.24.7',
    name: '@babel/preset-typescript',
    version: '7.24.7',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/register@7.24.6',
    name: '@babel/register',
    version: '7.24.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/regjsgen@0.8.0',
    name: '@babel/regjsgen',
    version: '0.8.0',
    licenseContentModuleId:
      require('../../../assets/licenses/21edea5565f8e8d4a0e548fe741b16f7d642afd8dadafa9dbab4232115abe0ec.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/runtime@7.25.6',
    name: '@babel/runtime',
    version: '7.25.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/template@7.25.0',
    name: '@babel/template',
    version: '7.25.0',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/traverse@7.25.6',
    name: '@babel/traverse',
    version: '7.25.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@babel/types@7.25.6',
    name: '@babel/types',
    version: '7.25.6',
    licenseContentModuleId:
      require('../../../assets/licenses/117da2af0d4ce0fe1c8e19b5cff9dcd806adf973d328d27b11d4448c4ff24f76.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@egjs/hammerjs@2.0.17',
    name: '@egjs/hammerjs',
    version: '2.0.17',
    licenseContentModuleId:
      require('../../../assets/licenses/68e3fbc87924b2ca7f6a10d52be2ee83e86f7d2f28e74f343795e8f9e58f3ec1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/bunyan@4.0.1',
    name: '@expo/bunyan',
    version: '4.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/0d59313583051e5d9d35d78fc07ab8a2cd60358de36c54dc594095699d187291.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/cli@0.18.29',
    name: '@expo/cli',
    version: '0.18.29',
    licenseContentModuleId:
      require('../../../assets/licenses/26a502edb7daf35d8354c789d3f4924f53bb46d0642167da2fc8f3da85359a43.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/code-signing-certificates@0.0.5',
    name: '@expo/code-signing-certificates',
    version: '0.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/41f2eef190265a6ea435951170947e35461707f91631821b3a67421bea5b2a7c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/config@9.0.3',
    name: '@expo/config',
    version: '9.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/16feb932ce2ba7bc7712657bb28afe409eaa4334f9f05d0e1b7a5f12bf6132f4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/config-plugins@8.0.9',
    name: '@expo/config-plugins',
    version: '8.0.9',
    licenseContentModuleId:
      require('../../../assets/licenses/16feb932ce2ba7bc7712657bb28afe409eaa4334f9f05d0e1b7a5f12bf6132f4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/config-types@51.0.3',
    name: '@expo/config-types',
    version: '51.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/8dacb1e00ec1cf679e7987c87c9953ce6a4d96e7ef361dd04cd453643e9b3351.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/devcert@1.1.4',
    name: '@expo/devcert',
    version: '1.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/6373b7330434be1684308d6b0b997077d5a36394a8dfed090a2d6e804f4321c4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/env@0.3.0',
    name: '@expo/env',
    version: '0.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9d9cf7980a46628abcbcf88577ecaed2968b69f9123d6aaba6f9496ed3648c1a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/image-utils@0.5.1',
    name: '@expo/image-utils',
    version: '0.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/fb3ca4a837f5779e83cef89b78253a8949cfb9429c340309f62d0465ec6610b4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/json-file@8.3.3',
    name: '@expo/json-file',
    version: '8.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/16feb932ce2ba7bc7712657bb28afe409eaa4334f9f05d0e1b7a5f12bf6132f4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/metro-config@0.18.11',
    name: '@expo/metro-config',
    version: '0.18.11',
    licenseContentModuleId:
      require('../../../assets/licenses/16feb932ce2ba7bc7712657bb28afe409eaa4334f9f05d0e1b7a5f12bf6132f4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/osascript@2.1.3',
    name: '@expo/osascript',
    version: '2.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/fb3ca4a837f5779e83cef89b78253a8949cfb9429c340309f62d0465ec6610b4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/package-manager@1.5.2',
    name: '@expo/package-manager',
    version: '1.5.2',
    licenseContentModuleId:
      require('../../../assets/licenses/16feb932ce2ba7bc7712657bb28afe409eaa4334f9f05d0e1b7a5f12bf6132f4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/plist@0.1.3',
    name: '@expo/plist',
    version: '0.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/95748622790f3d50ffbfa81843fce0e49544959d3801267dfd7b20480675017f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/prebuild-config@7.0.8',
    name: '@expo/prebuild-config',
    version: '7.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/16feb932ce2ba7bc7712657bb28afe409eaa4334f9f05d0e1b7a5f12bf6132f4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/rudder-sdk-node@1.1.1',
    name: '@expo/rudder-sdk-node',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/21a177f20e325303e47d110cc84e6e0170ddefff20db9019b41c4ef9722cf703.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/sdk-runtime-versions@1.0.0',
    name: '@expo/sdk-runtime-versions',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/124b336efc6dd43d5ae7904c409704e8ad0efd1b790edfc04f2a05769438d14f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/spawn-async@1.7.2',
    name: '@expo/spawn-async',
    version: '1.7.2',
    licenseContentModuleId:
      require('../../../assets/licenses/736835b6c374cbfb66ccfbfc4f8819bcbeae3cfd5f5e5507f25f4caeabf9540e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/vector-icons@14.0.3',
    name: '@expo/vector-icons',
    version: '14.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/a5416f6b586be51823285bc9a389bfd756eef80cfb7616ea90aaa11bae6189e1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@expo/xcpretty@4.3.1',
    name: '@expo/xcpretty',
    version: '4.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b28fd5a1fb4b8a28034d5255a45a42a5dcb3f71bfd31fbd4ccba5bfb5744ca56.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@graphql-typed-document-node/core@3.2.0',
    name: '@graphql-typed-document-node/core',
    version: '3.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/37431eb2e9e265d8d9a67161ba96394537fbc164ef546bf2140238a582cd59b2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@hapi/hoek@9.3.0',
    name: '@hapi/hoek',
    version: '9.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/798002f736a7ad3e26518903eb0e9ace73d98d5418fe94547a4c1bdc90be54e2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@hapi/topo@5.1.0',
    name: '@hapi/topo',
    version: '5.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e31b3163ce6afe852a52344e4b492afe9b0bb286e326841b656512c2fc849d79.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@isaacs/cliui@8.0.2',
    name: '@isaacs/cliui',
    version: '8.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/2dc0465729366c3a7890dfa9e972a1ba7048a26c02116fb8b419a6a1ac110149.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@isaacs/ttlcache@1.4.1',
    name: '@isaacs/ttlcache',
    version: '1.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/049dff02fd6730c5960862ccca921d05541a7788ad0d76e25cc56dc9541bbf4b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jest/create-cache-key-function@29.7.0',
    name: '@jest/create-cache-key-function',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jest/environment@29.7.0',
    name: '@jest/environment',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jest/fake-timers@29.7.0',
    name: '@jest/fake-timers',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jest/schemas@29.6.3',
    name: '@jest/schemas',
    version: '29.6.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jest/types@24.9.0',
    name: '@jest/types',
    version: '24.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jest/types@26.6.2',
    name: '@jest/types',
    version: '26.6.2',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jest/types@29.6.3',
    name: '@jest/types',
    version: '29.6.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jridgewell/gen-mapping@0.3.5',
    name: '@jridgewell/gen-mapping',
    version: '0.3.5',
    licenseContentModuleId:
      require('../../../assets/licenses/e58e4f6d4f57ab1e4a503a523d1c4e34ed03eee292a0237a898ac158c1b7bc69.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jridgewell/resolve-uri@3.1.2',
    name: '@jridgewell/resolve-uri',
    version: '3.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/b8778b155bfde5a28b023a558753c0fa058a52bb9de35c343c250be1bbcdedab.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jridgewell/set-array@1.2.1',
    name: '@jridgewell/set-array',
    version: '1.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e58e4f6d4f57ab1e4a503a523d1c4e34ed03eee292a0237a898ac158c1b7bc69.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jridgewell/source-map@0.3.6',
    name: '@jridgewell/source-map',
    version: '0.3.6',
    licenseContentModuleId:
      require('../../../assets/licenses/b8778b155bfde5a28b023a558753c0fa058a52bb9de35c343c250be1bbcdedab.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jridgewell/sourcemap-codec@1.5.0',
    name: '@jridgewell/sourcemap-codec',
    version: '1.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1c632a84f7ba5a7b32d9c15e707f419b2393e7ad7de362bd9c837b5e435a197b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@jridgewell/trace-mapping@0.3.25',
    name: '@jridgewell/trace-mapping',
    version: '0.3.25',
    licenseContentModuleId:
      require('../../../assets/licenses/0daa3c2445c4bfaaa7e8c69ec2742a8841bc920b75818ef2c7a510242de2b04a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@mswjs/cookies@0.2.2',
    name: '@mswjs/cookies',
    version: '0.2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/1489a522420eb897989f87f56927c65f8500c474562e0619e62c834f6fd0d4ac.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@mswjs/data@0.14.0',
    name: '@mswjs/data',
    version: '0.14.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b7e6f39fae834b72ef575518b0d88d5200e04b65cba72c12ab67b2a449170999.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@mswjs/interceptors@0.17.10',
    name: '@mswjs/interceptors',
    version: '0.17.10',
    licenseContentModuleId:
      require('../../../assets/licenses/bb3a5cb8fb224f632970e31425348f556f7a83b165d5384ea5e142575f5c412e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@nodelib/fs.scandir@2.1.5',
    name: '@nodelib/fs.scandir',
    version: '2.1.5',
    licenseContentModuleId:
      require('../../../assets/licenses/9363d160bf41d46d83901a5d24fc3fe2094c2afc17b4a2378914b273977ee2de.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@nodelib/fs.stat@2.0.5',
    name: '@nodelib/fs.stat',
    version: '2.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/9363d160bf41d46d83901a5d24fc3fe2094c2afc17b4a2378914b273977ee2de.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@nodelib/fs.walk@1.2.8',
    name: '@nodelib/fs.walk',
    version: '1.2.8',
    licenseContentModuleId:
      require('../../../assets/licenses/9363d160bf41d46d83901a5d24fc3fe2094c2afc17b4a2378914b273977ee2de.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@notifee/react-native@5.7.0',
    name: '@notifee/react-native',
    version: '5.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a8b96ed52dc019953943e9f43e5f1279865eecc5c495fc662c5d2dc3195bbe46.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@npmcli/fs@3.1.1',
    name: '@npmcli/fs',
    version: '3.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/27d998b503b18cdb16c49e93da04069a99ba8a1d7e18d67146de8e242f9a6d21.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@open-draft/until@1.0.3',
    name: '@open-draft/until',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/246c2db6db6704d5cfecdd66ec8faea82b01c5dce640324408a671cbe1498eaf.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@pkgjs/parseargs@0.11.0',
    name: '@pkgjs/parseargs',
    version: '0.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-async-storage/async-storage@1.23.1',
    name: '@react-native-async-storage/async-storage',
    version: '1.23.1',
    licenseContentModuleId:
      require('../../../assets/licenses/212dbf14b113759356207347826f21ac3c81151943fdb89ce25da5dc6214831c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli@13.6.9',
    name: '@react-native-community/cli',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-clean@13.6.9',
    name: '@react-native-community/cli-clean',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-config@13.6.9',
    name: '@react-native-community/cli-config',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-debugger-ui@13.6.9',
    name: '@react-native-community/cli-debugger-ui',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-doctor@13.6.9',
    name: '@react-native-community/cli-doctor',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-hermes@13.6.9',
    name: '@react-native-community/cli-hermes',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-platform-android@13.6.9',
    name: '@react-native-community/cli-platform-android',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-platform-apple@13.6.9',
    name: '@react-native-community/cli-platform-apple',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-platform-ios@13.6.9',
    name: '@react-native-community/cli-platform-ios',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-server-api@13.6.9',
    name: '@react-native-community/cli-server-api',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-tools@13.6.9',
    name: '@react-native-community/cli-tools',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/cli-types@13.6.9',
    name: '@react-native-community/cli-types',
    version: '13.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/018e7b1762b71fa17c1714711bcb11fa02eb34d9e0612d02459c8b10c30cb4b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/datetimepicker@8.0.1',
    name: '@react-native-community/datetimepicker',
    version: '8.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3f4b86b90801dc5ebeef0e70533241805502f7496bfe5dba2d131eaed837b0a3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/netinfo@11.3.1',
    name: '@react-native-community/netinfo',
    version: '11.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-firebase/app@18.5.0',
    name: '@react-native-firebase/app',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/ee8eb9aaab62cc99d7ab756a29d3016f3b80ae56be8cc25ae30af43515032f54.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-firebase/crashlytics@18.5.0',
    name: '@react-native-firebase/crashlytics',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9d1200165d417ce68417864b4f62ae7196686f4ca205975f8fe4cf311742b99a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-firebase/messaging@18.5.0',
    name: '@react-native-firebase/messaging',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9d1200165d417ce68417864b4f62ae7196686f4ca205975f8fe4cf311742b99a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-masked-view/masked-view@0.3.1',
    name: '@react-native-masked-view/masked-view',
    version: '0.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-picker/picker@2.7.5',
    name: '@react-native-picker/picker',
    version: '2.7.5',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/assets-registry@0.74.87',
    name: '@react-native/assets-registry',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/f65dd308c09f348317c763202295c67c418f176b352188b6c32b3a372c552f01.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/babel-plugin-codegen@0.74.87',
    name: '@react-native/babel-plugin-codegen',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/014ba51593231cf1583bf587ae91cb0d72d04ad93dd7e856cd3d41b379198076.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/babel-preset@0.74.87',
    name: '@react-native/babel-preset',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/d9b8eb8da8b9aa703826f25c38f2a149e49c53ef09e077f3a0d33c9a58ac65d2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/codegen@0.74.87',
    name: '@react-native/codegen',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/0b67e6903ba2f4d0564ae9f61af64d20aa8d7b3a84fa09f006d4a62fc64b56b7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/community-cli-plugin@0.74.87',
    name: '@react-native/community-cli-plugin',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/7779af12974e6e0122146bbc907afc43992336d83f08e7b42515d08a9730a707.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/debugger-frontend@0.74.85',
    name: '@react-native/debugger-frontend',
    version: '0.74.85',
    licenseContentModuleId:
      require('../../../assets/licenses/5218deb4615a1a1873e65cc5370e99a28bc755be8860cb8dd7942f458221f8b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/debugger-frontend@0.74.87',
    name: '@react-native/debugger-frontend',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/5218deb4615a1a1873e65cc5370e99a28bc755be8860cb8dd7942f458221f8b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/dev-middleware@0.74.85',
    name: '@react-native/dev-middleware',
    version: '0.74.85',
    licenseContentModuleId:
      require('../../../assets/licenses/50d327994f2072027956017b492f29696754f33dde6819869d60f097631f2eed.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/dev-middleware@0.74.87',
    name: '@react-native/dev-middleware',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/50d327994f2072027956017b492f29696754f33dde6819869d60f097631f2eed.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/gradle-plugin@0.74.87',
    name: '@react-native/gradle-plugin',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/3cb663e732fd41f4b8b62fed47a13381fe2655c93d5e241968cf1542f83e87c1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/js-polyfills@0.74.87',
    name: '@react-native/js-polyfills',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/765e0a3731cef16e670c95a1bc9804a72b42d91752faccdb51f24749825a624e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/metro-babel-transformer@0.74.87',
    name: '@react-native/metro-babel-transformer',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/normalize-colors@0.74.85',
    name: '@react-native/normalize-colors',
    version: '0.74.85',
    licenseContentModuleId:
      require('../../../assets/licenses/52aeeed620b637026336e7dab1285919eed15f03b513559ac050d7555599339b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/normalize-colors@0.74.87',
    name: '@react-native/normalize-colors',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/52aeeed620b637026336e7dab1285919eed15f03b513559ac050d7555599339b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native/virtualized-lists@0.74.87',
    name: '@react-native/virtualized-lists',
    version: '0.74.87',
    licenseContentModuleId:
      require('../../../assets/licenses/d1b09c14c5fdb2fa3f402ce33cf55d80d761f0360c8092436721836076059cbb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/bottom-tabs@6.6.1',
    name: '@react-navigation/bottom-tabs',
    version: '6.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/core@6.4.17',
    name: '@react-navigation/core',
    version: '6.4.17',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/drawer@6.7.2',
    name: '@react-navigation/drawer',
    version: '6.7.2',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/elements@1.3.31',
    name: '@react-navigation/elements',
    version: '1.3.31',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/native@6.1.18',
    name: '@react-navigation/native',
    version: '6.1.18',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/native-stack@6.11.0',
    name: '@react-navigation/native-stack',
    version: '6.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/routers@6.1.9',
    name: '@react-navigation/routers',
    version: '6.1.9',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/stack@6.4.1',
    name: '@react-navigation/stack',
    version: '6.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@rnx-kit/chromium-edge-launcher@1.0.0',
    name: '@rnx-kit/chromium-edge-launcher',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/7ec9661a8afafab1eee3523d6f1a193eff76314a5ab10b4ce96aefd87621b0c3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@segment/loosely-validate-event@2.0.0',
    name: '@segment/loosely-validate-event',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/3c389d429fee7dd4b1af5a6d3a3a216af42684d5232af1e1e1dfad37f193e575.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@shopify/restyle@2.4.4',
    name: '@shopify/restyle',
    version: '2.4.4',
    licenseContentModuleId:
      require('../../../assets/licenses/0873555e5ade346c4a052c3dcd4b6a1952036d4fc8b8c8f1d49483f577c5e3b1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@sideway/address@4.1.5',
    name: '@sideway/address',
    version: '4.1.5',
    licenseContentModuleId:
      require('../../../assets/licenses/63787ce28ce784032665ec6bf25addbebcdbe1e167d7bf293aa7ac9a3108dd2d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@sideway/formula@3.0.1',
    name: '@sideway/formula',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5461133c96cc7de7640afb44cda9a0ac52f98f789dcc83a422568be44a34d709.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@sideway/pinpoint@2.0.0',
    name: '@sideway/pinpoint',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/ba0d033841c22f7843f6aed8f0a8d1988cc4b2d00cbb983643a521bf82440407.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@sinclair/typebox@0.27.8',
    name: '@sinclair/typebox',
    version: '0.27.8',
    licenseContentModuleId:
      require('../../../assets/licenses/359d583042e925b69f62cabbd921b7ea079c15249e9a7e8715d688f75e24aa35.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@sinonjs/commons@3.0.1',
    name: '@sinonjs/commons',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/4df78f3bcde252efdbef67e5a3ef02877be68a4b4ff7ee0c78e4d89a0a7f1f00.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@sinonjs/fake-timers@10.3.0',
    name: '@sinonjs/fake-timers',
    version: '10.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/660eedb52e4c076d2feae829b12b6b983d54f569221402618eb56cd2bb2ddcfb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@tanstack/query-core@4.36.1',
    name: '@tanstack/query-core',
    version: '4.36.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a405ee70c632bb938acb7ac5f210e814409b3760ea9d2329d8ed8ffcfd11a0e7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@tanstack/react-query@4.36.1',
    name: '@tanstack/react-query',
    version: '4.36.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a405ee70c632bb938acb7ac5f210e814409b3760ea9d2329d8ed8ffcfd11a0e7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/cookie@0.4.1',
    name: '@types/cookie',
    version: '0.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/debug@4.1.12',
    name: '@types/debug',
    version: '4.1.12',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/geojson@7946.0.14',
    name: '@types/geojson',
    version: '7946.0.14',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/hammerjs@2.0.45',
    name: '@types/hammerjs',
    version: '2.0.45',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/hoist-non-react-statics@3.3.5',
    name: '@types/hoist-non-react-statics',
    version: '3.3.5',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/istanbul-lib-coverage@2.0.6',
    name: '@types/istanbul-lib-coverage',
    version: '2.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/istanbul-lib-report@3.0.3',
    name: '@types/istanbul-lib-report',
    version: '3.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/istanbul-reports@1.1.2',
    name: '@types/istanbul-reports',
    version: '1.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/istanbul-reports@3.0.4',
    name: '@types/istanbul-reports',
    version: '3.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/js-levenshtein@1.1.3',
    name: '@types/js-levenshtein',
    version: '1.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/lodash@4.17.9',
    name: '@types/lodash',
    version: '4.17.9',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/md5@2.3.5',
    name: '@types/md5',
    version: '2.3.5',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/ms@0.7.34',
    name: '@types/ms',
    version: '0.7.34',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/node@18.19.50',
    name: '@types/node',
    version: '18.19.50',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/node@22.6.1',
    name: '@types/node',
    version: '22.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/node-forge@1.3.11',
    name: '@types/node-forge',
    version: '1.3.11',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/pluralize@0.0.29',
    name: '@types/pluralize',
    version: '0.0.29',
    licenseContentModuleId:
      require('../../../assets/licenses/27ebda9d51f0a56b7e281ccd8230a27236dcb51c05f64b07869ecf6e965d68b0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/prop-types@15.7.13',
    name: '@types/prop-types',
    version: '15.7.13',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/react@18.2.79',
    name: '@types/react',
    version: '18.2.79',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/react-native@0.70.19',
    name: '@types/react-native',
    version: '0.70.19',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/react-native-vector-icons@6.4.18',
    name: '@types/react-native-vector-icons',
    version: '6.4.18',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/set-cookie-parser@2.4.10',
    name: '@types/set-cookie-parser',
    version: '2.4.10',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/stack-utils@2.0.3',
    name: '@types/stack-utils',
    version: '2.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/uuid@8.3.4',
    name: '@types/uuid',
    version: '8.3.4',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/yargs@13.0.12',
    name: '@types/yargs',
    version: '13.0.12',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/yargs@15.0.19',
    name: '@types/yargs',
    version: '15.0.19',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/yargs@17.0.33',
    name: '@types/yargs',
    version: '17.0.33',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@types/yargs-parser@21.0.3',
    name: '@types/yargs-parser',
    version: '21.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@urql/core@2.3.6',
    name: '@urql/core',
    version: '2.3.6',
    licenseContentModuleId:
      require('../../../assets/licenses/69f92293ec0c0fc924fafd1160735d5f2523f17382a273fee355aaf9bc37c8f7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@urql/exchange-retry@0.3.0',
    name: '@urql/exchange-retry',
    version: '0.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/69f92293ec0c0fc924fafd1160735d5f2523f17382a273fee355aaf9bc37c8f7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@xmldom/xmldom@0.7.13',
    name: '@xmldom/xmldom',
    version: '0.7.13',
    licenseContentModuleId:
      require('../../../assets/licenses/4da724fc305d81606b245b324d4d2586916b9d248b23d82183df753ace0fdf71.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@xmldom/xmldom@0.8.10',
    name: '@xmldom/xmldom',
    version: '0.8.10',
    licenseContentModuleId:
      require('../../../assets/licenses/4da724fc305d81606b245b324d4d2586916b9d248b23d82183df753ace0fdf71.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@zxing/text-encoding@0.9.0',
    name: '@zxing/text-encoding',
    version: '0.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/d1c15dc8470e037b82da06a95b1a91558414a83625549c47dc3997a9985efa17.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:abort-controller@3.0.0',
    name: 'abort-controller',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/dbbf03317f0101fed5643cd87ca80fb769e358fa4f428445bf2315deeb23a154.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:accepts@1.3.8',
    name: 'accepts',
    version: '1.3.8',
    licenseContentModuleId:
      require('../../../assets/licenses/71f83c4c0621102a56d9853812777b85751bce7e9726f686f5b056c1f8a4b0e6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:acorn@8.12.1',
    name: 'acorn',
    version: '8.12.1',
    licenseContentModuleId:
      require('../../../assets/licenses/76a876cf886ff9be2a8b5e2e86514fed06223c8c9f0c1e9ee9606e93841e00b7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:acorn-walk@8.3.4',
    name: 'acorn-walk',
    version: '8.3.4',
    licenseContentModuleId:
      require('../../../assets/licenses/c2d8184ea9becd063aa40be243e8c6ec2c4f72828fdfe4b0752664ef73e96ed3.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.activity:activity:1.6.0',
    name: 'Activity',
    version: '1.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:agent-base@6.0.2',
    name: 'agent-base',
    version: '6.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/f1425c3b72330fe4fb2aa5a2fb152e939bdf534692a32b5f0b38f74147b98556.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:aggregate-error@3.1.0',
    name: 'aggregate-error',
    version: '3.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ajv@8.11.0',
    name: 'ajv',
    version: '8.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a05350a88e318e4f5f2c2a1ff1e2e88daa4dd38e6e78b71cccae422bdc762cc3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ajv@8.17.1',
    name: 'ajv',
    version: '8.17.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a05350a88e318e4f5f2c2a1ff1e2e88daa4dd38e6e78b71cccae422bdc762cc3.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.startup:startup-runtime:1.1.1',
    name: 'Android App Startup Runtime',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.appcompat:appcompat:1.6.1',
    name: 'Android AppCompat Library',
    version: '1.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.arch.core:core-common:2.1.0',
    name: 'Android Arch-Common',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.arch.core:core-runtime:2.1.0',
    name: 'Android Arch-Runtime',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.constraintlayout:constraintlayout:2.0.1',
    name: 'Android ConstraintLayout',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.constraintlayout:constraintlayout-solver:2.0.1',
    name: 'Android ConstraintLayout Solver',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.datastore:datastore:1.0.0',
    name: 'Android DataStore',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.datastore:datastore-core:1.0.0',
    name: 'Android DataStore Core',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.sqlite:sqlite:2.1.0',
    name: 'Android DB',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.emoji2:emoji2:1.2.0',
    name: 'Android Emoji2 Compat',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.emoji2:emoji2-views-helper:1.2.0',
    name: 'Android Emoji2 Compat view helpers',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-extensions:2.2.0',
    name: 'Android Lifecycle Extensions',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-livedata:2.2.0',
    name: 'Android Lifecycle LiveData',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-livedata-core:2.5.1',
    name: 'Android Lifecycle LiveData Core',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-process:2.4.1',
    name: 'Android Lifecycle Process',
    version: '2.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-runtime:2.5.1',
    name: 'Android Lifecycle Runtime',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-service:2.2.0',
    name: 'Android Lifecycle Service',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-viewmodel:2.5.1',
    name: 'Android Lifecycle ViewModel',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-viewmodel-savedstate:2.5.1',
    name: 'Android Lifecycle ViewModel with SavedState',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-common:2.5.1',
    name: 'Android Lifecycle-Common',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-common-java8:2.5.1',
    name: 'Android Lifecycle-Common for Java 8 Language',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.datastore:datastore-preferences:1.0.0',
    name: 'Android Preferences DataStore',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.datastore:datastore-preferences-core:1.0.0',
    name: 'Android Preferences DataStore Core',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.resourceinspection:resourceinspection-annotation:1.0.1',
    name: 'Android Resource Inspection - Annotations',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.appcompat:appcompat-resources:1.6.1',
    name: 'Android Resources Library',
    version: '1.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.room:room-common:2.2.5',
    name: 'Android Room-Common',
    version: '2.2.5',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.room:room-runtime:2.2.5',
    name: 'Android Room-Runtime',
    version: '2.2.5',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.vectordrawable:vectordrawable-animated:1.1.0',
    name: 'Android Support AnimatedVectorDrawable',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.cardview:cardview:1.0.0',
    name: 'Android Support CardView v7',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.dynamicanimation:dynamicanimation:1.0.0',
    name: 'Android Support DynamicAnimation',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.annotation:annotation:1.1.0',
    name: 'Android Support Library Annotations',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.asynclayoutinflater:asynclayoutinflater:1.0.0',
    name: 'Android Support Library Async Layout Inflater',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.collection:collection:1.1.0',
    name: 'Android Support Library collections',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.coordinatorlayout:coordinatorlayout:1.2.0',
    name: 'Android Support Library Coordinator Layout',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.legacy:legacy-support-core-ui:1.0.0',
    name: 'Android Support Library core UI',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.legacy:legacy-support-core-utils:1.0.0',
    name: 'Android Support Library core utils',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.cursoradapter:cursoradapter:1.0.0',
    name: 'Android Support Library Cursor Adapter',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.customview:customview:1.1.0',
    name: 'Android Support Library Custom View',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.swiperefreshlayout:swiperefreshlayout:1.1.0',
    name: 'Android Support Library Custom View',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.documentfile:documentfile:1.0.0',
    name: 'Android Support Library Document File',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.drawerlayout:drawerlayout:1.1.1',
    name: 'Android Support Library Drawer Layout',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.fragment:fragment:1.3.6',
    name: 'Android Support Library fragment',
    version: '1.3.6',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.interpolator:interpolator:1.0.0',
    name: 'Android Support Library Interpolators',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.loader:loader:1.0.0',
    name: 'Android Support Library loader',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.localbroadcastmanager:localbroadcastmanager:1.0.0',
    name: 'Android Support Library Local Broadcast Manager',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.media:media:1.0.0',
    name: 'Android Support Library media compat',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.print:print:1.0.0',
    name: 'Android Support Library Print',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.slidingpanelayout:slidingpanelayout:1.0.0',
    name: 'Android Support Library Sliding Pane Layout',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.legacy:legacy-support-v4:1.0.0',
    name: 'Android Support Library v4',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.viewpager:viewpager:1.0.0',
    name: 'Android Support Library View Pager',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.recyclerview:recyclerview:1.1.0',
    name: 'Android Support RecyclerView v7',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.sqlite:sqlite-framework:2.1.0',
    name: 'Android Support SQLite - Framework Implementation',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.vectordrawable:vectordrawable:1.1.0',
    name: 'Android Support VectorDrawable',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.tracing:tracing:1.2.0',
    name: 'Android Tracing',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.tracing:tracing-ktx:1.2.0',
    name: 'Android Tracing Runtime Kotlin Extensions',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.transition:transition:1.2.0',
    name: 'Android Transition Support Library',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.work:work-runtime:2.7.1',
    name: 'Android WorkManager Runtime',
    version: '2.7.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.maps.android:android-maps-utils:3.8.2',
    name: 'android-maps-utils',
    version: '3.8.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.autofill:autofill:1.1.0',
    name: 'AndroidX Autofill',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.concurrent:concurrent-futures:1.1.0',
    name: 'AndroidX Futures',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.viewpager2:viewpager2:1.0.0',
    name: 'AndroidX Widget ViewPager2',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:animated-base:3.1.3',
    name: 'AnimatedBase',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:animated-drawable:3.1.3',
    name: 'AnimatedDrawable',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:animated-gif:3.1.3',
    name: 'AnimatedGif',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.annotation:annotation-jvm:1.7.1',
    name: 'Annotation',
    version: '1.7.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:anser@1.4.10',
    name: 'anser',
    version: '1.4.10',
    licenseContentModuleId:
      require('../../../assets/licenses/706ffe2db6ae2993ed01bc7f3cde114373fe79eb6123dfc6d8d41f53989a2be6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ansi-escapes@4.3.2',
    name: 'ansi-escapes',
    version: '4.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ansi-fragments@0.2.1',
    name: 'ansi-fragments',
    version: '0.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/eccf2c6e40d940af32588a1f8dba449b3ef61397c3ac0967e205816b873060db.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ansi-regex@4.1.1',
    name: 'ansi-regex',
    version: '4.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ansi-regex@5.0.1',
    name: 'ansi-regex',
    version: '5.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ansi-regex@6.1.0',
    name: 'ansi-regex',
    version: '6.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ansi-styles@3.2.1',
    name: 'ansi-styles',
    version: '3.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ansi-styles@4.3.0',
    name: 'ansi-styles',
    version: '4.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ansi-styles@5.2.0',
    name: 'ansi-styles',
    version: '5.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ansi-styles@6.2.1',
    name: 'ansi-styles',
    version: '6.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:any-promise@1.3.0',
    name: 'any-promise',
    version: '1.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/bd54a6ab4e3ad0f73420d8e4d2a990179e6367e5752a6abac5f61ad4f4130a43.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:anymatch@3.1.3',
    name: 'anymatch',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/5a3b0007c4203f10fe11b3fe8747253eb994f135e10b73e1f88ada941af09c6e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:commons-codec:commons-codec:1.10',
    name: 'Apache Commons Codec',
    version: '1.10',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:commons-io:commons-io:2.6',
    name: 'Apache Commons IO',
    version: '2.6',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:appdirsjs@1.2.7',
    name: 'appdirsjs',
    version: '1.2.7',
    licenseContentModuleId:
      require('../../../assets/licenses/baeaf5b353debd4c0c6890f76b2c5e0870ceb9caf802358bf6127cafe54cf973.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:application-config-path@0.1.1',
    name: 'application-config-path',
    version: '0.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a2d192f1670836fbc0f602f257526e3d61f1437630a3207fc97fb24cfb7eaed8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:arg@5.0.2',
    name: 'arg',
    version: '5.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/91887c62d26f64b8d6e98b1dca57e75aca62e6f9af79fb0783f8f1904abaeea6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:argparse@1.0.10',
    name: 'argparse',
    version: '1.0.10',
    licenseContentModuleId:
      require('../../../assets/licenses/c8442419dc614089ea022b3da6bfc089b41a58fb7b9030d1e651f2f36189dce2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:argparse@2.0.1',
    name: 'argparse',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/de4d1f2d2ad5ad0cfd1657a106476b31cb5db5ef9d1ff842b237c0c81f0c8a23.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:array-buffer-byte-length@1.0.1',
    name: 'array-buffer-byte-length',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/499507afc8a14166950bd5e445a8206d0b38fab61ea54e436b8bf2fa073cd59a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:array-union@2.1.0',
    name: 'array-union',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:arraybuffer.prototype.slice@1.0.3',
    name: 'arraybuffer.prototype.slice',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/a6c1514885935d6b699b7e6c1ab22e9312189a75a4e937d83f20749a67d0dbe7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:asap@2.0.6',
    name: 'asap',
    version: '2.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/e80373b1ed0f33cecc47173b4b0c6afe0d0318b32dbd84116a1a957e3f7f43a8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ast-types@0.13.4',
    name: 'ast-types',
    version: '0.13.4',
    licenseContentModuleId:
      require('../../../assets/licenses/a374b737c41b30b1ec04c5fcc17d1b853f008f217cc43a9dbea441abd9afde70.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ast-types@0.15.2',
    name: 'ast-types',
    version: '0.15.2',
    licenseContentModuleId:
      require('../../../assets/licenses/a374b737c41b30b1ec04c5fcc17d1b853f008f217cc43a9dbea441abd9afde70.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:astral-regex@1.0.0',
    name: 'astral-regex',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/69dee148a2cc470554dfa7142e830662062394d0fe67cddd379aba90dc60d6b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:async-limiter@1.0.1',
    name: 'async-limiter',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e5a57cdd72e279910183799153134d0e749a5664fc459c8eacbecf72532b7db3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:asynckit@0.4.0',
    name: 'asynckit',
    version: '0.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1953150d5d4b10c7542cee6f6e0c613b2682545233f069d75cfff1936386ce10.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:at-least-node@1.0.0',
    name: 'at-least-node',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/ecc042b5f1cdc6854fc00486065084bed877daa8a7fadce15ef943a550d1dff0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:available-typed-arrays@1.0.7',
    name: 'available-typed-arrays',
    version: '1.0.7',
    licenseContentModuleId:
      require('../../../assets/licenses/6d0917530cf3b3dca12c1ab7798e4d38ad0a6798ecc1bd27849a3048ba91d265.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:axios@1.6.8',
    name: 'axios',
    version: '1.6.8',
    licenseContentModuleId:
      require('../../../assets/licenses/82761059eaedacb3356803aea8a170d8298609f91b14fc32ee1bfb40d690183c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:babel-core@7.0.0-bridge.0',
    name: 'babel-core',
    version: '7.0.0-bridge.0',
    licenseContentModuleId:
      require('../../../assets/licenses/14a1df9d0a4c57f97482bbe6be1fe587bf33ac76200232ac562cba5d122dfe9d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:babel-plugin-polyfill-corejs2@0.4.11',
    name: 'babel-plugin-polyfill-corejs2',
    version: '0.4.11',
    licenseContentModuleId:
      require('../../../assets/licenses/43571857d624621d9c1f5933339bdb3a31832919bed8143494acf1ae2fa46dc5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:babel-plugin-polyfill-corejs3@0.10.6',
    name: 'babel-plugin-polyfill-corejs3',
    version: '0.10.6',
    licenseContentModuleId:
      require('../../../assets/licenses/43571857d624621d9c1f5933339bdb3a31832919bed8143494acf1ae2fa46dc5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:babel-plugin-polyfill-regenerator@0.6.2',
    name: 'babel-plugin-polyfill-regenerator',
    version: '0.6.2',
    licenseContentModuleId:
      require('../../../assets/licenses/43571857d624621d9c1f5933339bdb3a31832919bed8143494acf1ae2fa46dc5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:babel-plugin-react-compiler@0.0.0-experimental-6067d4e-20240923',
    name: 'babel-plugin-react-compiler',
    version: '0.0.0-experimental-6067d4e-20240923',
    licenseContentModuleId:
      require('../../../assets/licenses/78ced4757d5325149c4950664aace3a4f05854880e98dd07eb675791746b54ce.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:babel-plugin-react-native-web@0.19.12',
    name: 'babel-plugin-react-native-web',
    version: '0.19.12',
    licenseContentModuleId:
      require('../../../assets/licenses/cc06054a391f6b5dbcf6f142d2bb9d637db897746b0e6c58ed913834b581cae4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:babel-plugin-transform-flow-enums@0.0.2',
    name: 'babel-plugin-transform-flow-enums',
    version: '0.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:babel-preset-expo@11.0.14',
    name: 'babel-preset-expo',
    version: '11.0.14',
    licenseContentModuleId:
      require('../../../assets/licenses/8f7d1b48e67df843ec6d459356c3796ce4d5cb6547b394b210bec00ef1b2cc77.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:balanced-match@1.0.2',
    name: 'balanced-match',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/a1bd5deadb6a06dd74efa852c1b8b23f63b67f2214fbe9c8bd591da51da69268.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:base64-js@1.5.1',
    name: 'base64-js',
    version: '1.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5b37224c080cdcc97c871ada971c224e9926370fe74f11b539aa1cf9f3b1aca1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:better-opn@3.0.2',
    name: 'better-opn',
    version: '3.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/914d1872727809314c403a449c6bfed8aa7de72679ced2477bac51999dd65258.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:big-integer@1.6.52',
    name: 'big-integer',
    version: '1.6.52',
    licenseContentModuleId:
      require('../../../assets/licenses/e9b0e94f628e00b5ed98046cfa041696ff89eebbbdd54108ee350625bc6d0363.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:binary-extensions@2.3.0',
    name: 'binary-extensions',
    version: '2.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/96f0820026bd6dadc4af99c6dba7111d2e0190c092c376a746c13863e151d072.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.biometric:biometric:1.2.0-alpha04',
    name: 'Biometric',
    version: '1.2.0-alpha04',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:bl@4.1.0',
    name: 'bl',
    version: '4.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9377db95383c8befacf05c6e465d969d756edf178487ca1344fdf3ba147c596f.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.parse.bolts:bolts-tasks:1.4.0',
    name: 'Bolts-Tasks',
    version: '1.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:boolbase@1.0.0',
    name: 'boolbase',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9cac5bfc290d30ccd13fa833923cb545584481e8ced66380bf758f1053f9d81d.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:boost@1.83.0',
    name: 'boost',
    version: '1.83.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c9bff75738922193e67fa726fa225535870d2aa1059f91452c411736284ad566.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:bplist-creator@0.0.7',
    name: 'bplist-creator',
    version: '0.0.7',
    licenseContentModuleId:
      require('../../../assets/licenses/5779a8054be34ec324eafad8f950b336ddbe9a7d80b27bb32fa9e3d27c9d4c2d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:bplist-creator@0.1.0',
    name: 'bplist-creator',
    version: '0.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/d9bacb8be7c3a210dfe531bde8503eb567f51a8fdbfc438fcf7a171d7ab338d8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:bplist-parser@0.3.1',
    name: 'bplist-parser',
    version: '0.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/4a09c55c64d57abe284e09318763dcd69795ed7a201a84edf1bf8774c3b91a8e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:bplist-parser@0.3.2',
    name: 'bplist-parser',
    version: '0.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/4a09c55c64d57abe284e09318763dcd69795ed7a201a84edf1bf8774c3b91a8e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:brace-expansion@1.1.11',
    name: 'brace-expansion',
    version: '1.1.11',
    licenseContentModuleId:
      require('../../../assets/licenses/68f12f6e2c33688699249c01d8f9623c534da20aa71989c57b061b7bc1676d14.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:brace-expansion@2.0.1',
    name: 'brace-expansion',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/68f12f6e2c33688699249c01d8f9623c534da20aa71989c57b061b7bc1676d14.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:braces@3.0.3',
    name: 'braces',
    version: '3.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/35bdd8a44339719441900fb50fbefc5e2dca1ca662cbaed7a687de842c8b70f2.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.browser:browser:1.6.0',
    name: 'Browser',
    version: '1.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:browserslist@4.23.3',
    name: 'browserslist',
    version: '4.23.3',
    licenseContentModuleId:
      require('../../../assets/licenses/f25bf9bf3ae8984bcd43bf7fb8f78e7eec8d577081fb8d0989cfa7c67ecebb8e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:bser@2.1.1',
    name: 'bser',
    version: '2.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/fbc3054ed9e51cce426c17344d2c0b9a3792e7f13828c2da2941e92032571650.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:buffer@5.7.1',
    name: 'buffer',
    version: '5.7.1',
    licenseContentModuleId:
      require('../../../assets/licenses/06bafa45fdad2579ba0e43b0c9b2c6290287c99c4203c300254a462b38a307f6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:buffer-alloc@1.2.0',
    name: 'buffer-alloc',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/84842655309217474329ece059c2d1941d35bc29e4b34baa702c61951d7e20f5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:buffer-alloc-unsafe@1.1.0',
    name: 'buffer-alloc-unsafe',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/965f6d7b3de0559bac1d54fa1bc6320139593feb9e82a2d3258fdcbd729b627b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:buffer-fill@1.0.0',
    name: 'buffer-fill',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9a9f187c854f7b9c481eba59b90328668b7298f8208300cb642e985843815b40.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:buffer-from@1.1.2',
    name: 'buffer-from',
    version: '1.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/14275f5c8139d02054c5259d52a88ccbba662a86af18c30f071c8d082dc6004c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:builtins@1.0.3',
    name: 'builtins',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/819d454ae5c5a9d05197d20f66f835ebfa5987ffe497b03f77ed735df21a8ade.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:bytes@3.0.0',
    name: 'bytes',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e3b44af066615de2ea48d18d852d0762f18c0b2efcea714fa48a6f729d405b85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:bytes@3.1.2',
    name: 'bytes',
    version: '3.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/e3b44af066615de2ea48d18d852d0762f18c0b2efcea714fa48a6f729d405b85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cacache@18.0.4',
    name: 'cacache',
    version: '18.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/720836c9bdad386485a492ab41fe08007ecf85ca278ddd8f9333494dcac4949d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:call-bind@1.0.7',
    name: 'call-bind',
    version: '1.0.7',
    licenseContentModuleId:
      require('../../../assets/licenses/39c5ec504cf6bd5cd782a7c695828e09189df79f5d94840e4f08feb97b9fd416.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:caller-callsite@2.0.0',
    name: 'caller-callsite',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:caller-path@2.0.0',
    name: 'caller-path',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:callsites@2.0.0',
    name: 'callsites',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:camelcase@5.3.1',
    name: 'camelcase',
    version: '5.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:camelcase@6.3.0',
    name: 'camelcase',
    version: '6.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:caniuse-lite@1.0.30001663',
    name: 'caniuse-lite',
    version: '1.0.30001663',
    licenseContentModuleId:
      require('../../../assets/licenses/fd3a263fe19ed8faa9068b43abaebafc02c77897b0c6fc09abc04bb592e5f16e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:chalk@2.4.2',
    name: 'chalk',
    version: '2.4.2',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:chalk@4.1.2',
    name: 'chalk',
    version: '4.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:chardet@0.7.0',
    name: 'chardet',
    version: '0.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/7df1d6cf5b4112cbe277a84269e02ae631603a9a3a21b8328a34c30b8c3dd1ab.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:charenc@0.0.2',
    name: 'charenc',
    version: '0.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/74e116190bb682ea35c0632159c71801815c5554df4e01a9c9ba08662f61949f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:chokidar@3.6.0',
    name: 'chokidar',
    version: '3.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/db9ba183d4cbfbaf6c27db2effddbb84b46340c33ed32a066bc0b144a3ea1298.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:chownr@2.0.0',
    name: 'chownr',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:chrome-launcher@0.15.2',
    name: 'chrome-launcher',
    version: '0.15.2',
    licenseContentModuleId:
      require('../../../assets/licenses/7ec9661a8afafab1eee3523d6f1a193eff76314a5ab10b4ce96aefd87621b0c3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ci-info@2.0.0',
    name: 'ci-info',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/25bd22427e27b0d3f1c3da2670bb44b622bcced22ebdf4777d5488ac129370a1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ci-info@3.9.0',
    name: 'ci-info',
    version: '3.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/f58943cb354fb2707fea2f7b26b04e6014ddb56835cdfd414c9d2c6c59165b64.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:clean-stack@2.2.0',
    name: 'clean-stack',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cli-cursor@2.1.0',
    name: 'cli-cursor',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cli-cursor@3.1.0',
    name: 'cli-cursor',
    version: '3.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cli-spinners@2.9.2',
    name: 'cli-spinners',
    version: '2.9.2',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cli-width@3.0.0',
    name: 'cli-width',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/33fa5470b2195e410b075a32516b6ad27784b8a8ff74ae90cfd60c14b76e6644.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cliui@6.0.0',
    name: 'cliui',
    version: '6.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/2dc0465729366c3a7890dfa9e972a1ba7048a26c02116fb8b419a6a1ac110149.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cliui@7.0.4',
    name: 'cliui',
    version: '7.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/2dc0465729366c3a7890dfa9e972a1ba7048a26c02116fb8b419a6a1ac110149.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cliui@8.0.1',
    name: 'cliui',
    version: '8.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/2dc0465729366c3a7890dfa9e972a1ba7048a26c02116fb8b419a6a1ac110149.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:clone@1.0.4',
    name: 'clone',
    version: '1.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/3fb0857ef0133928cf72c88dfc464e931486e88778961eedec25585e2321507f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:clone@2.1.2',
    name: 'clone',
    version: '2.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/3fb0857ef0133928cf72c88dfc464e931486e88778961eedec25585e2321507f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:clone-deep@2.0.2',
    name: 'clone-deep',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/4cd903859549d4b20b571041f96dfae1136ed079c476126268f9d7cc1b611150.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:clone-deep@4.0.1',
    name: 'clone-deep',
    version: '4.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e70ff771504ba41f2be55de812a017ff46433d7a250c862e38fc419159e44500.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:color@3.2.1',
    name: 'color',
    version: '3.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/4c0844caafd3db9a4b643ea493558873710f4e9c8b257887ba066e5e80557848.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:color@4.2.3',
    name: 'color',
    version: '4.2.3',
    licenseContentModuleId:
      require('../../../assets/licenses/4c0844caafd3db9a4b643ea493558873710f4e9c8b257887ba066e5e80557848.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:color-convert@1.9.3',
    name: 'color-convert',
    version: '1.9.3',
    licenseContentModuleId:
      require('../../../assets/licenses/693866fc419c6f61c8570438ec00659d156ec2b4d4a4d04091711f5f11a365d4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:color-convert@2.0.1',
    name: 'color-convert',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/693866fc419c6f61c8570438ec00659d156ec2b4d4a4d04091711f5f11a365d4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:color-name@1.1.3',
    name: 'color-name',
    version: '1.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/c064f7a3e353bc1bc977f3c897941c75ef763f44f41677e0a15370ca0853d6e2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:color-name@1.1.4',
    name: 'color-name',
    version: '1.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/c064f7a3e353bc1bc977f3c897941c75ef763f44f41677e0a15370ca0853d6e2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:color-string@1.9.1',
    name: 'color-string',
    version: '1.9.1',
    licenseContentModuleId:
      require('../../../assets/licenses/8984783ab2478bbee455f0eb6c375b5b62c57c86d4a55f6bf96dfd08e8d48a10.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:colorette@1.4.0',
    name: 'colorette',
    version: '1.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/f101c761d255d0dddc77dd8a9327733b03d381798ec54a1bb718367207b48a8e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:combined-stream@1.0.8',
    name: 'combined-stream',
    version: '1.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/47eb8ca82c798246774946d1be0f9aa08f025fa8325ced0947aeeb4c05fe5547.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:command-exists@1.2.9',
    name: 'command-exists',
    version: '1.2.9',
    licenseContentModuleId:
      require('../../../assets/licenses/f1354634fd0ced0354bd5b5fe17f4e613f069850bfedaab00c8fd78f6bc77d5e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:commander@2.20.3',
    name: 'commander',
    version: '2.20.3',
    licenseContentModuleId:
      require('../../../assets/licenses/04512a63dce4d2d506ad612dc0bd7681ccf6e3655f7b6eaef7dfac8323d1ec0b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:commander@4.1.1',
    name: 'commander',
    version: '4.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/04512a63dce4d2d506ad612dc0bd7681ccf6e3655f7b6eaef7dfac8323d1ec0b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:commander@7.2.0',
    name: 'commander',
    version: '7.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/04512a63dce4d2d506ad612dc0bd7681ccf6e3655f7b6eaef7dfac8323d1ec0b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:commander@9.5.0',
    name: 'commander',
    version: '9.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/04512a63dce4d2d506ad612dc0bd7681ccf6e3655f7b6eaef7dfac8323d1ec0b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:commondir@1.0.1',
    name: 'commondir',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/8bb16db1b047019e4395965f2cf3611b06c34bf86dc2d0210b3c3f91b53c21fe.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:component-type@1.2.2',
    name: 'component-type',
    version: '1.2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/db2a3b1bbbe649bc6e68028d359b066a6d8688b5e9cc55c62b6a519d8a97f292.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:compressible@2.0.18',
    name: 'compressible',
    version: '2.0.18',
    licenseContentModuleId:
      require('../../../assets/licenses/b6be1b6c4e8c0441448a70fc6517c8d1ad62ad6a614b1fd049f74aa86c8b9820.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:compression@1.7.4',
    name: 'compression',
    version: '1.7.4',
    licenseContentModuleId:
      require('../../../assets/licenses/23d466b1b134b415b66fa50c6526b4cf3e7b9258554da88d3abb371721e7ce68.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:concat-map@0.0.1',
    name: 'concat-map',
    version: '0.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/435a6722c786b0a56fbe7387028f1d9d3f3a2d0fb615bb8fee118727c3f59b7b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:connect@3.7.0',
    name: 'connect',
    version: '3.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9913ff70f23424d49fda2b05902cfb72f17ae1e48aaf898c349a284289a74751.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:convert-source-map@2.0.0',
    name: 'convert-source-map',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1fa6ee8bb95a81ae3d73a5bd074a3ac380ffec13697051063ca1a601921b91db.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cookie@0.4.2',
    name: 'cookie',
    version: '0.4.2',
    licenseContentModuleId:
      require('../../../assets/licenses/c02110eedc16c7114f1a9bdc026c65626ce1d9c7e27fd51a8e0feee8a48a6858.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.core:core:1.12.0',
    name: 'Core',
    version: '1.12.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.core:core-ktx:1.12.0',
    name: 'Core Kotlin Extensions',
    version: '1.12.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:core-js-compat@3.38.1',
    name: 'core-js-compat',
    version: '3.38.1',
    licenseContentModuleId:
      require('../../../assets/licenses/51aff0fa92ac49e01ce6ba0fed992b0a34f8afe15203dd5f38c43f9e88b0167b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:core-util-is@1.0.3',
    name: 'core-util-is',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/33b734d60042d0fe0c92dd1fc1e874193a1c899ec3e276a2eb935d2d0bf5b710.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cosmiconfig@5.2.1',
    name: 'cosmiconfig',
    version: '5.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/8e714750725e75c8b31172ef84c0805f94873f86e3b5cfca8a948553f0778fa1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cross-fetch@3.1.8',
    name: 'cross-fetch',
    version: '3.1.8',
    licenseContentModuleId:
      require('../../../assets/licenses/821a6be45c3fd08815688b30b6210fc97848cf88c7a6ed8afb22ae75b83571b4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cross-spawn@6.0.5',
    name: 'cross-spawn',
    version: '6.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/aaa78451b6fecd1b9c4594c796c133c0e90cad100372ff8bc6de615e9ef9adf1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:cross-spawn@7.0.3',
    name: 'cross-spawn',
    version: '7.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/aaa78451b6fecd1b9c4594c796c133c0e90cad100372ff8bc6de615e9ef9adf1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:crypt@0.0.2',
    name: 'crypt',
    version: '0.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/74e116190bb682ea35c0632159c71801815c5554df4e01a9c9ba08662f61949f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:crypto-random-string@1.0.0',
    name: 'crypto-random-string',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:crypto-random-string@2.0.0',
    name: 'crypto-random-string',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:css-in-js-utils@3.1.0',
    name: 'css-in-js-utils',
    version: '3.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/350d3529dc75e7a9b463b62c959a2abd24b568b8a6a39e3fb006f1a3c8cb31a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:css-select@5.1.0',
    name: 'css-select',
    version: '5.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cb992345949ccd6e8394b2cd6c465f7b897c864f845937dbf64e8997f389e164.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:css-tree@1.1.3',
    name: 'css-tree',
    version: '1.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/d34ff47ca7a39e9ee3987a03a42cce0af4f77ec280f06f3969e2c33ca350a899.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:css-what@6.1.0',
    name: 'css-what',
    version: '6.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cb992345949ccd6e8394b2cd6c465f7b897c864f845937dbf64e8997f389e164.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:csstype@3.1.3',
    name: 'csstype',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/11d55bd4541c75ee7879547ac49089c489163dae49551389713c3d026cab383e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:dag-map@1.0.2',
    name: 'dag-map',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/1a8346e2013312cdf41d4c8deacd23d51783604f579dfa5c3e64e624e23f9ec2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:data-uri-to-buffer@3.0.1',
    name: 'data-uri-to-buffer',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6a14de4d552c0c88bdbbaf57f72f625835685eea97de5047f87a463089b8e9f6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:data-view-buffer@1.0.1',
    name: 'data-view-buffer',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b41d08bc3624d8c436fc80237d73ebb361985a67f4504bbcd703e5ca2b27254c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:data-view-byte-length@1.0.1',
    name: 'data-view-byte-length',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5e325595b4ea8cfec3802f545b1def5d7b73e4a5b8e9ba63e32a320f67732292.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:data-view-byte-offset@1.0.0',
    name: 'data-view-byte-offset',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5e325595b4ea8cfec3802f545b1def5d7b73e4a5b8e9ba63e32a320f67732292.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:date-fns@2.30.0',
    name: 'date-fns',
    version: '2.30.0',
    licenseContentModuleId:
      require('../../../assets/licenses/8d3951c38967b964b1fe259bfd200c2647cc04c858b55a4414e3122a60f1ef4b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:dayjs@1.11.13',
    name: 'dayjs',
    version: '1.11.13',
    licenseContentModuleId:
      require('../../../assets/licenses/5faab7526d055651be3aab769d58897be6bd91f3d39d137f25f12dba1b31d5dc.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:debug@2.6.9',
    name: 'debug',
    version: '2.6.9',
    licenseContentModuleId:
      require('../../../assets/licenses/98c970de440dcfc77471610aec2377c9d9b0db2b3be6d1add524a586e1d7f422.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:debug@3.2.7',
    name: 'debug',
    version: '3.2.7',
    licenseContentModuleId:
      require('../../../assets/licenses/98c970de440dcfc77471610aec2377c9d9b0db2b3be6d1add524a586e1d7f422.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:debug@4.3.7',
    name: 'debug',
    version: '4.3.7',
    licenseContentModuleId:
      require('../../../assets/licenses/3a61c6c96caf5c1d9b623fb9b04c822b783dfcb78aa7e49c76a3f643e6ed7f95.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:decamelize@1.2.0',
    name: 'decamelize',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:decode-uri-component@0.2.2',
    name: 'decode-uri-component',
    version: '0.2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/ed7a9a0f74e43951b2520efe1a4349cb9ed5f3dff0b0f268e2e51a4d38df7ea4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:deep-extend@0.6.0',
    name: 'deep-extend',
    version: '0.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e17120ad3deff741c2ca5cbe511971ca33971a1ba6e49694c6498309bb2680b9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:deep-is@0.1.4',
    name: 'deep-is',
    version: '0.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/f2042f3634c4136d06b5139c9c6aefb81a3a462b514548bc1845953233dfba98.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:deepmerge@2.2.1',
    name: 'deepmerge',
    version: '2.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/df9f7d1de68a86422c9c59579b5febcdefc6705ea3926e911fc29b7eddb75c18.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:deepmerge@4.3.1',
    name: 'deepmerge',
    version: '4.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6cfc4687cb2f2d86f4a77e6b526290d3878e5e512f3fec2f4cb36a9cb36f798b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:default-gateway@4.2.0',
    name: 'default-gateway',
    version: '4.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/23e60503dc06abf04b9e535e17797b4e0f9224e6c5abf9207317d5a67c88c743.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:defaults@1.0.4',
    name: 'defaults',
    version: '1.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/fe99d9a94ec7edc64a9767701f830f66e08239b000d653a359d66e640289ed0c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:define-data-property@1.1.4',
    name: 'define-data-property',
    version: '1.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/b41d08bc3624d8c436fc80237d73ebb361985a67f4504bbcd703e5ca2b27254c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:define-lazy-prop@2.0.0',
    name: 'define-lazy-prop',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:define-properties@1.2.1',
    name: 'define-properties',
    version: '1.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/00d402c2bbe7c67369bd01ce2c16b8ed46ccc949a1ee2d6bb8f9606afa8c7434.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:degenerator@3.0.4',
    name: 'degenerator',
    version: '3.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/7e05e91515ce32caadae593757538c73b324f0f21896756fda232b5e54dbf19b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:del@6.1.1',
    name: 'del',
    version: '6.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:delayed-stream@1.0.0',
    name: 'delayed-stream',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/47eb8ca82c798246774946d1be0f9aa08f025fa8325ced0947aeeb4c05fe5547.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:denodeify@1.2.1',
    name: 'denodeify',
    version: '1.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/ca5407b6d80f9bb55d3fbd2b1c7cad6f408017ebb1ea69a1fba671bbb8f31d9d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:depd@2.0.0',
    name: 'depd',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/bd134b41da59e452fb5a1d366b660886f741c87c2bf9428e93764c419fbc40f5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:destroy@1.2.0',
    name: 'destroy',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/ffe370c8785b0b688d954977ce8dc52e19e5f17962cc5f80009c85eba4925d56.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:detect-libc@1.0.3',
    name: 'detect-libc',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/b40930bbcf80744c86c46a12bc9da056641d722716c378f5659b9e555ef833e1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:dijkstrajs@1.0.3',
    name: 'dijkstrajs',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/c46324e45a005413535a6fb7a97e9eacd3cc6bf30335b7d5c10b8ee3af9e60c2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:dir-glob@3.0.1',
    name: 'dir-glob',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/69dee148a2cc470554dfa7142e830662062394d0fe67cddd379aba90dc60d6b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:dom-serializer@2.0.0',
    name: 'dom-serializer',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/94cfe87de9b178e8fee313a19178e625129e2ce559db32e772e7bd95114ee6ff.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:domelementtype@2.3.0',
    name: 'domelementtype',
    version: '2.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cb992345949ccd6e8394b2cd6c465f7b897c864f845937dbf64e8997f389e164.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:domhandler@5.0.3',
    name: 'domhandler',
    version: '5.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cb992345949ccd6e8394b2cd6c465f7b897c864f845937dbf64e8997f389e164.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:domutils@3.1.0',
    name: 'domutils',
    version: '3.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cb992345949ccd6e8394b2cd6c465f7b897c864f845937dbf64e8997f389e164.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:dotenv@16.4.5',
    name: 'dotenv',
    version: '16.4.5',
    licenseContentModuleId:
      require('../../../assets/licenses/74b629b24865e1e83c5277ee84590b7937644d6fd959d0c7bdce758676cd2ced.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:dotenv-expand@11.0.6',
    name: 'dotenv-expand',
    version: '11.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/3726b9470c3a6b54e1ebcc1d802d37089b5a5fc97273b52b2cee578a4421ec45.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:DoubleConversion@1.1.6',
    name: 'DoubleConversion',
    version: '1.1.6',
    licenseContentModuleId:
      require('../../../assets/licenses/4af93c12062c58058378de2397dc1c92bbff9ddfb1d583a01c84127557ce97ca.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:drawee:3.1.3',
    name: 'Drawee',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:eastasianwidth@0.2.0',
    name: 'eastasianwidth',
    version: '0.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5a20e0a3c5f1a6b449dd3fee8e3f0c7dc0a6e508c93fa5703d7c8823d35aed54.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ee-first@1.1.1',
    name: 'ee-first',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/965ef284f7f4c176842ec2e87fa13e79feed777d56d7a21a5a3b38f1bb6dc288.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:electron-to-chromium@1.5.28',
    name: 'electron-to-chromium',
    version: '1.5.28',
    licenseContentModuleId:
      require('../../../assets/licenses/25ba5c59dad3e0dd8f9540beaa0f0a86a10e3aec35af5fdc8e88c5f6a5c0d8c6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:emoji-regex@8.0.0',
    name: 'emoji-regex',
    version: '8.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:emoji-regex@9.2.2',
    name: 'emoji-regex',
    version: '9.2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:encodeurl@1.0.2',
    name: 'encodeurl',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/7585ea7bba616ccbbe43cb54ecb67956688c3c5641bb84f3099a652a73193afe.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:encodeurl@2.0.0',
    name: 'encodeurl',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/7585ea7bba616ccbbe43cb54ecb67956688c3c5641bb84f3099a652a73193afe.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:end-of-stream@1.4.4',
    name: 'end-of-stream',
    version: '1.4.4',
    licenseContentModuleId:
      require('../../../assets/licenses/3fe8d55a98dbf260eace67c00cf9bc53edb46234e840098a0b93df3096b97fb6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:entities@4.5.0',
    name: 'entities',
    version: '4.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cb992345949ccd6e8394b2cd6c465f7b897c864f845937dbf64e8997f389e164.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:env-editor@0.4.2',
    name: 'env-editor',
    version: '0.4.2',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:envinfo@7.14.0',
    name: 'envinfo',
    version: '7.14.0',
    licenseContentModuleId:
      require('../../../assets/licenses/84bc227399a1bb00723da50edc61389a30ad58887fadde9d6b89d39448b5176d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:eol@0.9.1',
    name: 'eol',
    version: '0.9.1',
    licenseContentModuleId:
      require('../../../assets/licenses/9eb6f69d48a1dd764e8a33f14a584f460d3cec653477c136a95dd6df9c249211.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:error-ex@1.3.2',
    name: 'error-ex',
    version: '1.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/92b07a2e5b0e051d37dde85042c736d6d551cfcbc0983f39d7ef903b3986bbc1.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.errorprone:error_prone_annotations:2.9.0',
    name: 'error-prone annotations',
    version: '2.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:error-stack-parser@2.1.4',
    name: 'error-stack-parser',
    version: '2.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/899da9d991cb211a3642b84e82a9ae0b4b4e44546fd207e34d7d4ec2eb40f420.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:errorhandler@1.5.1',
    name: 'errorhandler',
    version: '1.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/23d466b1b134b415b66fa50c6526b4cf3e7b9258554da88d3abb371721e7ce68.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:es-abstract@1.23.3',
    name: 'es-abstract',
    version: '1.23.3',
    licenseContentModuleId:
      require('../../../assets/licenses/210549bd75abec340599f291e5ecd95b9acd0d8a713543838ab42f6f462b16bc.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:es-define-property@1.0.0',
    name: 'es-define-property',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5e325595b4ea8cfec3802f545b1def5d7b73e4a5b8e9ba63e32a320f67732292.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:es-errors@1.3.0',
    name: 'es-errors',
    version: '1.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5e325595b4ea8cfec3802f545b1def5d7b73e4a5b8e9ba63e32a320f67732292.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:es-object-atoms@1.0.0',
    name: 'es-object-atoms',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5e325595b4ea8cfec3802f545b1def5d7b73e4a5b8e9ba63e32a320f67732292.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:es-set-tostringtag@2.0.3',
    name: 'es-set-tostringtag',
    version: '2.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/1a3aeb1f1398bd697d57c3c585faadf59d825aca6e3162cd7eeb72ff76eb2466.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:es-to-primitive@1.2.1',
    name: 'es-to-primitive',
    version: '1.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/c61652db3d2808f667b48af0a358f0d85fd07ad4a0d0b1a50882dec3b764c522.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:escalade@3.2.0',
    name: 'escalade',
    version: '3.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9a9edad7baae52622bddf3c15b2ef8a33d2c89f2d25408ad13e8a7481c6b0c97.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:escape-html@1.0.3',
    name: 'escape-html',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/255aa557a1f55224ce522f311629c0bf20854740a67955cefd798fbd1d3d1ded.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:escape-string-regexp@1.0.5',
    name: 'escape-string-regexp',
    version: '1.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:escape-string-regexp@2.0.0',
    name: 'escape-string-regexp',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:escape-string-regexp@4.0.0',
    name: 'escape-string-regexp',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:escodegen@1.14.3',
    name: 'escodegen',
    version: '1.14.3',
    licenseContentModuleId:
      require('../../../assets/licenses/d5d62471a28a9920416c7d37d387a3bf55f32cb768590f605f84990b76aee5de.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:esprima@4.0.1',
    name: 'esprima',
    version: '4.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/94bcb9959136723aa4fb36e1a6c4d5c662a2369978cfae344dabfb83ae619e79.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:estraverse@4.3.0',
    name: 'estraverse',
    version: '4.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/0e74697a68cebdcd61502c30fe80ab7f9e341d995dcd452023654d57133534b1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:esutils@2.0.3',
    name: 'esutils',
    version: '2.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/0e74697a68cebdcd61502c30fe80ab7f9e341d995dcd452023654d57133534b1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:etag@1.8.1',
    name: 'etag',
    version: '1.8.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a7996721249a136fbcfc1c201bcb5f414f38a701d4a24f28abe65e16cfcce813.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:event-target-shim@5.0.1',
    name: 'event-target-shim',
    version: '5.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/97d87142793695cd73243de7258694abe85b3b6060fca7f247b0a2afa8219678.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.greenrobot:eventbus:3.2.0',
    name: 'EventBus',
    version: '3.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:events@3.3.0',
    name: 'events',
    version: '3.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/631987b7616a325a5b97566c232418481ddf7dbb5ecadefb991e791876cc2599.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:exec-async@2.2.0',
    name: 'exec-async',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/fb109f5e79e0007ffb6a29dcf6208f1762af94e56f3d2f6be3a2b3ccab690ff0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:execa@1.0.0',
    name: 'execa',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:execa@5.1.1',
    name: 'execa',
    version: '5.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.annotation:annotation-experimental:1.3.0',
    name: 'Experimental annotation',
    version: '1.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo@51.0.34',
    name: 'expo',
    version: '51.0.34',
    licenseContentModuleId:
      require('../../../assets/licenses/2d280fd368b220895e96a6c5a60c6f807e3c089414650fb344253cf7c071c8cb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-application@5.9.1',
    name: 'expo-application',
    version: '5.9.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a8cd79ca39e012a61dc1363e91c05a13506762c6e10ded42728819e9c26f7e4d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-asset@10.0.10',
    name: 'expo-asset',
    version: '10.0.10',
    licenseContentModuleId:
      require('../../../assets/licenses/aaf4a89c3684fa5ec2bfdf80d5d4e62ab9b557d20d429dff8c7a28b4770c56b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-build-properties@0.12.5',
    name: 'expo-build-properties',
    version: '0.12.5',
    licenseContentModuleId:
      require('../../../assets/licenses/8c53aa008c46eed37e9faa26f5a9f62c152137d221144709f0dddab89df80cc7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-constants@16.0.2',
    name: 'expo-constants',
    version: '16.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/5480ff2f88dd4a2e6f2100744b83a4b324e368c2cd971d8bc6a47de160b71559.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-crypto@13.0.2',
    name: 'expo-crypto',
    version: '13.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/6ce08e228084762f2543568914a3beb998884f4d4060f58e20c951b7b6be9435.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-dev-client@4.0.27',
    name: 'expo-dev-client',
    version: '4.0.27',
    licenseContentModuleId:
      require('../../../assets/licenses/931e5ab53fb2adebe5cc2c494c14ab17e2f40170716f2961e5e8ae95737b6827.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-dev-launcher@4.0.27',
    name: 'expo-dev-launcher',
    version: '4.0.27',
    licenseContentModuleId:
      require('../../../assets/licenses/53c91db9d8beb01d284e27f7fa850e17cb872c155bf0dfa1586eb659b36f7ccc.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-dev-menu@5.0.21',
    name: 'expo-dev-menu',
    version: '5.0.21',
    licenseContentModuleId:
      require('../../../assets/licenses/868fda680d7815f53f1424c634d585e4b6de230428641df8e39ea596fd7e7549.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-dev-menu-interface@1.8.3',
    name: 'expo-dev-menu-interface',
    version: '1.8.3',
    licenseContentModuleId:
      require('../../../assets/licenses/d6f96f7c0f2151b438d75fc8c91261b2252a1e361112721d7324fec70ac669a1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-file-system@17.0.1',
    name: 'expo-file-system',
    version: '17.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/d3adc948c319d50eaa3e7780de6c0456cdb75c21bdc86878c1a5f12842258372.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-font@12.0.10',
    name: 'expo-font',
    version: '12.0.10',
    licenseContentModuleId:
      require('../../../assets/licenses/408f01c35910bf3db1d17cb6f52499fbb54692e43d55195886b706d888548fad.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-json-utils@0.13.1',
    name: 'expo-json-utils',
    version: '0.13.1',
    licenseContentModuleId:
      require('../../../assets/licenses/9f99f484e74a5656b331d229adfc81a388622e7d503a5ebc6bc0038d943e13b8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-keep-awake@13.0.2',
    name: 'expo-keep-awake',
    version: '13.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/e38283767c0b3d104d14d14b0a0835533230c8189496037b475778ba5a7ba82d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-linking@6.3.1',
    name: 'expo-linking',
    version: '6.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/491a683bb956056b6fa32e0118df29796053716ad693e1af4b64fecd0f97c912.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-local-authentication@14.0.1',
    name: 'expo-local-authentication',
    version: '14.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/d4e5d9df3b59fadc571334b9c7995931c3e95b802416b040bdabd762ba5a82e9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-manifests@0.14.3',
    name: 'expo-manifests',
    version: '0.14.3',
    licenseContentModuleId:
      require('../../../assets/licenses/f234cb7e3c4b62262ef33a67069da6228a6b12527d9f5b41433597340496157f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-modules-autolinking@1.11.2',
    name: 'expo-modules-autolinking',
    version: '1.11.2',
    licenseContentModuleId:
      require('../../../assets/licenses/c766bbce7ae009d79c9eb4bf8b616d84581289adc27d4e439fafde80077d1f65.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-modules-core@1.12.24',
    name: 'expo-modules-core',
    version: '1.12.24',
    licenseContentModuleId:
      require('../../../assets/licenses/c1d0a6f4f0f9e613973e9c2e0a0d3ff5fe308de906898041638918d75a850dfb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-secure-store@13.0.2',
    name: 'expo-secure-store',
    version: '13.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/c910da9ff1fd543ea5de12a1c64665a533c6e40b2028423e62f593d2571ad82f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-splash-screen@0.27.6',
    name: 'expo-splash-screen',
    version: '0.27.6',
    licenseContentModuleId:
      require('../../../assets/licenses/327b9e8f55cbaf9993e32c0a003b059c2c2070cd3934bd1281b315e5457801fd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-status-bar@1.12.1',
    name: 'expo-status-bar',
    version: '1.12.1',
    licenseContentModuleId:
      require('../../../assets/licenses/38328c09511f2b87b7427d990712bbfe55dde416a2766fe57ba84c3e761cbcd6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-updates-interface@0.16.2',
    name: 'expo-updates-interface',
    version: '0.16.2',
    licenseContentModuleId:
      require('../../../assets/licenses/46352e3638d461e8afaba1a163c3556831e5bdfa8e293c3276219ba9bb38b7f9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:exponential-backoff@3.1.1',
    name: 'exponential-backoff',
    version: '3.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:external-editor@3.1.0',
    name: 'external-editor',
    version: '3.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e33b7bc13a0e5ea9ed6718e12e99a5b0b60276162f0195aa7f342397f4b0155d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:fbcore:3.1.3',
    name: 'Facebook Core',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fast-deep-equal@3.1.3',
    name: 'fast-deep-equal',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/7bf9b2de73a6b356761c948d0e9eeb4be6c1270bd04c79cd489c1e400ffdfc1a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fast-glob@3.3.2',
    name: 'fast-glob',
    version: '3.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/9363d160bf41d46d83901a5d24fc3fe2094c2afc17b4a2378914b273977ee2de.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fast-levenshtein@2.0.6',
    name: 'fast-levenshtein',
    version: '2.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/942a98cb8846a6354266193f173c1354615827fbb7d67f68399599dff12c4d6a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fast-loops@1.1.4',
    name: 'fast-loops',
    version: '1.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/350d3529dc75e7a9b463b62c959a2abd24b568b8a6a39e3fb006f1a3c8cb31a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fast-uri@3.0.1',
    name: 'fast-uri',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/bf13d2149c7784aeabc5575262251fde5a26bec741a9fd05558a4afe72326ae8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fast-xml-parser@4.5.0',
    name: 'fast-xml-parser',
    version: '4.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/7883225d5e84a6bbb9b170c3d891b4bf6d6259cee869c86bd86381a927071745.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fastq@1.17.1',
    name: 'fastq',
    version: '1.17.1',
    licenseContentModuleId:
      require('../../../assets/licenses/c3367f6d01a79d368fc4fbb41b3615fcd92f243d6597ab96742f6f976f9325af.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fb-watchman@2.0.2',
    name: 'fb-watchman',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/2b5f0e7274a619ee2b37eee170bf1d32ffae35e9806312e886561f93ceea80df.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fbemitter@3.0.0',
    name: 'fbemitter',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/f4bd7eab428530c2e854725e21be20d7fd122d3eb35e9c3da5fc2b6fb0e48d5f.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fbjni:fbjni:0.6.0',
    name: 'fbjni',
    version: '0.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/f62d190c08e2b300b45780f0b3cabcacc78d0e373f7a0de79d31f82b084d35ea.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fbjs@3.0.5',
    name: 'fbjs',
    version: '3.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/f657f99d3fb9647db92628e96007aabb46e5f04f33e49999075aab8e250ca7ce.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fbjs-css-vars@1.0.2',
    name: 'fbjs-css-vars',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/f657f99d3fb9647db92628e96007aabb46e5f04f33e49999075aab8e250ca7ce.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fetch-retry@4.1.1',
    name: 'fetch-retry',
    version: '4.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/840a767266ac32822c1a5c0605dbd64486082dfdcd19401fd855a7ec17151e44.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:figures@3.2.0',
    name: 'figures',
    version: '3.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:file-uri-to-path@2.0.0',
    name: 'file-uri-to-path',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/75070206e4ee2a749be52444cecc05101ca8d314c9d6d335ff914046cbf086a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fill-range@7.1.1',
    name: 'fill-range',
    version: '7.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/35bdd8a44339719441900fb50fbefc5e2dca1ca662cbaed7a687de842c8b70f2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:filter-obj@1.1.0',
    name: 'filter-obj',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:finalhandler@1.1.2',
    name: 'finalhandler',
    version: '1.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/24973d5320410e565ec92f18f73f12af7d97c634d414ba170d119fe3f98904c8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:find-cache-dir@2.1.0',
    name: 'find-cache-dir',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/61bed033eebace09bbefb1a3903ebc09e0086ea793d1694fbe300827adc9f921.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:find-up@3.0.0',
    name: 'find-up',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:find-up@4.1.0',
    name: 'find-up',
    version: '4.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:find-up@5.0.0',
    name: 'find-up',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:find-yarn-workspace-root@2.0.0',
    name: 'find-yarn-workspace-root',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a24bffeec8c8a3b73131930c0709a4b581c2c3892deec763bdc4bc939506c871.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.code.findbugs:jsr305:3.0.2',
    name: 'FindBugs-jsr305',
    version: '3.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:Firebase@66043bd4579e5b73811f96829c694c7af8d67435',
    name: 'Firebase',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-annotations:16.2.0',
    name: 'firebase-annotations',
    version: '16.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-common:20.3.3',
    name: 'firebase-common',
    version: '20.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-common-ktx:20.3.3',
    name: 'firebase-common-ktx',
    version: '20.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-components:17.1.0',
    name: 'firebase-components',
    version: '17.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-crashlytics:18.4.3',
    name: 'firebase-crashlytics',
    version: '18.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-crashlytics-ndk:18.4.3',
    name: 'firebase-crashlytics-ndk',
    version: '18.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-datatransport:18.1.8',
    name: 'firebase-datatransport',
    version: '18.1.8',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-encoders:17.0.0',
    name: 'firebase-encoders',
    version: '17.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-encoders-json:18.0.1',
    name: 'firebase-encoders-json',
    version: '18.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-encoders-proto:16.0.0',
    name: 'firebase-encoders-proto',
    version: '16.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-iid-interop:17.1.0',
    name: 'firebase-iid-interop',
    version: '17.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-installations:17.1.4',
    name: 'firebase-installations',
    version: '17.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-installations-interop:17.1.0',
    name: 'firebase-installations-interop',
    version: '17.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-measurement-connector:19.0.0',
    name: 'firebase-measurement-connector',
    version: '19.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-messaging:23.2.1',
    name: 'firebase-messaging',
    version: '23.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-sessions:1.0.2',
    name: 'firebase-sessions',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseCore@10.15.0',
    name: 'FirebaseCore',
    version: '10.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseCoreExtension@10.15.0',
    name: 'FirebaseCoreExtension',
    version: '10.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseCoreInternal@10.29.0',
    name: 'FirebaseCoreInternal',
    version: '10.29.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseCrashlytics@10.15.0',
    name: 'FirebaseCrashlytics',
    version: '10.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/50b21a92f4f7ced3432d8d8cdd9f6b7097c1487b77c9bedf771fa703259089ca.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseInstallations@10.29.0',
    name: 'FirebaseInstallations',
    version: '10.29.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseMessaging@10.15.0',
    name: 'FirebaseMessaging',
    version: '10.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseSessions@10.29.0',
    name: 'FirebaseSessions',
    version: '10.29.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:flow-enums-runtime@0.0.6',
    name: 'flow-enums-runtime',
    version: '0.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:flow-parser@0.206.0',
    name: 'flow-parser',
    version: '0.206.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9e0b68ae87571922605d29348e831cd7a66b58701635286296bd1ebacfc61090.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:fmt@9.1.0',
    name: 'fmt',
    version: '9.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/825c9324e70f8c839c8ba910543dd4a7daee243b86ef960594c11381a19980b8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:follow-redirects@1.15.9',
    name: 'follow-redirects',
    version: '1.15.9',
    licenseContentModuleId:
      require('../../../assets/licenses/bfa8a54bb952ccda79f0f1889721d108f5b605babbb2b8a3705ffb52f4132eb7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fontfaceobserver@2.3.0',
    name: 'fontfaceobserver',
    version: '2.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/00b9d4904d850fcd9bb470d0f4853c50f169df974fab5552cf41a4ff81a524e2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:for-each@0.3.3',
    name: 'for-each',
    version: '0.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/d07913d776eef217a95d7ee3ee83577fc3c365b9c870f5a3411f785b81090614.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:for-in@0.1.8',
    name: 'for-in',
    version: '0.1.8',
    licenseContentModuleId:
      require('../../../assets/licenses/f4a48aa8354a257785aa534bab2ac5ff2c2a98cd59cdf4a637bb68ee185683f7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:for-in@1.0.2',
    name: 'for-in',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/f4a48aa8354a257785aa534bab2ac5ff2c2a98cd59cdf4a637bb68ee185683f7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:for-own@1.0.0',
    name: 'for-own',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/768ad4389c32b8043e2716b25f85a18943613fce0b1a0fecd2f42a24a7ca6a1e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:foreground-child@3.3.0',
    name: 'foreground-child',
    version: '3.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/93f5d82a8d59442fe3275383453a255fef761647fb28265644010ba799806148.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:form-data@3.0.1',
    name: 'form-data',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e5b780d4f38d1d3328e3e53186c4e62d3fa149ea6f2bacd5de5ad0c30ac85343.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:form-data@4.0.0',
    name: 'form-data',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e5b780d4f38d1d3328e3e53186c4e62d3fa149ea6f2bacd5de5ad0c30ac85343.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:formik@2.4.6',
    name: 'formik',
    version: '2.4.6',
    licenseContentModuleId:
      require('../../../assets/licenses/185a473131376ec143033f3fb000b66ac411b31885f245bbbf4ad8bb75fe158f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:freeport-async@2.0.0',
    name: 'freeport-async',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/736835b6c374cbfb66ccfbfc4f8819bcbeae3cfd5f5e5507f25f4caeabf9540e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:fresco:3.1.3',
    name: 'Fresco',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:soloader:3.1.3',
    name: 'FrescoSoloader',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fresh@0.5.2',
    name: 'fresh',
    version: '0.5.2',
    licenseContentModuleId:
      require('../../../assets/licenses/a0ec0dab16b3666f24950f86d257930ac2ad475557b4bfe245620e0817d8a45d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fs-extra@8.1.0',
    name: 'fs-extra',
    version: '8.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1e76029602ae9b21cc4e612db2496d92febed882ba13ba745f8b3309e85f9d39.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fs-extra@9.0.0',
    name: 'fs-extra',
    version: '9.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1e76029602ae9b21cc4e612db2496d92febed882ba13ba745f8b3309e85f9d39.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fs-extra@9.1.0',
    name: 'fs-extra',
    version: '9.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1e76029602ae9b21cc4e612db2496d92febed882ba13ba745f8b3309e85f9d39.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fs-minipass@2.1.0',
    name: 'fs-minipass',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fs-minipass@3.0.3',
    name: 'fs-minipass',
    version: '3.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fs.realpath@1.0.0',
    name: 'fs.realpath',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/8465b04b67f473341171b5c9c8b2c741a4a395b3f6ed58339b3a4f4db3db7472.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:fsevents@2.3.3',
    name: 'fsevents',
    version: '2.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/2a8a5d6197bb97a018b8a190dd3ed853d750ca87c8e80c17aad41d6c6ff448e1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ftp@0.3.10',
    name: 'ftp',
    version: '0.3.10',
    licenseContentModuleId:
      require('../../../assets/licenses/d06b5d27bbbbe22c36b1fd88406b1208876e2d37d795f5b8eaed951a459a3111.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:function-bind@1.1.2',
    name: 'function-bind',
    version: '1.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/773e131a7684726005a7e4688a80b4620033bc08499bc1404dd1a1eb3bca725e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:function.prototype.name@1.1.6',
    name: 'function.prototype.name',
    version: '1.1.6',
    licenseContentModuleId:
      require('../../../assets/licenses/acfaf437865d82f0fa9b9cdcae8b550bed8d011adaa5b42d973191caf99f62a8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:functions-have-names@1.2.3',
    name: 'functions-have-names',
    version: '1.2.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc3f455254c0af0655cc3ff46a41ed644b67599f6043346169d285bf2b3cf3b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:gensync@1.0.0-beta.2',
    name: 'gensync',
    version: '1.0.0-beta.2',
    licenseContentModuleId:
      require('../../../assets/licenses/e3a956681ee067f971ac413994171b3d90ca801ec6324e76c9c55366cfe31cb0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:get-caller-file@2.0.5',
    name: 'get-caller-file',
    version: '2.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/902dbb4154679fb2b8d7c33878183f45b268d01eae5e5033dddaa8852d45f213.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:get-intrinsic@1.2.4',
    name: 'get-intrinsic',
    version: '1.2.4',
    licenseContentModuleId:
      require('../../../assets/licenses/39c5ec504cf6bd5cd782a7c695828e09189df79f5d94840e4f08feb97b9fd416.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:get-port@3.2.0',
    name: 'get-port',
    version: '3.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:get-stream@4.1.0',
    name: 'get-stream',
    version: '4.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:get-stream@6.0.1',
    name: 'get-stream',
    version: '6.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:get-symbol-description@1.0.2',
    name: 'get-symbol-description',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/e2560e002e13281578c75c850061d9255c33d16d732939e8c2db64c2506642fa.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:get-uri@3.0.2',
    name: 'get-uri',
    version: '3.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cf988d993839ddb5a61273adff4a874ff7cfe7079c37dee094bbf697a425568c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:getenv@1.0.0',
    name: 'getenv',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/df408d2e27f1df207f97556db32aba3921883ebce365ada1c354d89ad3114a96.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:glob@7.1.6',
    name: 'glob',
    version: '7.1.6',
    licenseContentModuleId:
      require('../../../assets/licenses/6236fa0b88a4a0cce3dda0367979491b2052b3c8d6b1c10b3668de083e86a7f0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:glob@7.2.3',
    name: 'glob',
    version: '7.2.3',
    licenseContentModuleId:
      require('../../../assets/licenses/6236fa0b88a4a0cce3dda0367979491b2052b3c8d6b1c10b3668de083e86a7f0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:glob@10.4.5',
    name: 'glob',
    version: '10.4.5',
    licenseContentModuleId:
      require('../../../assets/licenses/cdbc258d13806538e727964c2436a8806e6e2496ccd616224aace6f7bf98dbc1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:glob-parent@5.1.2',
    name: 'glob-parent',
    version: '5.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/2c46f1325bd3822a33c1e2c1e49c18d13127ac00f9c8b3b79196c7a126f73cd9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:globals@11.12.0',
    name: 'globals',
    version: '11.12.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:globalthis@1.0.4',
    name: 'globalthis',
    version: '1.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/acfaf437865d82f0fa9b9cdcae8b550bed8d011adaa5b42d973191caf99f62a8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:globby@11.1.0',
    name: 'globby',
    version: '11.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:glog@0.3.5',
    name: 'glog',
    version: '0.3.5',
    licenseContentModuleId:
      require('../../../assets/licenses/0fc497129c5c69ff6f22da6933c7e4aaef082fde8437fd57680c2780100772a4.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:GoogleDataTransport@9.4.1',
    name: 'GoogleDataTransport',
    version: '9.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:GoogleUtilities@ea963c370a38a8069cc5f7ba4ca849a60b6d7d15',
    name: 'GoogleUtilities',
    licenseContentModuleId:
      require('../../../assets/licenses/ad6d036b9a78f0e1700d68039c06058033fea063172ce2dc68e382a24b4d1928.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:gopd@1.0.1',
    name: 'gopd',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/d90bf0a089da4cf43d644ed240a0b3825dcdb705e64e38371d56995a4cc9e4c5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:graceful-fs@4.2.11',
    name: 'graceful-fs',
    version: '4.2.11',
    licenseContentModuleId:
      require('../../../assets/licenses/f65c5d9f22a317b2a10803bd1868461ce6499c2ed7217bc80c0cc772a748789c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:graphql@15.8.0',
    name: 'graphql',
    version: '15.8.0',
    licenseContentModuleId:
      require('../../../assets/licenses/35a11da7e877009ddc57405844209908cfc567adda0ec1daf410368c9f5b0d01.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:graphql@15.9.0',
    name: 'graphql',
    version: '15.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/35a11da7e877009ddc57405844209908cfc567adda0ec1daf410368c9f5b0d01.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:graphql@16.9.0',
    name: 'graphql',
    version: '16.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/35a11da7e877009ddc57405844209908cfc567adda0ec1daf410368c9f5b0d01.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:graphql-tag@2.12.6',
    name: 'graphql-tag',
    version: '2.12.6',
    licenseContentModuleId:
      require('../../../assets/licenses/63f2fed3ef11e754717dff4957bfc7371affb067c523fa7c65f1a6656eb3e204.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.code.gson:gson:2.8.6',
    name: 'Gson',
    version: '2.8.6',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.guava:listenablefuture:1.0',
    name: 'Guava ListenableFuture only',
    version: '1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:has-bigints@1.0.2',
    name: 'has-bigints',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc3f455254c0af0655cc3ff46a41ed644b67599f6043346169d285bf2b3cf3b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:has-flag@3.0.0',
    name: 'has-flag',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:has-flag@4.0.0',
    name: 'has-flag',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:has-property-descriptors@1.0.2',
    name: 'has-property-descriptors',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/0f0ca96f50793990031ebc488a38f7292ff70bce8ab6a8e5eeda674abc32ccdf.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:has-proto@1.0.3',
    name: 'has-proto',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/0f0ca96f50793990031ebc488a38f7292ff70bce8ab6a8e5eeda674abc32ccdf.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:has-symbols@1.0.3',
    name: 'has-symbols',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/206c1adcf206dc0031b11232f5b054ec5f1662407ab1ca415247921cab2068ab.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:has-tostringtag@1.0.2',
    name: 'has-tostringtag',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/e2560e002e13281578c75c850061d9255c33d16d732939e8c2db64c2506642fa.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:hasown@2.0.2',
    name: 'hasown',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/bf9b0d665be2a689851eea667ca9f42066ea1d903b38349c51e6a44b2577680a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:headers-polyfill@3.2.5',
    name: 'headers-polyfill',
    version: '3.2.5',
    licenseContentModuleId:
      require('../../../assets/licenses/b7e6f39fae834b72ef575518b0d88d5200e04b65cba72c12ab67b2a449170999.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:hermes-engine@0.74.5',
    name: 'hermes-engine',
    version: '0.74.5',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:hermes-estree@0.19.1',
    name: 'hermes-estree',
    version: '0.19.1',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:hermes-estree@0.23.1',
    name: 'hermes-estree',
    version: '0.23.1',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:hermes-parser@0.19.1',
    name: 'hermes-parser',
    version: '0.19.1',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:hermes-parser@0.23.1',
    name: 'hermes-parser',
    version: '0.23.1',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:hermes-profile-transformer@0.0.6',
    name: 'hermes-profile-transformer',
    version: '0.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/63167b4545c50552d87c3a33381801eb59451cae7b04823726b184f498d8bcfa.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:hoist-non-react-statics@3.3.2',
    name: 'hoist-non-react-statics',
    version: '3.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/eb32ff0ec52b6ea86e3d3e06c6ad1b68ee03798b6729af13919f6d5c14b368f3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:hosted-git-info@3.0.8',
    name: 'hosted-git-info',
    version: '3.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/c1476ec53119cd4c8370f91f5152ac76312a29b4fae2d49b5e0e0970fe0fa5ee.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:http-errors@2.0.0',
    name: 'http-errors',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/dcb94ff9b1e037a847bc20589dc81a1066d041fd4c16deb18b0fa968c66cf395.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:http-proxy-agent@4.0.1',
    name: 'http-proxy-agent',
    version: '4.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/ca0b65367e78e9c255a1c9883eb7ec30aae491d76e1c6815b865563106d21dff.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:https-proxy-agent@5.0.1',
    name: 'https-proxy-agent',
    version: '5.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/32f0856d2c43df7d05cca960fdee84e1e38ab545bd7b2186433dfa41aa90a712.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:human-signals@2.1.0',
    name: 'human-signals',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/0f2c1c521a08ca2e202316a29c57cba39077ebe2618cf10f23df410f4047f60a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:hyphenate-style-name@1.1.0',
    name: 'hyphenate-style-name',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b87a4f179468c16de6b7c40e40d5c4fa0f93ac5950a5ca1cec22f55132ab256c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:iconv-lite@0.4.24',
    name: 'iconv-lite',
    version: '0.4.24',
    licenseContentModuleId:
      require('../../../assets/licenses/ac779f7314c74f232ef847ea86e714abe25cf6eeb5cc97b69451b74e2af6492d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ieee754@1.2.1',
    name: 'ieee754',
    version: '1.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/18d45466ba3253deae04667e267a91ea8de8548f18c1125264d1c9db28194cc1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ignore@5.3.2',
    name: 'ignore',
    version: '5.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/9c94db23dc4b1e9aaee5d195668b916afc71efed54af226b66cf0ccc4389c1c0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:image-size@1.1.1',
    name: 'image-size',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3109783dad7527b490aabc49c3cb148573c19b41b843e70cf9388a93f3d7fccd.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:imagepipeline:3.1.3',
    name: 'ImagePipeline',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:imagepipeline-okhttp3:3.1.3',
    name: 'ImagePipeline-OkHttp 3 Integration',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:imagepipeline-base:3.1.3',
    name: 'ImagePipelineBase',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:imagepipeline-native:3.1.3',
    name: 'ImagePipelineNative',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:import-fresh@2.0.0',
    name: 'import-fresh',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:imurmurhash@0.1.4',
    name: 'imurmurhash',
    version: '0.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/4491517f7deb68d0b2a3bb590e785e276a60f12448447a9650d0bd50161a101c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:indent-string@4.0.0',
    name: 'indent-string',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.infer.annotation:infer-annotation:0.18.0',
    name: 'infer-annotation',
    version: '0.18.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:inflight@1.0.6',
    name: 'inflight',
    version: '1.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/05dc4d785ac3a488676d3ed10e901b75ad89dafcc63f8e66610fd4a39cc5c7e8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:inherits@2.0.4',
    name: 'inherits',
    version: '2.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/5ffe28e7ade7d8f10d85d5337a73fd793dac5c462fb9a28fbf8c5046c7fbca3b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ini@1.3.8',
    name: 'ini',
    version: '1.3.8',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:inline-style-prefixer@6.0.4',
    name: 'inline-style-prefixer',
    version: '6.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/4345c259177dc1f552479360a7deed393207504d75603111c81efeba2202c559.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:inquirer@8.2.6',
    name: 'inquirer',
    version: '8.2.6',
    licenseContentModuleId:
      require('../../../assets/licenses/fa8f92d7a321046b6a9cd89d4d069f1fafb00728de04459536eafeb8daf78193.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.android.installreferrer:installreferrer:2.2',
    name: 'installreferrer',
    version: '2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains:annotations:13.0',
    name: 'IntelliJ IDEA Annotations',
    version: '13.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:internal-ip@4.3.0',
    name: 'internal-ip',
    version: '4.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:internal-slot@1.0.7',
    name: 'internal-slot',
    version: '1.0.7',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc3f455254c0af0655cc3ff46a41ed644b67599f6043346169d285bf2b3cf3b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:invariant@2.2.4',
    name: 'invariant',
    version: '2.2.4',
    licenseContentModuleId:
      require('../../../assets/licenses/f657f99d3fb9647db92628e96007aabb46e5f04f33e49999075aab8e250ca7ce.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ip@1.1.9',
    name: 'ip',
    version: '1.1.9',
    licenseContentModuleId:
      require('../../../assets/licenses/059fcdeafb68ab683a956378f222e85f71554ebe456f328f01632db760c266fd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ip-address@9.0.5',
    name: 'ip-address',
    version: '9.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/f8d791359a50cbcac82c29cb7b0b1b889b28be76fdd35b8ee33f0f7c8704702a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ip-regex@2.1.0',
    name: 'ip-regex',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ipaddr.js@1.9.1',
    name: 'ipaddr.js',
    version: '1.9.1',
    licenseContentModuleId:
      require('../../../assets/licenses/62568a2d1337b77171ecca9db10579163446de1ba6151678e81f06cdc199971b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-arguments@1.1.1',
    name: 'is-arguments',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/dc0fe5a22d9336f345ee984f9bf56f11f22877a3aa5fd16a1db9a8ca0e23a5d1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-array-buffer@3.0.4',
    name: 'is-array-buffer',
    version: '3.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/b505862c2bf0b38f98a4629efe0d17fb87690cbd35a9f3ae95d2fd769d7cea23.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-arrayish@0.2.1',
    name: 'is-arrayish',
    version: '0.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/92b07a2e5b0e051d37dde85042c736d6d551cfcbc0983f39d7ef903b3986bbc1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-arrayish@0.3.2',
    name: 'is-arrayish',
    version: '0.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/92b07a2e5b0e051d37dde85042c736d6d551cfcbc0983f39d7ef903b3986bbc1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-bigint@1.0.4',
    name: 'is-bigint',
    version: '1.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/971e376febf7afbcceab6857e243f2ccb3ea88f520b68c324af15a28171f5de3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-binary-path@2.1.0',
    name: 'is-binary-path',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/85fe65eefab89e2a683232b96e6f689279821a0bd3b351e9ab6a6ebd19dea567.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-boolean-object@1.1.2',
    name: 'is-boolean-object',
    version: '1.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/c61652db3d2808f667b48af0a358f0d85fd07ad4a0d0b1a50882dec3b764c522.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-buffer@1.1.6',
    name: 'is-buffer',
    version: '1.1.6',
    licenseContentModuleId:
      require('../../../assets/licenses/c7cc929b57080f4b9d0c6cf57669f0463fc5b39906344dfc8d3bc43426b30eac.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-callable@1.2.7',
    name: 'is-callable',
    version: '1.2.7',
    licenseContentModuleId:
      require('../../../assets/licenses/c61652db3d2808f667b48af0a358f0d85fd07ad4a0d0b1a50882dec3b764c522.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-core-module@2.15.1',
    name: 'is-core-module',
    version: '2.15.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c496ce5ae47eb8e5ddcaa5e29c27c446a3855b19e3a66991b52f361bed22b28.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-data-view@1.0.1',
    name: 'is-data-view',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/166ffde0aa2773f509ba6edb3d0716602e076eb1cb1b21ae50b8262641af13b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-date-object@1.0.5',
    name: 'is-date-object',
    version: '1.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/c61652db3d2808f667b48af0a358f0d85fd07ad4a0d0b1a50882dec3b764c522.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-directory@0.3.1',
    name: 'is-directory',
    version: '0.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3672fb6ef1c214578dfee689643516c2685f61ab08d130517ca8ea24f383a840.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-docker@2.2.1',
    name: 'is-docker',
    version: '2.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-extendable@0.1.1',
    name: 'is-extendable',
    version: '0.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/0798f37cff4a3f438c071316e41f94ffe110116a313ab0fc4f8caa07218f1f0f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-extglob@1.0.0',
    name: 'is-extglob',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/daca23d50b0f54d36d6da1b16c82dfea6461e2ae20de0e869957e44cc6d34781.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-extglob@2.1.1',
    name: 'is-extglob',
    version: '2.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/73b5283588baa142c5baaef5f56d3e8fdea7a30b214e8c5737e87640f882453a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-fullwidth-code-point@2.0.0',
    name: 'is-fullwidth-code-point',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-fullwidth-code-point@3.0.0',
    name: 'is-fullwidth-code-point',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-generator-function@1.0.10',
    name: 'is-generator-function',
    version: '1.0.10',
    licenseContentModuleId:
      require('../../../assets/licenses/dc0fe5a22d9336f345ee984f9bf56f11f22877a3aa5fd16a1db9a8ca0e23a5d1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-glob@2.0.1',
    name: 'is-glob',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/daca23d50b0f54d36d6da1b16c82dfea6461e2ae20de0e869957e44cc6d34781.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-glob@4.0.3',
    name: 'is-glob',
    version: '4.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/4cd903859549d4b20b571041f96dfae1136ed079c476126268f9d7cc1b611150.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-interactive@1.0.0',
    name: 'is-interactive',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-invalid-path@0.1.0',
    name: 'is-invalid-path',
    version: '0.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/0798f37cff4a3f438c071316e41f94ffe110116a313ab0fc4f8caa07218f1f0f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-negative-zero@2.0.3',
    name: 'is-negative-zero',
    version: '2.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/dc0fe5a22d9336f345ee984f9bf56f11f22877a3aa5fd16a1db9a8ca0e23a5d1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-node-process@1.2.0',
    name: 'is-node-process',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/99ec68724abdc41fb27309e31cd81700a9ac17c7ba33802ccc8bd72695dd27b4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-number@7.0.0',
    name: 'is-number',
    version: '7.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/35bdd8a44339719441900fb50fbefc5e2dca1ca662cbaed7a687de842c8b70f2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-number-object@1.0.7',
    name: 'is-number-object',
    version: '1.0.7',
    licenseContentModuleId:
      require('../../../assets/licenses/c61652db3d2808f667b48af0a358f0d85fd07ad4a0d0b1a50882dec3b764c522.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-path-cwd@2.2.0',
    name: 'is-path-cwd',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-path-inside@3.0.3',
    name: 'is-path-inside',
    version: '3.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-plain-obj@2.1.0',
    name: 'is-plain-obj',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-plain-object@2.0.4',
    name: 'is-plain-object',
    version: '2.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/4cd903859549d4b20b571041f96dfae1136ed079c476126268f9d7cc1b611150.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-regex@1.1.4',
    name: 'is-regex',
    version: '1.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/dc0fe5a22d9336f345ee984f9bf56f11f22877a3aa5fd16a1db9a8ca0e23a5d1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-shared-array-buffer@1.0.3',
    name: 'is-shared-array-buffer',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/e2560e002e13281578c75c850061d9255c33d16d732939e8c2db64c2506642fa.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-stream@1.1.0',
    name: 'is-stream',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-stream@2.0.1',
    name: 'is-stream',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-string@1.0.7',
    name: 'is-string',
    version: '1.0.7',
    licenseContentModuleId:
      require('../../../assets/licenses/c61652db3d2808f667b48af0a358f0d85fd07ad4a0d0b1a50882dec3b764c522.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-symbol@1.0.4',
    name: 'is-symbol',
    version: '1.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/c61652db3d2808f667b48af0a358f0d85fd07ad4a0d0b1a50882dec3b764c522.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-typed-array@1.1.13',
    name: 'is-typed-array',
    version: '1.1.13',
    licenseContentModuleId:
      require('../../../assets/licenses/c61652db3d2808f667b48af0a358f0d85fd07ad4a0d0b1a50882dec3b764c522.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-unicode-supported@0.1.0',
    name: 'is-unicode-supported',
    version: '0.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-valid-path@0.1.1',
    name: 'is-valid-path',
    version: '0.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b38c7fb9e5b72482306684998d14a62a37e27bd0803f76d041ae3fd8d0adf40e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-weakref@1.0.2',
    name: 'is-weakref',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/6d0917530cf3b3dca12c1ab7798e4d38ad0a6798ecc1bd27849a3048ba91d265.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-wsl@1.1.0',
    name: 'is-wsl',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:is-wsl@2.2.0',
    name: 'is-wsl',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:isarray@0.0.1',
    name: 'isarray',
    version: '0.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5601c343c9aa96449e18aca7a4562038b1d4062f4742a2c9c7f9039f1a303f72.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:isarray@1.0.0',
    name: 'isarray',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/ff138e683771b187f3629c383db72ee7d632009010a36d08e18e8d2a34222ec7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:isarray@2.0.5',
    name: 'isarray',
    version: '2.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/68f12f6e2c33688699249c01d8f9623c534da20aa71989c57b061b7bc1676d14.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:isexe@2.0.0',
    name: 'isexe',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:isobject@3.0.1',
    name: 'isobject',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/0ead7e8cd8b0bc66a981ee69acaf1297ffa838cfce1b156a039bb24f997c0a27.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jackspeak@3.4.3',
    name: 'jackspeak',
    version: '3.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/2c7c5d22ed5a8ee968c64757710979afcd77438c48b4a265b94e615babd8a901.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:javax.inject:javax.inject:1',
    name: 'javax.inject',
    version: '1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jest-environment-node@29.7.0',
    name: 'jest-environment-node',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jest-get-type@29.6.3',
    name: 'jest-get-type',
    version: '29.6.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jest-message-util@29.7.0',
    name: 'jest-message-util',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jest-mock@29.7.0',
    name: 'jest-mock',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jest-util@29.7.0',
    name: 'jest-util',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jest-validate@29.7.0',
    name: 'jest-validate',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jest-worker@29.7.0',
    name: 'jest-worker',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jimp-compact@0.16.1',
    name: 'jimp-compact',
    version: '0.16.1',
    licenseContentModuleId:
      require('../../../assets/licenses/972c97f9a3650668316b09c45508054ebb51b6630010dde5d64b4c92687e5b29.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:joi@17.13.3',
    name: 'joi',
    version: '17.13.3',
    licenseContentModuleId:
      require('../../../assets/licenses/7e274d6fde5f98024c1def8953e90011a08c6a84a8877bfb4d02935346a052c9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:join-component@1.1.0',
    name: 'join-component',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/2f57f144e396d48c82d1837fef6630a512b51dbdba1a2844ef7421aa953dd326.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:js-levenshtein@1.1.6',
    name: 'js-levenshtein',
    version: '1.1.6',
    licenseContentModuleId:
      require('../../../assets/licenses/0f57363c43caf754cf943327878c910ce1386c82c029462cf7274c4a50b5961f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:js-tokens@4.0.0',
    name: 'js-tokens',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/2213d91c606205c71eb051a199478cdc2adde945893404d7f1421436dd6d5cc1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:js-yaml@3.14.1',
    name: 'js-yaml',
    version: '3.14.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a07bc24468b9654ce76a547d47a2db282d07733b715db4c73a98bd63961f9550.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:js-yaml@4.1.0',
    name: 'js-yaml',
    version: '4.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a07bc24468b9654ce76a547d47a2db282d07733b715db4c73a98bd63961f9550.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jsbarcode@3.11.6',
    name: 'jsbarcode',
    version: '3.11.6',
    licenseContentModuleId:
      require('../../../assets/licenses/e6e7fd6aec67045d0afd53a5b8835c8f29f285662b1a6e3fa73398a835b15b05.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jsbn@1.1.0',
    name: 'jsbn',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e0e396530fd1624126e9a7e0df94811e4062e03baeccb07bc33c934b0fd93a85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jsc-android@250231.0.0',
    name: 'jsc-android',
    version: '250231.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/13c26d010b001a89fafddfaf0b635cf7d31bfcab323a8524f29ccdb448a6a335.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jsc-safe-url@0.2.4',
    name: 'jsc-safe-url',
    version: '0.2.4',
    licenseContentModuleId:
      require('../../../assets/licenses/096ff3c9ceea6df46491b0d04e4a9dca7b4be87b1b7f0b7c08a8aea08a0ffb40.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jscodeshift@0.14.0',
    name: 'jscodeshift',
    version: '0.14.0',
    licenseContentModuleId:
      require('../../../assets/licenses/f08a94bfb0bdc1d7f1cb59badaf0f8c551b10db871185622dbf1fd036affa9cb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jsesc@0.5.0',
    name: 'jsesc',
    version: '0.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1e234f86ba3f213fbab143e195f172a40c5f943fb268c45d619ede8510b20d06.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jsesc@2.5.2',
    name: 'jsesc',
    version: '2.5.2',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:json-parse-better-errors@1.0.2',
    name: 'json-parse-better-errors',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/6cf2891dd0e66460f7d2ed83e1e3fe4b4b4c1a8c1f1f96c222a3466ad12ff197.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:json-schema-deref-sync@0.13.0',
    name: 'json-schema-deref-sync',
    version: '0.13.0',
    licenseContentModuleId:
      require('../../../assets/licenses/7ed6b0bdd6c3cb403c4440c78b8a1aff0d2535457c0e6a4b9b2ee216aa832bf0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:json-schema-traverse@1.0.0',
    name: 'json-schema-traverse',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/7bf9b2de73a6b356761c948d0e9eeb4be6c1270bd04c79cd489c1e400ffdfc1a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:json5@2.2.3',
    name: 'json5',
    version: '2.2.3',
    licenseContentModuleId:
      require('../../../assets/licenses/53e59feb13058722d977c699eb0407c7bce2f93c949b681bbd2ff31698535927.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jsonfile@4.0.0',
    name: 'jsonfile',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a9801fb52ba22ef808682a094da8a7a480584b7ed0dfd0d888ab543616335031.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jsonfile@6.1.0',
    name: 'jsonfile',
    version: '6.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a9801fb52ba22ef808682a094da8a7a480584b7ed0dfd0d888ab543616335031.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:kind-of@5.1.0',
    name: 'kind-of',
    version: '5.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4cd903859549d4b20b571041f96dfae1136ed079c476126268f9d7cc1b611150.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:kind-of@6.0.3',
    name: 'kind-of',
    version: '6.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/4cd903859549d4b20b571041f96dfae1136ed079c476126268f9d7cc1b611150.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:kleur@3.0.3',
    name: 'kleur',
    version: '3.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/306fa513e39b23a6e8747520de761809d206b99800ef41907b530226574c59ae.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:io.insert-koin:koin-core-jvm:3.4.0',
    name: 'koin-core',
    version: '3.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-reflect:1.9.23',
    name: 'Kotlin Reflect',
    version: '1.9.23',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-stdlib:1.9.23',
    name: 'Kotlin Stdlib',
    version: '1.9.23',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.9.23',
    name: 'Kotlin Stdlib Jdk7',
    version: '1.9.23',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.8.21',
    name: 'Kotlin Stdlib Jdk8',
    version: '1.8.21',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlinx:kotlinx-coroutines-android:1.6.4',
    name: 'kotlinx-coroutines-android',
    version: '1.6.4',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlinx:kotlinx-coroutines-core-jvm:1.6.4',
    name: 'kotlinx-coroutines-core',
    version: '1.6.4',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlinx:kotlinx-coroutines-play-services:1.6.4',
    name: 'kotlinx-coroutines-play-services',
    version: '1.6.4',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:leven@3.1.0',
    name: 'leven',
    version: '3.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:levn@0.3.0',
    name: 'levn',
    version: '0.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b9eb082c39fe245e38793699074c394c43a722c51fce031c3c165cb92a31035c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lighthouse-logger@1.4.2',
    name: 'lighthouse-logger',
    version: '1.4.2',
    licenseContentModuleId:
      require('../../../assets/licenses/7ec9661a8afafab1eee3523d6f1a193eff76314a5ab10b4ce96aefd87621b0c3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lightningcss@1.19.0',
    name: 'lightningcss',
    version: '1.19.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5eba353fe5076ac3432177f8ab1cf75e3afcd0584251e37c3bfead5f447d040e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lightningcss-darwin-arm64@1.19.0',
    name: 'lightningcss-darwin-arm64',
    version: '1.19.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5eba353fe5076ac3432177f8ab1cf75e3afcd0584251e37c3bfead5f447d040e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lines-and-columns@1.2.4',
    name: 'lines-and-columns',
    version: '1.2.4',
    licenseContentModuleId:
      require('../../../assets/licenses/456fe85ad3e71db9523313cf7437b0f90c392d8a48c869908e46716b26d2cf53.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:locate-path@3.0.0',
    name: 'locate-path',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:locate-path@5.0.0',
    name: 'locate-path',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:locate-path@6.0.0',
    name: 'locate-path',
    version: '6.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lodash@4.17.21',
    name: 'lodash',
    version: '4.17.21',
    licenseContentModuleId:
      require('../../../assets/licenses/f71e8ed126b46346494aad5486874cd8f0aafe95092ed67d2e3cb6110f939abc.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lodash-es@4.17.21',
    name: 'lodash-es',
    version: '4.17.21',
    licenseContentModuleId:
      require('../../../assets/licenses/f71e8ed126b46346494aad5486874cd8f0aafe95092ed67d2e3cb6110f939abc.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lodash.debounce@4.0.8',
    name: 'lodash.debounce',
    version: '4.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/ffd8b33b354585f4ce119f19c53728281e48a97b074491eb6bf6d5c5ff305272.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lodash.isequal@4.5.0',
    name: 'lodash.isequal',
    version: '4.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e159c6d48c989185448658f276375bfb2300362ec6d4ae5525a2d49c4bcb947d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lodash.throttle@4.1.1',
    name: 'lodash.throttle',
    version: '4.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/ffd8b33b354585f4ce119f19c53728281e48a97b074491eb6bf6d5c5ff305272.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:log-symbols@2.2.0',
    name: 'log-symbols',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:log-symbols@4.1.0',
    name: 'log-symbols',
    version: '4.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:logkitty@0.7.1',
    name: 'logkitty',
    version: '0.7.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b67496189b06d6e399d2beada4def547ac5b0848f95c2c4fef2d3a4ea2a4a29e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:loose-envify@1.4.0',
    name: 'loose-envify',
    version: '1.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4eb7543b08d955a6d23fcc224601d43ff566e775be918805e26210d7f6eb4893.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lru-cache@5.1.1',
    name: 'lru-cache',
    version: '5.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lru-cache@6.0.0',
    name: 'lru-cache',
    version: '6.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:lru-cache@10.4.3',
    name: 'lru-cache',
    version: '10.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/451ec07eeb9c4e1b86de9abdaa426462a8be48f887ec7421cf0bbb9c769555ab.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:make-dir@2.1.0',
    name: 'make-dir',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:makeerror@1.0.12',
    name: 'makeerror',
    version: '1.0.12',
    licenseContentModuleId:
      require('../../../assets/licenses/efd6f9e708b909de1a18730b90fb6394a3125680ac2f98a87cd23d1a0c93afa2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:marky@1.2.5',
    name: 'marky',
    version: '1.2.5',
    licenseContentModuleId:
      require('../../../assets/licenses/f1d42ae4dd4e847f03e57241ab62538f35580ce533acf1d8274426283b01151c.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.material:material:1.6.1',
    name: 'Material Components for Android',
    version: '1.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:md5@2.2.1',
    name: 'md5',
    version: '2.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b08b42c21289534dc6dab871be541faec551ea584349370c5081e00e5d58f0b4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:md5@2.3.0',
    name: 'md5',
    version: '2.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b08b42c21289534dc6dab871be541faec551ea584349370c5081e00e5d58f0b4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:md5-file@3.2.3',
    name: 'md5-file',
    version: '3.2.3',
    licenseContentModuleId:
      require('../../../assets/licenses/00e527595297dd5b8f109265ec8960ca99ab6f4005649f042e19337cde56a28b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:md5hex@1.0.0',
    name: 'md5hex',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/736835b6c374cbfb66ccfbfc4f8819bcbeae3cfd5f5e5507f25f4caeabf9540e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mdn-data@2.0.14',
    name: 'mdn-data',
    version: '2.0.14',
    licenseContentModuleId:
      require('../../../assets/licenses/36ffd9dc085d529a7e60e1276d73ae5a030b020313e6c5408593a6ae2af39673.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:memoize-one@5.2.1',
    name: 'memoize-one',
    version: '5.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b1c501095de70182748cb8e8d97ac5577701a4ef3b755ba30d59fd87b24bdb0f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:memoize-one@6.0.0',
    name: 'memoize-one',
    version: '6.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b1c501095de70182748cb8e8d97ac5577701a4ef3b755ba30d59fd87b24bdb0f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:memory-cache@0.2.0',
    name: 'memory-cache',
    version: '0.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4d41f2d484035e4ac960e3eae5dd0d39706ef46b8fae867f5e7add6e3b9e9ee1.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:memory-type-java:3.1.3',
    name: 'MemoryTypeJava',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:memory-type-native:3.1.3',
    name: 'MemoryTypeNative',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:memory-type-ashmem:3.1.3',
    name: 'MemoryTypesAshmem',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:merge-options@3.0.4',
    name: 'merge-options',
    version: '3.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/3bdd8ad524e991a3935c66486592544527d3155e027f7645aac8483f4a8f821c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:merge-stream@2.0.0',
    name: 'merge-stream',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/2cee71bf4612fc2efe1c6261e3f2b21f3c7259ef8a4f3593b095ae7a7bd65ad9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:merge2@1.4.1',
    name: 'merge2',
    version: '1.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b2590e53ea6e050512c3993bfc746c394bbba9242fd6909245201bdc1dc6862a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro@0.80.12',
    name: 'metro',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/8b0f039fbde29a0612ab81d4020e39e14cf1f5d50c40608238b32af444a23cb1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-babel-transformer@0.80.12',
    name: 'metro-babel-transformer',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-cache@0.80.12',
    name: 'metro-cache',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-cache-key@0.80.12',
    name: 'metro-cache-key',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-config@0.80.12',
    name: 'metro-config',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/92498fe34487f79d5c19a93c4f862015f998afc59a614bc5613e7ab62f129efb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-core@0.80.12',
    name: 'metro-core',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/c743827928975ffacbfb7910e1331eb4d2aa558db696289f2916826a2105ee20.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-file-map@0.80.12',
    name: 'metro-file-map',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/1dff668ed2d77e798395d76424351b35bb88b7b24f89dcbe78882da523fcf1de.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-minify-terser@0.80.12',
    name: 'metro-minify-terser',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-resolver@0.80.12',
    name: 'metro-resolver',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/8588db72bbb9904d8163dbc1ae2e00f8a7ad4ec0d7ecd508489bd50b261e8edb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-runtime@0.80.12',
    name: 'metro-runtime',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-source-map@0.80.12',
    name: 'metro-source-map',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/f045eb4346d629a7b4e41ad63a07a2c228872a40f193291f1cf38fea57951082.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-symbolicate@0.80.12',
    name: 'metro-symbolicate',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-transform-plugins@0.80.12',
    name: 'metro-transform-plugins',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:metro-transform-worker@0.80.12',
    name: 'metro-transform-worker',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:micromatch@4.0.8',
    name: 'micromatch',
    version: '4.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/35bdd8a44339719441900fb50fbefc5e2dca1ca662cbaed7a687de842c8b70f2.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:middleware:3.1.3',
    name: 'Middleware',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mime@1.6.0',
    name: 'mime',
    version: '1.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/8f2658c03422c408b2b2ce4d151decc3b1a6fd3d86e5ca9433777bccdcdf75a2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mime@2.6.0',
    name: 'mime',
    version: '2.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/8f2658c03422c408b2b2ce4d151decc3b1a6fd3d86e5ca9433777bccdcdf75a2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mime-db@1.52.0',
    name: 'mime-db',
    version: '1.52.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cc1dfd4dafa27271e8212cd3b274eeb3f262e40a6fdab36ddc3f9696f706f58b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mime-types@2.1.35',
    name: 'mime-types',
    version: '2.1.35',
    licenseContentModuleId:
      require('../../../assets/licenses/71f83c4c0621102a56d9853812777b85751bce7e9726f686f5b056c1f8a4b0e6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mimic-fn@1.2.0',
    name: 'mimic-fn',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mimic-fn@2.1.0',
    name: 'mimic-fn',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minimatch@3.1.2',
    name: 'minimatch',
    version: '3.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minimatch@9.0.5',
    name: 'minimatch',
    version: '9.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/d11323827fa4edeaafc437cc5b91b6971b335f0127efeeb42bf5122fe8657e8f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minimist@1.2.8',
    name: 'minimist',
    version: '1.2.8',
    licenseContentModuleId:
      require('../../../assets/licenses/435a6722c786b0a56fbe7387028f1d9d3f3a2d0fb615bb8fee118727c3f59b7b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minipass@3.3.6',
    name: 'minipass',
    version: '3.3.6',
    licenseContentModuleId:
      require('../../../assets/licenses/a5a110eb524bf3217958e405b5e3411277e915a2f5902c330348877000337e53.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minipass@5.0.0',
    name: 'minipass',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/833faa18ac4b83a6372c05b3643d0d44ecd27d6627b8cd19b0f48fe74260cf39.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minipass@7.1.2',
    name: 'minipass',
    version: '7.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/833faa18ac4b83a6372c05b3643d0d44ecd27d6627b8cd19b0f48fe74260cf39.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minipass-collect@2.0.1',
    name: 'minipass-collect',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b630651f34d0e0284ea940601bbe0a58f306ad7e9819e351d9dfab812f8d0f38.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minipass-flush@1.0.5',
    name: 'minipass-flush',
    version: '1.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minipass-pipeline@1.2.4',
    name: 'minipass-pipeline',
    version: '1.2.4',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:minizlib@2.1.2',
    name: 'minizlib',
    version: '2.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/87a4800d70de7edc1640351a045bb588fcaa958093fcd1b3ee878388abceb818.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mixin-object@2.0.1',
    name: 'mixin-object',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/daca23d50b0f54d36d6da1b16c82dfea6461e2ae20de0e869957e44cc6d34781.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mkdirp@0.5.6',
    name: 'mkdirp',
    version: '0.5.6',
    licenseContentModuleId:
      require('../../../assets/licenses/05991c2e8f070b69ec5b656c2c12fd07cd0153dd157d39b050b82af59b319a01.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mkdirp@1.0.4',
    name: 'mkdirp',
    version: '1.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/144c935613e823350f7798d19da78b5e8315a79af5c2a3744fd85cd61baf07ee.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ms@2.0.0',
    name: 'ms',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6652830c2607c722b66f1b57de15877ab8fc5dca406cc5b335afeb365d0f32c1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ms@2.1.3',
    name: 'ms',
    version: '2.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/1662fae9b5314d11cf51284e2dcd1f006a354f7343f08712a730fcff9a359801.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:msw@1.3.4',
    name: 'msw',
    version: '1.3.4',
    licenseContentModuleId:
      require('../../../assets/licenses/be7690d23425cbcf147da49a90e7c86009e614a51ba60127392546f75166e959.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mute-stream@0.0.8',
    name: 'mute-stream',
    version: '0.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:mz@2.7.0',
    name: 'mz',
    version: '2.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b54cad06af80663a692483d407ea7d3fbec77fc12f4d7eed3f9f511ad87fca6a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:nanoid@3.3.7',
    name: 'nanoid',
    version: '3.3.7',
    licenseContentModuleId:
      require('../../../assets/licenses/da4db1480d9beea3483a2eda5c53b22238d0827d57da162b48f122e04d2d9987.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:nanopb@2.30909.1',
    name: 'nanopb',
    version: '2.30909.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e2f2fc8fe3faa7dcb09dbe995db48c6ec5c1f72705db915101e4a83fed44f66d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:nativeimagefilters:3.1.3',
    name: 'NativeImageFilters',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:nativeimagetranscoder:3.1.3',
    name: 'NativeImageTranscoder',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:negotiator@0.6.3',
    name: 'negotiator',
    version: '0.6.3',
    licenseContentModuleId:
      require('../../../assets/licenses/553d4d20029a24e315b428a1a54a9e109eaa340f2e958a4f50a92362c2c4070b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:neo-async@2.6.2',
    name: 'neo-async',
    version: '2.6.2',
    licenseContentModuleId:
      require('../../../assets/licenses/811238ba7d85f6fe6b820703a32f92705bcf77bc352ddc3476783491c64a129a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:nested-error-stacks@2.0.1',
    name: 'nested-error-stacks',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b2e88339785c60e68386b726ce4a498dea326edfbba18489b827be2578f0d4ed.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:netmask@2.0.2',
    name: 'netmask',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/3bd46401ca72d9fce515e39d38f2e14e84cd748254ae03144db122aeff8d8e0a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:nice-try@1.0.5',
    name: 'nice-try',
    version: '1.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/bd220c219b05e6c22b7c23613ca926f60932d07c9fe141dd6e04b80dbc4b4e52.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:nocache@3.0.4',
    name: 'nocache',
    version: '3.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/352b052ff26f4e0342f9db8170d9f1db80ca3e42a9cb90b821d1fd72e051cd22.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:node-abort-controller@3.1.1',
    name: 'node-abort-controller',
    version: '3.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3ed030086e7f0b82f7c8d86b7c66342b6c820d76062458192cd4990a99f95dfa.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:node-dir@0.1.17',
    name: 'node-dir',
    version: '0.1.17',
    licenseContentModuleId:
      require('../../../assets/licenses/742e10998f572c7013e08192c474d635b70ac40a5e7b867aab7732e163011611.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:node-fetch@2.7.0',
    name: 'node-fetch',
    version: '2.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/84eaa985e1ef71b8c630e8aba73404c219ff425c6fdb45c62e998b58d4fbdc8e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:node-fetch-with-proxy@0.1.6',
    name: 'node-fetch-with-proxy',
    version: '0.1.6',
    licenseContentModuleId:
      require('../../../assets/licenses/316ad7f114387b6c65343b0339fde3407f4ce027fe19331256d1cfb40742b0d5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:node-forge@1.3.1',
    name: 'node-forge',
    version: '1.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/f63ff0e4e239244aa79280da2dd4811a0469e5e201caf5cbc0d97c3a1dff8e82.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:node-int64@0.4.0',
    name: 'node-int64',
    version: '0.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/8f85aab053e268546014761da47630a09886626afbd0d8d440cb2c69611bb8d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:node-releases@2.0.18',
    name: 'node-releases',
    version: '2.0.18',
    licenseContentModuleId:
      require('../../../assets/licenses/3706296ed611888111ceccc1dff4712844dea4bde0b185c82d718c3b69895abe.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:node-stream-zip@1.15.0',
    name: 'node-stream-zip',
    version: '1.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/fcd956252c9f0ecce4a0836d63007a393e40394ea030fa8e3845f64216eec656.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:normalize-path@3.0.0',
    name: 'normalize-path',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e70ff771504ba41f2be55de812a017ff46433d7a250c862e38fc419159e44500.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:npm-package-arg@7.0.0',
    name: 'npm-package-arg',
    version: '7.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/05dc4d785ac3a488676d3ed10e901b75ad89dafcc63f8e66610fd4a39cc5c7e8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:npm-run-path@2.0.2',
    name: 'npm-run-path',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:npm-run-path@4.0.1',
    name: 'npm-run-path',
    version: '4.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:nth-check@2.1.1',
    name: 'nth-check',
    version: '2.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cb992345949ccd6e8394b2cd6c465f7b897c864f845937dbf64e8997f389e164.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:nullthrows@1.1.1',
    name: 'nullthrows',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/dd5f97aa25431e25fea6654f12f4ce167dc19b3148ab515cc271aa8efe6eb0be.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ob1@0.80.12',
    name: 'ob1',
    version: '0.80.12',
    licenseContentModuleId:
      require('../../../assets/licenses/9b347d21cfa30648a3361c1845c7753600cd10732101052f9242798de03764a7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:object-assign@4.1.1',
    name: 'object-assign',
    version: '4.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:object-inspect@1.13.2',
    name: 'object-inspect',
    version: '1.13.2',
    licenseContentModuleId:
      require('../../../assets/licenses/bd40cc437e28a3ad7bef2ad34e6b72e757b182e67bda1acadbab4ef0476f8232.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:object-keys@1.1.1',
    name: 'object-keys',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5640e5cbe2e9f57f6ccfdd8dbfbeadb875495bdbcb69d2666ce3177ccd0942e4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:object.assign@4.1.5',
    name: 'object.assign',
    version: '4.1.5',
    licenseContentModuleId:
      require('../../../assets/licenses/a596744eec6b05682ed972bf93937668bbc8da2caed93fbf6510389de019b5c0.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.squareup.okhttp3:okhttp:4.9.2',
    name: 'okhttp',
    version: '4.9.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.squareup.okhttp3:okhttp-urlconnection:4.9.2',
    name: 'okhttp-urlconnection',
    version: '4.9.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.squareup.okio:okio:2.9.0',
    name: 'Okio',
    version: '2.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:on-finished@2.3.0',
    name: 'on-finished',
    version: '2.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/8089bcc08845ec143e5761f4a101a65b8c792a0dedbfeeb90a15560c0b77f768.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:on-finished@2.4.1',
    name: 'on-finished',
    version: '2.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/8089bcc08845ec143e5761f4a101a65b8c792a0dedbfeeb90a15560c0b77f768.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:on-headers@1.0.2',
    name: 'on-headers',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/74d8054d56d522bdaa340d3d71130cb204997d523a5292c85ac1264dd77c8d06.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:once@1.4.0',
    name: 'once',
    version: '1.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:onetime@2.0.1',
    name: 'onetime',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:onetime@5.1.2',
    name: 'onetime',
    version: '5.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:open@6.4.0',
    name: 'open',
    version: '6.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:open@7.4.2',
    name: 'open',
    version: '7.4.2',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:open@8.4.2',
    name: 'open',
    version: '8.4.2',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:opencollective-postinstall@2.0.3',
    name: 'opencollective-postinstall',
    version: '2.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/86641df2e1c0c0e655d7eb9962a28e850e80c97c62a29500f2f93ab142c3c8f2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:optionator@0.8.3',
    name: 'optionator',
    version: '0.8.3',
    licenseContentModuleId:
      require('../../../assets/licenses/b9eb082c39fe245e38793699074c394c43a722c51fce031c3c165cb92a31035c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ora@3.4.0',
    name: 'ora',
    version: '3.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ora@5.4.1',
    name: 'ora',
    version: '5.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-annotations-jvm:1.3.72',
    name: 'org.jetbrains.kotlin:kotlin-annotations-jvm',
    version: '1.3.72',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:os-homedir@1.0.2',
    name: 'os-homedir',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:os-tmpdir@1.0.2',
    name: 'os-tmpdir',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:osenv@0.1.5',
    name: 'osenv',
    version: '0.1.5',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:outvariant@1.4.3',
    name: 'outvariant',
    version: '1.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/d06a69cefbdd9135436ff8e36ea5c32f07fc27c629063aa411f811efe7c30359.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:p-finally@1.0.0',
    name: 'p-finally',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:p-limit@2.3.0',
    name: 'p-limit',
    version: '2.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:p-limit@3.1.0',
    name: 'p-limit',
    version: '3.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:p-locate@3.0.0',
    name: 'p-locate',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:p-locate@4.1.0',
    name: 'p-locate',
    version: '4.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:p-locate@5.0.0',
    name: 'p-locate',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:p-map@4.0.0',
    name: 'p-map',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:p-try@2.2.0',
    name: 'p-try',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pac-proxy-agent@5.0.0',
    name: 'pac-proxy-agent',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5eee853e2f2b4a78a96b9feb27dee93bcbb9999dc1e5e4e68d79c40403012501.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pac-resolver@5.0.1',
    name: 'pac-resolver',
    version: '5.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a67aeee7e0cb9b5b43e29ea43a57565ad6d0545753875f0635e35c4f7a30cfb7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:package-json-from-dist@1.0.0',
    name: 'package-json-from-dist',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a49c9ba464796f65b59fca3f1e6ca40912df1e859f575383223f7ec6c5baae09.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:parse-json@4.0.0',
    name: 'parse-json',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:parse-png@2.1.0',
    name: 'parse-png',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/69dee148a2cc470554dfa7142e830662062394d0fe67cddd379aba90dc60d6b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:parseurl@1.3.3',
    name: 'parseurl',
    version: '1.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/11d017c3b9f1ee3f44caf7203035f0461d5b57e0db8ce1bc03a9af34fa7d3f6b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:password-prompt@1.1.3',
    name: 'password-prompt',
    version: '1.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/26e8e0134bb01e03286d44cbfc4f8454186fac8254d1cc8f1efd5846434998de.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:path-exists@3.0.0',
    name: 'path-exists',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:path-exists@4.0.0',
    name: 'path-exists',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:path-is-absolute@1.0.1',
    name: 'path-is-absolute',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:path-key@2.0.1',
    name: 'path-key',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:path-key@3.1.1',
    name: 'path-key',
    version: '3.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:path-parse@1.0.7',
    name: 'path-parse',
    version: '1.0.7',
    licenseContentModuleId:
      require('../../../assets/licenses/3f4609137f65070541b9214300ea0d640af8192857de0eeb2b03403003d9228a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:path-scurry@1.11.1',
    name: 'path-scurry',
    version: '1.11.1',
    licenseContentModuleId:
      require('../../../assets/licenses/8a1af140fdfbf5afd3df27f7e662f989c5b963a300020dfafce42033cae9e004.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:path-to-regexp@6.3.0',
    name: 'path-to-regexp',
    version: '6.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4eeb3271453a891df609e5a9f4ee79a68307f730c13417a3bfeffa604ac8cf25.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:path-type@4.0.0',
    name: 'path-type',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:picocolors@1.1.0',
    name: 'picocolors',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6582629e2979466878f6014313dcc2f3756c9616148682227ce3063dde310750.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:picomatch@2.3.1',
    name: 'picomatch',
    version: '2.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/d0cd141b0c322fded5dfad1d4645bb2fedfc05b7321fe1009469638190d59ef9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:picomatch@3.0.1',
    name: 'picomatch',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/d0cd141b0c322fded5dfad1d4645bb2fedfc05b7321fe1009469638190d59ef9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pify@4.0.1',
    name: 'pify',
    version: '4.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pirates@4.0.6',
    name: 'pirates',
    version: '4.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/b3e8623bbd73e4f964f9b5091c7b4c7e078fd760113890b8c1af951ab7921877.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pkg-dir@3.0.0',
    name: 'pkg-dir',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-auth:20.7.0',
    name: 'play-services-auth',
    version: '20.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-auth-api-phone:18.0.1',
    name: 'play-services-auth-api-phone',
    version: '18.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-auth-base:18.0.4',
    name: 'play-services-auth-base',
    version: '18.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-base:18.2.0',
    name: 'play-services-base',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-basement:18.2.0',
    name: 'play-services-basement',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-cloud-messaging:17.0.1',
    name: 'play-services-cloud-messaging',
    version: '17.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-fido:20.0.1',
    name: 'play-services-fido',
    version: '20.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-location:21.0.1',
    name: 'play-services-location',
    version: '21.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-maps:18.2.0',
    name: 'play-services-maps',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-stats:17.0.2',
    name: 'play-services-stats',
    version: '17.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-tasks:18.0.2',
    name: 'play-services-tasks',
    version: '18.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/826ebba1ca54bdbe2b66708d30c78fe248c34f2b60542b6b5d2721448d5c583e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:plist@3.1.0',
    name: 'plist',
    version: '3.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/3677dc86e6e5f119b500c308cc24cf533e2eb44c41050ea64584e049e5b70161.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pluralize@8.0.0',
    name: 'pluralize',
    version: '8.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5822e0d816e53e3537b306a4132cb7a70881897cf51bf483282148a602979076.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pngjs@3.4.0',
    name: 'pngjs',
    version: '3.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/176b07a18c0bb3836aaeb61088fd0bf11a38f66e6f15e3fbda85faa225250d6e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pngjs@5.0.0',
    name: 'pngjs',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/176b07a18c0bb3836aaeb61088fd0bf11a38f66e6f15e3fbda85faa225250d6e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:possible-typed-array-names@1.0.0',
    name: 'possible-typed-array-names',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5e325595b4ea8cfec3802f545b1def5d7b73e4a5b8e9ba63e32a320f67732292.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:postcss@8.4.47',
    name: 'postcss',
    version: '8.4.47',
    licenseContentModuleId:
      require('../../../assets/licenses/c4630ac8b89cb317ac5bdd60ac5e4e185eab9bd5151a0c7b3afa41aa83d7ec9b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:postcss-value-parser@4.2.0',
    name: 'postcss-value-parser',
    version: '4.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/3687447039151857a6ba378db062172c7f33d4aa70a615c87a43a9c50e990485.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:prelude-ls@1.1.2',
    name: 'prelude-ls',
    version: '1.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/b9eb082c39fe245e38793699074c394c43a722c51fce031c3c165cb92a31035c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pretty-bytes@5.6.0',
    name: 'pretty-bytes',
    version: '5.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pretty-format@24.9.0',
    name: 'pretty-format',
    version: '24.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pretty-format@26.6.2',
    name: 'pretty-format',
    version: '26.6.2',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pretty-format@29.7.0',
    name: 'pretty-format',
    version: '29.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:process-nextick-args@2.0.1',
    name: 'process-nextick-args',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/ecdccbcf39024f624ded480c01c0b25458e1eca8f26ecf040933865ce56d9a4f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:progress@2.0.3',
    name: 'progress',
    version: '2.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/d7d2a7786de7c7cfd96f920c6f12927d74e1d2a861ca4498bf465c3bc3f4c21c.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.yoga:proguard-annotations:1.19.0',
    name: 'Proguard Annotations',
    version: '1.19.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:promise@7.3.1',
    name: 'promise',
    version: '7.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5e733eb92ed0c571da3f27c5da203e0a9f975b4f96e7692c9fa3660ca54820ec.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:promise@8.3.0',
    name: 'promise',
    version: '8.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5e733eb92ed0c571da3f27c5da203e0a9f975b4f96e7692c9fa3660ca54820ec.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:PromisesObjC@2.4.0',
    name: 'PromisesObjC',
    version: '2.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:PromisesSwift@2.4.0',
    name: 'PromisesSwift',
    version: '2.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:prompts@2.4.2',
    name: 'prompts',
    version: '2.4.2',
    licenseContentModuleId:
      require('../../../assets/licenses/ade66f698fd417addc4d948a85ef33e8abb302daff6453feda18b191d250e54d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:prop-types@15.8.1',
    name: 'prop-types',
    version: '15.8.1',
    licenseContentModuleId:
      require('../../../assets/licenses/f657f99d3fb9647db92628e96007aabb46e5f04f33e49999075aab8e250ca7ce.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:property-expr@2.0.6',
    name: 'property-expr',
    version: '2.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/89ae1a9d73f2eb3948e37c810309ccc04e5c2c81cb83618df6bb6429d73d9fc1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:proxy-agent@5.0.0',
    name: 'proxy-agent',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6ff415a187cd2c5be948d45d0f500f8abaa3500cc95b31c7ac568132859e2ecb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:proxy-from-env@1.1.0',
    name: 'proxy-from-env',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/f55828df4b8752c48e765a806465b76a103e3cb363379c569b15a1df2ba2d79e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:pump@3.0.2',
    name: 'pump',
    version: '3.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/3fe8d55a98dbf260eace67c00cf9bc53edb46234e840098a0b93df3096b97fb6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:punycode@2.3.1',
    name: 'punycode',
    version: '2.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:qrcode@1.5.4',
    name: 'qrcode',
    version: '1.5.4',
    licenseContentModuleId:
      require('../../../assets/licenses/8df47c6ad9ac2c41eb9b2a72def9908959da0ede8dadd56c7b249c1bdb0c5ce6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:qrcode-terminal@0.11.0',
    name: 'qrcode-terminal',
    version: '0.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b3c7a2fadb2515b8106eae58439a4b9c0581a4eaa88d6a265701f8d4dd7dadb8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:query-string@7.1.3',
    name: 'query-string',
    version: '7.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/846c2349412e40c3c33095b2903f6a311ef4b30ccd26c214044a2cdc24fdc5cc.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:querystring@0.2.1',
    name: 'querystring',
    version: '0.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/0e46887a2bda65f076865875685424359794da3b4367ed0c9807a38d315ca69a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:queue@6.0.2',
    name: 'queue',
    version: '6.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/38d7c4d8410c68eeae9ce24a8b4ee2380199d6df4abb1d9c15dc70b135935fe8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:queue-microtask@1.2.3',
    name: 'queue-microtask',
    version: '1.2.3',
    licenseContentModuleId:
      require('../../../assets/licenses/d4c2065e2b936e62a4eb400efb4576edec9ca1388a9f78aa288e147275e7bc8b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:range-parser@1.2.1',
    name: 'range-parser',
    version: '1.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/f655e6291356ec0de7a8f0e69f294961a2cea86678ec94588be1e6a492e278ab.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:raw-body@2.5.2',
    name: 'raw-body',
    version: '2.5.2',
    licenseContentModuleId:
      require('../../../assets/licenses/37876d7de8bdf5e5b9b58a697ebc34044624e493e6f49eff5c938e5226dcac6b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:rc@1.2.8',
    name: 'rc',
    version: '1.2.8',
    licenseContentModuleId:
      require('../../../assets/licenses/e8734448285a2dd773d40136ed5d5e8163a70701dd540cdc796cfca232f67d55.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RCT-Folly@2024.01.01.00',
    name: 'RCT-Folly',
    version: '2024.01.01.00',
    licenseContentModuleId:
      require('../../../assets/licenses/2206c00af7013581ae0d7c8c8a0089f02fab621913daac019b32336bd4d1e1db.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:React@0.74.5',
    name: 'React',
    version: '0.74.5',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react@18.2.0',
    name: 'react',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:React-Core@0.74.5',
    name: 'React-Core',
    version: '0.74.5',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-devtools-core@5.3.1',
    name: 'react-devtools-core',
    version: '5.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/33ef927b196135dbb6c6ad07f56b661d8ebe1f868901fb8700f57bb948b26706.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-dom@18.2.0',
    name: 'react-dom',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-fast-compare@2.0.4',
    name: 'react-fast-compare',
    version: '2.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/1e187eec147d04bcbb3b7aef9f3b0ea82228961fa7d390d3efb9e57751dbe0cb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-freeze@1.0.4',
    name: 'react-freeze',
    version: '1.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/19ba4296d3501ae3a71920bc9872a5c50ce94105bbf4c2a21d5172658cedd6ae.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-is@16.13.1',
    name: 'react-is',
    version: '16.13.1',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-is@17.0.2',
    name: 'react-is',
    version: '17.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-is@18.3.1',
    name: 'react-is',
    version: '18.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native@0.74.5',
    name: 'react-native',
    version: '0.74.5',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-elements@3.4.3',
    name: 'react-native-elements',
    version: '3.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cf1c4a31b2ae759282f5f41b1d6b72445aaf2dddcdc00076e17a728351ed8aef.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-gesture-handler@2.16.2',
    name: 'react-native-gesture-handler',
    version: '2.16.2',
    licenseContentModuleId:
      require('../../../assets/licenses/f1ae22eddd3a96c3b7b8a494ef03749ae6a1e19574bacc9c195d83c916de09e2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-maps@1.14.0',
    name: 'react-native-maps',
    version: '1.14.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4099a1a5146930614f6c88cab3d38676d460e0e349f3743693ade20e4407587e.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:react-native-maps@1.14.0',
    name: 'react-native-maps',
    version: '1.14.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4099a1a5146930614f6c88cab3d38676d460e0e349f3743693ade20e4407587e.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:react-native-netinfo@11.3.1',
    name: 'react-native-netinfo',
    version: '11.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-qrcode-svg@6.3.2',
    name: 'react-native-qrcode-svg',
    version: '6.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/3f0a6105170ca0c9cc78a5d59e0fa4f89f74b7bbda2cc79417074201f09c52f4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-ratings@8.0.4',
    name: 'react-native-ratings',
    version: '8.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/5515a12286696f832cf352d570c95be67dc4a6642b7a837b16a1df6a118edaa2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-reanimated@3.10.1',
    name: 'react-native-reanimated',
    version: '3.10.1',
    licenseContentModuleId:
      require('../../../assets/licenses/f1ae22eddd3a96c3b7b8a494ef03749ae6a1e19574bacc9c195d83c916de09e2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-safe-area-context@4.10.5',
    name: 'react-native-safe-area-context',
    version: '4.10.5',
    licenseContentModuleId:
      require('../../../assets/licenses/f5c7a4d527258e11fdfe3d84eb73cd14fe6d64224ef051e59f6ee21fe378800c.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:react-native-safe-area-context@4.10.5',
    name: 'react-native-safe-area-context',
    version: '4.10.5',
    licenseContentModuleId:
      require('../../../assets/licenses/f5c7a4d527258e11fdfe3d84eb73cd14fe6d64224ef051e59f6ee21fe378800c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-screens@3.31.1',
    name: 'react-native-screens',
    version: '3.31.1',
    licenseContentModuleId:
      require('../../../assets/licenses/95b52e497653b738fd50e4bd3a8197dc41593c63129acb4f8069dbf49530ef82.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-size-matters@0.3.1',
    name: 'react-native-size-matters',
    version: '0.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/356b3c216b0c923df63b7bbdaf0461246a5b276af56014b0bdfe6d00359d0716.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-svg@15.2.0',
    name: 'react-native-svg',
    version: '15.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1bc2aa7dad15097cd71308d9ae013ff14d11a84357b170c1554f4035fb8a3acb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-vector-icons@10.2.0',
    name: 'react-native-vector-icons',
    version: '10.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/000a66d1bc9e206b5963ba9370cd03350a4b26e205b5880e8e0f882a51951178.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-web@0.19.12',
    name: 'react-native-web',
    version: '0.19.12',
    licenseContentModuleId:
      require('../../../assets/licenses/f961d81b4027c179ccd9200e72fa141f8c0575c1f3c93593f36645dc72bf5216.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-webview@13.8.6',
    name: 'react-native-webview',
    version: '13.8.6',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:react-native-webview@13.8.6',
    name: 'react-native-webview',
    version: '13.8.6',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-refresh@0.14.2',
    name: 'react-refresh',
    version: '0.14.2',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-shallow-renderer@16.15.0',
    name: 'react-shallow-renderer',
    version: '16.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:readable-stream@1.1.14',
    name: 'readable-stream',
    version: '1.1.14',
    licenseContentModuleId:
      require('../../../assets/licenses/6239c6144c31e58cf925c34483606969c555574d64ffa96518ab5d7f45c75d43.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:readable-stream@2.3.8',
    name: 'readable-stream',
    version: '2.3.8',
    licenseContentModuleId:
      require('../../../assets/licenses/ec62dc96da0099b87f4511736c87309335527fb7031639493e06c95728dc8c54.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:readable-stream@3.6.2',
    name: 'readable-stream',
    version: '3.6.2',
    licenseContentModuleId:
      require('../../../assets/licenses/ec62dc96da0099b87f4511736c87309335527fb7031639493e06c95728dc8c54.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:readdirp@3.6.0',
    name: 'readdirp',
    version: '3.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/dffec71d93f273d2af7b54c6c7e7e70b3289c632ec0d7253210ec21ac336d5ac.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:recast@0.21.5',
    name: 'recast',
    version: '0.21.5',
    licenseContentModuleId:
      require('../../../assets/licenses/6ca87d1dce5b82873603e566fd83dabe8771fb169013337d4a14bb9bbf794687.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:regenerate@1.4.2',
    name: 'regenerate',
    version: '1.4.2',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:regenerate-unicode-properties@10.2.0',
    name: 'regenerate-unicode-properties',
    version: '10.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:regenerator-runtime@0.13.11',
    name: 'regenerator-runtime',
    version: '0.13.11',
    licenseContentModuleId:
      require('../../../assets/licenses/51887a3d47051ac2fce1210562e5b9fe0830a8a8fabeb272c2d586eeb18a05fd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:regenerator-runtime@0.14.1',
    name: 'regenerator-runtime',
    version: '0.14.1',
    licenseContentModuleId:
      require('../../../assets/licenses/51887a3d47051ac2fce1210562e5b9fe0830a8a8fabeb272c2d586eeb18a05fd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:regenerator-transform@0.15.2',
    name: 'regenerator-transform',
    version: '0.15.2',
    licenseContentModuleId:
      require('../../../assets/licenses/51887a3d47051ac2fce1210562e5b9fe0830a8a8fabeb272c2d586eeb18a05fd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:regexp.prototype.flags@1.5.2',
    name: 'regexp.prototype.flags',
    version: '1.5.2',
    licenseContentModuleId:
      require('../../../assets/licenses/9616325393b574ca774a0409b95b05cb0f640393513f72da00c5e3191de4a1ea.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:regexpu-core@5.3.2',
    name: 'regexpu-core',
    version: '5.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:regjsparser@0.9.1',
    name: 'regjsparser',
    version: '0.9.1',
    licenseContentModuleId:
      require('../../../assets/licenses/2d65cdba6e67bd7fa9c59070eb3ef5b65490cf1644560eb30c931a1d364009c2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:remove-trailing-slash@0.1.1',
    name: 'remove-trailing-slash',
    version: '0.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3f38b479270ad93948a449a02b4b044e2674c7940ffd7b96e96aea2fa0d6f664.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:require-directory@2.1.1',
    name: 'require-directory',
    version: '2.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a92e52eb1fa7cd746e3827bf01d3a3589bbc8e1e51348b1da042aad165525ad1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:require-from-string@2.0.2',
    name: 'require-from-string',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/6ee0feb1f6ef996ff5a68600f8cf98909cf412d39ef3cdceaefd87d636fa1b7f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:require-main-filename@2.0.0',
    name: 'require-main-filename',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/365496ca1f56da40b23c9815fc40fa9005847b2f8f8fd1c1a4929ef25ec8cd1d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:requireg@0.2.2',
    name: 'requireg',
    version: '0.2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/0f4d543677a34508625894e424fda9e3fd227530f1a5a743a2f8206d2da3bd6f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:resolve@1.7.1',
    name: 'resolve',
    version: '1.7.1',
    licenseContentModuleId:
      require('../../../assets/licenses/435a6722c786b0a56fbe7387028f1d9d3f3a2d0fb615bb8fee118727c3f59b7b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:resolve@1.22.8',
    name: 'resolve',
    version: '1.22.8',
    licenseContentModuleId:
      require('../../../assets/licenses/60acd7711e6c138e6041836e32d922705254cc1568a30fdf16aa8f59bb87aeaa.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:resolve-from@3.0.0',
    name: 'resolve-from',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:resolve-from@5.0.0',
    name: 'resolve-from',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:resolve.exports@2.0.2',
    name: 'resolve.exports',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/306fa513e39b23a6e8747520de761809d206b99800ef41907b530226574c59ae.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:restore-cursor@2.0.0',
    name: 'restore-cursor',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:restore-cursor@3.1.0',
    name: 'restore-cursor',
    version: '3.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:reusify@1.0.4',
    name: 'reusify',
    version: '1.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/db0054e6418412e4a265236c94d1d8935057c67f367240b01bb2b0b2f9091812.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:rimraf@2.6.3',
    name: 'rimraf',
    version: '2.6.3',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:rimraf@3.0.2',
    name: 'rimraf',
    version: '3.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNCAsyncStorage@1.23.1',
    name: 'RNCAsyncStorage',
    version: '1.23.1',
    licenseContentModuleId:
      require('../../../assets/licenses/212dbf14b113759356207347826f21ac3c81151943fdb89ce25da5dc6214831c.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNCMaskedView@0.3.1',
    name: 'RNCMaskedView',
    version: '0.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNCPicker@2.7.5',
    name: 'RNCPicker',
    version: '2.7.5',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNDateTimePicker@8.0.1',
    name: 'RNDateTimePicker',
    version: '8.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3f4b86b90801dc5ebeef0e70533241805502f7496bfe5dba2d131eaed837b0a3.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNFBApp@18.5.0',
    name: 'RNFBApp',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/ee8eb9aaab62cc99d7ab756a29d3016f3b80ae56be8cc25ae30af43515032f54.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNFBCrashlytics@18.5.0',
    name: 'RNFBCrashlytics',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9d1200165d417ce68417864b4f62ae7196686f4ca205975f8fe4cf311742b99a.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNFBMessaging@18.5.0',
    name: 'RNFBMessaging',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9d1200165d417ce68417864b4f62ae7196686f4ca205975f8fe4cf311742b99a.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNGestureHandler@2.16.2',
    name: 'RNGestureHandler',
    version: '2.16.2',
    licenseContentModuleId:
      require('../../../assets/licenses/f1ae22eddd3a96c3b7b8a494ef03749ae6a1e19574bacc9c195d83c916de09e2.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNNotifee@5.7.0',
    name: 'RNNotifee',
    version: '5.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a8b96ed52dc019953943e9f43e5f1279865eecc5c495fc662c5d2dc3195bbe46.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNReanimated@3.10.1',
    name: 'RNReanimated',
    version: '3.10.1',
    licenseContentModuleId:
      require('../../../assets/licenses/f1ae22eddd3a96c3b7b8a494ef03749ae6a1e19574bacc9c195d83c916de09e2.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNScreens@3.31.1',
    name: 'RNScreens',
    version: '3.31.1',
    licenseContentModuleId:
      require('../../../assets/licenses/95b52e497653b738fd50e4bd3a8197dc41593c63129acb4f8069dbf49530ef82.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNSVG@15.2.0',
    name: 'RNSVG',
    version: '15.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1bc2aa7dad15097cd71308d9ae013ff14d11a84357b170c1554f4035fb8a3acb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:run-async@2.4.1',
    name: 'run-async',
    version: '2.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e5c1364118b39fa98b959138ce4aa4d0e68cfbee12d115e69730579fecb1dc1b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:run-parallel@1.2.0',
    name: 'run-parallel',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/d4c2065e2b936e62a4eb400efb4576edec9ca1388a9f78aa288e147275e7bc8b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:rxjs@7.8.1',
    name: 'rxjs',
    version: '7.8.1',
    licenseContentModuleId:
      require('../../../assets/licenses/81c407ac717813b0e3795402960e04003c7bba8ba59b621624707028531c9ade.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:safe-array-concat@1.1.2',
    name: 'safe-array-concat',
    version: '1.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/b41d08bc3624d8c436fc80237d73ebb361985a67f4504bbcd703e5ca2b27254c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:safe-buffer@5.1.2',
    name: 'safe-buffer',
    version: '5.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/c7cc929b57080f4b9d0c6cf57669f0463fc5b39906344dfc8d3bc43426b30eac.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:safe-regex-test@1.0.3',
    name: 'safe-regex-test',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/d90bf0a089da4cf43d644ed240a0b3825dcdb705e64e38371d56995a4cc9e4c5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:safer-buffer@2.1.2',
    name: 'safer-buffer',
    version: '2.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/4bc935e71be198c67ddf3c2b5fddb195f6edc182bfc155a96a6db61b44b494b9.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.savedstate:savedstate:1.2.0',
    name: 'Saved State',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:sax@1.4.1',
    name: 'sax',
    version: '1.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e8bf477df410baa41d44132e676d16a5372cf1798599fac2823376dc95e94eee.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:scheduler@0.23.2',
    name: 'scheduler',
    version: '0.23.2',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:scheduler@0.24.0-canary-efb381bbf-20230505',
    name: 'scheduler',
    version: '0.24.0-canary-efb381bbf-20230505',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:selfsigned@2.4.1',
    name: 'selfsigned',
    version: '2.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cce91643d3456176ba7870772e107f28f54d51948086339522e3c31fb49f2f34.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:semver@5.7.2',
    name: 'semver',
    version: '5.7.2',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:semver@6.3.1',
    name: 'semver',
    version: '6.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:semver@7.6.3',
    name: 'semver',
    version: '7.6.3',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:send@0.18.0',
    name: 'send',
    version: '0.18.0',
    licenseContentModuleId:
      require('../../../assets/licenses/25a328069fe771f8ed5b6f983ed4b0e6c84b3312ac0f69b28c3d52dc277962c9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:send@0.19.0',
    name: 'send',
    version: '0.19.0',
    licenseContentModuleId:
      require('../../../assets/licenses/25a328069fe771f8ed5b6f983ed4b0e6c84b3312ac0f69b28c3d52dc277962c9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:serialize-error@2.1.0',
    name: 'serialize-error',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:serve-static@1.16.2',
    name: 'serve-static',
    version: '1.16.2',
    licenseContentModuleId:
      require('../../../assets/licenses/63b9a188d7d43e64b0558b7115255045b9fe20a5fc3ff483421cb899e7f52bcb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:set-blocking@2.0.0',
    name: 'set-blocking',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/365496ca1f56da40b23c9815fc40fa9005847b2f8f8fd1c1a4929ef25ec8cd1d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:set-cookie-parser@2.7.0',
    name: 'set-cookie-parser',
    version: '2.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c5c6c5183a789d122f267c405f685037efb87e27fcde28ab1dd7378a2d2f5962.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:set-function-length@1.2.2',
    name: 'set-function-length',
    version: '1.2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/bf9b0d665be2a689851eea667ca9f42066ea1d903b38349c51e6a44b2577680a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:set-function-name@2.0.2',
    name: 'set-function-name',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/bf9b0d665be2a689851eea667ca9f42066ea1d903b38349c51e6a44b2577680a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:setimmediate@1.0.5',
    name: 'setimmediate',
    version: '1.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/c4b4ad3a5746f1f5249a6dd90396ec519264e1bb02e01e48a6522c48a3a97cb4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:setprototypeof@1.2.0',
    name: 'setprototypeof',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/76d6d1ea0c268da37dd3c961b4fcfb23dee8417fff9e8786d4d44c585b781b69.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:shallow-clone@1.0.0',
    name: 'shallow-clone',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4922620a5741e9d1bb43dde132021a982ae7c545eed1c6e00b555d6fe978005f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:shallow-clone@3.0.1',
    name: 'shallow-clone',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e7d1fee7347ffddccc5fd03327ffdb50f8c112be0d5016d62388a92c4ae6e7a9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:shebang-command@1.2.0',
    name: 'shebang-command',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e6fdf7ac2af533b4436d99aa75df32aa78690510f7d68a3e73e8576967298d2f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:shebang-command@2.0.0',
    name: 'shebang-command',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/69dee148a2cc470554dfa7142e830662062394d0fe67cddd379aba90dc60d6b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:shebang-regex@1.0.0',
    name: 'shebang-regex',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:shebang-regex@3.0.0',
    name: 'shebang-regex',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:shell-quote@1.8.1',
    name: 'shell-quote',
    version: '1.8.1',
    licenseContentModuleId:
      require('../../../assets/licenses/8bb16db1b047019e4395965f2cf3611b06c34bf86dc2d0210b3c3f91b53c21fe.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:side-channel@1.0.6',
    name: 'side-channel',
    version: '1.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc3f455254c0af0655cc3ff46a41ed644b67599f6043346169d285bf2b3cf3b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:signal-exit@3.0.7',
    name: 'signal-exit',
    version: '3.0.7',
    licenseContentModuleId:
      require('../../../assets/licenses/e05b1eaf5b5f99b7ad75cd1f38858ff9a311780b97715ead67936d60bf96aa7e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:signal-exit@4.1.0',
    name: 'signal-exit',
    version: '4.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b173e19b9a78df305577ace0e52ef45a4bcc915ea28b47b256dc3b68dcb1f7e7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:simple-plist@1.3.1',
    name: 'simple-plist',
    version: '1.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/9ce8fc28ff49e651f98d6583b41ae1653dafaf6fc7444f3dfd13eb97451084bb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:simple-swizzle@0.2.2',
    name: 'simple-swizzle',
    version: '0.2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/8f67ef1afdbd7b8ddc3e2da9968bb97af30795ae9c90a2cc4d867e5608216973.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:sisteransi@1.0.5',
    name: 'sisteransi',
    version: '1.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/ade66f698fd417addc4d948a85ef33e8abb302daff6453feda18b191d250e54d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:slash@3.0.0',
    name: 'slash',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:slice-ansi@2.1.0',
    name: 'slice-ansi',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/3dc3b3d3a284d871f7f307655c90fb101d73abbf87bbddeefd2f67883353bdbc.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:slugify@1.6.6',
    name: 'slugify',
    version: '1.6.6',
    licenseContentModuleId:
      require('../../../assets/licenses/8df3c23e3dfffa0d3d41c59fae5741ea3e2c50eb19c52a5d8912a68fdba554c2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:smart-buffer@4.2.0',
    name: 'smart-buffer',
    version: '4.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c46e2c333e1c9e6fcfd130cf91b8e54bf67b60fabbc04996f7e199b990353ff3.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:SocketRocket@0.7.0',
    name: 'SocketRocket',
    version: '0.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/41c74b84758ab303b091b0afbf958de909559556c8f1591dc4d687ea184356ab.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:socks@2.8.4',
    name: 'socks',
    version: '2.8.4',
    licenseContentModuleId:
      require('../../../assets/licenses/4f4f28866154c8d758241a64296e8790d45d7d912ff7b029930778c06d8f2a72.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:socks-proxy-agent@5.0.1',
    name: 'socks-proxy-agent',
    version: '5.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a40a0b044056ed5617fbbe044154ed38ebce913072737aa3bd912a62d1126de5.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.soloader:soloader:0.11.0',
    name: 'SoLoader',
    version: '0.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.soloader:annotation:0.11.0',
    name: 'SoLoader',
    version: '0.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.soloader:nativeloader:0.11.0',
    name: 'SoLoader',
    version: '0.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:source-map@0.5.6',
    name: 'source-map',
    version: '0.5.6',
    licenseContentModuleId:
      require('../../../assets/licenses/6cb0631f71c7749763fd3dd1d5bee52dd1070ec17f2edc1710079ad070bd2fbd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:source-map@0.5.7',
    name: 'source-map',
    version: '0.5.7',
    licenseContentModuleId:
      require('../../../assets/licenses/6cb0631f71c7749763fd3dd1d5bee52dd1070ec17f2edc1710079ad070bd2fbd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:source-map@0.6.1',
    name: 'source-map',
    version: '0.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6cb0631f71c7749763fd3dd1d5bee52dd1070ec17f2edc1710079ad070bd2fbd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:source-map@0.7.4',
    name: 'source-map',
    version: '0.7.4',
    licenseContentModuleId:
      require('../../../assets/licenses/6cb0631f71c7749763fd3dd1d5bee52dd1070ec17f2edc1710079ad070bd2fbd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:source-map-js@1.2.1',
    name: 'source-map-js',
    version: '1.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6cb0631f71c7749763fd3dd1d5bee52dd1070ec17f2edc1710079ad070bd2fbd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:source-map-support@0.5.21',
    name: 'source-map-support',
    version: '0.5.21',
    licenseContentModuleId:
      require('../../../assets/licenses/3a7d3bb198e909ed642bd68bd29a7d7c09a636d27a51ec663d35f00c4760ec42.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:split@1.0.1',
    name: 'split',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/8937affb1fac84258c98aa2351eb161405999975b602140c43bcbac23b22f1e9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:split-on-first@1.1.0',
    name: 'split-on-first',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:sprintf-js@1.0.3',
    name: 'sprintf-js',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/a4cdda44b5adea4731d53dcae78fb5124f8fd853e994f01e25d8c33a7daf818b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:sprintf-js@1.1.3',
    name: 'sprintf-js',
    version: '1.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/f8287e4dd9480be58c56aca4a55c23b782c43a86e69aabad78fff4df0d29edef.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ssri@10.0.6',
    name: 'ssri',
    version: '10.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/3749709146345fa15546aaba4e3ab1b3b92a4d930077b5bc32d90815cb63afaf.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:stack-generator@2.0.10',
    name: 'stack-generator',
    version: '2.0.10',
    licenseContentModuleId:
      require('../../../assets/licenses/899da9d991cb211a3642b84e82a9ae0b4b4e44546fd207e34d7d4ec2eb40f420.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:stack-utils@2.0.6',
    name: 'stack-utils',
    version: '2.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/9be2ec8089dfa4059a78e4e3e0443c416b2d63dedffb246c7473d0f3d763c6c4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:stackframe@1.3.4',
    name: 'stackframe',
    version: '1.3.4',
    licenseContentModuleId:
      require('../../../assets/licenses/899da9d991cb211a3642b84e82a9ae0b4b4e44546fd207e34d7d4ec2eb40f420.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:stacktrace-gps@3.1.2',
    name: 'stacktrace-gps',
    version: '3.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/899da9d991cb211a3642b84e82a9ae0b4b4e44546fd207e34d7d4ec2eb40f420.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:stacktrace-js@2.0.2',
    name: 'stacktrace-js',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/899da9d991cb211a3642b84e82a9ae0b4b4e44546fd207e34d7d4ec2eb40f420.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:stacktrace-parser@0.1.10',
    name: 'stacktrace-parser',
    version: '0.1.10',
    licenseContentModuleId:
      require('../../../assets/licenses/e1898814043cb5500483d9c8517edda824b352f696d35e5043fcfb537c221531.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:statuses@1.5.0',
    name: 'statuses',
    version: '1.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/512cfa4d5e7a7569c7ae4dd95241cb6ae2aaf648ef9ebd080c01bd24868d26e9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:statuses@2.0.1',
    name: 'statuses',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/512cfa4d5e7a7569c7ae4dd95241cb6ae2aaf648ef9ebd080c01bd24868d26e9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:stream-buffers@2.2.0',
    name: 'stream-buffers',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/3eb9f720594a3af1f1841c2344f85b05be0988b8fb5d23a4c82889f55474e810.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strict-event-emitter@0.2.8',
    name: 'strict-event-emitter',
    version: '0.2.8',
    licenseContentModuleId:
      require('../../../assets/licenses/b580ea1e4023a0b0c0ae95760a081fb809e96b5a26e92905168a83fe0a65f539.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strict-event-emitter@0.4.6',
    name: 'strict-event-emitter',
    version: '0.4.6',
    licenseContentModuleId:
      require('../../../assets/licenses/c99806746abe863eaa7e941fed608eadf89d1ff9bde0216ea76d024ee0e14843.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strict-event-emitter@0.5.1',
    name: 'strict-event-emitter',
    version: '0.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/c99806746abe863eaa7e941fed608eadf89d1ff9bde0216ea76d024ee0e14843.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strict-uri-encode@2.0.0',
    name: 'strict-uri-encode',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e6fdf7ac2af533b4436d99aa75df32aa78690510f7d68a3e73e8576967298d2f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:string_decoder@0.10.31',
    name: 'string_decoder',
    version: '0.10.31',
    licenseContentModuleId:
      require('../../../assets/licenses/21a82bbee91262a076c2e34533d51d73475d55e889f1c42cf884c86b2a0d5773.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:string_decoder@1.1.1',
    name: 'string_decoder',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/11f2aafb37d06b3ee5bdaf06e9811141d0da05263c316f3d627f45c20d43261b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:string-width@4.2.3',
    name: 'string-width',
    version: '4.2.3',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:string-width@5.1.2',
    name: 'string-width',
    version: '5.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:string.prototype.trim@1.2.9',
    name: 'string.prototype.trim',
    version: '1.2.9',
    licenseContentModuleId:
      require('../../../assets/licenses/c16d06f1808d8d8c6ec0f6b6fb7e951126c46730fbb67320863a81f8aa8ca033.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:string.prototype.trimend@1.0.8',
    name: 'string.prototype.trimend',
    version: '1.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/a5e49293b629194f16e08c965807b34a4a8f45aa2735658a3b0e3c1478a34b30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:string.prototype.trimstart@1.0.8',
    name: 'string.prototype.trimstart',
    version: '1.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/a5e49293b629194f16e08c965807b34a4a8f45aa2735658a3b0e3c1478a34b30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strip-ansi@5.2.0',
    name: 'strip-ansi',
    version: '5.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strip-ansi@6.0.1',
    name: 'strip-ansi',
    version: '6.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strip-ansi@7.1.0',
    name: 'strip-ansi',
    version: '7.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strip-eof@1.0.0',
    name: 'strip-eof',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strip-final-newline@2.0.0',
    name: 'strip-final-newline',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strip-json-comments@2.0.1',
    name: 'strip-json-comments',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:strnum@1.0.5',
    name: 'strnum',
    version: '1.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/2aa16be0f4fad003a352a955a43314e9d1d8deef7034060a82ac9c49f32b81e2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:structured-headers@0.4.1',
    name: 'structured-headers',
    version: '0.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/749956c0848ddcf5261df2050add8c74d409b59d8c07845e7b06a73c490bb0be.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:styleq@0.1.3',
    name: 'styleq',
    version: '0.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/b00770e3c5d6a029cb104f7ac0d328c88ec684d31e8188c61ca91fcc17743cdc.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:sucrase@3.34.0',
    name: 'sucrase',
    version: '3.34.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c43b99fc682391ced47fee2bf964bc387ab5e65ba7b626b39cd6d1facd24e6a5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:sudo-prompt@8.2.5',
    name: 'sudo-prompt',
    version: '8.2.5',
    licenseContentModuleId:
      require('../../../assets/licenses/1c0d7e365e7c3dcfc1c30b6913d8a61a2741a4702b7ae727093c5610b47dbfa0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:sudo-prompt@9.1.1',
    name: 'sudo-prompt',
    version: '9.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/1c0d7e365e7c3dcfc1c30b6913d8a61a2741a4702b7ae727093c5610b47dbfa0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:sudo-prompt@9.2.1',
    name: 'sudo-prompt',
    version: '9.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/1c0d7e365e7c3dcfc1c30b6913d8a61a2741a4702b7ae727093c5610b47dbfa0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:superstruct@0.6.2',
    name: 'superstruct',
    version: '0.6.2',
    licenseContentModuleId:
      require('../../../assets/licenses/0f644bc01d85e4b1958bdfe5a851704bd886404c78188d4d6fba43dc8293bc91.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:supports-color@5.5.0',
    name: 'supports-color',
    version: '5.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:supports-color@7.2.0',
    name: 'supports-color',
    version: '7.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:supports-color@8.1.1',
    name: 'supports-color',
    version: '8.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:supports-hyperlinks@2.3.0',
    name: 'supports-hyperlinks',
    version: '2.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/61bed033eebace09bbefb1a3903ebc09e0086ea793d1694fbe300827adc9f921.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:supports-preserve-symlinks-flag@1.0.0',
    name: 'supports-preserve-symlinks-flag',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/0f0ca96f50793990031ebc488a38f7292ff70bce8ab6a8e5eeda674abc32ccdf.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:tar@6.2.1',
    name: 'tar',
    version: '6.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:temp@0.8.4',
    name: 'temp',
    version: '0.8.4',
    licenseContentModuleId:
      require('../../../assets/licenses/63053a2fc2b06fe2138fa128ab29c487e28e38be8a7b9c16a4ef7209e945c0b0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:temp-dir@1.0.0',
    name: 'temp-dir',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:temp-dir@2.0.0',
    name: 'temp-dir',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:tempy@0.3.0',
    name: 'tempy',
    version: '0.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:tempy@0.7.1',
    name: 'tempy',
    version: '0.7.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:terminal-link@2.1.1',
    name: 'terminal-link',
    version: '2.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:terser@5.33.0',
    name: 'terser',
    version: '5.33.0',
    licenseContentModuleId:
      require('../../../assets/licenses/901d0a7fcaccaae9917d165039c0473c354e5da2e0e94140dde67aad9ffb19da.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:text-encoding@0.7.0',
    name: 'text-encoding',
    version: '0.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/d1c15dc8470e037b82da06a95b1a91558414a83625549c47dc3997a9985efa17.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:text-table@0.2.0',
    name: 'text-table',
    version: '0.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/435a6722c786b0a56fbe7387028f1d9d3f3a2d0fb615bb8fee118727c3f59b7b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:thenify@3.3.1',
    name: 'thenify',
    version: '3.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/ae538dfbba770702cec046d5c63b8aa29c2faaff7ad9513693f1f9ee4e6f22b5.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:thenify-all@1.6.0',
    name: 'thenify-all',
    version: '1.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/965ef284f7f4c176842ec2e87fa13e79feed777d56d7a21a5a3b38f1bb6dc288.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:throat@5.0.0',
    name: 'throat',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e21b0992cd8a2e8bf3e5f2f1b392daccab5d27386fcf2bc25e336c4161b5d1f9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:through@2.3.8',
    name: 'through',
    version: '2.3.8',
    licenseContentModuleId:
      require('../../../assets/licenses/e8734448285a2dd773d40136ed5d5e8163a70701dd540cdc796cfca232f67d55.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:through2@2.0.5',
    name: 'through2',
    version: '2.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/faae57631e1c7d641c3b6f9b110c2a7a28c8b383d08d7796ac472c509f075850.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:tiny-case@1.0.3',
    name: 'tiny-case',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/52f8d1586b12a704133b3e057e2697211f79d3972530a65fa8c20867baf4d667.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:tiny-warning@1.0.3',
    name: 'tiny-warning',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/b1c501095de70182748cb8e8d97ac5577701a4ef3b755ba30d59fd87b24bdb0f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:tmp@0.0.33',
    name: 'tmp',
    version: '0.0.33',
    licenseContentModuleId:
      require('../../../assets/licenses/162413c61e0982abe89a06bf7a02ec760dc49a7364d838bd9f01daebb5b95954.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:tmpl@1.0.5',
    name: 'tmpl',
    version: '1.0.5',
    licenseContentModuleId:
      require('../../../assets/licenses/efd6f9e708b909de1a18730b90fb6394a3125680ac2f98a87cd23d1a0c93afa2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:to-fast-properties@2.0.0',
    name: 'to-fast-properties',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/61b82d27e63b14eabc706960aabf6caa1b27d044eb00d7908f92e68085301c3a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:to-regex-range@5.0.1',
    name: 'to-regex-range',
    version: '5.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e7d1fee7347ffddccc5fd03327ffdb50f8c112be0d5016d62388a92c4ae6e7a9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:toidentifier@1.0.1',
    name: 'toidentifier',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a832d679750e49ab433626ab196350b89964b60eb0d3edd3341887c7d5f4c128.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:toposort@2.0.2',
    name: 'toposort',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/0e15c200e47c53a384aa01271398af2f43df40332061b8c0be1907cb9e61e8d2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:tr46@0.0.3',
    name: 'tr46',
    version: '0.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/eeed1ca176eebad5c73870e233cfff03981fecd319c969475dfa3633036c336b.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.datatransport:transport-api:3.0.0',
    name: 'transport-api',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.datatransport:transport-backend-cct:3.1.9',
    name: 'transport-backend-cct',
    version: '3.1.9',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.datatransport:transport-runtime:3.1.9',
    name: 'transport-runtime',
    version: '3.1.9',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:traverse@0.6.10',
    name: 'traverse',
    version: '0.6.10',
    licenseContentModuleId:
      require('../../../assets/licenses/50810ca34b3c662b51f54cdf2ba6bfa346f5528cc2af4001716092a55c397c28.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:trim-right@1.0.1',
    name: 'trim-right',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ts-interface-checker@0.1.13',
    name: 'ts-interface-checker',
    version: '0.1.13',
    licenseContentModuleId:
      require('../../../assets/licenses/b40930bbcf80744c86c46a12bc9da056641d722716c378f5659b9e555ef833e1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:tslib@2.7.0',
    name: 'tslib',
    version: '2.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/210b19e543130388c68654b7497e967119ce17145f66ab7d85688fbd70f08751.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:type-check@0.3.2',
    name: 'type-check',
    version: '0.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/b9eb082c39fe245e38793699074c394c43a722c51fce031c3c165cb92a31035c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:type-detect@4.0.8',
    name: 'type-detect',
    version: '4.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/e5aee0714b6ecc416454b968d1017570ef609f20d8722ab84b07acd550b78198.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:type-fest@0.3.1',
    name: 'type-fest',
    version: '0.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:type-fest@0.7.1',
    name: 'type-fest',
    version: '0.7.1',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:type-fest@0.16.0',
    name: 'type-fest',
    version: '0.16.0',
    licenseContentModuleId:
      require('../../../assets/licenses/64a93ffc0a06a2266dbb57ed7ebe3b56ba66ab337b6347fabdbf86c76819fbae.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:type-fest@0.21.3',
    name: 'type-fest',
    version: '0.21.3',
    licenseContentModuleId:
      require('../../../assets/licenses/64a93ffc0a06a2266dbb57ed7ebe3b56ba66ab337b6347fabdbf86c76819fbae.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:type-fest@2.19.0',
    name: 'type-fest',
    version: '2.19.0',
    licenseContentModuleId:
      require('../../../assets/licenses/15b3ed208ed59be2601610ceb50b906914766bb681632980af727d960f882cf3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:typed-array-buffer@1.0.2',
    name: 'typed-array-buffer',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/b41d08bc3624d8c436fc80237d73ebb361985a67f4504bbcd703e5ca2b27254c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:typed-array-byte-length@1.0.1',
    name: 'typed-array-byte-length',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6d0917530cf3b3dca12c1ab7798e4d38ad0a6798ecc1bd27849a3048ba91d265.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:typed-array-byte-offset@1.0.2',
    name: 'typed-array-byte-offset',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/6d0917530cf3b3dca12c1ab7798e4d38ad0a6798ecc1bd27849a3048ba91d265.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:typed-array-length@1.0.6',
    name: 'typed-array-length',
    version: '1.0.6',
    licenseContentModuleId:
      require('../../../assets/licenses/6d0917530cf3b3dca12c1ab7798e4d38ad0a6798ecc1bd27849a3048ba91d265.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:typedarray.prototype.slice@1.0.3',
    name: 'typedarray.prototype.slice',
    version: '1.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/a6c1514885935d6b699b7e6c1ab22e9312189a75a4e937d83f20749a67d0dbe7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:typescript@5.3.3',
    name: 'typescript',
    version: '5.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/a7d00bfd54525bc694b6e32f64c7ebcf5e6b7ae3657be5cc12767bce74654a47.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ua-parser-js@1.0.39',
    name: 'ua-parser-js',
    version: '1.0.39',
    licenseContentModuleId:
      require('../../../assets/licenses/75e54ad49d0017f57a936f42d561d4d667ecd2d0ecaf23ddfa643996f057aff3.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:ui-common:3.1.3',
    name: 'UiCommon',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unbox-primitive@1.0.2',
    name: 'unbox-primitive',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc3f455254c0af0655cc3ff46a41ed644b67599f6043346169d285bf2b3cf3b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:undici-types@5.26.5',
    name: 'undici-types',
    version: '5.26.5',
    licenseContentModuleId:
      require('../../../assets/licenses/c8cced6ec588c55b07e35733258cb7d6b63e3426ee7490aa9267aab4bda0fb20.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:undici-types@6.19.8',
    name: 'undici-types',
    version: '6.19.8',
    licenseContentModuleId:
      require('../../../assets/licenses/a6db8096b2707bc0102d256917d4d33f298ba36d8c3f25de067a2b5bb379db27.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unicode-canonical-property-names-ecmascript@2.0.1',
    name: 'unicode-canonical-property-names-ecmascript',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unicode-match-property-ecmascript@2.0.0',
    name: 'unicode-match-property-ecmascript',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unicode-match-property-value-ecmascript@2.2.0',
    name: 'unicode-match-property-value-ecmascript',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unicode-property-aliases-ecmascript@2.1.0',
    name: 'unicode-property-aliases-ecmascript',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/483acb265f182907d1caf6cff9c16c96f31325ed23792832cc5d8b12d5f88c8a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unique-filename@3.0.0',
    name: 'unique-filename',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/11734bf6e540e2c021413451205315e5053932de9df9e81279cf2acad6f135ed.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unique-slug@4.0.0',
    name: 'unique-slug',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/8e8b31dd3582eb47f1b28bd6f009b54cd926adb9431e8424db7c2eae7c4af437.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unique-string@1.0.0',
    name: 'unique-string',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6fb9754611c20f6649f68805e8c990e83261f29316e29de9e6cedae607b8634c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unique-string@2.0.0',
    name: 'unique-string',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:universalify@0.1.2',
    name: 'universalify',
    version: '0.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/3fda5977c0904e226190b4e21d64340c1731e2142d6fe5f3dee0090a216b8b63.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:universalify@1.0.0',
    name: 'universalify',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/3fda5977c0904e226190b4e21d64340c1731e2142d6fe5f3dee0090a216b8b63.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:universalify@2.0.1',
    name: 'universalify',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3fda5977c0904e226190b4e21d64340c1731e2142d6fe5f3dee0090a216b8b63.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:unpipe@1.0.0',
    name: 'unpipe',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1a526fbe8d8577f5a4b1c2821842b55b7c0e18862531c62ae4ce69c9b19b74b6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:update-browserslist-db@1.1.0',
    name: 'update-browserslist-db',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c414dde36704bd9c8a76c7aa2921b19270ff9abeb478ea0050250d16cf29b0f6.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:uri-js@4.4.1',
    name: 'uri-js',
    version: '4.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/0af366eff4c01ec147c9c61ea9e8ffad64a4294754c9d79355f3fd1b97cb2fb9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:url-join@4.0.0',
    name: 'url-join',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/08e017f066892c56857a93c2168b37222091ad080ca9384972fd5040daf174f4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:use-latest-callback@0.2.1',
    name: 'use-latest-callback',
    version: '0.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3df58434a8bb400089f72048d8a3434710a85c8d8da4bfd8475a542d02855596.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:use-sync-external-store@1.2.2',
    name: 'use-sync-external-store',
    version: '1.2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:util@0.12.5',
    name: 'util',
    version: '0.12.5',
    licenseContentModuleId:
      require('../../../assets/licenses/6239c6144c31e58cf925c34483606969c555574d64ffa96518ab5d7f45c75d43.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:util-deprecate@1.0.2',
    name: 'util-deprecate',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/0154425673db15cdfa80ecba2c9b1f1a867f7197a006764712849bfc3a93cbb7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:utils-merge@1.0.1',
    name: 'utils-merge',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6e7d699cdd1e4fa837ba7718ea49841aa67201b449ea8b3f9cf274be15974a64.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:uuid@7.0.3',
    name: 'uuid',
    version: '7.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/3df5f9a382da026c813ce3fc95c6c07815eb3ba39f009f482df64eb6af1a3b39.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:uuid@8.3.2',
    name: 'uuid',
    version: '8.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/beaa6b04fb82e41dd2ad679e19e27953afb5999b1abbb455b6564e78ebfeb332.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:valid-url@1.0.9',
    name: 'valid-url',
    version: '1.0.9',
    licenseContentModuleId:
      require('../../../assets/licenses/c48a681e53bfcd0a2b3ee2ea476e6d031fe7563f9eaa68f763bce0e3fb279a46.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:validate-npm-package-name@3.0.0',
    name: 'validate-npm-package-name',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/f3e1645267f7dd77ee6545283cc1766e5883e8fb3b5088fe2cfb995defbb3dde.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:vary@1.1.2',
    name: 'vary',
    version: '1.1.2',
    licenseContentModuleId:
      require('../../../assets/licenses/bd47ce7b88c7759630d1e2b9fcfa170a0f1fde522be09e13fb1581a79d090400.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.versionedparcelable:versionedparcelable:1.1.1',
    name: 'VersionedParcelable',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.databinding:viewbinding:8.2.1',
    name: 'viewbinding',
    version: '8.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:vito-options:3.1.3',
    name: 'VitoOptions',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:vito-renderer:3.1.3',
    name: 'VitoRenderer',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:vlq@1.0.1',
    name: 'vlq',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/560005aa01c5230147ca813dabd1970628d6c6ef57ad8f1553ad20ef9dce451b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:vm2@3.9.19',
    name: 'vm2',
    version: '3.9.19',
    licenseContentModuleId:
      require('../../../assets/licenses/4f6fd6355ee430c5c37a3bdef5f8221586040788e634cdeddab27acacd101c6b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:walker@1.0.8',
    name: 'walker',
    version: '1.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/555e1f70ce6b9b7ce77ad07ba8b2b6b3a543b2c7cc8fe15a2c30ad1b89667e21.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:warn-once@0.1.1',
    name: 'warn-once',
    version: '0.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/f9a72660f8b9b8a9ae3773ecaab64f61d1412a4f1c9eb945e455d22608fdc348.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:wcwidth@1.0.1',
    name: 'wcwidth',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/6294da0e0a201bbe1de254445c9d07133a9448af05e4e44d0a2364747d114368.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:web-encoding@1.1.5',
    name: 'web-encoding',
    version: '1.1.5',
    licenseContentModuleId:
      require('../../../assets/licenses/3046fd3c63ec9c009ed94eb61a9e8b62f4afc73781c6ba174e78819ae8814719.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:webidl-conversions@3.0.1',
    name: 'webidl-conversions',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a889cc4dbee2ae172c179856b25d75b0b7a5a136e1b97109b9b590b2ff1a879c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:webidl-conversions@5.0.0',
    name: 'webidl-conversions',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a889cc4dbee2ae172c179856b25d75b0b7a5a136e1b97109b9b590b2ff1a879c.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:webpsupport:3.1.3',
    name: 'WebpSupport',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.webkit:webkit:1.4.0',
    name: 'WebView Support Library',
    version: '1.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:whatwg-fetch@3.6.20',
    name: 'whatwg-fetch',
    version: '3.6.20',
    licenseContentModuleId:
      require('../../../assets/licenses/c887d1c97797646dbb216925ab44a93c6b3e7f03bbe6ef6e0f92b8b8ade63014.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:whatwg-url@5.0.0',
    name: 'whatwg-url',
    version: '5.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/6b7a1792144374d84dc5ed3655b8bbe2754d06f4f1f64a9fb8b9de2d6f448b85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:whatwg-url-without-unicode@8.0.0-3',
    name: 'whatwg-url-without-unicode',
    version: '8.0.0-3',
    licenseContentModuleId:
      require('../../../assets/licenses/6b7a1792144374d84dc5ed3655b8bbe2754d06f4f1f64a9fb8b9de2d6f448b85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:which@1.3.1',
    name: 'which',
    version: '1.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:which@2.0.2',
    name: 'which',
    version: '2.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:which-boxed-primitive@1.0.2',
    name: 'which-boxed-primitive',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc3f455254c0af0655cc3ff46a41ed644b67599f6043346169d285bf2b3cf3b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:which-module@2.0.1',
    name: 'which-module',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/852bf81203aa93aa89afc9f881ebb035322dc7334aaceff435c557634c94a815.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:which-typed-array@1.1.15',
    name: 'which-typed-array',
    version: '1.1.15',
    licenseContentModuleId:
      require('../../../assets/licenses/c61652db3d2808f667b48af0a358f0d85fd07ad4a0d0b1a50882dec3b764c522.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:wonka@4.0.15',
    name: 'wonka',
    version: '4.0.15',
    licenseContentModuleId:
      require('../../../assets/licenses/6180f98bff073d92a68171fdfbbff712530d6813910110eaee167608aff5845e.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:word-wrap@1.2.5',
    name: 'word-wrap',
    version: '1.2.5',
    licenseContentModuleId:
      require('../../../assets/licenses/73b5283588baa142c5baaef5f56d3e8fdea7a30b214e8c5737e87640f882453a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:wrap-ansi@6.2.0',
    name: 'wrap-ansi',
    version: '6.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/48da2f39e100d4085767e94966b43f4fa95ff6a0698fba57ed460914e35f94a0.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:wrap-ansi@7.0.0',
    name: 'wrap-ansi',
    version: '7.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:wrap-ansi@8.1.0',
    name: 'wrap-ansi',
    version: '8.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:wrappy@1.0.2',
    name: 'wrappy',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:write-file-atomic@2.4.3',
    name: 'write-file-atomic',
    version: '2.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/ea7f376fe7a1fc28572b83ac8f806d92effb31852b9981bc9ba9d5266caa6b28.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ws@6.2.3',
    name: 'ws',
    version: '6.2.3',
    licenseContentModuleId:
      require('../../../assets/licenses/3de284c8e6fa7e8437eff6f53695471e0332129a5b42a79361e17b7637de94b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ws@7.5.10',
    name: 'ws',
    version: '7.5.10',
    licenseContentModuleId:
      require('../../../assets/licenses/3de284c8e6fa7e8437eff6f53695471e0332129a5b42a79361e17b7637de94b3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:ws@8.18.0',
    name: 'ws',
    version: '8.18.0',
    licenseContentModuleId:
      require('../../../assets/licenses/2b29dcfe0d6471f7e8c92c5fb38c9f93edee10330937055440192f1832b1ecef.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:xcode@3.0.1',
    name: 'xcode',
    version: '3.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
    noticeContentModuleId:
      require('../../../assets/licenses/0e5b0fe8d11e1627336bc6361de610ba8acf9a035fd73e07b5b4a0909a48371f.notice.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:xml2js@0.6.0',
    name: 'xml2js',
    version: '0.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c51452ef1dfd5606c9fe266930fa6bf7e8a534d52973b6475df5bf212cad5b0a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:xmlbuilder@11.0.1',
    name: 'xmlbuilder',
    version: '11.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e368bc4263b466cf98c225af15e300549e00da8859416a4536109e9654d434a8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:xmlbuilder@14.0.0',
    name: 'xmlbuilder',
    version: '14.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/e368bc4263b466cf98c225af15e300549e00da8859416a4536109e9654d434a8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:xmlbuilder@15.1.1',
    name: 'xmlbuilder',
    version: '15.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e368bc4263b466cf98c225af15e300549e00da8859416a4536109e9654d434a8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:xregexp@2.0.0',
    name: 'xregexp',
    version: '2.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/fadd4f7a076684bf049965b986ce59f812e38efef50676bb9c0df11e8b07e198.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:xtend@4.0.2',
    name: 'xtend',
    version: '4.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/82e67379203d5794e7c44549847d8d64ae6904591381682360470898bd306821.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:y18n@4.0.3',
    name: 'y18n',
    version: '4.0.3',
    licenseContentModuleId:
      require('../../../assets/licenses/2034cce3b6fafcddd642c4175e01d3ddfc332a53b9f20fdc46b1466dc89ac469.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:y18n@5.0.8',
    name: 'y18n',
    version: '5.0.8',
    licenseContentModuleId:
      require('../../../assets/licenses/2034cce3b6fafcddd642c4175e01d3ddfc332a53b9f20fdc46b1466dc89ac469.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yallist@3.1.1',
    name: 'yallist',
    version: '3.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yallist@4.0.0',
    name: 'yallist',
    version: '4.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4ec3d4c66cd87f5c8d8ad911b10f99bf27cb00cdfcff82621956e379186b016b.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yaml@2.5.1',
    name: 'yaml',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/5bba27375d93e9119f76c1015f7672cf9ad5f70952296e0842fb2243d6376869.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yargs@15.4.1',
    name: 'yargs',
    version: '15.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/2f1a503bfab84b3ba7393627308b3274501e459e3b5185bbb56bbf16cb1602d4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yargs@16.2.0',
    name: 'yargs',
    version: '16.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/2f1a503bfab84b3ba7393627308b3274501e459e3b5185bbb56bbf16cb1602d4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yargs@17.7.2',
    name: 'yargs',
    version: '17.7.2',
    licenseContentModuleId:
      require('../../../assets/licenses/2f1a503bfab84b3ba7393627308b3274501e459e3b5185bbb56bbf16cb1602d4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yargs-parser@18.1.3',
    name: 'yargs-parser',
    version: '18.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/365496ca1f56da40b23c9815fc40fa9005847b2f8f8fd1c1a4929ef25ec8cd1d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yargs-parser@20.2.9',
    name: 'yargs-parser',
    version: '20.2.9',
    licenseContentModuleId:
      require('../../../assets/licenses/365496ca1f56da40b23c9815fc40fa9005847b2f8f8fd1c1a4929ef25ec8cd1d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yargs-parser@21.1.1',
    name: 'yargs-parser',
    version: '21.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/365496ca1f56da40b23c9815fc40fa9005847b2f8f8fd1c1a4929ef25ec8cd1d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yocto-queue@0.1.0',
    name: 'yocto-queue',
    version: '0.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/5c932d88256b4ab958f64a856fa48e8bd1f55bc1d96b8149c65689e0c61789d3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yup@1.3.3',
    name: 'yup',
    version: '1.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/89ae1a9d73f2eb3948e37c810309ccc04e5c2c81cb83618df6bb6429d73d9fc1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:zod@3.23.8',
    name: 'zod',
    version: '3.23.8',
    licenseContentModuleId:
      require('../../../assets/licenses/0225e7c0a96845a7477cd44d75d3dc9c999f673454efa84b54e218415055eece.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:zod-validation-error@2.1.0',
    name: 'zod-validation-error',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/03cc9a630489a2544b799548a0e8b134f382fe09fa06dc22b339091b28b8f4a8.license.txt') as number,
  },
].filter(d => {
  return usingTypes?.includes(d.type);
});
