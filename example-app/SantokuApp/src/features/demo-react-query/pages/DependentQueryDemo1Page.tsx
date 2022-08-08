import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useDependentQuery1AmountQuery} from '../services/useDependentQuery1AmountQuery';
import {useDependentQuery1ItemQuery} from '../services/useDependentQuery1ItemQuery';
import {useDependentQuery1IsError} from '../use-cases/useDependentQuery1IsError';
import {useDependentQuery1IsIdle} from '../use-cases/useDependentQuery1IsIdle';
import {useDependentQuery1IsLoading} from '../use-cases/useDependentQuery1IsLoading';
import {useDependentQuery1IsRefetching} from '../use-cases/useDependentQuery1IsRefetching';
import {useDependentQuery1IsSuccess} from '../use-cases/useDependentQuery1IsSuccess';
import {useDependentQuery1Rate} from '../use-cases/useDependentQuery1Rate';
import {useDependentQuery1Refresh} from '../use-cases/useDependentQuery1Refresh';
import {useDependentQuery1Reload} from '../use-cases/useDependentQuery1Reload';

export const DependentQueryDemo1Page: React.FC = () => {
  const {data: item} = useDependentQuery1ItemQuery();
  const {rate} = useDependentQuery1Rate();
  const {data: amount} = useDependentQuery1AmountQuery();
  const {isIdle} = useDependentQuery1IsIdle();
  const {isLoading} = useDependentQuery1IsLoading();
  const {isRefetching} = useDependentQuery1IsRefetching();
  const {isSuccess} = useDependentQuery1IsSuccess();
  const {isError} = useDependentQuery1IsError();
  const {refresh} = useDependentQuery1Refresh();
  const {reload} = useDependentQuery1Reload();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refresh} />}>
        <View>
          <Text h4>Query Status</Text>
          <Text>{`isIdle: ${isIdle.toString()}, isLoading: ${isLoading.toString()}, isRefetching: ${isRefetching.toString()}, isSuccess: ${isSuccess.toString()}, isError: ${isError.toString()}`}</Text>
        </View>
        <View>
          <Text h4>Query Data</Text>
          {isError && <Text>データの取得に失敗しました</Text>}
          {isLoading && <ActivityIndicator size="large" color="blue" />}
          {!isLoading && (
            <>
              <Text>商品取得結果</Text>
              <View style={styles.details}>
                <Text>ID: {item?.id}</Text>
                <Text>名前: {item?.name}</Text>
                <Text>タイプ: {item?.type}</Text>
                <Text>値段: {item?.price}</Text>
                <Text>割引率: {rate! * 100}%</Text>
                <Text>金額: {amount}</Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text>※画面下方向へのスワイプで画面が更新されます。</Text>
        <View>
          <Button title="Reload" onPress={reload} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  details: {
    marginLeft: 8,
  },
  footer: {
    alignItems: 'flex-end',
  },
});
