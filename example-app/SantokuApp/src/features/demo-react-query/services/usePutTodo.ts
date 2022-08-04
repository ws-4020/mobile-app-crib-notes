import {usePutTodo as usePutTodoApi} from 'features/sandbox/apis/api';
import {useQueryClient} from 'react-query';

import {resetQueries} from './resetQueries';

export const usePutTodo = () => {
  const queryClient = useQueryClient();
  return usePutTodoApi({
    mutation: {
      onSuccess: (_, variables) => resetQueries(queryClient, variables.todoId),
    },
  });
};
