// To show all ESLint rules, run the following command.
// npx eslint --print-config src/App.tsx

module.exports = {
  root: true,
  // universe/native: https://github.com/expo/expo/tree/master/packages/eslint-config-universe
  // react-hooks: https://ja.reactjs.org/docs/hooks-rules.html
  extends: ['universe/native', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      // universe/shared/typescript-analysis: https://github.com/expo/expo/tree/master/packages/eslint-config-universe
      // recommended-requiring-type-checking: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
      extends: ['universe/shared/typescript-analysis', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      // https://github.com/jest-community/eslint-plugin-jest#shareable-configurations
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
      rules: {
        // you should turn the original rule off *only* for test files
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
  ignorePatterns: ['src/generated/**/*.ts'],
};
