import {useClientState} from 'bases/react-query/hooks/useClientState';
import * as FileSystem from 'expo-file-system';

export const useTopLevelFileInfos = () => {
  return useClientState<FileSystem.FileInfo[]>(['demo-cache', 'topLevelFileInfos'], []);
};
