---
title: Tab
weight: 300
---

# Tab

モバイルアプリで採用される一般的なナビゲーションにタブがあります。
タブは画面の下部（または上部）に配置され、ボタン押下で画面を切り替えます。

React Navigationでは、次のAPIを使用してタブナビゲーションを実現します。

- `createBottomTabNavigator`
- `createMaterialBottomTabNavigator`
- `createMaterialTopTabNavigator`

タブナビゲータの定義はスタックのそれと似ています。次のコードはタブナビゲータの定義例です。
定義の中で、タブの外観をカスタマイズ（アイコン表示したりバッジを追加したり）できます。

```typescript
    <NavigationContainer>
      <RootTab.Navigator>
        <RootTab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: '設定',
            tabBarBadge: 3,
            tabBarIcon: ({color}) => (
              <Ionicons name="md-settings" size={30} color={color} />
            ),
          }}
        />
        /* 省略 */
      </RootTab.Navigator>
    </NavigationContainer>
```

タブの切り替え、およびタブ配下の（ネストされた）ナビゲータの画面遷移も、スタックと同様に`navigation.navigate`を用います。

次の図は、コード例のナビゲータ構成です。
タブ配下にネストされたスタックナビゲータを定義しています。

{{< figure src="/images/tab_image.png" class="center" >}}


## Example

### 画面イメージ

{{< figure src="/images/tab.png" class="center" height="600" >}}

### ソースコード

```typescript
import {Ionicons} from '@expo/vector-icons';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigationContainer,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

type HomeParamList = {
  Home: undefined;
  Details: undefined;
};
type RootParamList = {
  HomeStack: NavigatorScreenParams<HomeParamList>;
  Settings: undefined;
};

const HomeStack = createStackNavigator<HomeParamList>();
const RootTab = createBottomTabNavigator<RootParamList>();

const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootTab.Navigator>
        <RootTab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            title: 'ホーム',
            tabBarIcon: ({color}) => (
              <Ionicons name="md-home" size={30} color={color} />
            ),
          }}
        />
        <RootTab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: '設定',
            tabBarBadge: 3,
            tabBarIcon: ({color}) => (
              <Ionicons name="md-settings" size={30} color={color} />
            ),
          }}
        />
      </RootTab.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<
    CompositeNavigationProp<
      StackNavigationProp<HomeParamList, 'Home'>,
      BottomTabNavigationProp<RootParamList>
    >
  >();
  return (
    <View style={styles.screen}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Settings"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Text>Settings screen</Text>
      <Button
        title="Go to HomeStack"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('HomeStack')}
      />
    </View>
  );
};

const DetailsScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>Details!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    width: 200,
  },
});
```
