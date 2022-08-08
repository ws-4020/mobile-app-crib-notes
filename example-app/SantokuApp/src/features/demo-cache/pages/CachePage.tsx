import {Button} from 'bases/ui/button/Button';
import React, {useEffect} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {useTopLevelFileInfos} from '../client-states/useTopLevelFileInfos';
import {FileInfo} from '../components/FileInfo';
import {useClear} from '../use-cases/useClear';
import {useRefresh} from '../use-cases/useRefresh';

export const CachePage: React.FC = () => {
  const [topLevelFileInfos] = useTopLevelFileInfos();
  const {clear} = useClear();
  const {refresh, refreshing} = useRefresh();

  useEffect(() => {
    refresh().catch(() => {
      // ユースケースでエラーをハンドリングしているのでここでは何もしない
    });
  }, [refresh]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>キャッシュディレクトリ内</Text>
      <ScrollView
        style={styles.directoryView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}>
        {topLevelFileInfos.map((info, index) => {
          return <FileInfo key={index} fileInfo={info} currentDepth={1} />;
        })}
      </ScrollView>
      <Button size="full" title="キャッシュディレクトリ内のファイルを削除" onPress={clear} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  directoryView: {
    flex: 1,
  },
});
