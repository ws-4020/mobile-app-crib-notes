import {useGetTodo as useGetTodoApi} from 'features/sandbox/apis/api';

export const useEditTodoGetTodo = (todoId: number) => {
  return useGetTodoApi(todoId);
};
