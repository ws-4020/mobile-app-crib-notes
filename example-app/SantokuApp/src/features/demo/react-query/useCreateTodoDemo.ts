import {useLoadingOverlay} from 'bases/ui/contexts/useLoadingOverlay';
import {usePostTodo} from 'features/sandbox/sandboxService';
import {useCallback, useState} from 'react';

const useCreateTodoDemo = (replaceToEditTodoDemo: (todoId: number) => void) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const loadingOverlay = useLoadingOverlay();
  const postTodo = usePostTodo();

  const onChangeTitle = useCallback((newTitle: string) => {
    setTitle(newTitle);
  }, []);

  const onChangeDescription = useCallback((newDescription: string) => {
    setDescription(newDescription);
  }, []);

  const onSubmit = useCallback(() => {
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

  return {
    title,
    description,
    isLoading: postTodo.isLoading,
    onChangeTitle,
    onChangeDescription,
    onSubmit,
  };
};

export {useCreateTodoDemo};
