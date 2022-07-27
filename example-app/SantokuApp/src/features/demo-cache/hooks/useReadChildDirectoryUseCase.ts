import {log} from 'bases/logging/utils';
import * as FileSystem from 'expo-file-system';
import {useCallback} from 'react';

import {readDirectoryItemsFileInfoAsync} from '../utils/readDirectoryItemsFileInfoAsync';
import {useChildFileInfos} from './useChildFileInfos';
import {useIsViewChildren} from './useIsViewChildren';

export const useReadChildDirectoryUseCase = ({
  fileInfo,
  currentDepth,
}: {
  fileInfo: FileSystem.FileInfo;
  currentDepth: number;
}) => {
  const [, setChildFileInfos] = useChildFileInfos(currentDepth);
  const {isViewChildren} = useIsViewChildren({fileInfo, currentDepth});
  const readChildDirectory = useCallback(async () => {
    if (isViewChildren) {
      try {
        const fileInfos = await readDirectoryItemsFileInfoAsync(fileInfo.uri);
        setChildFileInfos(fileInfos);
      } catch (e) {
        log.debug(String(e));
      }
    }
  }, [fileInfo.uri, isViewChildren, setChildFileInfos]);
  return {readChildDirectory};
};
