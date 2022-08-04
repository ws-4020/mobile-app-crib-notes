import {useCallback} from 'react';

import {useCreateTodoTitle} from '../client-states/useCreateTodoTitle';

export const useCreateTodoChangeTitleUseCase = () => {
  const [, setTitle] = useCreateTodoTitle();
  const changeTitle = useCallback(
    (newTitle: string) => {
      setTitle(newTitle);
    },
    [setTitle],
  );
  return {changeTitle};
};
