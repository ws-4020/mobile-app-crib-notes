import {useListTodo} from '../todo/useListTodo';
import {useParams} from './useParams';

export const useTodos = () => {
  const [params] = useParams();
  const {isFetching, isError, data} = useListTodo(params, {enabled: params !== undefined});
  return {isFetching, isError, data};
};
