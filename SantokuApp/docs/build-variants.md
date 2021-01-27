# React Nativeのビルド設定

## 基本的な考え方

Androidの[ビルドバリアント](https://developer.android.com/studio/build/build-variants)（ビルドタイプとプロダクトフレーバー）の考え方を参考にして、React Nativeアプリケーションのビルド設定をしています。

- **ビルドタイプ**: ビルドタイプでは、アプリケーションのビルド方法を指定します。ビルドタイプでは主に次の点を変更します。
  - React Nativeアプリケーションの定数 `__DEV__`
  - アプリケーションID (Android)、Bundle Identifier (iOS) のサフィックス
    - ビルドバリアントごとに異なるアプリとしてデバイスにインストールできるようにアプリケーションIDを分けています
  - アプリケーションの署名設定
    - アプリケーションIDと密接に関連するため、ビルドバリアントごとに分けています
  - アプリケーションアイコン
    - アイコンでビルドタイプを判別できるように、アイコンを分けています
  - ホットリロードなどの開発機能やFlipperの有効/無効
  - [App Transport Security](https://developer.apple.com/documentation/bundleresources/information_property_list/nsapptransportsecurity) の有効/無効（iOSのみ）
  - 難読化 (Proguard) の有効/無効（Androidのみ）
- **プロダクトフレーバー**: プロダクトフレーバーでは、アプリケーションの種類を指定します。[Android のドキュメント](https://developer.android.com/studio/build/build-variants)では「有料版」「無料版」といった例が挙げられていますが、「本番環境向け」「ステージング環境向け」といったような環境の指定にも利用できます。プロダクトフレーバーでは主に次の点を変更します。
  - アプリケーションID (Android)、Bundle Identifier (iOS) のサフィックス
    - ビルドバリアントごとに異なるアプリとしてデバイスにインストールできるようにアプリケーションIDを分けています
  - アプリ名
    - アプリ名でプロダクトフレーバーを判別できるように、アプリ名を分けています
  - 接続先のホスト名など、アプリケーションの実行環境に関する設定

なお、アプリケーションIDは次のルールで設定しています。

- `jp.fintan.mobile.SantokuApp<flavorSuffix><typeSuffix>`

`<flavorSuffix>`はプロダクトフレーバーごとに、`<typeSuffix>`はビルドタイプごとに設定するサフィックスです。

## 用意しているビルドバリアント

ビルドタイプとしては、次の4つを用意しています。

- `Debug`
  - USB接続でデバイスにインストールして動作検証したい場合に利用します
- `DebugAdvanced`
  - USB接続でデバイスにインストールして、iOSのAppの高度な機能を含む動作を検証したい場合に利用します
  - 事前にインストール先デバイスのUDIDをライセンスに登録する必要があります
  - ライセンス全体で100台までしかインストール先のデバイスを登録できません
- `ReleaseInHouse`
  - DeployGateで配布するためのアプリをビルドする場合に利用します
  - ビルドには、ADEPの配布用証明書の秘密鍵とAndroidの署名に利用するキーストアが必要です
- `Release`
  - ストアで配布するためのアプリをビルドする場合に利用します
  - ビルドには、ADPの配布用証明書の秘密鍵とGoogle Playのアップロード鍵が必要です

プロダクトフレーバーには、次の2つを用意しています。

- `Development`
  - 開発用に、APIなどの接続先をローカルホストとしているフレーバーです
- `Production`
  - 実際のサーバにアクセスする設定をしているフレーバーです

## 設定の管理方法

ビルドタイプはGradle (`build.gradle`) とXcode (`project.pbxproj`) のそれぞれの設定ファイルで定義します。

プロダクトフレーバーは、 [`react-native-config`](https://github.com/luggit/react-native-config) を利用して切り替えます。`Development`向け設定は[`.env.development`](../.env.development)に、`Production`向け設定は[`.env.production`](../.env.production)にそれぞれ設定します。設定値についてはそれぞれのファイルを参照してください。

## 実行時の切替方法

- iOS
  - `npm run ios -- --scheme "<Flavor>" --configuration "<Type>"`
  - ex.) `npm run ios -- --scheme "Development" --configuration "Debug"`
  - ex.) `npm run ios -- --scheme "Development" --configuration "Release"`
- Android
  - `npm run android -- --variants "<flavor><Type>" --appIdSuffix "<flavorSuffix><typeSuffix>"`
  - ex.) `npm run android -- --variant "developmentDebug" --appIdSuffix "dev.debug"`
  - ex.) `npm run android -- --variant "developmentRelease" --appIdSuffix "dev"`

