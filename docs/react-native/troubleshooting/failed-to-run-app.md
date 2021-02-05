---
title: アプリを実行できない
---

## JavaScriptがロードできないというエラーが発生する

アプリからMetro Bundlerにアクセスできないと、次の画像のようなエラーが発生します。

![Failed to load Script](failed-to-load-script.png)

Metro Bundlerはデフォルトでは`8081`ポートを利用して起動します。`http://localhost:8081`にアクセスして、`React Native packager is running`のように表示されることを確認してください。

`8081`ポートがすでに他のアプリケーションに利用されている場合は、環境変数`RCT_METRO_PORT`を指定することでMetro bundlerが利用するポートを変更できます。

> **Note**: ポートが既に利用されている場合でもエミュレータは正常に起動し、上記のエラー画面が表示されます。

## Androidで実行しようとすると`debug.keystore`が存在しないと言われる

`npm run android`を実行したときに、必要なキーストアファイルが存在していないと次のようなエラーが発生します。

```
* What went wrong:
Execution failed for task ':app:validateSigningDebug'.
> Keystore file '/private/tmp/ProjectFromTemplate/android/app/debug.keystore' not found for signing config 'debug'.
```

この場合、次のコマンドをReact Nativeプロジェクトのルートディレクトリで実行してください。`debug.keystore`が作成されます。

```bash
keytool -genkey -v -keystore android/app/debug.keystore -storepass android -alias androiddebugkey -keypass android -dname "CN=Android Debug,O=Android,C=US"
```

`debug.keystore`はデバッグ用途のキーストアなので、Gitリポジトリに含めて問題ありません。
