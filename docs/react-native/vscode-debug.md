---
title: VS Code上でデバッグを行う
sidebar_label: VS Code上でデバッグを行う
hide_table_of_contents: true
---

VS Code上でデバッグを行うには`ReactNativeTools`を利用します。

## ReactNativeToolsのセットアップ

VS CodeのReactNativeの拡張ツールである、`ReactNative Tools`プラグインをインストールします。

VS Codeの「拡張機能」で`ReactNative Tools`検索してインストール。

[拡張機能を検索した画像]

## デバッグの設定としてexpoのポートにアタッチする

プロジェクトルート配下の`/.vscode/launch.json`を変更する（無い場合は新規に作成する）。

```json title="/launch.json"
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to packager",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "attach",
      "port": "19001"
    }
  ]
}
```

## デバッグ

通常の起動と同様に`npx expo start`するとデバッガが立ち上がる。
