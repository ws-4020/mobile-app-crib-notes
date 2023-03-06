module.exports = {
  preset: 'jest-expo',
  // __mocks__ディレクトリをjestディレクトリ内に配置したいので、ルートディレクトリにjestを設定しています。
  roots: ['<rootDir>/src', 'jest'],
  setupFiles: [
    '<rootDir>/jest/setup/global.js',
    '<rootDir>/jest/setup/react-native.js',
    '<rootDir>/jest/setup/react-native-gesture-handler.js',
    '<rootDir>/jest/setup/react-native-reanimated.js',
    '<rootDir>/jest/setup/react-native-safe-area-context.js',
    '<rootDir>/jest/setup/react-query.js',
    '<rootDir>/jest/setup/useFocusEffect.js',
  ],
  moduleNameMapper: {
    // Barcode.tsxでESMのコードを直接importしているため、以下のエラーが発生する
    // SyntaxError: Cannot use import statement outside a module
    // そのため、トランスパイルされたソースコードにマッピングする
    '^jsbarcode/src/barcodes/CODE128': 'jsbarcode/bin/barcodes/CODE128',
  },
};
