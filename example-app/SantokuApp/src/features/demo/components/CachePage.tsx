import {Button} from 'bases/ui/components/button/Button';
import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {FileInfo} from '../cache/FileInfo';
import {useCacheDirectory} from '../cache/useCacheDirectory';

export const CachePage: React.FC = () => {
  const {topLevelFileInfos, reloadCacheDirectoryItemsAsync, clearCacheDir} = useCacheDirectory();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    reloadCacheDirectoryItemsAsync()
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setRefreshing(false);
      });
  }, [reloadCacheDirectoryItemsAsync]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>キャッシュディレクトリ内</Text>
      <ScrollView
        style={styles.directoryView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {topLevelFileInfos.map((info, index) => {
          return <FileInfo key={index} fileInfo={info} currentDepth={1} />;
        })}
      </ScrollView>
      <Button size="full" title="キャッシュディレクトリ内のファイルを削除" onPress={clearCacheDir} />
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
