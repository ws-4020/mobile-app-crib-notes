---
title: FlatList
weight: 100
---
# FlatList

大量のデータを画面にスクロール表示する場合、`FlatList`の使用が推奨されます。

`FlatList`は`data`と`renderItem`の2つの`props`を必須とします。
子要素を描画する代わりに、`renderItem`を用いて`data` の内容を描画します。
スクリーン上に表示されるコンテンツのみを描画し、かつ変更された行のみを描画するためパフォーマンスに優れています。
`ScrollView`同様、水平方向または垂直方向にスクロールできます。

変更された行を特定するために、データは一意のID値をもつ必要があります。
`item.key`がデフォルトのIDとして用いられますが、`keyExtractor`に関数を渡すことで別のID値を指定できます。

## Example

### 画面イメージ

{{< figure src="/images/flat-list.png" class="center" height="600" >}}

### ソースコード

```typescript
import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

const items = [...Array(100).keys()].map((i) => ({key: i, text: `item ${i}`}));

export const App = () => {
  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({item}) => <Text style={styles.row}>{item.text}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'lightskyblue',
  },
});
```
