import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useDependentQueryDemo} from './useDependentQueryDemo';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'DependentQueryDemo';
const Screen: React.FC<Props> = () => {
  const {todos, isIdle, isLoading, isSuccess, isError, start, reset} = useDependentQueryDemo();

  return (
    <View style={styles.container}>
      <View>
        <Text h4>Query Status</Text>
        <Text>{`isIdle: ${isIdle.toString()}, isLoading: ${isLoading.toString()}, isSuccess: ${isSuccess.toString()}, isError: ${isError.toString()}`}</Text>
      </View>
      <View style={styles.block}>
        <Text h4>Query Data</Text>
        <ScrollView>
          {isLoading && <ActivityIndicator size="large" />}
          {isError && <Text>データの取得に失敗しました</Text>}
          <Text>Todo詳細取得結果</Text>
          <View style={styles.details}>
            {todos?.map((todo, index) => {
              return <Text key={index}>{todo?.title}</Text>;
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttons}>
        <Button title="取得開始" onPress={start} />
        <Button title="Reset Queries" onPress={reset} />
      </View>
      <SafeAreaView />
    </View>
  );
};

export const DependentQueryDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  block: {
    flex: 1,
  },
  details: {
    marginLeft: 8,
  },
  footer: {},
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
