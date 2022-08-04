import {useClientState} from 'bases/react-query/utils/useClientState';
import * as FileSystem from 'expo-file-system';

export const useTopLevelFileInfos = () => {
  return useClientState<FileSystem.FileInfo[]>(['demo-cache', 'topLevelFileInfos'], []);
};
