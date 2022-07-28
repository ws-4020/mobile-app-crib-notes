import {useCallback} from 'react';

import {useTitle} from './useTitle';

export const useChangeTitle = () => {
  const [, setTitle] = useTitle();
  const changeTitle = useCallback(
    (newTitle: string) => {
      setTitle(newTitle);
    },
    [setTitle],
  );
  return {changeTitle};
};
