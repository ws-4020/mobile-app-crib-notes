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

【TODO】：コピー元のディレクトリ構成は変更予定（構成検討中）のため、構成が決まり次第コピー元のパスを修正する。

| コピー元（[SantokuApp](https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp "SantokuApp")） | 修正必要 | 説明 |
|--|--|--|
| src/components/reactQuery配下 | | reactQueryを使用するために必要な設定。 |
| src/framework/index.ts | ○ | エントリポイント。 |
| src/framework/backend/customInstance.ts | ○ | API通信をする際に必要な設定。 |
| src/framework/config/AppConfig.ts | ○ | アプリで使用する環境設定値の設定。 |
| src/framework/config/index.ts |  | エントリポイント。 |
| src/framework/error/RequestTimeoutError.ts |  | API呼び出しでのタイムアウト時に使用。 |
| src/framework/initialize/helpers/bundledMessage.ts |  | アプリ内にバンドルされたメッセージのロードに使用。 |
| src/framework/initialize/helpers/index.ts | ○ | エントリポイント。 |
| src/framework/initialize/index.ts | ○ | エントリポイント。 |
| src/framework/initialize/useAppInitializer.ts | ○ | アプリ起動時の初期化処理について記述している。<br />（参考）[アプリ起動後の初期化処理](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization "アプリ起動後の初期化処理") |
| src/framework/logging/ConsoleTransport.ts |  | ログ出力で使用する設定。 |
| src/framework/logging/index.ts | ○ | エントリポイント。 |
| src/framework/logging/Logger.ts |  | ログ出力で使用する設定。 |
| src/framework/logging/SimpleLogFormatter.ts |  | ログ出力で使用する設定。 |
| src/framework/logging/Transport.ts |  | ログ出力で使用する設定。 |
| src/framework/message/BundledMessageLoader.ts |  | アプリ内にバンドルされたメッセージのロードに使用。 |
| src/framework/message/index.ts |  | エントリポイント。 |
| src/framework/message/Message.ts |  | アプリ内で使用するメッセージで必要な設定。 |
| src/framework/utilities/composePressableStyles.ts |  | SantokuAppのpicker部品の中でstyleの制御に使用。 |
| src/framework/utilities/index.ts | ○ | エントリポイント。 |
| src/framework/utilities/useIsMounted.ts |  | コンポーネントがマウントされているかを確認するためのユーティリティ。 |
| src/framework/utilities/useVisibility.ts |  | 表示・非表示の状態管理を簡単に使うためのユーティリティ。 |
| src/framework/utilities/useWorkletCallback.ts |  | React Native Reanimatedの[Worklets](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/worklets)を使用する際に便利なユーティリティ。 |
| src/framework/validator/index.ts |  | エントリポイント。 |
| src/framework/validator/isValidForm.ts |  | 入力内容のバリデーションに必要。 |
| src/generated/BundledMessages.ts | ○ | アプリ内にバンドルするメッセージの一覧。 |
| src/AppWithInitialization.tsx | ○ | アプリ起動時に必要な設定。 |
| orval.config.ts | ○ | orvalの設定。 |
| .env.development | ○ | アプリで使用する環境設定値の設定。 |
| package.json ※ファイルの内容を一部コピー | ○ | `"orval": "npx orval --config ./orval.config.ts"`<br />`"orval": "^6.6.1",`<br />OpenAPI specificationからソースコードを自動生成するために必要。<br />`"react-native-config": "~1.4.0"`<br />AppConfig.tsで変数を定義するために必要。<br />`"formik": "~2.2.9"`<br />`"yup": "~0.32.11"`<br />メッセージのバリデーションに必要。<br />`"axios": "^0.27.0"`<br />API呼び出し時に必要。 |
