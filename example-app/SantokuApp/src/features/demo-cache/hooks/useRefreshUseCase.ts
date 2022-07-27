import {log} from 'bases/logging/utils';
import {useCallback, useState} from 'react';

import {reloadCacheDirectoryItemsAsync} from '../utils/reloadCacheDirectoryItemsAsync';
import {useTopLevelFileInfos} from './useTopLevelFileInfos';

export const useRefreshUseCase = () => {
  const [, setTopLevelFileInfos] = useTopLevelFileInfos();
  const [refreshing, setRefreshing] = useState(false);
  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const topLevelFileInfos = await reloadCacheDirectoryItemsAsync();
      setTopLevelFileInfos(topLevelFileInfos);
    } catch (e) {
      log.debug(String(e));
    } finally {
      setRefreshing(false);
    }
  }, [setTopLevelFileInfos]);
  return {refresh, refreshing};
};
