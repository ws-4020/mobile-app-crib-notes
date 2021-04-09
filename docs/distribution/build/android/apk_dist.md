---
title: APKファイルでAndroidアプリを配布
sidebar_label: APKファイルを配布
---

手順概要

1. アプリをビルドしてAPKファイルを作成
2. APKファイルをデバイスにダウンロード
3. デバイスでダウンロードしたAPKファイルをインストール

### 1. アプリをビルドしてAPKファイルを作成

[React Native公式サイト](https://reactnative.dev/docs/signed-apk-android)を参考にAPKファイルを作成してください。
⚠️ ただしAPKファイルを作成するコマンドは `./gradlew bundleRelease` ではなく `.gradlew assembleRelease` を使ってください ⚠️

### 2. APKファイルをデバイスにダウンロード


主に以下3通りがあります。

- クラウドストレージ（Azure Storage、S3、Google Driveなど）からデバイスにAPKファイルをダウンロードする
- USBでデバイスを端末に接続してAPKファイルをダウンロードする
- USBでデバイスを端末に接続してadbコマンドでインストールする


## クラウドストレージ（Azure Storage、S3、Google Driveなど）を使ってデバイスにAPKファイルをダウンロードする
特に手順は示しませんが、なんでも良いのでクラウドストレージを使ってAPKファイルをダウンロードしてください


### Azureの場合
Azure Blog Storageが使えます。

リソースに対してベーシック認証をかける機能はありませんが、
Shared Access Signatureという機能を使って期間限定で、そのURLを知っている人に限定してリソースをダウンロードできる機能があります。
詳細はMicrosoft Docs: Azure Storage: [Shared Access Signatures (SAS) でデータの制限付きアクセスを付与する](https://docs.microsoft.com/ja-jp/azure/storage/common/storage-sas-overview)を参照してください


1. Azure Blog Storageにて、対象のリソースで右クリック > Shared Access Signatureの取得 を選択
1. 公開時間、アクセス権限などを設定
1. URLが発行されるので、テスターにURLを通知しAndroidデバイスでAPKファイルをダウンロードしてもらう

### USBでデバイスを端末に接続してAPKファイルをダウンロードする  


Androidのヘルプ: [パソコンと Android デバイス間でファイルを転送する](https://support.google.com/android/answer/9064445?hl=ja)を参考にしてください。

ただしUSBでデバイスを接続する時に「ファイル転送モード」にする必要があります。以下に手順を示します。


#### デバイス接続時に「ファイル転送モード」を選択する方法

1. Android システム ・ このシステムを USBで充電中 をタップ
1. その他のオプションを表示します をタップ
1. USBの使用 > ファイル転送/Android Auto を選択


### USBでデバイスを端末に接続してadbコマンドでインストールする


Androidデベロッパー公式サイト: [Android Debug Bridge（adb） > アプリをインストールする](https://developer.android.com/studio/command-line/adb?hl=ja#move)を参考にしてください。

APKファイルの場所に移動してadb installすればインストールできます。


3. デバイスでダウンロードしたAPKファイルをインストール
ダウンロードしたAPKファイルをファイルアプリなどで開くとインストールできます。


- ​​​​​​​デバイスのファイルアプリでダウンロードしたAPKファイルをタップすると、以下が表示されるので許可する
※不明なアプリのインストールについてはOSごとに手順が異なります。ここではAndroid11の場合の手順とスクリーンショットを示しています。
- インストールをタップ
- Playプロテクトにブロックされたらインストールするをタップ
- アプリがインストールできたら開くをタップ


