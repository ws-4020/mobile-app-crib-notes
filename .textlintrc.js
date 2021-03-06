module.exports = {
  filters: {
    comments: true,
  },
  plugins: {
    '@textlint/markdown': {
      extensions: ['.mdx'],
    },
  },
  rules: {
    'preset-ja-technical-writing': {
      'sentence-length': {
        max: 100,
        exclusionPatterns: ['/\\(.*\\)/'],
      },
      'ja-no-mixed-period': {
        allowPeriodMarks: [':::'],
      },
    },
    'preset-jtf-style': {
      '2.2.1.ひらがなと漢字の使い分け': true,
    },
    'textlint-rule-preset-ja-spacing': true,
    prh: {
      rulePaths: ['./prh.yaml'],
    },
  },
};
