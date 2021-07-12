---
title: 機能比較
---

機能の比較です。

## 比較表

|方式|アプリ未インストール時|対象OS|
|:--|:------------------|:----|
|Universal Links| Webサイトへ| iOS |
|Android App Links| Webサイトへ（※1）| Android |
|Dynamic Links| インストール要求 | iOS、Android |

※1:インスタントアプリの場合、Webサイトではなくアプリケーションを使える。

## Universal Links

- 対象OS：iOS
- ブラウザでWebサイトを閲覧しているとき、ドメインが同一の場合はアプリに移動しない（Androidが未検証なのでUniversal Linksの特徴なのかわからんな）
  - ブラウザでタップしたリンクからアプリを起動させたい場合は、サブドメインなどを利用してドメインを分ける必要がある。

## Android App Links

- 対象OS：Android
- Instant Appであれば、インストール不要でアプリを利用させられる

## Dynamic Links

- 対象OS：iOS、Android
- Firebase SDKを利用して2つのOSをサポートしている
  - アプリとサーバの設定はUniversal Links、Android App Linksと同じ
- アプリがインストールされていない場合、インストールを促し、インストール後にURLをアプリに渡せる
