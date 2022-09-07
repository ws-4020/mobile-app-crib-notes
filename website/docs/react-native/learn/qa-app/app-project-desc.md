---
title: QAアプリプロジェクトの説明
sidebar_label: QAアプリプロジェクトの説明
hide_table_of_contents: true
---

## QAアプリプロジェクトの準備

### 開発環境の構築

[開発環境の構築](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/getting-started/setting-up-development-environment)が未実施の場合は、実施してください。

### プロジェクトの作成

[プロジェクトの作成](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/getting-started/create-project)を参照し、新たに初期プロジェクトを作成してください。

### ディレクトリ構成

ディレクトリ構成はサンプルアプリ（SantokuApp）と同様の構成とします。サンプルアプリ（SantokuApp）ではアプリの責務配置を定義しており、ディレクトリはそれに準じた構成になっています。

詳細は、[SantokuApp - アプリの責務配置](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp/README.md#アプリの責務配置)を参照してください。

### 使用ライブラリ

QAアプリの作成には、以下のライブラリを使用します。その他に使用したいライブラリがあれば、適宜追加してください。

| ライブラリ名 | 説明 |
|--|--|
| @react-native-community/netinfo |  |
| react-query |  |
| Yup |  |
| axios |  |
| orval |  |
| react-native-config |  |
| MSW |  |
| MSW-data |  |

### アプリの実行方法

[アプリの実行](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app)を参照してください。

### プロジェクトの設定

初期プロジェクトの作成をした直後は、最低限のファイルしかない状態です。
QAアプリの実装に必要な共通処理をサンプルアプリ（SantokuApp）からコピーします。以下のファイルを作成したプロジェクトにコピーしてください。
一部のファイルについてはコピー後、不要な処理の削除やアプリ名の変更などの修正が必要です。以下の説明を参考に、ファイルの内容を把握しながら修正してください。

#### React Queryの設定

HTTP API通信などの状態管理や、エラーのハンドリングとしてReact Queryを使用します。
React Queryのデフォルトオプションや、エラーハンドリングの設定処理を、サンプルアプリ（SantokuApp）からコピーします。

設定内容の詳細は、以下のドキュメントを参照してください。

* [React Queryを用いたHTTP API通信](../../santoku/application-architecture/http-api/overview.mdx)
* [HTTP API通信で発生するエラーのハンドリング](../../santoku/application-architecture/http-api/http-api-error-handling.mdx)

| コピー元（[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp)） | 修正必要 |
|--|--|
| src/apps/app/contexts/ReactQueryProvider.tsx ||
| src/apps/app/services/defaultCache.ts ||
| src/apps/app/services/defaultGlobalErrorHandler.ts ||
| src/apps/app/services/defaultGlobalQueryErrorHandler.tsx ||
| src/apps/app/services/defaultGlobalMutationErrorHandler.tsx ||
| src/apps/app/services/defaultOptions.ts ||
| src/bases/core/error/ApplicationError.ts ||

TODO: Snackbar/RequestTimeoutError

#### アプリ起動後の初期化処理

アプリ起動後に、アプリ内で使用するメッセージのロードや、入力画面で使用するYupの初期設定を実施します。

サンプルアプリ（SantokuApp）では、[アプリ起動後の初期化処理](../../santoku/application-architecture/life-cycle-management/initialization.mdx)に記載されている処理を実施しています。
QAアプリでは、以下のファイルをコピー後、メッセージのロード、Yupの初期設定以外の処理は削除して使用してください。

| コピー元（[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp)） | 修正必要 |
|--|--|
| src/AppWithInitialization.tsx | ○ |
| src/apps/app/use-cases/useAppInitializer.ts | ○ |
| src/apps/app/services/loadBundledMessagesAsync.ts ||
| src/bases/validator/index.ts | ○ |

#### メッセージ管理

アプリ全体の文言の統一性や多言語対応の拡張性などを鑑みて、アプリ内で使用するメッセージを集約的に管理する機能を追加します。

詳細は、[メッセージ管理](../../santoku/application-architecture/message-configuration/overview.mdx)を参照してください。

| コピー元（[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp)） | 修正必要 |
|--|--|
| src/bases/message/Message.ts ||
| src/bases/message/BundledMessageLoader.ts ||
| src/bases/message/BundledMessages.ts ||

#### ログ出力

ログの出力先や、ログの出力レベルを設定する機能を追加します。

詳細は、[アプリのログ出力](../../santoku/application-architecture/logging-app/overview.mdx)を参照してください。

| コピー元（[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp)） | 修正必要 |
|--|--|
| src/bases/logging/index.ts ||
| src/bases/logging/Logger.ts ||
| src/bases/logging/ConsoleTransport.ts ||
| src/bases/logging/SimpleLogFormatter.ts ||
| src/bases/logging/Transport.ts ||
| src/bases/logging/sendErrorLog.ts ||

#### HTTP API通信

OpenAPI仕様からクライアントコードを自動生成するOrvalの設定などを追加します。
Orvalは、React Query、SWRなど、いくつかのHTTP API通信ライブラリをサポートしており、選択したライブラリに合わせたクライアントコードを生成できます。

QAアプリでは、axiosとReact Queryを使用します。

以下のファイルをコピー後、`npm run orval`を実行して、クライアントコードを生成してください。

| コピー元（[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp)） | 修正必要 | 補足 |
|--|--|--|
| src/features/backend/utils/customInstance.ts |||
| src/features/backend/error/RequestTimeoutError.ts |||
| orval.config.ts | ○ | ファイル内に記載されている`sandbox`は、QAアプリでは使用しないため削除してください。 |
| package.json ※ファイルの内容を一部コピー | ○ | scriptsの`orval`をコピーしてください。 |

#### 環境設定値の管理

`react-native-config`を使用して、環境設定値を管理します。[react-native-configのドキュメント](https://github.com/luggit/react-native-config)参考にして、初期設定を実施してください。

初期設定完了後、以下の手順を実施してください。

* サンプルアプリ（SantokuApp）から環境設定値の管理に関するファイルをコピー
* QAアプリで使用する環境設定値以外を削除（QAアプリで使用する環境設定値は、`SANTOKU_APP_BACKEND_URL`、`REQUEST_TIMEOUT`、`MSW_ENABLED`のみです。）
* `SANTOKU_APP_BACKEND_URL`を、`QA_APP_BACKEND_URL`に変更

| コピー元（[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp)） | 修正必要 | 補足 |
|--|--|--|
| src/bases/core/config/AppConfig.ts | ○ ||
| .env.development | ○ | .env.developmentは、.envにリネームしてください。 |

#### MSWの設定

[MSW](https://mswjs.io/)は、HTTP API通信をインターセプトしてモックデータを返却するライブラリです。QAアプリの開発では、実際に動作するバックエンドがありません。そのため、MSWを使用してモックデータを返却するように設定します。

サンプルアプリ（SantokuApp）には、QAアプリのOpenAPI仕様に準じたモックデータが既に用意されています。

まず、以下のディレクトリ、ファイルをコピーしてください。

| コピー元（[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp)） | 修正必要 |
|--|--|
| src/fixtures ||
| src/apps/app/AppWithMsw.ts ||

次に、`src/fixtures/msw/utils/backendUrl.ts`を以下のように修正します。

```typescript
- export const backendUrl = `${AppConfig.santokuAppBackendUrl}/api`;
+ export const backendUrl = `${AppConfig.qaAppBackendUrl}/api`;
```

最後に、

```typescript
+ import {AppWithMsw} from './src/apps/app/AppWithMsw';
+ import {AppConfig} from './src/bases/core/config/AppConfig';

/* ～省略～ */

+ const app = AppConfig.mswEnabled ? AppWithMsw : App;
- registerRootComponent(App);
+ registerRootComponent(app);
```
