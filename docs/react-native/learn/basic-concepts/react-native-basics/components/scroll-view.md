---
title: ScrollView
weight: 800
---
# ScrollView

ScrollViewはスクロール可能なコンテンツに使用されます。
少量のコンテンツをスクロールする場合に適しています。
水平方向または垂直方向にスクロールできます。

ScrollViewはすべての子コンポーネントを一度にレンダリングします。
そのため、アイテムが大量にある場合はパフォーマンス上の欠点があります。
このような場合では、FlatListの使用を検討してください。

## Example

### 画面イメージ

{{< figure src="/images/scroll-view.png" class="center" height="600" >}}

### ソースコード

```typescript
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1} />
      <ScrollView horizontal>
        <View style={styles.box2} />
        <View style={styles.box2} />
        <View style={styles.box2} />
      </ScrollView>
      <View style={styles.box1} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    width: 400,
    height: 400,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'yellow',
  },
  box2: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'blue',
  },
});
```

