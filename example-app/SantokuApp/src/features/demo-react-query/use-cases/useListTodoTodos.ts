import {translateTodos} from 'features/demo-react-query/utils/translateTodos';

import {useListTodoByCursorInfinite} from '../services/useListTodoByCursorInfinite';

export const useListTodoTodos = () => {
  const {data, ...rest} = useListTodoByCursorInfinite();
  return {todos: translateTodos(data), ...rest};
};
