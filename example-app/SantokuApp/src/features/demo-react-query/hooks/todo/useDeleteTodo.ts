import {useDeleteTodo as useDeleteTodoApi} from 'features/sandbox/apis/api';
import {useQueryClient} from 'react-query';

import {resetQueries} from '../../utils/resetQueries';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useDeleteTodoApi({
    mutation: {
      onSuccess: (_, variables) => resetQueries(queryClient, variables.todoId),
    },
  });
};