> **Note**: `npm run android`/`npm run ios` のみで実行した場合は、ビルドタイプ `Debug` 、プロダクトフレーバー `Development` でビルドされて実行されます。

## ビルドタイプの設定

| 設定項目                                           | `Debug`                                        | `DebugAdvanced`                                        | `ReleaseInHouse` | `Release`                                                            |
| -------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------- | ---------------------- |
| :robot: :apple: `__DEV__`                          | `true`                                         | `true`                                         | `false`                                                              | `false` |
| :robot: :apple: アプリケーションIDのサフィックス | `.debug`                                       | `.debugAdvanced`                                                       | `house` | なし（空文字）                                                       |
| :robot: :apple: アプリケーションの署名設定         | :robot:デバッグ用の共有鍵<br>:apple:個人Apple IDでの自動署名 | :robot:デバッグ用の共有鍵<br>:apple:ADPの開発用プロビジョニングプロファイル | :robot:インハウス配布用の共有鍵<br>:apple:ADEPの開発用プロビジョニングプロファイル | :robot:ストア配布用のアップロード鍵<br>:apple:ADPの開発用プロビジョニングプロファイル |
| :robot: :apple: 開発用機能、Flipper                | 有効                                           | 有効                                           | 無効                                                                 | 無効 |
| :robot: Proguard                                   | 無効                                           | 無効                                           | 有効                                                                 | 有効 |
| :apple: App Transport Security                     | 有効（`localhost`を除外）                      | 有効（`localhost`を除外）                      | 有効（除外なし）                                                     | 有効（除外なし） |

`__DEV__` の値はReact Nativeが自動的に設定しますが、その他についてはGradle/Xcodeで設定しています。

### Gradleでのビルドタイプ設定

ビルドタイプごとのそれぞれの設定値の具体的な設定箇所は次のとおりです。

- アプリケーションIDのサフィックス： `buildTypes` の `applicationIdSuffix`
- アプリケーションの署名設定： `buildTypes` の `signingConfig`
- 開発用機能、Flipper: `dependencies`, `AndroidManifest.xml`
  - `android.permission.SYSTEM_ALERT_WINDOW` の権限を `src/debug/AndroidManifest.xml` で設定
  - `com.facebook.react.devsupport.DevSettingsActivity` を `src/debug/AndroidManifest.xml` で設定
  - Flipper関連のライブラリは `debugImplementation` として宣言
- Proguard: `buildTypes` の `minifyEnabled`, `proguardFiles`

署名設定については、次のように設定しています。

| ビルドタイプ | 署名設定 |
|-------------|---------|
| `Debug`, `DebugAdvanced` | デバッグ用の共有鍵 |
| `ReleaseInHouse` | DeployGate配布用の共有鍵 |
| `Release` | Google Play配布用のアップロード鍵 |

`ReleaseInHouse`および`Release`でのアプリケーションの署名にはリポジトリに含まれない鍵を利用するため、事前の環境設定が必要になります。
`~/.gradle/gradle.properties`で次のように利用する鍵の設定をしてください。

```properties
SANTOKU_APP_IN_HOUSE_KEYSTORE_FILE=<path/to/in-house.keystore>
SANTOKU_APP_IN_HOUSE_KEYSTORE_PASSWORD=*****
SANTOKU_APP_IN_HOUSE_KEY_ALIAS=*****
SANTOKU_APP_IN_HOUSE_KEY_PASSWORD=*****

SANTOKU_APP_UPLOAD_KEYSTORE_FILE=<path/to/upload.keystore>
SANTOKU_APP_UPLOAD_KEYSTORE_PASSWORD=*****
SANTOKU_APP_UPLOAD_KEY_ALIAS=*****
SANTOKU_APP_UPLOAD_KEY_PASSWORD=*****
```

