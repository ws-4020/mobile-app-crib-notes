import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {View, Text, Button, ActivityIndicator, StyleSheet} from 'react-native';
import {useGetAccountsMe} from 'service/backend';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'GetAccountsMeDemo';
const Screen: React.FC<Props> = () => {
  const {isLoading, isError, data: axiosResponse, refetch} = useGetAccountsMe();
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#0000ff" />
      </View>
    );
  }
  if (isError) {
    return (
      <View style={styles.container}>
        <Text>アカウント情報の取得に失敗しました。</Text>
        <Button title="再取得" onPress={() => refetch()} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>{axiosResponse?.data.accountId}</Text>
    </View>
  );
};

export const GetAccountsMeDemoScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
