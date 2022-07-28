import {useCallback} from 'react';

import {useItemQuery} from './useItemQuery';

export const useReloadUseCase = () => {
  const itemQuery = useItemQuery();
  const reload = useCallback(() => {
    itemQuery.remove();
    itemQuery.refetch().catch(() => {});
  }, [itemQuery]);
  return {reload};
};