- アップロード鍵やインハウス用共有鍵を含むキーストアファイルは、別途入手してください。
- `SANTOKU_APP_IN_HOUSE_KEYSTORE_FILE`, `SANTOKU_APP_UPLOAD_KEYSTORE_FILE` には入手したキーストアファイルのパスを設定します。 `android/app/build.gradle` ファイルからの相対パスもしくは絶対パスを設定してください。
- その他の設定値についても、別途入手してください。

### Xcodeでのビルドタイプ設定

ビルドタイプに対応するConfiguration (`Debug`, `DebugAdvanced`, `ReleaseInHouse`, `Release`) をビルドタイプとして利用します。

- アプリケーションIDのサフィックス： `project.pbxproj`の`PRODUCT_BUNDLE_IDENTIFIER`
- アプリケーションの署名設定： `project.pbxproj`の`DEVELOPMENT_TEAM`, `PROVISIONING_PROFILE_SPECIFIER` etc.
- 開発用機能、Flipper: ソースコード中で `#ifdef DEBUG` などを利用して有効/無効を切替
- App Transport Security: `project.pbxproj`の`INFOPLIST_FILE`

それぞれのビルドタイプでのプロビジョニングプロファイルの設定は次のようになっています。

| ビルドタイプ | プロビジョニングプロファイル |
|-------------|---------------------------|
| `Debug` | Personal provisioning profile using automatic signing |
| `DebugAdvanced` | ADP development provisioning profile  |
| `ReleaseInHouse` | ADEP development provisioning profile |
| `Release` | ADP development provisioning profile |

コード署名には、開発用プロビジョニングプロファイルを利用するように設定しています。配布用にIPAファイルを作成する場合は、App Store ConnectやDeployGateへアップロードする前に配布用プロビジョニングプロファイルで署名し直してください。

App Transport Security (ATS)の設定は`dict`形式なので、`react-native-config`で設定することが出来ません。そのため、次のように設定しています。

- ATSの設定以外は`Info.plist`と同じ内容として、`Debug.plist`を追加
- `Debug` Configurationと`DebugAdvanced` Configurationで「Info.plist File」の設定項目に`Debug.plist`を設定

## プロダクトフレーバーの設定

プロダクトフレーバーごとの設定値は、`.env.<flavor>`で管理します。

### Gradleでのプロダクトフレーバー設定

プロダクトフレーバーは`build.gradle`で定義していますが、`productFlavors`は利用していません。代わりに、[`react-native-config`のドキュメント](https://github.com/luggit/react-native-config#android-1) で説明されている通り、フレーバーに対応する設定ファイルを次のように設定しています。

```groovy
project.ext.envConfigFiles = [
    production: ".env.production",
    development: ".env.development",
]
```

#### アプリケーションIDの変更

`defaultConfig`の`applicationIdSuffix`を`project.env.get("APP_ID_FLAVOR_SUFFIX")`と設定しています。`.env.<flavor>`で設定した`APP_ID_FLAVOR_SUFFIX`の値がBundle Identifierに反映されます。

#### Androidアプリ名の変更

アプリ一覧画面などでアイコンの下に表示される名前は`AndroidManifest.xml`で設定しています。`.env.<flavor>`の`APP_NAME_HOME`の値で、この名前を設定できます。

### Xcodeでのプロダクトフレーバー設定

[`react-native-config`のドキュメント](https://github.com/luggit/react-native-config#ios-1) で説明されている通り、プロダクトフレーバーはXcodeのSchemeとして用意しています。Schemeでは、ビルドの前処理としてフレーバーに対応する設定ファイル（`.env.<flavor>`）を`.env`としてコピーする処理を追加しています。

#### Bundle Identifierの変更

`project.pbxproj`の`PRODUCT_BUNDLE_IDENTIFIER`の設定値に`${APP_ID_FLAVOR_SUFFIX}`を含めています。`.env.<flavor>`で設定した`APP_ID_FLAVOR_SUFFIX`の値がBundle Identifierに反映されます。

#### iOSアプリ名の変更

ホーム画面で表示されるアプリケーション名は、`Info.plist`で`CFBundleDisplayName`の値を`${APP_NAME_HOME}`として設定しています。`.env.<flavor>`で設定した`APP_NAME_HOME`の値がホーム画面のアプリケーション名になります。
