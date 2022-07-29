import {LoadingOverlay} from 'bases/ui/components/overlay/loading/LoadingOverlay';
import {useCallback} from 'react';

import {usePutTodo} from '../todo/usePutTodo';
import {useDescription} from './useDescription';
import {useIsEdit} from './useIsEdit';
import {useTitle} from './useTitle';

export const useSaveUseCase = (todoId: number) => {
  const [title] = useTitle();
  const [description] = useDescription();
  const [, setIsEdit] = useIsEdit();
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
