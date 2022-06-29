---
title: QAアプリの実装（応用編）
sidebar_label: 応用編
hide_table_of_contents: true
---

## QAアプリの続き

## 表示部品のテストの追加


## スクロール時に質問のラベル行を画面の上端に固定表示
- 一覧画面で上スクロールしたときに、「質問」ラベル行が画面上部で固定され、上スクロールしても表示し続けられるようにしてください。

## アイコン押下時のアニメーション追加
- いいねのアイコンをタップした際に、アイコンが弾む（アイコンが拡大された後に元のサイズに戻る）アニメーションを追加してください。

## ジェスチャー操作追加
- 入力画面のイベントと質問のタブの切り替えを、左右のスワイプで切り替えられるようにしてください。
- 入力画面を下スワイプで閉じられるようにしてください。

## アプリ起動時の初期化処理の追加
以下を参考に、アプリ起動時の初期化処理を追加します。
（参考）
[アプリ起動後の初期化処理](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization)
[SantokuAppのuseAppInitializer.ts](https://github.com/ws-4020/mobile-app-crib-notes/blob/master/example-app/SantokuApp/src/framework/initialize/useAppInitializer.ts)

- iOS/Androidのホーム画面でQAアプリのアプリアイコンが表示されるようにしてください。
- アプリ起動時にスプラッシュ画面が表示されるようにしてください。スプラッシュ画面のデザインは問いません。
- アプリ起動時にバージョンチェックを行い、動作保証バージョンに満たない場合は強制バージョンアップを促すダイアログ表示とアプリストアを開くようにしてください。

## ビルドバリアントの追加
《Mac必要？》

## WebView表示
- 利用規約同意画面を追加し、外部サイトの利用規約をアプリ内でWebViewで開くようにしてください。
  - 有効な利用規約の取得APIを呼び出してください。

## ログイン/ログアウトの追加


## エラーハンドリングの追加
エラーハンドリングを追加します。[SantokuApp](https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp)から`src/framework/error`配下をコピーしてください。

（参考）
[エラーハンドリング](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/overview)

- アプリケーションエラー
  - 《確認できるか？》
- APIエラー
  - API





## オンボーディング画面の追加
## テーマの追加
## ダークモード対応
## メンテナンス画面
## 入力画面でマークダウン書式での入力の追加
《実現性について未検証のため後ろの方に置く》

## 
## 
## 
## 

---
# 個別部品　応用編

## 複雑なアニメーション
## ディープリンク
## カメラ
## 位置情報
## プッシュ通知
## 認証
## グラフ表示
## 
## 
## 
## 
