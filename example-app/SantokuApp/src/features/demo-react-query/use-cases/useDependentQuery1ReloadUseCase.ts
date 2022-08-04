import {useCallback} from 'react';

import {useDependentQuery1ItemQuery} from '../services/useDependentQuery1ItemQuery';

export const useDependentQuery1ReloadUseCase = () => {
  const itemQuery = useDependentQuery1ItemQuery();
  const reload = useCallback(() => {
    itemQuery.remove();
    itemQuery.refetch().catch(() => {});
  }, [itemQuery]);
  return {reload};
};
