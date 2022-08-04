import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useGetAccountMeUseCase} from '../use-cases/useGetAccountMeUseCase';
import {useListTodoRefreshTodoUseCase} from '../use-cases/useListTodoRefreshTodoUseCase';

export const GetAccountsMeDemoPage: React.FC = () => {
  const {refreshTodo} = useListTodoRefreshTodoUseCase();
  const {isLoading, isRefetching, isError, data: axiosResponse} = useGetAccountMeUseCase();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refreshTodo} />}>
        {isError && <Text>アカウント情報の取得に失敗しました。</Text>}
        {isLoading && <ActivityIndicator size="large" color="blue" />}
        {axiosResponse && <Text>{axiosResponse.data.accountId}</Text>}
      </ScrollView>
      <View>
        <Text>※画面下方向へのスワイプで画面が更新されます。</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
