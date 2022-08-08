import {LoadingOverlay} from 'bases/ui/overlay/loading/LoadingOverlay';
import {useCallback} from 'react';

import {useCreateTodoDescription} from '../client-states/useCreateTodoDescription';
import {useCreateTodoTitle} from '../client-states/useCreateTodoTitle';
import {usePostTodo} from '../services/usePostTodo';

export const useCreateTodoRegisterTodoUseCase = (replaceToEditTodoDemo: (todoId: number) => void) => {
  const [title] = useCreateTodoTitle();
  const [description] = useCreateTodoDescription();
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
