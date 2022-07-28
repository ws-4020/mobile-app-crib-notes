import {useLoadingOverlay} from 'bases/ui/contexts/useLoadingOverlay';
import {useCallback} from 'react';

import {useDeleteTodo} from '../todo/useDeleteTodo';

export const useRemoveUseCase = (todoId: number, goBack: () => void) => {
  const loadingOverlay = useLoadingOverlay();
  const deleteTodo = useDeleteTodo();
  const remove = useCallback(async () => {
    try {
      loadingOverlay.setVisible(true);
      await deleteTodo.mutateAsync({todoId});
      goBack();
    } finally {
      loadingOverlay.setVisible(false);
    }
  }, [deleteTodo, goBack, loadingOverlay, todoId]);
  return {remove, isLoading: deleteTodo.isLoading};
};
