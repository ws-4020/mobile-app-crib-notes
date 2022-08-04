import {useSearchFormTodoParams} from '../client-states/useSearchFormTodoParams';
import {useListTodo} from '../services/useListTodo';

export const useSearchFormTodoTodosUseCase = () => {
  const [params] = useSearchFormTodoParams();
  const {isFetching, isError, data} = useListTodo(params, {enabled: params !== undefined});
  return {isFetching, isError, data};
};
