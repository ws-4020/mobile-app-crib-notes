import {useMemo} from 'react';

import {useTodoDetails} from '../todo/useTodoDetails';

export const useTodos = () => {
  const {data, isSuccess} = useTodoDetails();
  const todos = useMemo(() => {
    return isSuccess ? data?.map(response => response.data) ?? [] : [];
  }, [data, isSuccess]);
  return {todos};
};
