---
title: Universal Links
---

[Universal Links](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content)はiOSで利用できるHTTP URLを使ったDeep Linkです。

Universal Linksを利用する場合、ユーザがブラウザで開いているドメインとは異なるドメインのURLを利用しないとアプリケーションに渡せません。

ユーザがブラウザでWebサイトにアクセスしているのに、サイト内のリンクをアプリケーションに誘導するとユーザ体験を損なうためです。

## 設定

Universal Linksでアプリを利用するためにはドメインとアプリの双方が信頼できることを証明するため、次のように[ドメインを関連付け](https://developer.apple.com/documentation/Xcode/supporting-associated-domains)ます。

アプリの`Info.plist`でリンクを受け取るように設定します。（[アプリで実装する](#アプリで実装する)で詳細を記載しています）

`apple-app-site-association`ファイル（拡張なし）をドメインに配置します。

```
https://${ドメイン}/apple-app-site-association
# もしくは
https://${ドメイン}/.well-known/apple-app-site-association
```

## アプリで実装する

TODO:実装する人がやること、アプリの管理者に依頼することとか。

## URLを作成する
