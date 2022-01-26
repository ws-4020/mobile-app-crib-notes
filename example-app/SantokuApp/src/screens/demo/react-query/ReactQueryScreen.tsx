import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from 'components/button/Button';
import {useGetCsrfToken} from 'framework/backend';
import {DemoStackParamList} from 'navigation/types';
import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {ListTodoDemoScreen} from './ListTodoDemoScreen';

const ScreenName = 'ReactQuery';
const Screen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DemoStackParamList>>();
  const getCsrfTokenQuery = useGetCsrfToken();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text>クエリのデモ(CSRFトークン取得)</Text>
        {getCsrfTokenQuery.isLoading && <ActivityIndicator />}
        {getCsrfTokenQuery.isSuccess && getCsrfTokenQuery.data && (
          <>
            <Text>HeaderName: {getCsrfTokenQuery.data.csrfTokenHeaderName}</Text>
            <Text>Value: {getCsrfTokenQuery.data.csrfTokenValue}</Text>
          </>
        )}
        {getCsrfTokenQuery.isError && <Text>CSRF Tokenの取得に失敗しました。</Text>}
      </View>
      <View style={styles.subContainer}>
        <Text>更新と無限ロードのデモ(TODO管理)</Text>
        <Button
          title="Open"
          size="full"
          onPress={() => {
            navigation.navigate(ListTodoDemoScreen.name);
          }}
        />
      </View>
    </ScrollView>
  );
};

export const ReactQueryScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
  subContainer: {
    flex: 1,
    margin: 8,
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
});
