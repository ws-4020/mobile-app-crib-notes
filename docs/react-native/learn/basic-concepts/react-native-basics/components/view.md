---
title: View
weight: 200
---
# View

React Nativeにおける最も基本的なコンポーネントです。
デフォルトでは何も表示せず、その他のコンポーネントのコンテナとしてスタイルやレイアウト用途として主に用いられます。
ターゲットプラットフォーム上の次のネイティブの部品に対応します。

- iOS - `UIView`
- Android - `android.view`
- Web - `<div>`

## Example

### 画面イメージ

{{< figure src="/images/view.png" class="center" height="600" >}}

### ソースコード

```typescript
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'black',
  },
});
```

