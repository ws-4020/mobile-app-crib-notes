---
title: Android App Links
---

対象はAndroid。

ドメインに紐付いたアプリを利用してアクセスする。
アプリがなければWebサイトにアクセスする。  
 → アプリのインストール促せない場合は、「アプリで見る」みたいなWebページを作ることになりそう。

:::note
[Intent](https://developer.android.com/guide/components/intents-filters)は説明っていうより別のDeepLinkの方式として書いたほうがいいのか。
IntentのデータにMIMEタイプを指定するとOSが適切アプリを絞り込めるらしいけどリンク作る方の話。
:::

Instant App（インストール不要なアプリ）への言及するか。基本的にはアプリへの誘導というよりデータの受け渡しの話をするのでいらないはず。

## アプリで実装する

TODO:実装する人がやること、アプリの管理者に依頼することとか。

- manifest

## URLを作成する

- ドメインをあわせる
