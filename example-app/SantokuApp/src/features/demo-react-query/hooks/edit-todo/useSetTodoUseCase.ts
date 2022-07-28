import {useCallback} from 'react';

import {useDescription} from './useDescription';
import {useIsEdit} from './useIsEdit';
import {useTitle} from './useTitle';
import {useTodo} from './useTodo';

export const useSetTodoUseCase = (todoId: number) => {
  const [isEdit] = useIsEdit();
  const [, setTitle] = useTitle();
  const [, setDescription] = useDescription();
  const {data} = useTodo(todoId);
  const todo = data?.data;
  const setTodo = useCallback(() => {
    if (!isEdit && todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [isEdit, setDescription, setTitle, todo]);
  return {setTodo};
};
