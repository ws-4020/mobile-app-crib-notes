import {useMemo} from 'react';

import {useDisabledQueryEnabled} from '../client-states/useDisabledQueryEnabled';
import {useListTodo} from '../services/useListTodo';

export const useDisabledQueryTodos = () => {
  const [queryEnabled] = useDisabledQueryEnabled();
  const {data, isSuccess, ...rest} = useListTodo(
    {},
    {
      enabled: queryEnabled,
    },
  );
  const todos = useMemo(() => {
    return isSuccess ? data?.data.content ?? [] : [];
  }, [isSuccess, data]);
  return {todos, isSuccess, ...rest};
};
