import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {useDependentQueryDemo1} from './useDependentQueryDemo1';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'DependentQueryDemo1';
const Screen: React.FC<Props> = () => {
  const {result, isIdle, isLoading, isFetching, isSuccess, isError, refetch} = useDependentQueryDemo1();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}>
        <View>
          <Text h4>Query Status</Text>
          <Text>{`isIdle: ${isIdle.toString()}, isLoading: ${isLoading.toString()}, isFetching: ${isFetching.toString()}, isSuccess: ${isSuccess.toString()}, isError: ${isError.toString()}`}</Text>
        </View>
        <View>
          <Text h4>Query Data</Text>
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
          {isError && <Text>データの取得に失敗しました</Text>}
          {!isLoading && (
            <>
              <Text>商品取得結果</Text>
              <View style={styles.details}>
                <Text>ID: {result.id}</Text>
                <Text>名前: {result.name}</Text>
                <Text>タイプ: {result.type}</Text>
                <Text>値段: {result.price}</Text>
                <Text>割引率: {result.rate! * 100}%</Text>
                <Text>金額: {result.amount}</Text>
              </View>
            </>
          )}
        </View>
        <View style={styles.description}>
          <Text>※画面下方向へのスワイプで画面が更新されます。</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const DependentQueryDemo1Screen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  details: {
    marginLeft: 8,
  },
  description: {
    marginTop: 20,
  },
});
