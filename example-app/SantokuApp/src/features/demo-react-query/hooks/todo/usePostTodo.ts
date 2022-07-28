import {usePostTodo as usePostTodoApi} from 'features/sandbox/apis/api';
import {useQueryClient} from 'react-query';

import {resetQueries} from '../../utils/resetQueries';

export const usePostTodo = () => {
  const queryClient = useQueryClient();
  return usePostTodoApi({
    mutation: {
      onSuccess: () => resetQueries(queryClient),
    },
  });
};
