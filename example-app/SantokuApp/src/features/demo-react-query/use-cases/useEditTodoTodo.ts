import {useEditTodoGetTodo} from './useEditTodoGetTodo';

export const useEditTodoTodo = (todoId: number) => {
  return useEditTodoGetTodo(todoId);
};
