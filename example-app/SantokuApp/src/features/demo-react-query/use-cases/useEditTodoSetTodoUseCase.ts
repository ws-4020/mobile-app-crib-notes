import {useCallback} from 'react';

import {useEditTodoDescription} from '../client-states/useEditTodoDescription';
import {useEditTodoIsEdit} from '../client-states/useEditTodoIsEdit';
import {useEditTodoTitle} from '../client-states/useEditTodoTitle';
import {useEditTodoTodoUseCase} from './useEditTodoTodoUseCase';

export const useEditTodoSetTodoUseCase = (todoId: number) => {
  const [isEdit] = useEditTodoIsEdit();
  const [, setTitle] = useEditTodoTitle();
  const [, setDescription] = useEditTodoDescription();
  const {data} = useEditTodoTodoUseCase(todoId);
  const todo = data?.data;
  const setTodo = useCallback(() => {
    if (!isEdit && todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [isEdit, setDescription, setTitle, todo]);
  return {setTodo};
};
