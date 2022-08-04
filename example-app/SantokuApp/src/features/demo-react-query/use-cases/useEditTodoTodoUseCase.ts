import {useEditTodoGetTodoUseCase} from './useEditTodoGetTodoUseCase';

export const useEditTodoTodoUseCase = (todoId: number) => {
  return useEditTodoGetTodoUseCase(todoId);
};
