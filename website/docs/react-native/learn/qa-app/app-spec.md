---
title: QAアプリの仕様
sidebar_label: QAアプリの仕様
hide_table_of_contents: true
---

## 機能

相互支援・情報共有を目的としたイベント告知やQ&Aを行うアプリです。

- イベントの告知を投稿できる
- 質問を投稿できる
- 質問に対して回答を投稿できる
- 質問または回答に対してコメントを投稿できる
- 質問や回答、コメントに対していいねの実施/取り消しができる
- 投稿されたイベントや質問を一覧形式で表示できる
- 投稿されたイベントや質問をキーワードにより検索できる
- 投稿された質問の並び替えやタグによる絞り込みができる

## 仕様書

以下の資料をインプットに実装を進めていきます。

| 資料名 | 説明 |
|--|--|
| デザインシステム | デザインガイドラインやUIコンポーネントについて記載した資料です。Figmaで開いて参照してください。【TODO：置き場所決まり次第figmaファイルへのリンクを追記】|
| [API仕様](https://github.com/Fintan-contents/mobile-app-crib-notes/blob/master/example-app/api-document/openapi.yaml) | 使用するAPIの仕様です。OpenAPI Specificationで作成しています。必要に応じてStoplight Studioなどのツールを使用し、見やすい形式で参照してください。 |

また、上記に記載されていない仕様については演習問題文中に補足として記載しています。

### 画面遷移

![画面遷移](screen-transitions-qa.drawio.png)
