## 📝 プルリクエストのタイトルについて

プルリクエストのタイトルは、先頭に絵文字を付けてもらいたいです。絵文字は[gitmoji](https://gitmoji.dev/)から選んでください。
絵文字をコピーする際には、：art：のような文字列ではなく、絵文字そのものをコピーして利用してください。
「<emoji>: Title」のようなフォーマットでお願いします。例: 💄: Lintエラーを修正

<!-- ここまでは、プルリクエストを作成するときには削除してください。 -->
## 💣 BREAKING CHANGES 💣

- 破壊的な変更を箇条書きで記載してください
- 変更内容と変更理由を、わかりやすく記載してください
- なければ、このセクション（先頭行から「## ✅ What's done」の前の行まで）を削除してください

## ✅ What's done

- [ ] やったことをチェック付きの箇条書きで記載してください
- [ ] 作業着手前に列挙して TODO リストのようにも使用できます
- [ ] やり終わったらチェックを付けてください

<!-- 該当するものがなければ、このセクション（この行から「---」の前の行まで）を削除してください。 -->
## ⏸ What's not done

- やっていないこと（やる予定がないこと）を箇条書きで記載してください
- 解決できていない課題・障害があれば、それも記載してください

---

<!-- 上の区切りまでを、Auto-mergeを設定するときにコミットメッセージとして設定してください -->

<!-- 該当するものがなければ、このセクション（この行から「## Devices」の前の行まで）を削除してください。 -->
## Tests

- [ ] 実施した動作確認の内容をチェック付きの箇条書きで記載してください
- [ ] 作業着手前に列挙して TODO リストのようにも使用できます
- [ ] やり終わったらチェックを付けてください

以下のコマンドをこのプルリクエストのコメントとして投稿すると、
Azure Pipeline上でSantokuAppをビルドしてDeployGateへアップロードできます。

- /azp run deploy-all

<!-- 該当するものがなければ、このセクション（この行から「## Otherの前の行まで）を削除してください。 -->
## Devices

- [ ] 動作確認に利用したデバイスにチェックをつけてください
- [ ] iOS
  - [ ] シミュレータ (iPhone Xs/iOS 14)
  - [ ] 実機 (iPhone 8/iOS 14)
- [ ] Android
  - [ ] エミュレータ (Pixel 3a/Android 11)
  - [ ] 実機 (Pixel 3a/Android 11)

## Other (messages to reviewers, concerns, etc.)

何かあれば記載してください。
なければ「なし」と記載してください。