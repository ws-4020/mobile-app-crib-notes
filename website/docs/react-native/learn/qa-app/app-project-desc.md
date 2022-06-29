---
title: QAアプリプロジェクトの説明
sidebar_label: QAアプリプロジェクトの説明
hide_table_of_contents: true
---

## 1. 開発環境の構築

React Nativeでの開発環境が未構築の場合は、[開発環境の構築](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/getting-started/setting-up-development-environment)を参照して環境構築を行ってください。

> MSWの設定方法を追記する

## 2. プロジェクトの作成

[プロジェクトの作成](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/getting-started/create-project)を参照し、新たに初期プロジェクトを作成してください。

### 2-1. ディレクトリの構成

ディレクトリ構成は以下とします。

```
src
├─・・・
```

| ディレクトリ名 | 説明 |
|--|--|
|  |  |
|  |  |

### 2-2. 使用ライブラリ

以下のライブラリを使用してQAアプリの作成ができることを検証済です。特にこだわりがない場合は以下を使用してください。

| ライブラリ名 | 説明 |
|--|--|
|  |  |
|  |  |

## 3. アプリの実行方法

[アプリの実行](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app)を参照してください。

> - API実行部分が変更になるか？

## 4. プロジェクトの設定
初期プロジェクトの作成をした直後は、最低限のファイルしかない状態です。
QAアプリの実装に必要な共通処理をサンプルアプリ（SantokuApp）からコピーします。以下のファイルを作成したプロジェクトにコピーしてください。
一部のファイルについてはコピー後、不要な処理の削除やアプリ名の変更などの修正が必要です。以下の説明を参考に、実際のファイルの内容を把握しながら必要な修正を行ってください。

| コピー元（[SantokuApp](https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp "SantokuApp")） | 修正必要 | 説明 |
|--|--|--|
| src/components/reactQuery配下 | | reactQueryを使用するために必要な設定。 |
| src/framework/backend/customInstance.ts | ○ |  |
| src/framework/config/AppConfig.ts | ○ |  |
| src/framework/config/index.ts |  |  |
| src/framework/initialize/helpers/bundledMessage.ts |  | アプリ内にバンドルされたメッセージをロードするクラスを呼ぶ。 |
| src/framework/initialize/helpers/index.ts | ○ |  |
| src/framework/initialize/index.ts | ○ |  |
| src/framework/initialize/useAppInitializer.ts | ○ | アプリ起動時の初期化処理について記述されている。<br />（参考）[アプリ起動後の初期化処理](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization "アプリ起動後の初期化処理") |
| src/framework/logging/ConsoleTransport.ts |  |  |
| src/framework/logging/index.ts | ○ |  |
| src/framework/logging/Logger.ts |  |  |
| src/framework/logging/SimpleLogFormatter.ts |  |  |
| src/framework/logging/Transport.ts |  |  |
| src/framework/message/BundledMessageLoader.ts |  | アプリ内にバンドルされたメッセージをロードする。 |
| src/framework/message/index.ts |  |  |
| src/framework/message/Message.ts |  |  |
| src/framework/utilities/composePressableStyles.ts |  | 《react-native-reanimated pickerの中で使用》 |
| src/framework/utilities/index.ts | ○ |  |
| src/framework/utilities/useIsMounted.ts |  |  |
| src/framework/utilities/useVisibility.ts |  | 《トグルのstate pickerの中で使用》 |
| src/framework/utilities/useWorkletCallback.ts |  | 《react-native-reanimated使用するなら必要》 |
| src/generated/BundledMessages.ts | ○ | アプリ内にバンドルするメッセージの一覧。 |
| src/AppWithInitialization.tsx | ○ |  |
| package.json ※ファイルの内容を一部コピー | ○ | `"orval": "npx orval --config ./orval.config.ts"`<br />OpenAPI specificationからソースコードを自動生成するために必要。 |
