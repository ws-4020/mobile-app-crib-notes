import {useMemo} from 'react';

import {useTodoDetails} from '../services/useTodoDetails';

export const useDependentQuery3Todos = () => {
  const {data, isSuccess} = useTodoDetails();
  const todos = useMemo(() => {
    return isSuccess ? data?.map(response => response.data) ?? [] : [];
  }, [data, isSuccess]);
  return {todos};
};
