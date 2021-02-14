---
title: Image
weight: 700
---
# Image

ネットワーク画像、静的リソース、一時的なローカル画像、カメラロールなどのローカルディスクからの画像など、さまざまな種類の画像を表示できるReactコンポーネントです。

静的リソースからインポートされた画像はビルド時にスキャンされ、画像サイズがアプリバンドルにメタデータとして含まれます。
そのため、デフォルトで画像の大きさが設定されています。
ネットワーク画像やデータ画像はビルド時には画像のサイズがわからないため、幅と高さがデフォルトで0に設定されています。
そのため、ネットワーク画像やデータ画像を表示する場合、画像のサイズを手動で指定する必要があります。

下の例では、ネットワークからの画像を表示しています。

## Example

### 画面イメージ

{{< figure src="/images/image.png" class="center" height="600" >}}

### ソースコード

```typescript
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

export const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});
```

