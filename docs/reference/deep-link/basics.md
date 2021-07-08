---
title: アプリ間のデータ連携の概要
---

URLで指定したコンテンツとしてWebサイトかアプリケーションにユーザを誘導します。

細かい点で違いはありますが、次のようにアプリにデータを連携します。

User -> URL -> Android or iOS -> navigate to Contents on Web-Site or Installed-App.

TODO: 簡単に図にする。

URLからアプリは導き出される。

:::note
Firebase Dynamic LinksはInstalledじゃないユースケースが実現できる。
:::

 - ユーザはURIで指定されたリンクをタップ（HTTP URLやCustom Scheme）
 - アプリケーションの設定時にURIと対応させる
 - HTTP URLの場合、ドメインとアプリケーションのIDを結びつける。

