import {useCallback} from 'react';

import {useCreateTodoDescription} from '../client-states/useCreateTodoDescription';

export const useCreateTodoChangeDescription = () => {
  const [, setDescription] = useCreateTodoDescription();
  const changeDescription = useCallback(
    (newDescription: string) => {
      setDescription(newDescription);
    },
    [setDescription],
  );
  return {changeDescription};
};
