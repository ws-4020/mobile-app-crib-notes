import {useCallback} from 'react';

import {useEditTodoIsEdit} from '../client-states/useEditTodoIsEdit';

export const useEditTodoEdit = () => {
  const [, setIsEdit] = useEditTodoIsEdit();
  const edit = useCallback(() => {
    setIsEdit(true);
  }, [setIsEdit]);
  return {edit};
};
