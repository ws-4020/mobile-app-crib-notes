import {log} from 'bases/logging';
import {useCallback, useState} from 'react';

import {useTopLevelFileInfos} from '../client-states/useTopLevelFileInfos';
import {reloadCacheDirectoryItemsAsync} from '../services/reloadCacheDirectoryItemsAsync';

export const useRefresh = () => {
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
