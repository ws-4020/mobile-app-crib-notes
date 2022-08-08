import {useClientState} from 'bases/react-query/useClientState';
import * as FileSystem from 'expo-file-system';

export const useChildFileInfos = (currentDepth: number) => {
  return useClientState<FileSystem.FileInfo[]>(['demo-cache', 'childFileInfos', currentDepth], []);
};
