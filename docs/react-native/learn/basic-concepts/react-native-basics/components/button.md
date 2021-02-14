---
title: Button
weight: 500
---
# Button

各ネイティブプラットフォームの標準スタイルを使用したボタンを表示する場合、このコンポーネントを使用します。
色以外のスタイルがカスタマイズ出来ないため、デザインがアプリに適していない場合、代わりに[Touchables](https://reactnative.dev/docs/handling-touches#touchables)を使用して独自のコンポーネントを作成します。

## Example

### 画面イメージ

{{< figure src="/images/button.png" class="center" height="600" >}}

### ソースコード

```typescript
import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        title={`count is ${count}`}
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```
