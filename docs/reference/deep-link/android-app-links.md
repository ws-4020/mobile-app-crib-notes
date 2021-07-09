---
title: Android App Links
---

[Android App Links](https://developer.android.com/training/app-links)はAndoirdで利用できるHTTP URLを使ったDeep Linkです。

## 設定

Android App Linksでアプリ利用するためにはドメインとアプリの双方が信頼できることを証明するため、次のようアプリケーションとWebサイトの設定ファイルを作成します。

アプリのマニフェストファイルでリンクを受け取るように設定します。（[アプリで実装する](#アプリで実装する)で詳細を記載しています）

対象のURL（アプリがなければブラウザでアクセスするサイト）のドメインに[`assetlinks.json`](https://developer.android.com/training/app-links/verify-site-associations?hl=ja#web-assoc)を配置します。

```console title="assetlink.json"
https://${ドメイン}/.well-known/assetlinks.json
```

:::note
Androidにはカスタムスキームを利用したDeep Linkも合わせて説明されています。[Deep Linkとの違い](https://developer.android.com/training/app-links/verify-site-associations#the-difference)を参照してください。
:::

## アプリで実装する

AndroidアプリでApp Linksを利用するには、まずマニュフェストファイルに[リンクを受け取るための設定](https://developer.android.com/training/app-links/deep-linking?hl=ja#adding-filters)をします。

マニュフェストファイルで設定した[data エレメント](https://developer.android.com/guide/topics/manifest/data-element)により受け取れるURL（Androidが選択するアプリ）が決定します。

アプリケーションでは[受け取ったデータ](https://developer.android.com/training/app-links/deep-linking#handling-intents)（[インテント](https://developer.android.com/guide/components/intents-filters)）をもとにアプリケーションで処理します。

:::note
データを受け取るアプリケーションのUX（[受信データ](https://developer.android.com/training/app-links/deep-linking?hl=ja#handling-intents)の下の方）については言及するか。
Webサイトもログインがある場合は、Webサイトと同じならいいのではないか。
> ディープリンクは、プロンプトや、インタースティシャル ページ、ログインなしで、ユーザーをコンテンツに直接誘導する必要があります。ユーザーがそのアプリを以前に開いたことがない場合でも、アプリ コンテンツを表示できるようにしてください。
:::

初期化処理に関してはReact Nativeでのサンプルにしたいな。

## URLを作成する

- ドメインをあわせる
- リンクを受け取る設定に合わせたLinkを作成する
- パラメータはクエリパラメータ（未検証）
