import {useListTodoTodos} from './useListTodoTodos';

export const useListTodoRefreshTodo = () => {
  const {refetch} = useListTodoTodos();
  return {refreshTodo: refetch};
};
