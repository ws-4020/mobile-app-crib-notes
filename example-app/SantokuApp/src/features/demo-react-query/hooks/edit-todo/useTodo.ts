import {useGetTodo} from './useGetTodo';

export const useTodo = (todoId: number) => {
  return useGetTodo(todoId);
};
