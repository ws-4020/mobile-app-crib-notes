import * as FileSystem from 'expo-file-system';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

import {useCacheDirectory} from './useCacheDirectory';

type FileInfoProps = {
  fileInfo: FileSystem.FileInfo;
  currentDepth: number;
};

const maxDepth = 10;

const FileInfo: React.FC<FileInfoProps> = props => {
  const {fileInfo, currentDepth} = props;
  const {readDirectoryItemsFileInfoAsync} = useCacheDirectory();
  const [childFileInfos, setChildFileInfos] = useState<FileSystem.FileInfo[]>([]);

  const getFileNameFromUri = useCallback((uri: string) => {
    return uri.endsWith('/') ? uri.split('/').slice(-2)[0] : uri.split('/').slice(-1)[0];
  }, []);

  useEffect(() => {
    if (fileInfo.isDirectory && currentDepth <= maxDepth) {
      readDirectoryItemsFileInfoAsync(fileInfo.uri)
        .then(fileInfos => {
          setChildFileInfos(fileInfos);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }, [currentDepth, fileInfo, readDirectoryItemsFileInfoAsync]);

  if (fileInfo.isDirectory && currentDepth <= maxDepth) {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon name="file-directory" type="octicon" size={18} />
          <Text style={styles.title}>{getFileNameFromUri(fileInfo.uri)}</Text>
        </View>
        <View style={styles.childContainer}>
          {childFileInfos.map((info, index) => {
            return <FileInfo key={index} fileInfo={info} currentDepth={currentDepth + 1} />;
          })}
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon name={fileInfo.isDirectory ? 'file-directory' : 'file'} type="octicon" size={18} />
          <Text style={styles.title}>{getFileNameFromUri(fileInfo.uri)}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
    marginLeft: 8,
    marginBottom: 4,
  },
  childContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
});

export {FileInfo};
