import {useCallback} from 'react';

import {useInputPage} from './useInputPage';
import {useParams} from './useParams';

export const useSearchTodo = () => {
  const [, setParams] = useParams();
  const [inputPage] = useInputPage();
  const searchTodo = useCallback(() => {
    const page = Number(inputPage);
    if (Number.isInteger(page) && page > 0) {
      setParams({page});
    }
  }, [inputPage, setParams]);
  return {searchTodo};
};
