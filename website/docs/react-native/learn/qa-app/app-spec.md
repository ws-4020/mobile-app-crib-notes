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
| デザインシステム | 画面デザインの完成見本や表示部品の動きなどについて記載した資料です。Figmaで開いて参照してください。【TODO：置き場所決まり次第figmaファイルへのリンクを追記】|
| [API仕様](https://github.com/ws-4020/mobile-app-crib-notes/blob/feature/change-apis-to-canal-specification/example-app/api-document/openapi.yaml) | 使用するAPIの仕様です。OpenAPI Specificationで作成しています。必要に応じてStoplight Studioなどのツールを使用し、見やすい形式で参照してください。 【TODO：マージ後にmasterブランチを指すように修正】 |

また、上記に記載されていない内容については演習問題文中に仕様の補足として記載しています。参考にして実装してください。

### 画面遷移

![画面遷移](screen-transitions-qa.drawio.png)
