---
title: QAアプリの仕様
sidebar_label: QAアプリの仕様
hide_table_of_contents: true
---

## 4. QAアプリの仕様

演習の題材として、技術系のQAアプリを作成します。

### 4-1. 機能

- イベントの告知を投稿できる
- 質問を投稿できる
- 質問に対して回答を投稿できる
- 質問または回答に対してはコメントを投稿できる
- 質問や回答、コメントに対していいねの実施/取り消しができる
- 投稿されたイベントや質問を一覧形式で表示できる
- 投稿されたイベントや質問をキーワードにより検索できる
- 投稿された質問を並び替えやタグによる絞り込みができる

以下の資料をインプットに実装を進めていきます。

| 資料名 | 説明 |
|--|--|
| デザインシステム | 画面デザインの完成見本や表示部品の動きなどについて記載した資料です。Figmaで作成しています。 |
| [API仕様](https://github.com/ws-4020/mobile-app-crib-notes/blob/master/example-app/api-document/openapi.yaml) | 使用するAPIの仕様です。OpenAPI Specificationで作成しています。必要に応じてStoplight Studioなどのツールを使用し、見やすい形式で参照してください。 |

### 4-2. 画面遷移

![画面遷移](screen-transitions-qa.drawio.png)
