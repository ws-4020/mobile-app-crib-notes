import {useCallback} from 'react';

import {useTodoDetails} from '../todo/useTodoDetails';

export const useReloadUseCase = () => {
  const {remove, refetch} = useTodoDetails();
  const reload = useCallback(() => {
    remove();
    refetch().catch(() => {});
  }, [refetch, remove]);
  return {reload};
};
