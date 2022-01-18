import * as FileSystem from 'expo-file-system';
import {DemoStackParamList} from 'navigation/types';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, SectionList, SectionListData} from 'react-native';
import {Icon, ListItem, Text} from 'react-native-elements';

import {Button} from '../../../components/button/Button';
import {useSnackbar} from '../../../components/snackbar';

type FileInfoWithChildItems = FileSystem.FileInfo & {
  childItems?: FileSystem.FileInfo[];
};

type Section = {
  title: string;
  isDirectory: boolean;
  data: FileSystem.FileInfo[];
};

const ScreenName = 'Cache';
const Screen: React.FC = () => {
  const [sectionListData, setSectionListData] = useState<SectionListData<FileSystem.FileInfo, Section>[]>([]);
  const snackbar = useSnackbar();

  const getFileNameFromUri = useCallback((uri: string) => {
    return uri.split('/').slice(-1)[0];
  }, []);

  const sortFileInfos = useCallback((fileInfos: FileSystem.FileInfo[]) => {
    const copiedArray = [...fileInfos];
    copiedArray.sort((a, b) => {
      if (a.isDirectory && !b.isDirectory) {
        return -1;
      } else if (!a.isDirectory && b.isDirectory) {
        return 1;
      } else if (a.uri < b.uri) {
        return -1;
      } else if (a.uri > b.uri) {
        return 1;
      }
      return 0;
    });
    return copiedArray;
  }, []);

  const readDirectoryItemsFileInfoAsync = useCallback(
    async (fileUri: string) => {
      const info = await FileSystem.getInfoAsync(fileUri);
      if (info.isDirectory) {
        const paths = await FileSystem.readDirectoryAsync(fileUri);
        const infos = await Promise.all(
          paths.map(path => {
            const fullPath = fileUri.endsWith('/') ? `${fileUri}${path}` : `${fileUri}/${path}`;
            return FileSystem.getInfoAsync(fullPath);
          }),
        );
        return sortFileInfos(infos);
      } else {
        return [];
      }
    },
    [sortFileInfos],
  );

  const getFileInfoWithChildItems = useCallback(
    async (info: FileSystem.FileInfo): Promise<FileInfoWithChildItems> => {
      const childItems = await readDirectoryItemsFileInfoAsync(info.uri);
      return {
        ...info,
        childItems,
      };
    },
    [readDirectoryItemsFileInfoAsync],
  );

  const updateCacheDirectoryItemsAsync = useCallback(async () => {
    if (FileSystem.cacheDirectory) {
      const topLevelItemInfos = await readDirectoryItemsFileInfoAsync(FileSystem.cacheDirectory);
      const topLevelItemInfosWithChildItems = await Promise.all(
        topLevelItemInfos.map(info => {
          if (info.isDirectory) {
            return getFileInfoWithChildItems(info);
          } else {
            return new Promise<FileInfoWithChildItems>(resolve => resolve(info));
          }
        }),
      );
      const data = topLevelItemInfosWithChildItems.map(item => {
        if (item.childItems) {
          return {
            title: getFileNameFromUri(item.uri),
            isDirectory: item.isDirectory,
            data: item.childItems,
          };
        } else {
          return {
            title: getFileNameFromUri(item.uri),
            isDirectory: item.isDirectory,
            data: [],
          };
        }
      });
      setSectionListData(data);
    }
  }, [readDirectoryItemsFileInfoAsync, getFileInfoWithChildItems, getFileNameFromUri]);

  const deleteChildItemsAsync = useCallback(
    async (fileInfo: FileSystem.FileInfo) => {
      if (fileInfo.exists) {
        if (fileInfo.isDirectory) {
          const childItemInfos = await readDirectoryItemsFileInfoAsync(fileInfo.uri);
          await Promise.all(
            childItemInfos.map(info => {
              return FileSystem.deleteAsync(info.uri);
            }),
          );
        } else {
          await FileSystem.deleteAsync(fileInfo.uri);
        }
      }
    },
    [readDirectoryItemsFileInfoAsync],
  );

  const clearCacheDir = useCallback(async () => {
    if (FileSystem.cacheDirectory) {
      try {
        const fileInfos = await readDirectoryItemsFileInfoAsync(FileSystem.cacheDirectory);
        await Promise.all(
          fileInfos.map(info => {
            // http-cacheなどのトップレベルのディレクトリは削除できないので、その中のファイルだけを削除対象とする
            return deleteChildItemsAsync(info);
          }),
        );
        await updateCacheDirectoryItemsAsync();
        snackbar.showWithCloseButton(`ファイルの削除に成功しました。`);
      } catch (e) {
        console.log(e);
        snackbar.showWithCloseButton(`ファイルの削除に失敗しました。`);
      }
    }
  }, [snackbar, deleteChildItemsAsync, readDirectoryItemsFileInfoAsync, updateCacheDirectoryItemsAsync]);

  useEffect(() => {
    updateCacheDirectoryItemsAsync().catch(e => console.log(e));
  }, [updateCacheDirectoryItemsAsync]);

  const renderItem = useCallback(
    ({item}: {item: FileSystem.FileInfo}) => {
      return (
        <ListItem containerStyle={styles.listItem}>
          <Icon name={item.isDirectory ? 'file-directory' : 'file'} type="octicon" size={18} />
          <ListItem.Title>{getFileNameFromUri(item.uri)}</ListItem.Title>
        </ListItem>
      );
    },
    [getFileNameFromUri],
  );

  const renderSectionHeader = useCallback(({section}: {section: Section}) => {
    return (
      <ListItem containerStyle={styles.section}>
        <Icon name={section.isDirectory ? 'file-directory' : 'file'} type="octicon" size={18} />
        <ListItem.Title>{section.title}</ListItem.Title>
        {section.data.length === 0 && <ListItem.Subtitle>(empty)</ListItem.Subtitle>}
      </ListItem>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>キャッシュディレクトリ内(2階層分)</Text>
      <SectionList
        contentContainerStyle={styles.sectionListContainer}
        sections={sectionListData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(_item, index) => `${index}`}
      />
      <Button size="full" title="キャッシュディレクトリ内のファイルを削除" onPress={clearCacheDir} />
    </View>
  );
};

export const CacheScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
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
  sectionListContainer: {
    flex: 1,
  },
  section: {
    backgroundColor: 'transparent',
    padding: 4,
    width: '90%',
  },
  listItem: {
    backgroundColor: 'transparent',
    padding: 4,
    paddingLeft: 20,
  },
});
