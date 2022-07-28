import {useMemo} from 'react';

import {useListTodoByCursorInfinite} from '../todo/useListTodoByCursorInfinite';

export const useTodos = () => {
  const {isSuccess, data, ...rest} = useListTodoByCursorInfinite();
  const todos = useMemo(() => {
    if (isSuccess && data) {
      const pages = data.pages;
      return pages.map(page => page.data.content).flat();
    } else {
      return [];
    }
  }, [isSuccess, data]);
  return {todos, isSuccess, ...rest};
};
