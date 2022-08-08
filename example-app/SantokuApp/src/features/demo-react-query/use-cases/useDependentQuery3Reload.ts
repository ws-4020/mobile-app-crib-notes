import {useCallback} from 'react';

import {useTodoDetails} from '../services/useTodoDetails';

export const useDependentQuery3Reload = () => {
  const {remove, refetch} = useTodoDetails();
  const reload = useCallback(() => {
    remove();
    refetch().catch(() => {});
  }, [refetch, remove]);
  return {reload};
};
