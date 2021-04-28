---
title: Visual Studio Code上でデバッグを行う
sidebar_label: Visual Studio Code上でデバッグを行う
hide_table_of_contents: true
---

Visual Studio Codeで、React NativeのTypeScriptコードをデバッグできるように、[React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)をセットアップします。

**このページではExpoを利用した場合のデバッグを紹介します。**

Android、およびiOSのシミュレータを利用した場合のデバッグについて詳細は[こちら](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)を参照してください。

## React Native Toolsのセットアップ

Visual Studio CodeのReact Nativeの拡張ツールである、`React Native Tools`プラグインをインストールします。

Visual Studioマーケットプレイスの[React Native Toolsページ](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)の`Install`をクリックしてインストール。

または、Visual Studio Codeの「拡張機能」で`React Native Tools`検索してインストール。

[拡張機能を検索した画像]

## デバッグの設定としてexpoのポートにアタッチする

プロジェクトルート配下の`/.vscode/launch.json`を変更する（無い場合は新規に作成する）。

```json title="/.vscode/launch.json"
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
