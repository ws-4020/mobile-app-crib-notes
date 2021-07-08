---
title: アプリ間のデータ連携の基本
---

## 概要

データを受け取るアプリケーション。

 - URIで指定（HTTP URLやCustom Scheme）
 - アプリケーションの設定時にURIと対応させる
 - HTTP URLの場合、ドメインとアプリケーションのIDを結びつける。


User -> HTTP URL -> Android or iOS -> navigate to Contents on Web-Site or Installed-App.

を簡単に図にする。

:::note
Firebase Dynamic LinksはInstalledじゃないユースケースが実現できる。
:::

