import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'navigation/types';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {DependentQueryDemoScreen} from './DependentQueryDemoScreen';
import {DisableErrorHandlerDemoScreen} from './DisableErrorHandlerDemoScreen';
import {DisabledQueryDemoScreen} from './DisabledQueryDemoScreen';
import {ListTodoDemoScreen} from './ListTodoDemoScreen';

const ScreenName = 'ReactQueryDemo';
const Screen = ({navigation}: NativeStackScreenProps<DemoStackParamList, typeof ScreenName>) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Button title="無限スクロール" onPress={() => navigation.navigate(ListTodoDemoScreen.name)} />
      </View>
      <View style={styles.item}>
        <Button title="マウント時の自動Fetch無効化" onPress={() => navigation.navigate(DisabledQueryDemoScreen.name)} />
      </View>
      <View style={styles.item}>
        <Button title="依存関係のあるクエリ" onPress={() => navigation.navigate(DependentQueryDemoScreen.name)} />
      </View>
      <View style={styles.item}>
        <Button
          title="グローバルエラーハンドラーの無効化"
          onPress={() => navigation.navigate(DisableErrorHandlerDemoScreen.name)}
        />
      </View>
      <SafeAreaView />
    </View>
  );
};

export const ReactQueryDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 8,
  },
});
