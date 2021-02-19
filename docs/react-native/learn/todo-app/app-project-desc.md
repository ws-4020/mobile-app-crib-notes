---
title: ToDoアプリプロジェクトの説明
---

## ToDoアプリプロジェクトの準備

[プロジェクトの作成](../getting-started/create-project.md)で作成したReact Nativeプロジェクトを使ってToDoアプリを実装していきます。

## プロジェクト構成の説明

最終的に出来上がるToDoアプリのプロジェクト構成は次の通りです。

```console
todo_app
└─src
   ├─@types
   ├─assets
   ├─components
   │  ├─basics
   │  └─parts
   ├─contexts
   ├─navigation
   │  └─hooks
   ├─screens
   └─services
```

- @types: `.d.ts`ファイル
- assets: アプリにバンドルする画像やその他のファイル
- components/basics: 汎用性のあるコンポーネント
- components/parts: アプリ機能に特化したコンポーネント
- contexts: コンテクス
- navigation: ナビゲーション定義
- navigation/hooks: ナビゲーションのカスタムフック
- screens: 画面
- services: 外部（APIや内部ストレージなど）と連携するサービスやビジネスロジック
