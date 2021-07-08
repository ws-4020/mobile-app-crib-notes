---
title: Android App Links
---

[Android App Links](https://developer.android.com/training/app-links)はAndoirdで利用できるHTTP URLを使ったDeep Linkです。

:::note
Androidにはカスタムスキームを利用したDeepLinkも合わせて説明されています。[Deep Linkとの違い](https://developer.android.com/training/app-links/verify-site-associations#the-difference)を参照してください。
:::

## アプリで実装する

AndroidアプリでApp Linksを利用するには、まずマニュフェストファイルに[リンクを受け取るための設定](https://developer.android.com/training/app-links/deep-linking?hl=ja#adding-filters)をします。

マニュフェストファイルで設定した[data エレメント](https://developer.android.com/guide/topics/manifest/data-element)により受け取れるURL（Androidが選択するアプリ）が決定します。

アプリケーションでは受け取ったデータ（[インテント](https://developer.android.com/guide/components/intents-filters)）をもとにアプリケーションで処理します。

## URLを作成する

- ドメインをあわせる
- リンクを受け取る設定に合わせたLinkを作成する
- パラメータはクエリパラメータ（未検証）
