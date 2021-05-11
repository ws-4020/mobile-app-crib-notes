---
title: Flipper
---

モバイルアプリ開発に使いやすいツールとして、モバイルアプリのデバッグ用プラットフォームである[Flipper](https://fbflipper.com/)を紹介します。

レイアウトやネットワークなどの様々な情報をひとつのツールでデバッグできます。どのような機能があるかは[Features | Flipper](https://fbflipper.com/docs/features/index)を確認してください。

また、FlipperはReact Nativeを標準でサポートしているため、セットアップ後すぐにReact Nativeアプリのデバッグを開始できます。

:::note
Flipperはバージョン0.62以降のReact Nativeに対応していますが、Expoでは使用できないため注意してください。
:::

## インストール

[公式サイト](https://fbflipper.com/)からダウンロードし、zipファイルを解凍してください。
最新以外のバージョンは[Github](https://github.com/facebook/flipper/releases)からダウンロード可能です。

OpenSSLとWatchmanも合わせてインストールする必要があります。

インストール手順は[Desktop App | Flipper](https://fbflipper.com/docs/getting-started/index)を参照してください。
全てインストールしたあと、Flipperを起動してSetup Doctorがグリーンになっていることを確認してください。

## デバッグ

セットアップが完了したらReact NativeアプリとFlipperを起動してデバッグしてみましょう。
デバッグの際はアプリの開発者メニューからデバッグを有効化してください。

:::caution
Flipperはデフォルトで`8088`,`8089`ポートを使用するため、Metro Bundlerのポート番号を変更している場合被らないようにしてください。
また、Metro Bundlerのポート番号を変更している場合は、起動時にポート番号を指定する必要があります。
Flipperのインストールディレクトリで以下のコマンドを実行し、Flipperを起動してください。

```bash
METRO_SERVER_PORT=<Metro Bundlerのポート番号> ./flipper
```

:::
