---
title: ライセンスについて
---



## Android

アプリ配布 - Android - リリースに必要な秘密鍵の管理について（Google Play App Signing について）

Androidのアプリをリリースするには署名が必要で、それにはリリース用秘密鍵が必要です。
この鍵は開発者が管理する必要があり、紛失してしまうとアプリの更新ができなくなります。

Google Play App Signingはこの鍵の管理を代行してくれるサービスです。
リリース用秘密鍵をPlay Consoleに預けて、そのかわりに開発者はアップロード用秘密鍵を管理します。
アップロード用秘密鍵はPlay ConsoleにAPKファイルをアップロードするための署名に必要な鍵です。
アップロード用秘密鍵の場合、紛失してもGoogleに連絡すれば再登録できます。


 - 参考
  - Google Play アプリ署名を使用する - Play Console ヘルプ
  - Google Play App Signingで安全なAndroidの鍵管理 | Developers.IO



  ## iOS


  ### Provisionig Profileの作成

  - [Apple Developer Webサイト](https://developer.apple.com/account/)にログインし、`Profiles`を開いて`Profiles ⊕`クリック
  - 配布用途にあわせて、選択してください。
      - 一般公開とTestFlightでの配布を行う場合、**App Store**（ADPのみ選択可能です）
      - In-Houseでの配布を行う場合、**In House**（ADEPのみ選択可能です）
  - 選択後、`Continue`をクリック
  - 事前に登録したApp IDを選択し`Continue`をクリック
  - 証明書を選択し`Continue`をクリック
  - プロビジョニングプロファイル名を入力して`Generate`をクリック
  - 作成したプロビジョニングプロファイルをMac端末にダウンロード
