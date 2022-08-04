import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useDependentQuery1AmountQuery} from '../services/useDependentQuery1AmountQuery';
import {useDependentQuery1ItemQuery} from '../services/useDependentQuery1ItemQuery';
import {useDependentQuery1IsErrorUseCase} from '../use-cases/useDependentQuery1IsErrorUseCase';
import {useDependentQuery1IsIdleUseCase} from '../use-cases/useDependentQuery1IsIdleUseCase';
import {useDependentQuery1IsLoadingUseCase} from '../use-cases/useDependentQuery1IsLoadingUseCase';
import {useDependentQuery1IsRefetchingUseCase} from '../use-cases/useDependentQuery1IsRefetchingUseCase';
import {useDependentQuery1IsSuccessUseCase} from '../use-cases/useDependentQuery1IsSuccessUseCase';
import {useDependentQuery1RateUseCase} from '../use-cases/useDependentQuery1RateUseCase';
import {useDependentQuery1RefreshUseCase} from '../use-cases/useDependentQuery1RefreshUseCase';
import {useDependentQuery1ReloadUseCase} from '../use-cases/useDependentQuery1ReloadUseCase';

export const DependentQueryDemo1Page: React.FC = () => {
  const {data: item} = useDependentQuery1ItemQuery();
  const {rate} = useDependentQuery1RateUseCase();
  const {data: amount} = useDependentQuery1AmountQuery();
  const {isIdle} = useDependentQuery1IsIdleUseCase();
  const {isLoading} = useDependentQuery1IsLoadingUseCase();
  const {isRefetching} = useDependentQuery1IsRefetchingUseCase();
  const {isSuccess} = useDependentQuery1IsSuccessUseCase();
  const {isError} = useDependentQuery1IsErrorUseCase();
  const {refresh} = useDependentQuery1RefreshUseCase();
  const {reload} = useDependentQuery1ReloadUseCase();

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
