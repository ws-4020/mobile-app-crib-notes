import {translateTodos} from 'features/demo-react-query/utils/translateTodos';

import {useListTodoByCursorInfinite} from '../services/useListTodoByCursorInfinite';

export const useListTodoTodosUseCase = () => {
  const {data, ...rest} = useListTodoByCursorInfinite();
  return {todos: translateTodos(data), ...rest};
};
