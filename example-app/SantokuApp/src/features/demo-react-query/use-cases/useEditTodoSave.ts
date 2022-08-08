import {LoadingOverlay} from 'bases/ui/loading/LoadingOverlay';
import {useCallback} from 'react';

import {useEditTodoDescription} from '../client-states/useEditTodoDescription';
import {useEditTodoIsEdit} from '../client-states/useEditTodoIsEdit';
import {useEditTodoTitle} from '../client-states/useEditTodoTitle';
import {usePutTodo} from '../services/usePutTodo';

export const useEditTodoSave = (todoId: number) => {
  const [title] = useEditTodoTitle();
  const [description] = useEditTodoDescription();
  const [, setIsEdit] = useEditTodoIsEdit();
  const putTodo = usePutTodo();
  const save = useCallback(async () => {
    if (title && description) {
      try {
        LoadingOverlay.visible(true);
        const data = {title, description};
        await putTodo.mutateAsync({todoId, data});
        setIsEdit(false);
      } finally {
        LoadingOverlay.visible(false);
      }
    }
  }, [title, description, putTodo, todoId, setIsEdit]);
  return {save, isLoading: putTodo.isLoading};
};
