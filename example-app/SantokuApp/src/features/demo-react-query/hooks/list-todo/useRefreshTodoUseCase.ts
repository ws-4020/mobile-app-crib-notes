import {useTodosUseCase} from './useTodosUseCase';

export const useRefreshTodoUseCase = () => {
  const {refetch} = useTodosUseCase();
  return {refreshTodo: refetch};
};
