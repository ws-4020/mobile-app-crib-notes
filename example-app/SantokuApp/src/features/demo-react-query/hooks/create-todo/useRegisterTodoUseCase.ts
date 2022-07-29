import {LoadingOverlay} from 'bases/ui/components/overlay/loading/LoadingOverlay';
import {useCallback} from 'react';

import {usePostTodo} from '../todo/usePostTodo';
import {useDescription} from './useDescription';
import {useTitle} from './useTitle';

export const useRegisterTodoUseCase = (replaceToEditTodoDemo: (todoId: number) => void) => {
  const [title] = useTitle();
  const [description] = useDescription();
  const postTodo = usePostTodo();
  const registerTodo = useCallback(() => {
    if (title && description) {
      LoadingOverlay.visible(true);
      postTodo
        .mutateAsync({data: {title, description}})
        .then(data => {
          const todo = data.data;
          replaceToEditTodoDemo(todo.id);
        })
        .finally(() => {
          LoadingOverlay.visible(false);
        });
    }
  }, [title, description, postTodo, replaceToEditTodoDemo]);

  return {registerTodo, isLoading: postTodo.isLoading};
};
