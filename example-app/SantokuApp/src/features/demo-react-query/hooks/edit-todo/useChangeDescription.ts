import {useCallback} from 'react';

import {useDescription} from './useDescription';

export const useChangeDescription = () => {
  const [, setDescription] = useDescription();
  const changeDescription = useCallback(
    (newDescription: string) => {
      setDescription(newDescription);
    },
    [setDescription],
  );
  return {changeDescription};
};
