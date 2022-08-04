import {useCallback} from 'react';
import {useQueryClient} from 'react-query';

export const useInvalidateTodos = () => {
  const queryClient = useQueryClient();
  const invalidateTodos = useCallback(async () => {
    await queryClient.invalidateQueries(`/todos/infinite`);
  }, [queryClient]);
  return {invalidateTodos};
};
