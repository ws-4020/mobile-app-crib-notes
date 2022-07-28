import {useGetTodo as useGetTodoApi} from 'features/sandbox/apis/api';

export const useGetTodo = (todoId: number) => {
  return useGetTodoApi(todoId);
};
