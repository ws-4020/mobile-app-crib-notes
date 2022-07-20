---
title: QAアプリプロジェクトの説明
sidebar_label: QAアプリプロジェクトの説明
hide_table_of_contents: true
---

## QAアプリプロジェクトの準備

### 開発環境の構築

[開発環境の構築](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/getting-started/setting-up-development-environment)が未実施の場合は、実施してください。

【TODO】：MSW関連で追記することがあれば追記する。

### プロジェクトの作成

[プロジェクトの作成](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/getting-started/create-project)を参照し、新たに初期プロジェクトを作成してください。

### `src`ディレクトリ構成の説明

ディレクトリ構成は以下とします。

【TODO】：SantokuAppの新ディレクトリ構成が決まりしだい記載する。

```console
src
├─・・・
```

| ディレクトリ名 | 説明 |
|--|--|
|  |  |
|  |  |

### 使用ライブラリ

以下のライブラリを使用してQAアプリが作成可能なことを確認しています。ライブラリ選定で迷う場合は以下を使用してください。

【TODO】：使用ライブラリについて追記する。

| ライブラリ名 | 説明 |
|--|--|
|  |  |
|  |  |

### アプリの実行方法

[アプリの実行](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app)を参照してください。

【TODO】：MSW関連で追記することがあれば追記する。

### プロジェクトの設定

初期プロジェクトの作成をした直後は、最低限のファイルしかない状態です。
QAアプリの実装に必要な共通処理をサンプルアプリ（SantokuApp）からコピーします。以下のファイルを作成したプロジェクトにコピーしてください。
一部のファイルについてはコピー後、不要な処理の削除やアプリ名の変更などの修正が必要です。以下の説明を参考に、ファイルの内容を把握しながら修正してください。

| コピー元（[SantokuApp](https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp "SantokuApp")） | 修正必要 | 説明 |
|--|--|--|
| src/components/reactQuery配下 | | reactQueryを使用するために必要な設定。 |
| src/framework/backend/customInstance.ts | ○ | API通信をする際に必要な設定。 |
| src/framework/config/AppConfig.ts | ○ | アプリで使用する環境設定値の設定。 |
| src/framework/config/index.ts |  |  |
| src/framework/initialize/helpers/bundledMessage.ts |  | アプリ内にバンドルされたメッセージをロードする。 |
| src/framework/initialize/helpers/index.ts | ○ |  |
| src/framework/initialize/index.ts | ○ |  |
| src/framework/initialize/useAppInitializer.ts | ○ | アプリ起動時の初期化処理について記述している。<br />（参考）[アプリ起動後の初期化処理](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization "アプリ起動後の初期化処理") |
| src/framework/logging/ConsoleTransport.ts |  | ログ出力で使用する設定。 |
| src/framework/logging/index.ts | ○ |  |
| src/framework/logging/Logger.ts |  | ログ出力で使用する設定。 |
| src/framework/logging/SimpleLogFormatter.ts |  | ログ出力で使用する設定。 |
| src/framework/logging/Transport.ts |  | ログ出力で使用する設定。 |
| src/framework/message/BundledMessageLoader.ts |  | アプリ内にバンドルされたメッセージをロードする。 |
| src/framework/message/index.ts |  |  |
| src/framework/message/Message.ts |  | アプリ内で使用するメッセージで必要な設定。 |
| src/framework/utilities/composePressableStyles.ts |  | picker部品の中でreact-native-reanimatedを使用する際に使用。 |
| src/framework/utilities/index.ts | ○ |  |
| src/framework/utilities/useIsMounted.ts |  | コンポーネントがマウントされているかを確認するためのユーティリティ |
| src/framework/utilities/useVisibility.ts |  | picker部品の中でstate管理に使用。 |
| src/framework/utilities/useWorkletCallback.ts |  | react-native-reanimatedを使用する際に使用。 |
| src/generated/BundledMessages.ts | ○ | アプリ内にバンドルするメッセージの一覧。 |
| src/AppWithInitialization.tsx | ○ | アプリ起動時に必要な設定。 |
| package.json ※ファイルの内容を一部コピー | ○ | `"orval": "npx orval --config ./orval.config.ts"`<br />OpenAPI specificationからソースコードを自動生成するために必要。 |
