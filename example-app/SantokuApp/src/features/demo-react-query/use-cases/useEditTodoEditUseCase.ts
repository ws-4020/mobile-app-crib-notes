import {useCallback} from 'react';

import {useEditTodoIsEdit} from '../client-states/useEditTodoIsEdit';

export const useEditTodoEditUseCase = () => {
  const [, setIsEdit] = useEditTodoIsEdit();
  const edit = useCallback(() => {
    setIsEdit(true);
  }, [setIsEdit]);
  return {edit};
};
