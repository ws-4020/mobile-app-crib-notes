import {useCallback} from 'react';

import {useDependentQuery2ItemInfo} from '../services/useDependentQuery2ItemInfo';

export const useDependentQuery2ReloadUseCase = () => {
  const {remove, refetch} = useDependentQuery2ItemInfo();
  const refresh = useCallback(() => {
    remove();
    refetch().catch(() => {});
  }, [refetch, remove]);
  return {reload: refresh};
};
