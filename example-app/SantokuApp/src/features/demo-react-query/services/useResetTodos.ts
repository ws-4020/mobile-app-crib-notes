import {useCallback} from 'react';
import {useQueryClient} from 'react-query';

export const useResetTodos = () => {
  const queryClient = useQueryClient();
  const resetTodos = useCallback(async () => {
    await queryClient.resetQueries(`/todos/infinite`);
  }, [queryClient]);
  return {resetTodos};
};
