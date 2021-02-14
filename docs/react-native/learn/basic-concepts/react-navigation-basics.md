---
title: React Navigationの基本
weight: 300
---

# React Navigationの基本

Webブラウザでは、URL毎にページ全体を書き換えることで画面遷移します。
画面遷移のたびに前のURLはブラウザの履歴スタックに保持され、戻るなどの操作は履歴スタックの一番上のURLを取り出すことで実現します。

一方で、モバイルアプリケーションはスタック型の画面遷移を採用しています。
画面遷移は今ある画面の上に新しい画面を積み重ねます。
Webブラウザのそれとは異なり、前の画面は破棄されずに残っています。
戻る場合は、先頭の画面を取り除くなどで実現します。

{{< figure src="/images/navigation_image.png" class="center" >}}

React Nativeにはもともと組み込みのナビゲーションAPIが含まれていました。
しかし、最終的には削除され、サードパーティー製のライブラリを選ぶ方針に変わりました。
ネイティブプラットフォーム毎にナビゲーション技術が異なる為、ナビゲーションを実装する唯一最良の方法はないことがその理由です。

その中で最も人気のあるナビゲーションライブラリがReact Navigationです。
それぞれのプラットフォームのルックアンドフィールをサポートしつつ、ネイティブプラットフォームでの異なる動作に対して一貫した操作を提供します。

## React Navigationの使い方

React Navigationの使い方は次の通りです。

### 1. ナビゲーターを作成

利用可能なナビゲーターの1つを選択して作成します。
ナビゲーターにはStackの他にも、TabやDrawerなどが用意されています。

```typescript
const Root = createStackNavigator<RootParamList>();
```

### 2. 画面コンポーネントを作成

画面は通常のReactコンポーネントです。

```typescript jsx
const Screen1: React.FC = () => {
  return (
    <View style={styles.screen}>
        /* 省略 */
    </View>
  );
};
```

### 3. レンダリングを定義

`NavigationContainer`を使用してルートを定義します。
ナビゲーターはネストした定義もできます（例えばTabナビゲーター内にStackナビゲーターがあるなど）。
ナビゲーターがネストされている場合でも、必要な`NavigationContainer`は１つだけです。

```typescript jsx
export const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Screen1" component={Screen1} />
        <Root.Screen name="Screen2" component={Screen2} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
```

## Example

### 画面イメージ

{{< figure src="/images/navigation.png" class="center" height="600" >}}

### ソースコード

```typescript jsx
import {
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

type RootParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

const Root = createStackNavigator<RootParamList>();

export const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Screen1" component={Screen1} />
        <Root.Screen name="Screen2" component={Screen2} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

const Screen1: React.FC = () => {
  const navigation = useNavigation<
    StackNavigationProp<RootParamList, 'Screen1'>
  >();
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen 1</Text>
      <Button
        buttonStyle={styles.button}
        title="Navigate Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

const Screen2: React.FC = () => {
  const navigation = useNavigation<
    StackNavigationProp<RootParamList, 'Screen2'>
  >();
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen 2</Text>
      <Button
        buttonStyle={styles.button}
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
  button: {
    margin: 10,
    width: 200,
  },
});
```

# [Stack](react-navigation-basics/stack.md)

# [Modal](react-navigation-basics/modal.md)

# [Tab](react-navigation-basics/tab.md)
