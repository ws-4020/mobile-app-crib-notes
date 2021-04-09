---
title: よくあるユースケース
slug: /distribution/usecase
---

モバイルアプリケーション開発時によくあるユースケースについて、利用するライセンスや手順を紹介します。

- [開発中のアプリを開発者のデバイスで動作確認したい](usecase/local)
  - [iOSの場合](usecase/local#ios)
  - [Androidの場合](usecase/local#android)
- [（開発チームが開発用端末を操作して）お客様にデモを見せたい](usecase/demo)
- [社内や業務委託先でテストをしたい](usecase/develop_test)
- [お客様や関係者に実機でテストをしてもらいたい](usecase/client_test)
- [フィールドテストをしたい・ベータリリースしたい](usecase/field_test)

## 早見表

### iOS

|ユースケース/配布|[個人でUSB経由](build/ios/personal_team)|[AdHoc](build/ios/adp_local)|[In-House](build/ios/adep_in_houses)|[TestFlight(内部)](build/ios/adp_testflight)|[TestFlight(外部)](build/ios/adp_testflight)|
|:---------|-:-|-:-|-:-|:--|:--|
|開発中にデバイスで動作確認したい|YES|YES|YES|YES|X|
|デモを見せたい|YES|YES|YES|YES|X|
|社内や業務委託先でテストをしたい|X|YES|YES|YES|X|
|お客様に実機でテストをしてもらいたい|X|YES|X|YES|X|
|フィールドテストをしたい|X|X|X|X|YES|

### Android

|ユースケース/配布|[USB経由](build/ios/local)|[APKファイル配布](build/android/apk_dist)|[内部テスト](build/android/google_play_test)|[クローズテスト](build/android/google_play_test)|[オープンテスト](build/android/google_play_test)|
|:---------|-:-|-:-|-:-|-:-|-:-|
|開発中にデバイスで動作確認したい|YES|YES|YES|X|X|
|デモを見せたい|YES|YES|YES|X|X|
|社内や業務委託先でテストをしたい|X|YES|YES|YES|X|
|お客様に実機でテストをしてもらいたい|X|X|YES|YES|X|
|フィールドテストをしたい|X|X|X|X|YES|

