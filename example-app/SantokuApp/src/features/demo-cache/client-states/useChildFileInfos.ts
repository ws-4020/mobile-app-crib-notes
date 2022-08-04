import {useClientState} from 'bases/react-query/utils/useClientState';
import * as FileSystem from 'expo-file-system';

export const useChildFileInfos = (currentDepth: number) => {
  return useClientState<FileSystem.FileInfo[]>(['demo-cache', 'childFileInfos', currentDepth], []);
};
