---
title: ローカル環境でアプリをインストールする
sidebar_label: ローカル環境
---

開発中にデバイスで動作確認したいときのアプリのインストール方法を紹介します。

### iOS

iOSでプッシュ通知などのAppの高度な機能を使用するアプリの場合は、ADP・ADEPライセンスの証明書、プロビジョニングプロファイル、デバイスが必要です。USB経由でデバイスにインストールするのが最も簡単ですが、デバイスをADPライセンスで登録する必要があります。ADPに登録できるiPhoneは契約毎に100台という厳しい制限があるのでできればUSB経由ではなくTestFlightまたはIn-Houseでの配布をおすすめします。

Appの高度な機能を含まない場合は、個人のApple IDに紐づく証明書、プロビジョニングプロファイル、デバイスを使用できます。
こちらもiOSのAppの高度な機能を含むアプリの場合と同様にTestFlightまたはIn-Houseでも配布できます。


- ADPの[TestFlight](/distribution/build/ios/adp_testflight)の内部テスターを利用する
- ADEPの[In-House](/distribution/build/ios/adep_in_house)で配布
- [個人のApple ID](/distribution/build/ios/personal_team)を使用する
- ADP・ADEPの[AdHoc](/distribution/build/ios/adp_local)でインストールする

### Android

AndroidはiOSのようにAppの高度な機能を考慮する必要はありません。 USB経由でデバイスにインストールするのが最も簡単ですが、USB接続は禁止されている場合はAPKファイル配布か内部テスト版をご利用ください。APKファイルの配布は自前で配布が必要ですが、内部テストであればGoogle Play Console経由で配布できるので簡単です。


- [内部テスト版で配布](distribution/build/android/google_play_test)
- [APKファイルを配布](distribution/build/android/apk_dist)
   - デバイスにUSB経由でインストール
