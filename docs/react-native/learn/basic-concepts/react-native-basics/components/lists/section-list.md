---
title: SectionList
weight: 200
---
# SectionList

`SectionList`は`FlatList`と同じように表示されるコンテンツのみを描画し、さらに行区切りのセクションヘッダーを持つことができます。

`props`に指定した`renderSectionHeader`および`renderItem`を用いて、`sections`に渡された項目を描画します。
`sections`の各項目は配列型のオブジェクトである`data`をもつ必要があります。

## Example

### 画面イメージ

{{< figure src="/images/section-list.png" class="center" height="600" >}}

### ソースコード

```typescript
import React from 'react';
import {SectionList, StyleSheet, Text} from 'react-native';

const sections = [
  {
    title: 'Basic',
    data: ['View', 'Text', 'Button', 'Image'],
  },
  {
    title: 'Lists',
    data: ['FlatList', 'SectionList'],
  },
];

export const App = () => {
  return (
    <SectionList
      style={styles.container}
      sections={sections}
      renderItem={({item}) => <Text style={styles.row}>{item}</Text>}
      renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
      keyExtractor={(_, index) => index.toString()}
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
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
});
```
