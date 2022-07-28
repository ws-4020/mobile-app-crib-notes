import {useMemo} from 'react';

import {useListTodo} from '../todo/useListTodo';
import {useQueryEnabled} from './useQueryEnabled';

export const useTodos = () => {
  const [queryEnabled] = useQueryEnabled();
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
