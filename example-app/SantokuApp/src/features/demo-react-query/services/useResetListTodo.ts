import {getListTodoQueryKey} from 'features/sandbox/apis/api';
import {useCallback} from 'react';
import {useQueryClient} from 'react-query';

export const useResetListTodo = () => {
  const queryClient = useQueryClient();
  const reset = useCallback(() => queryClient.resetQueries(getListTodoQueryKey()), [queryClient]);
  return {reset};
};
