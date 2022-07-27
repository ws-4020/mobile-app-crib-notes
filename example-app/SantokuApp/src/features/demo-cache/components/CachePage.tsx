import {Button} from 'bases/ui/components/button/Button';
import React, {useEffect} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {useClearUseCase} from '../hooks/useClearUseCase';
import {useRefreshUseCase} from '../hooks/useRefreshUseCase';
import {useTopLevelFileInfos} from '../hooks/useTopLevelFileInfos';
import {FileInfo} from './FileInfo';

export const CachePage: React.FC = () => {
  const [topLevelFileInfos] = useTopLevelFileInfos();
  const {clear} = useClearUseCase();
  const {refresh, refreshing} = useRefreshUseCase();

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
