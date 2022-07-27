import {useGetAccountsMeService} from 'features/account/hooks/useGetAccountsMeService';
import React from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const GetAccountsMeDemoPage: React.FC = () => {
  const {isLoading, isRefetching, isError, data: axiosResponse, refetch} = useGetAccountsMeService();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}>
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
