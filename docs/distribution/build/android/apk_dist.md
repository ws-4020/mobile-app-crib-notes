---
title: APKファイルでAndroidアプリを配布
sidebar_label: APKファイルを配布
---

ビルドしたAndroidアプリを（ここではAzureを例にして）クラウドストレージからダウンロードしてインストールする方法を紹介します。

## アプリのビルド

Androidアプリをビルドするには[React Native公式サイト](https://reactnative.dev/docs/signed-apk-android)を参考にAPKファイルを作成してください。

:::caution
APKファイルを作成するコマンドは `./gradlew bundleRelease` ではなく `.gradlew assembleRelease` を実行してください。 
:::


## ビルドアプリのダウンロード

Azure Blog Storageを利用します。

リソースに対してベーシック認証をかける機能はありませんが、
Shared Access Signatureという機能を使って期間限定で、そのURLを知っている人に限定してリソースをダウンロードできる機能があります。
詳細はMicrosoft Docs: Azure Storage: [Shared Access Signatures (SAS) でデータの制限付きアクセスを付与する](https://docs.microsoft.com/ja-jp/azure/storage/common/storage-sas-overview)を参照してください。


1. Azure Blog Storageにて、対象のリソースで右クリック > Shared Access Signatureの取得を選択
1. 公開時間、アクセス権限などを設定
1. URLが発行されるので、テスターにURLを通知しAndroidデバイスでAPKファイルをダウンロードしてもらう



3. デバイスでダウンロードしたAPKファイルをインストール
ダウンロードしたAPKファイルをファイルアプリなどで開くとインストールできます。


- デバイスのファイルアプリでダウンロードしたAPKファイルをタップすると、以下が表示されるので許可する
※不明なアプリのインストールについてはOSごとに手順が異なります。ここではAndroid11の場合の手順とスクリーンショットを示しています。
- インストールをタップ
- Playプロテクトにブロックされたらインストールするをタップ
- アプリがインストールできたら開くをタップ


