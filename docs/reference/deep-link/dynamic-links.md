---
title: Dyanmic Links
---

[Dynamic Links](https://firebase.google.com/docs/dynamic-links)はFirebaseが提供しているAndroid iOSを対象にしたDeep Linkです。

Android App LinksやUniversal Linksではユーザーがアプリをインストールしていない場合、ユーザはWebサイトにアクセスします。

Dynamic Linksの[仕組み](https://firebase.google.com/docs/dynamic-links#how-does-it-work)を利用すると、アプリがまだインストールされていない場合は（指定した場合のみ）PlayストアやApp Storeに転送され、アプリのインストールが完了するとアプリが開きます。その後、アプリに渡されたリンクを取得し、アプリに適した方法でDeep Linkを処理できます。

アプリ用のドメインを持たず、page.linkのサブドメインでURLを作成できる。

:::note
ウェブ向けのリンク先コンテンツを用意していない場合は、このURLが有効なウェブリソースを指していなくてもかまいません。その場合は、このURLからサイトのトップページなどにリダイレクトするようにしてください。
:::

## アプリで実装する

URLにアプリをマッピングする設定をする。設定はAndroid App LinksとUniversal Linksを参照してもらえばいい。

受け取ったURLはFirebase SDKを利用して取得する。

- [iOS](https://firebase.google.com/docs/dynamic-links/ios/receive)
- [Android](https://firebase.google.com/docs/dynamic-links/android/receive)



## URLを作成する

[Linksの作成パターン](https://firebase.google.com/docs/dynamic-links/create-links)

TODO:実装する人がやること、アプリの管理者に依頼することとか。

