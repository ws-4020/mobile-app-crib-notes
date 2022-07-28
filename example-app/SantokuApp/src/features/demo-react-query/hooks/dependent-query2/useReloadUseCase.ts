import {useCallback} from 'react';

import {useItemInfo} from './useItemInfo';

export const useRefreshUseCase = () => {
  const {remove, refetch} = useItemInfo();
  const refresh = useCallback(() => {
    remove();
    refetch().catch(() => {});
  }, [refetch, remove]);
  return {refresh};
};
