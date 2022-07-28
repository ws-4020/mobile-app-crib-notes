import {useLoadingOverlay} from 'bases/ui/contexts/useLoadingOverlay';
import {useCallback} from 'react';

import {usePostTodo} from '../todo/usePostTodo';
import {useDescription} from './useDescription';
import {useTitle} from './useTitle';

export const useRegisterTodoUseCase = (replaceToEditTodoDemo: (todoId: number) => void) => {
  const [title] = useTitle();
  const [description] = useDescription();
  const loadingOverlay = useLoadingOverlay();
  const postTodo = usePostTodo();
  const registerTodo = useCallback(() => {
    if (title && description) {
      loadingOverlay.setVisible(true);
      postTodo
        .mutateAsync({data: {title, description}})
        .then(data => {
          const todo = data.data;
          replaceToEditTodoDemo(todo.id);
        })
        .finally(() => {
          loadingOverlay.setVisible(false);
        });
    }
  }, [title, description, loadingOverlay, postTodo, replaceToEditTodoDemo]);

  return {registerTodo, isLoading: postTodo.isLoading};
};
