import {translateTodos} from 'features/demo-react-query/utils/translateTodos';

import {useListTodoByCursorInfinite} from '../todo/useListTodoByCursorInfinite';

export const useTodosUseCase = () => {
  const {data, ...rest} = useListTodoByCursorInfinite();
  return {todos: translateTodos(data), ...rest};
};
