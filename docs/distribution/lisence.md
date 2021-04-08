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