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

module.exports = {
  preset: 'jest-expo',
  // __mocks__ディレクトリをjestディレクトリ内に配置したいので、ルートディレクトリにjestを設定しています。
  roots: ['<rootDir>/src', 'jest'],
  setupFiles: [
    '<rootDir>/jest/setup/global.js',
    '<rootDir>/jest/setup/netinfo.js',
    '<rootDir>/jest/setup/react-native.js',
    '<rootDir>/jest/setup/react-native-gesture-handler.js',
    '<rootDir>/jest/setup/react-native-reanimated.js',
    '<rootDir>/jest/setup/react-native-safe-area-context.js',
    '<rootDir>/jest/setup/useFocusEffect.js',
  ],
  // https://jestjs.io/ja/docs/configuration#clearmocks-boolean
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/src/features/backend/apis/',
    '<rootDir>/src/features/sandbox/apis/',
    '<rootDir>/src/apps/app/screens/',
    '<rootDir>/src/features/[^/]+/pages/',
  ],
  moduleNameMapper: {
    // Barcode.tsxでESMのコードを直接importしているため、以下のエラーが発生する
    // SyntaxError: Cannot use import statement outside a module
    // そのため、トランスパイルされたソースコードにマッピングする
    '^jsbarcode/src/barcodes/CODE128/CODE128$': 'jsbarcode/bin/barcodes/CODE128/CODE128.js',
    '^jsbarcode/src/barcodes/CODE128/CODE128_AUTO$': 'jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js',
  },
};
