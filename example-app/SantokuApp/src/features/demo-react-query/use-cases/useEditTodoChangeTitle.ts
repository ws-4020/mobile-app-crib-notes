import {useCallback} from 'react';

import {useEditTodoTitle} from '../client-states/useEditTodoTitle';

export const useEditTodoChangeTitle = () => {
  const [, setTitle] = useEditTodoTitle();
  const changeTitle = useCallback(
    (newTitle: string) => {
      setTitle(newTitle);
    },
    [setTitle],
  );
  return {changeTitle};
};
