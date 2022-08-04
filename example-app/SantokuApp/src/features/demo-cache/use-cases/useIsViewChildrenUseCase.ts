import * as FileSystem from 'expo-file-system';
import {useMemo} from 'react';

const maxDepth = 10;

export const useIsViewChildrenUseCase = ({
  fileInfo,
  currentDepth,
}: {
  fileInfo: FileSystem.FileInfo;
  currentDepth: number;
}) => {
  const isViewChildren = useMemo(() => {
    return fileInfo.isDirectory && currentDepth <= maxDepth;
  }, [fileInfo, currentDepth]);
  return {isViewChildren};
};
