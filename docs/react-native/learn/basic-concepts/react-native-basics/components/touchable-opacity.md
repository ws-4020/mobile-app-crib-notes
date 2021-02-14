---
title: TouchableOpacity
weight: 600
---
# TouchableOpacity

ビューをタッチに対応させるためラップします。
押すとラップされたビューがフェードアウトし、離すとフェードインします。
スタイルを自由に設定できます。

React Nativeアプリでは、一般的にボタンとして使用されます。

## Example

### 画面イメージ

{{< figure src="/images/touchable-opacity.png" class="center" height="600" >}}

### ソースコード

```typescript
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCount(count + 1);
        }}>
        <Text>count is {count}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'lightskyblue',
  },
});
```
