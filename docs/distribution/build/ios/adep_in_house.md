---
title: ADEPライセンスのIn-Houseで配布
sidebar_label: In-House(ADEP)
---

ADEPライセンスはライセンス契約している社内に閉じた配布とする必要があります。

## 制限事項
ADEPのIn-Houseには以下のような制限事項があります。

### 自前のHTTPSサーバーが必要
自作するか、クラウドサービスなどのHTTPSサーバーを用意し、そこにIPAファイルをホストして配布する必要があります。



### 配布範囲は社内のみ
[Apple Developer Enterprise Program - Apple Developer](https://developer.apple.com/jp/programs/enterprise/)には「社内用Appのダウンロードを従業員にのみ限定するためのシステム、およびメンバーシップの資格情報やアセットを保護するためのシステムを構築していること。」と記載があるように、用意したHTTPSサーバーに認証などを設けて、社内の人のみがアクセスできるように制限する必要があります。


手順概要

1. リソース作成、アプリへの紐付け
2. Xcodeでのリリースビルドしてipaファイルを生成
3. マニフェストファイルなどをHTTPSサーバーに配置
4. デバイスにアプリをインストール


※​​​​​​​参考: [Xcode Help: Develop and distribute an enterprise app](https://help.apple.com/xcode/mac/current/#/devba5e7054d)

1. リソース作成、アプリへの紐付け


 - 配布用証明書(iOS Distribution)の秘密鍵(p12ファイル)の提供をライセンス管理者に依頼
 - 秘密鍵をアプリをビルドする端末に登録
 - App Developer Webサイトにてプロビジョニングプロファイルの作成(自分のアプリのAppIDと配布用証明書を紐付ける)
 - Xcodeにてアプリを開き、上記で作成したプロビジョニングプロファイルを紐づける

2. Xcodeでのリリースビルドしてipaファイルを生成する

 - ここの手順 ADPと同じはずなんやが...
 - アーカイブが終わったら以下のような画面が表示されるので、右上の Distribute App を選択
 - 配布方法はEnterpriseを選択
 - Include manifest for over-the-air installation にチェックを入れる
 -  over-the-airで配布する場合、アプリのipaファイル、小さいロゴ、大きいロゴのアドレスを指定
   - URLのプロトコルはhttpsですhttpは使えません
     - ここで指定する値は、manifest.plist.生成時のインプットです。仮の情報を入力して、あとからmanifest.plistを編集することもできます
 -  証明書とプロビジョニングプロファイルを選択
 - Exportを選択しIPAファイルを取得

3. マニフェストファイルなどをHTTPSサーバーに配置

取得したファイル郡をHTTPSサーバー配下にホストします。
公開時は必ずベーシック認証などをかけて、ADEPでのアプリの配信を許可された人（社員、業務委託先社員）だけがアクセスできるように管理してください。



サーバーには以下のようなHTMLファイル（ファイル名はindex.html）を作成してホストしてください。

url= 以降の値はマニフェストファイルの公開URLを指定してください。

```html
<a href="itms-services://?action=download-manifest&url=https://your-bucket-url/manifest.plist">ダウンロード</a>
```

4. デバイスにアプリをインストール


- デバイスのブラウザから、前手順で立てたサーバーにアクセスしindex.htmlを表示
- マニフェストファイルへのリンクをタップ
- ポップアップが出てくるのでInstallを選択
- 上記アクションでインストールが完了しますが、アプリ初回起動の場合、ポップアップがでて起動できません
- 起動できるようにするために、エンタープライズデベロッパを信頼する必要があります。設定 > 一般 > プロファイルとデバイス管理 で、該当するエンタープライズデベロッパを選択
- XXXを信頼 の青い文字を選択
- ポップアップで信頼を選択
- 再度、ホーム画面でアプリをタップするとアプリを起動できます
