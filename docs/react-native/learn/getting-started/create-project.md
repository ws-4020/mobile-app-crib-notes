---
title: プロジェクトの作成
---

## React Nativeプロジェクトの作成

<!-- TODO: リンク貼るよ -->
[アプリを実装する前に](.)で紹介しているコードを簡単に動かすことができるように、プロジェクトを作成します。

[React Navigation](https://reactnavigation.org/)や[React Native Elements](https://reactnativeelements.com/)などのパッケージがインストールされたプロジェクトを簡単に用意できるように。[RN Spoiler](https://github.com/ws-4020/rn-spoiler)というテンプレートを用意しています。`<YourAppName>`の部分は、好みのプロジェクト名に変更してください。

```
npx react-native init --template https://github.com/ws-4020/rn-spoiler <YourAppName>
```

<!-- TODO: リンク貼るよ -->
RN Spoilerは、Expoの[expo-template-bare-typescript](https://github.com/expo/expo/tree/master/templates/expo-template-bare-typescript)をベースにしているので、[Expoとは](.)で紹介しているBare Workflowのアプリとして開発・実行できます。
