---
title: Universal Links
---

[Universal Links](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content)はiOSで利用できるHTTP URLを使ったDeep Linkです。

Universal Linksを利用する場合、ユーザがブラウザで開いているドメインとは異なるドメインのURLを利用しないとアプリケーションに渡せません。

ユーザがブラウザでWebサイトにアクセスしているのに、サイト内のリンクをアプリケーションに誘導するとユーザ体験を損なうためです。

## 設定

Universal Linksでアプリを利用するためにはドメインとアプリの双方が信頼できることを証明するため、次のように[ドメインを関連付け](https://developer.apple.com/documentation/Xcode/supporting-associated-domains)ます。

アプリの`Info.plist`でリンクを受け取るように設定します。（[アプリで実装する](#アプリで実装する)で詳細を記載しています）

[`apple-app-site-association`](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_associated-domains)ファイル（拡張なし）をドメインに配置します。

```console
https://${ドメイン}/apple-app-site-association
# もしくは
https://${ドメイン}/.well-known/apple-app-site-association
```

<!-- 
[iOS 14](https://www.wantedly.com/companies/wantedly/post_articles/305303)の問題があるらしい
-->

## アプリで実装する

Xcode上でTargetsを選択し、`Signing & Capabilities`を選択し、`+ Capabilities`で`Associated Domains`を追加します。

`applinks:`というプレフィックスをつけて、`apple-app-site-association`ファイルを配置したドメインを設定します。

## URLを作成する

- ドメインをあわせる
- リンクを受け取る設定に合わせたLinkを作成する
- パラメータはクエリパラメータ（未検証）
