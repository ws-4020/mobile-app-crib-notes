import {LoadingOverlay} from 'bases/ui/loading/LoadingOverlay';
import {useCallback} from 'react';

import {useDeleteTodo} from '../services/useDeleteTodo';

export const useEditTodoRemove = (todoId: number, goBack: () => void) => {
  const deleteTodo = useDeleteTodo();
  const remove = useCallback(async () => {
    try {
      LoadingOverlay.visible(true);
      await deleteTodo.mutateAsync({todoId});
      goBack();
    } finally {
      LoadingOverlay.visible(false);
    }
  }, [deleteTodo, goBack, todoId]);
  return {remove, isLoading: deleteTodo.isLoading};
};
