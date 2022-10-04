---
title: QAアプリの実装
sidebar_label: 概要
hide_table_of_contents: true
---

[ToDoアプリの実装](/react-native/learn/todo-app)が完了した方向けに、より実践的なアプリを作成します。

React Native未経験者でToDoアプリの実装が未実施の場合は、ToDoアプリの実装を先に実施することをお勧めします。

<!-- textlint-disable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

import {PageList} from '../../../../src/components';
const overviews = [
  {
    title: 'QAアプリの仕様',
    to: '/react-native/learn/qa-app/app-spec',
    summary: <>これから実装するQAアプリの仕様を理解します。</>
  },
  {
    title: 'QAアプリプロジェクトの説明',
    to: '/react-native/learn/qa-app/app-project-desc',
    summary: <>QAアプリの開発に利用するReact Nativeプロジェクトのディレクトリ構成などについて学びます。</>
  },
  {
    title: 'QAアプリの実装（基本編）',
    to: '/react-native/learn/qa-app/exercise-basic-home-components',
    summary: <>QAアプリの各画面と画面遷移、API呼び出しを実装します。</>
  },
  {
    title: 'QAアプリの実装（応用編）',
    to: '/react-native/learn/qa-app/exercise-advanced',
    summary: <>QAアプリにより複雑な表示部品や動きを追加します。</>
  },
]

<PageList overviews={overviews} colSize={12} />

<!-- textlint-enable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->