import {todosPipe} from 'features/demo-react-query/utils/todosPipe';

import {useListTodoByCursorInfinite} from '../todo/useListTodoByCursorInfinite';

export const useTodosUseCase = () => {
  const {data, ...rest} = useListTodoByCursorInfinite();
  return {todos: todosPipe(data), ...rest};
};
