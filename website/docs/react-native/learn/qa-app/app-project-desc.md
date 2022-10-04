---
title: QAアプリプロジェクトの説明
sidebar_label: QAアプリプロジェクトの説明
hide_table_of_contents: true
---

## QAアプリプロジェクトの準備

### 開発環境の構築

[開発環境の構築](/react-native/learn/getting-started/setting-up-development-environment)が未実施の場合は、実施してください。

### プロジェクトの作成

[プロジェクトの作成](/react-native/learn/getting-started/create-project)を参照し、新たに初期プロジェクトを作成してください。

### ディレクトリ構成

ディレクトリ構成はサンプルアプリ（SantokuApp）と同様の構成とします。サンプルアプリ（SantokuApp）ではアプリの責務配置を定義しており、ディレクトリはそれに準じた構成となっています。

詳細は、[SantokuApp - アプリの責務配置](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp/README.md#アプリの責務配置)を参照してください。

### 使用ライブラリ

QAアプリの作成には、以下のライブラリを使用します。その他に使用したいライブラリがあれば、適宜追加してください。

| ライブラリ名 |
|--|
| @react-native-community/netinfo |
| axios |
| react-query |
| msw |
| @mswjs/data |
| react-native-url-polyfill |
| expo-random |
| yup |
| orval ※`devDependencies`に追加 |

ライブラリのインストールは、以下のコマンドを実行してください。

```bash
expo install <package-name>
```

`devDependencies`に追加する場合は、以下のコマンドを実行してください。

```bash
npm install -D <package-name>
```

iOSの開発をする場合は、macOSで以下のコマンドを実行する必要があります。

```bash
npx pod-install
```

:::info
ExpoはReactなど一部の依存パッケージについて、利用できるバージョンを管理しています。そういったライブラリについては、個別に自分たちで依存ライブラリのバージョンを管理する必要はありません。`expo install`でインストールすれば、適切なバージョンがインストールされます。

一方で、`npm install <package-name>`でインストールするだけでは正しいバージョンでインストールされない可能性があるということに注意してください。
:::

### アプリの実行方法

[アプリの実行](/react-native/learn/getting-started/launch-created-app)を参照してください。

### プロジェクトの設定

初期プロジェクトの作成をした直後は、最低限のファイルしかありません。
QAアプリの実装に必要な共通処理をサンプルアプリ（[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/SantokuApp)）からコピーします。

#### ログ出力

ログの出力先や、ログの出力レベルを設定する機能を追加します。

機能の詳細は、[アプリのログ出力](/react-native/santoku/application-architecture/logging-app/overview.mdx)を参照してください。

| コピーファイル |
|--|
| src/bases/logging/index.ts |
| src/bases/logging/Logger.ts |
| src/bases/logging/ConsoleTransport.ts |
| src/bases/logging/SimpleLogFormatter.ts |
| src/bases/logging/Transport.ts |
| src/bases/logging/sendErrorLog.ts |

#### メッセージ管理

アプリ全体の文言の統一性や多言語対応の拡張性などを鑑みて、アプリ内で使用するメッセージを集約的に管理する機能を追加します。

機能の詳細は、[メッセージ管理](../../santoku/application-architecture/message-configuration/overview.mdx)を参照してください。

| コピーファイル |
|--|
| src/bases/message/Message.ts |
| src/bases/message/BundledMessageLoader.ts |
| src/bases/message/BundledMessages.ts |

#### UIコンポーネント

共通処理内で使用しているUIコンポーネントも、QAアプリにコピーします。

| コピーファイル |
|--|
| src/bases/ui/snackbar/Snackbar.tsx |
| src/bases/ui/snackbar/SnackbarComponent.tsx |
| src/bases/ui/overlay/FullWindowOverlay.tsx |

#### HTTP API通信

OpenAPI仕様からクライアントコードを自動生成するOrvalの設定などを追加します。
[Orval](https://orval.dev/)は、React Query、SWRなど、いくつかのHTTP API通信ライブラリをサポートしており、選択したライブラリに合わせたクライアントコードを生成できます。

QAアプリでは、[axios](https://axios-http.com/)と[React Query](https://react-query-v3.tanstack.com/)を使用します。

| コピーファイル |
|--|
| src/features/backend/utils/customInstance.ts |
| src/features/backend/errors/RequestTimeoutError.ts |
| orval.config.ts |

併せて、[OpenAPI仕様（openapi.yaml）](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/api-document/openapi.yaml)もプロジェクト直下（orval.config.tsと同じ階層）にコピーしてください。

次に、以下のファイルを修正します。

- `src/features/backend/utils/customInstance.ts`
- `orval.config.ts`
- `.eslintrc.js`

```typescript title="src/features/backend/utils/customInstance.ts"
  import Axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
- import {AppConfig} from 'bases/core/configs/AppConfig';
  import {applicationName, nativeApplicationVersion} from 'expo-application';
  import {RequestTimeoutError} from 'features/backend/errors/RequestTimeoutError';
  import {Platform} from 'react-native';

  export type ErrorType<Error> = AxiosError<Error>;

- const REQUEST_TIMEOUT = AppConfig.requestTimeout;
+ const REQUEST_TIMEOUT = 60000;

- const backendUrl = `${AppConfig.santokuAppBackendUrl}/api`;
- const sandboxUrl = `${AppConfig.santokuAppBackendUrl}/api/sandbox`;
+ const backendUrl = 'http://localhost:9090/api';
  const BACKEND_AXIOS_INSTANCE = Axios.create({baseURL: backendUrl});
- const SANDBOX_AXIOS_INSTANCE = Axios.create({baseURL: sandboxUrl});
- const BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION = Axios.create({baseURL: backendUrl});

  /* ～省略～ */ 

- const sandboxCustomInstance = <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
-   return customInstance<T>(SANDBOX_AXIOS_INSTANCE)(config);
- };
- 
- const setCsrfTokenHeader = (csrfTokenHeaderName: string, csrfTokenValue: string) => {
-   BACKEND_AXIOS_INSTANCE.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
-   BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
- };
- 
- const setAxiosResponseInterceptor = (
-   onFulfilled: (
-     value: AxiosResponse<any, any>,
-   ) => (AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>) | undefined,
-   onRejected: (error: any) => any | undefined,
- ) => {
-   BACKEND_AXIOS_INSTANCE.interceptors.response.use(onFulfilled, onRejected);
- };
- 
- export {
-   backendCustomInstance,
-   sandboxCustomInstance,
-   setCsrfTokenHeader,
-   setAxiosResponseInterceptor,
-   BACKEND_AXIOS_INSTANCE,
-   BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
- };
+ export {backendCustomInstance};
```

```typescript title="orval.config.ts"
    backend: {
      /* ～省略～ */ 
      input: {
-       target: '../api-document/openapi.yaml',
+       target: './openapi.yaml',
      },
    },
-   sandbox: {
-     /* ～省略～ */ 
-   },
```

```javascript title=".eslintrc.js"
    ],
+   ignorePatterns: ['src/features/backend/apis/**/*.ts'],
  };
```

次に、`package.json`に`orval`でクライアントコードを生成するためのスクリプトを追加します。

```json title="package.json"
  "scripts": {
    /* ～省略～ */
-   "postinstall:patch-package": "patch-package"
+   "postinstall:patch-package": "patch-package",
+   "orval": "npx orval --config ./orval.config.ts"
  }
```

最後に、`npm run orval`を実行して、クライアントコードを生成してください。

#### React Queryの設定

HTTP API通信などの状態管理や、エラーのハンドリングとして[React Query](https://react-query-v3.tanstack.com/)を使用します。
React Queryのデフォルトオプションや、エラーハンドリングの設定処理を、サンプルアプリ（SantokuApp）からコピーします。

設定内容の詳細は、以下のドキュメントを参照してください。

- [React Queryを用いたHTTP API通信](../../santoku/application-architecture/http-api/overview.mdx)
- [HTTP API通信で発生するエラーのハンドリング](../../santoku/application-architecture/http-api/http-api-error-handling.mdx)

| コピーファイル |
|--|
| src/apps/app/contexts/ReactQueryProvider.tsx |
| src/apps/app/services/defaultCache.ts |
| src/apps/app/services/defaultGlobalErrorHandler.ts |
| src/apps/app/services/defaultGlobalQueryErrorHandler.tsx |
| src/apps/app/services/defaultGlobalMutationErrorHandler.tsx |
| src/apps/app/services/defaultOptions.ts |
| src/bases/core/errors/ApplicationError.ts |

次に、`src/apps/app/services/defaultGlobalErrorHandler.ts`を以下のように修正してください。

```json title="src/apps/app/services/defaultGlobalErrorHandler.ts"
  /* ～省略～ */
  import {Snackbar} from 'bases/ui/snackbar/Snackbar';
- import {clientLogout} from 'features/account/services/auth/clientLogout';
  import {RequestTimeoutError} from 'features/backend/errors/RequestTimeoutError';

/* ～省略～ */

- const showRequireLoginDialog = (queryClient: QueryClient) => {
-   clientLogout(queryClient).finally(() => {
-     Alert.alert(m('fw.error.再ログインタイトル'), m('fw.error.再ログイン本文'));
-   });
- };
+ const showRequireLoginDialog = (queryClient: QueryClient) => {};

/* ～省略～ */

```

#### アプリ起動後の初期化処理

アプリ起動後に、アプリ内で使用するメッセージのロードや、入力画面のバリデーションで使用する[Yup](https://github.com/jquense/yup)の初期設定を実施します。

サンプルアプリ（SantokuApp）では、[アプリ起動後の初期化処理](../../santoku/application-architecture/life-cycle-management/initialization.mdx)に記載されている処理を実施しています。
QAアプリでは、メッセージのロード、Yupの初期設定のみを実施します。まずは、以下のファイルをコピーしてください。

| コピーファイル |
|--|
| src/apps/app/services/loadBundledMessagesAsync.ts |

次に、`src/navigation/RootStackNav.tsx`を`src/apps/app/navigators/RootStackNav.tsx`に移動してください。

次に、以下のファイルを追加してください。

| 追加ファイル |
|--|
| src/bases/validator/index.ts |
| src/apps/app/AppWithInitialization.tsx |
| src/apps/app/use-cases/useAppInitializer.ts |

```typescript title="src/bases/validator/index.ts"
import {m} from 'bases/message/Message';
import * as Yup from 'yup';

export const enhanceValidator = () => {
  Yup.setLocale({
    mixed: {
      required: m('validation.mixed.required'),
    },
  });
};

export const yup = Yup;

```

```typescript title="src/apps/app/use-cases/useAppInitializer.ts"
import {enhanceValidator} from "bases/validator";
import {activateKeepAwake} from "expo-keep-awake";
import {useCallback, useMemo, useState} from "react";

import { loadBundledMessagesAsync } from "../services/loadBundledMessagesAsync";

type Initializing = {
  code: 'Initializing';
};
type InitializeSuccessResult = {
  code: 'Success';
};
type InitializeFailedResult = {
  code: 'Failed';
  title: string;
  message: string;
};

type InitializationResult = Initializing | InitializeSuccessResult | InitializeFailedResult;

const initializeCoreFeatures = async () => {
  // 開発中は画面がスリープしないように設定
  if (__DEV__) {
    await activateKeepAwake();
  }

  // アプリ内で使用するメッセージのロード
  await loadBundledMessagesAsync();
  // メッセージのロード後にYupの設定をする必要がある
  enhanceValidator();
};

export const useAppInitialize = () => {
  const [initializationResult, setInitializationResult] = useState<InitializationResult>({code: 'Initializing'});

  const initialize = useCallback(async () => {
    await initializeCoreFeatures();
    setInitializationResult({code: 'Success'});
  }, []);

  return useMemo(
    () => ({
      initialize,
      initializationResult,
    }),
    [initializationResult, initialize],
  );
};

```

```typescript jsx title="src/apps/app/AppWithInitialization.tsx"
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {ReactQueryProvider} from './contexts/ReactQueryProvider';
import {useAppInitialize} from './use-cases/useAppInitializer';

export const AppWithInitialization: React.FC = () => {
  const {initialize, initializationResult} = useAppInitialize();
  const [initializationError, setInitializationError] = useState<unknown>();

  useEffect(() => {
    // 初期化処理が1回だけ実行されるようにする。
    if (initializationResult.code === 'Initializing') {
      initialize().catch(e => setInitializationError(e));
    }
  }, [initialize, initializationResult]);

  useEffect(() => {
    // 初期化処理に失敗した場合はアプリをクラッシュ扱いで終了
    if (initializationError) {
      throw initializationError;
    }
  }, [initializationError]);

  if (initializationResult.code === 'Initializing') {
    return null;
  } else if (initializationResult.code === 'Failed') {
    Alert.alert(initializationResult.title, initializationResult.message);
    return null;
  } else {
    // RootStackNav、WithFirebaseMessagingHandlersをimportしてしまうと、アプリの初期化処理が完了する前に各画面でimportしているモジュールも読み込まれてしまうため、
    // アプリの初期化処理が完了した時点でrequireする。
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const RootStackNav = require('./navigators/RootStackNav').RootStackNav as React.FC;
    return (
      <NavigationContainer>
        <ReactQueryProvider>
          <RootStackNav />
        </ReactQueryProvider>
      </NavigationContainer>
    );
  }
};
```

最後に、`src/App.tsx`を`src/apps/app/App.tsx`に移動して、以下の内容に差し替えてください。

```typescript jsx title="src/apps/app/App.tsx"
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {AppWithInitialization} from './AppWithInitialization';

export const App = () => {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <AppWithInitialization />
      <Snackbar.Component />
    </GestureHandlerRootView>
  );
};
```

#### MSWの設定

[MSW](https://mswjs.io/)は、HTTP API通信をインターセプトしてモックデータを返却するライブラリです。QAアプリの開発では、実際に動作するバックエンドがありません。そのため、MSWを使用してモックデータを返却するように設定します。

サンプルアプリ（SantokuApp）には、QAアプリのOpenAPI仕様に準じたモックデータが既に用意されています。

まず、以下のディレクトリ、ファイルをコピーしてください。

| コピーディレクトリ・ファイル |
|--|
| src/fixtures |
| src/@types/image.d.ts |

次に、以下のファイルを追加してください。

| 追加ファイル |
|--|
| src/apps/app/AppWithMsw.tsx |
| src/fixtures/msw/datas/loggedInAccountData.ts |

```typescript jsx title="src/apps/app/AppWithMsw.tsx"
import {initialMsw} from 'fixtures/msw';
import React, {useEffect, useState} from 'react';
import 'react-native-url-polyfill/auto';

import {App} from './App';

export const AppWithMsw = () => {
  const [isInitializedMsw, setIsInitializedMsw] = useState(false);

  useEffect(() => {
    initialMsw()
    .then(() => setIsInitializedMsw(true))
    .catch(console.error);
  }, []);

  if (!isInitializedMsw) {
    return null;
  }

  return <App />;
};
```

```typescript title="src/fixtures/msw/datas/loggedInAccountData.ts"
import {db} from "../db";

export const loggedInAccountData = () => {
  db.loggedInAccount.create({accountId: 'santoku'});
}
```

次に、以下のファイルを修正します。

- `src/fixtures/msw/utils/backendUrl.ts`
- `src/fixtures/msw/datas/termsData.ts`
- `src/fixtures/msw/datas/index.ts`

```typescript title="src/fixtures/msw/utils/backendUrl.ts"
- import {AppConfig} from 'bases/core/configs/AppConfig';
-
- export const backendUrl = `${AppConfig.santokuAppBackendUrl}/api`;
+ export const backendUrl = 'http://localhost:9090/api';
```

```typescript title="src/fixtures/msw/datas/termsData.ts"
- import {AppConfig} from 'bases/core/configs/AppConfig';
- 
  import {db} from '../db';

  export const termsData = () => {
-   db.terms.create({id: '1', url: AppConfig.termsUrl, version: '0.1.0'});
+   db.terms.create({id: '1', url: 'http://localhost:9090/terms', version: '0.1.0'});
  };
```

```typescript title="src/fixtures/msw/datas/index.ts"
  /* ～省略～ */
  import {eventLikeMaxData} from './eventLikeMaxData';
  import {eventMaxData} from './eventMaxData';
+ import {loggedInAccountData} from './loggedInAccountData';
  import {notificationData} from './notificationData';
  import {notificationMaxData} from './notificationMaxData';
  /* ～省略～ */

  export const initialData = async () => {
+   loggedInAccountData();
    accountData();
    accountMaxData();
    accountMinData();
  /* ～省略～ */  
```

最後に、`index.js`を以下のように修正してください。

```javascript title="index.js"
/* ～省略～ */

- import {App} from './src/apps/app/App';
+ import {AppWithMsw} from './src/apps/app/AppWithMsw';

/* ～省略～ */

- registerRootComponent(App);
+ registerRootComponent(AppWithMsw);
```