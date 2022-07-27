import {useLoadingOverlay} from 'bases/ui/contexts/useLoadingOverlay';
import {useDeleteTodo, useGetTodo, usePutTodo} from 'features/sandbox/sandboxService';
import {useCallback, useEffect, useState} from 'react';

export const useEditTodoDemo = ({goBack, todoId}: {goBack: () => void; todoId: number}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const loadingOverlay = useLoadingOverlay();
  const todoQuery = useGetTodo(todoId);
  const todo = todoQuery.data?.data;
  const putTodo = usePutTodo();
  const deleteTodo = useDeleteTodo();

  const onEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const onChangeTitle = useCallback((newTitle: string) => {
    setTitle(newTitle);
  }, []);

  const onChangeDescription = useCallback((newDescription: string) => {
    setDescription(newDescription);
  }, []);

  const onSave = useCallback(async () => {
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
  }, [title, description, loadingOverlay, putTodo, todoId]);

  const onDelete = useCallback(async () => {
    try {
      loadingOverlay.setVisible(true);
      await deleteTodo.mutateAsync({todoId});
      goBack();
    } finally {
      loadingOverlay.setVisible(false);
    }
  }, [deleteTodo, goBack, loadingOverlay, todoId]);

  useEffect(() => {
    if (!isEdit && todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [isEdit, todo]);

  return {
    isEdit,
    title,
    description,
    todoQuery,
    todo,
    putTodo,
    deleteTodo,
    onEdit,
    onChangeTitle,
    onChangeDescription,
    onSave,
    onDelete,
  };
};
