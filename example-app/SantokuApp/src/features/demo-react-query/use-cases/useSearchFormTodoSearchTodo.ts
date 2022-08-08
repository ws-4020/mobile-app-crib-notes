import {useCallback} from 'react';

import {useSearchFormTodoInputPage} from '../client-states/useSearchFormTodoInputPage';
import {useSearchFormTodoParams} from '../client-states/useSearchFormTodoParams';

export const useSearchFormTodoSearchTodo = () => {
  const [, setParams] = useSearchFormTodoParams();
  const [inputPage] = useSearchFormTodoInputPage();
  const searchTodo = useCallback(() => {
    const page = Number(inputPage);
    if (Number.isInteger(page) && page > 0) {
      setParams({page});
    }
  }, [inputPage, setParams]);
  return {searchTodo};
};
