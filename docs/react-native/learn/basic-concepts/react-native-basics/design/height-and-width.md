---
title: 高さと幅
weight: 200
---

# 高さと幅

コンポーネントの高さと幅を指定することで、画面上のコンポーネントのサイズが決まります。
一般的な方法は、`width`と`height`に固定値を指定することです。
React Nativeでは単位の指定がなく、すべて（密度に依存しない）ピクセルとなります。

## Example

### 画面イメージ

{{< figure src="/images/height-and-width.png" class="center" height="600" >}}

### ソースコード

```typescript
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const App = () => {
  return (
    <View>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
  },
  box3: {
    width: 300,
    height: 300,
    backgroundColor: 'yellow',
  },
});
```

