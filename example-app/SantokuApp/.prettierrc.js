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

// https://prettier.io/docs/en/options.html
module.exports = {
  // https://prettier.io/docs/en/options.html#bracket-spacing
  // import {React} from 'React' のように、{}の間にスペースを含まないようにする。
  bracketSpacing: false,
  // https://prettier.io/docs/en/options.html#bracket-line
  // JSXのタグが複数行になったときに、最後の'>'の前で改行しない。
  bracketSameLine: true,
  // https://prettier.io/docs/en/options.html#deprecated-jsx-brackets
  // 【Deprecated】 JSXのタグが複数行になったときに、最後の'>'の前で改行しない。
  // IntelliJ IDEAのPrettierプラグインでbracketSameLineがまだサポートされていないようなので残しておく
  jsxBracketSameLine: true,
  // https://prettier.io/docs/en/options.html#quotes
  // ダブルクオートではなく、シングルクオートに統一する。
  singleQuote: true,
  // https://prettier.io/docs/en/options.html#trailing-commas
  // 配列などの最後の要素の後にもカンマを付けるようにする。（順番を入れ替えたりするときに行を入れ替えるだけで良くなるので便利です。）
  trailingComma: 'all',
  // https://prettier.io/docs/en/options.html#arrow-function-parentheses
  // アロー関数の引数に不要なカッコを付けないようにする。
  arrowParens: 'avoid',
};
