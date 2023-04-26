# ライブラリへのパッチ

## スプラッシュスクリーンの表示を柔軟にする

`expo-splash-screen`は、Androidではデフォルトでは単純に1枚の画像を拡大・縮小して表示することしかできません。（特にAndroidでは、`ImageView.ScaleType.CENTER`で表示することしかできない）

今回は、複数の画像を中央で画面サイズに合わせて表示したり、下揃えで表示したりする必要があります。それを可能にするためにパッチを当てています。`native`を指定したときに`ImageView.ScaleType.FIT_XY`が利用されるように変更）

## React Native Elementsの型エラーに対処するパッチ

React18から、React.Componentに定義されていたchildrenが削除されました。
https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210

React Native Elementsの3系では上記の変更に追従できていなかったため、以下の修正をしたパッチを当てています。
* `ThemeProvider`のPropsに`children`を追加

## Expo Config Pluginsで、iOS用に追加したファイルのIDを取得できない問題に対処するパッチ

`IOSConfig.XcodeUtils.addResourceFileToGroup`でファイルを追加した際に、追加したファイルのIDが取得できません。
そのため、追加したファイルのIDを参照するような設定ができない事象が発生しました。

そこで、`IOSConfig.XcodeUtils.addResourceFileToGroup`にファイルのIDを指定できるパッチを当てています。

## [react-native] FlatListでデータが0件の場合に`scrollToEnd`を呼び出すとエラーが発生する問題に対処するパッチ

FlatListでデータが0件の場合に`scrollToEnd`を呼び出すと以下のエラーが発生します。

> ERROR  Invariant Violation: Tried to get frame for out of range index -1, js engine: hermes

この問題に対するissueとPull Requestは以下になります。
* https://github.com/facebook/react-native/issues/36066
* https://github.com/facebook/react-native/pull/36067

Pull Requestは既にクローズされ`main`ブランチにはマージされていますが、このアプリで使用している`react-native`のバージョンにはまだ入っていないため、パッチを当てています。
