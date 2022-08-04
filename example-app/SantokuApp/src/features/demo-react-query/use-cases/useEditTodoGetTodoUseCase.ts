import {useGetTodo as useGetTodoApi} from 'features/sandbox/apis/api';

export const useEditTodoGetTodoUseCase = (todoId: number) => {
  return useGetTodoApi(todoId);
};
