import {useCallback} from 'react';

import {useDescription} from './useDescription';

export const useChangeDescriptionUseCase = () => {
  const [, setDescription] = useDescription();
  const changeDescription = useCallback(
    (newDescription: string) => {
      setDescription(newDescription);
    },
    [setDescription],
  );
  return {changeDescription};
};
