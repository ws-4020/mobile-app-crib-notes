import {useCallback} from 'react';

import {useCreateTodoTitle} from '../client-states/useCreateTodoTitle';

export const useCreateTodoChangeTitle = () => {
  const [, setTitle] = useCreateTodoTitle();
  const changeTitle = useCallback(
    (newTitle: string) => {
      setTitle(newTitle);
    },
    [setTitle],
  );
  return {changeTitle};
};
