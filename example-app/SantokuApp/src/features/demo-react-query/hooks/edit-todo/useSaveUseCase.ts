import {useLoadingOverlay} from 'bases/ui/contexts/useLoadingOverlay';
import {useCallback} from 'react';

import {usePutTodo} from '../todo/usePutTodo';
import {useDescription} from './useDescription';
import {useIsEdit} from './useIsEdit';
import {useTitle} from './useTitle';

export const useSaveUseCase = (todoId: number) => {
  const [title] = useTitle();
  const [description] = useDescription();
  const [, setIsEdit] = useIsEdit();
  const loadingOverlay = useLoadingOverlay();
  const putTodo = usePutTodo();
  const save = useCallback(async () => {
    if (title && description) {
      try {
        loadingOverlay.setVisible(true);
        const data = {title, description};
        await putTodo.mutateAsync({todoId, data});
        setIsEdit(false);
      } finally {
        loadingOverlay.setVisible(false);
      }
    }
  }, [title, description, loadingOverlay, putTodo, todoId, setIsEdit]);
  return {save, isLoading: putTodo.isLoading};
};
