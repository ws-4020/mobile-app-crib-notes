import {useCallback} from 'react';

import {useIsEdit} from './useIsEdit';

export const useEditUseCase = () => {
  const [, setIsEdit] = useIsEdit();
  const edit = useCallback(() => {
    setIsEdit(true);
  }, [setIsEdit]);
  return {edit};
};
