import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {useAmountQuery} from '../hooks/dependent-query1/useAmountQuery';
import {useIsError} from '../hooks/dependent-query1/useIsError';
import {useIsIdle} from '../hooks/dependent-query1/useIsIdle';
import {useIsLoading} from '../hooks/dependent-query1/useIsLoading';
import {useIsRefetching} from '../hooks/dependent-query1/useIsRefetching';
import {useIsSuccess} from '../hooks/dependent-query1/useIsSuccess';
import {useItemQuery} from '../hooks/dependent-query1/useItemQuery';
import {useRate} from '../hooks/dependent-query1/useRate';
import {useRefreshUseCase} from '../hooks/dependent-query1/useRefreshUseCase';
import {useReloadUseCase} from '../hooks/dependent-query1/useReloadUseCase';

export const DependentQueryDemo1Page: React.FC = () => {
  const {data: item} = useItemQuery();
  const {rate} = useRate();
  const {data: amount} = useAmountQuery();
  const {isIdle} = useIsIdle();
  const {isLoading} = useIsLoading();
  const {isRefetching} = useIsRefetching();
  const {isSuccess} = useIsSuccess();
  const {isError} = useIsError();
  const {refresh} = useRefreshUseCase();
  const {reload} = useReloadUseCase();

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
