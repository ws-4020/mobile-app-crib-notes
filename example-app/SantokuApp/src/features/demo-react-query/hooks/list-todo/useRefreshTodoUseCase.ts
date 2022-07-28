import {useTodos} from './useTodos';

export const useRefreshTodoUseCase = () => {
  const {refetch} = useTodos();
  return {refreshTodo: refetch};
};
