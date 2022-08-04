import {useCallback} from 'react';

import {useEditTodoDescription} from '../client-states/useEditTodoDescription';

export const useEditTodoChangeDescriptionUseCase = () => {
  const [, setDescription] = useEditTodoDescription();
  const changeDescription = useCallback(
    (newDescription: string) => {
      setDescription(newDescription);
    },
    [setDescription],
  );
  return {changeDescription};
};
