---
title: Text
weight: 300
---
# Text

テキストを表示するためのReactコンポーネントです。
Webと異なり、テキストは`<Text>`コンポーネントでのラップが必要です。

## Example

### 画面イメージ

{{< figure src="/images/text.png" class="center" height="600" >}}

### ソースコード

```typescript
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 32,
  },
});
```

