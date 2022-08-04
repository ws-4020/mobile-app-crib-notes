import {useListTodoTodosUseCase} from './useListTodoTodosUseCase';

export const useListTodoRefreshTodoUseCase = () => {
  const {refetch} = useListTodoTodosUseCase();
  return {refreshTodo: refetch};
};
