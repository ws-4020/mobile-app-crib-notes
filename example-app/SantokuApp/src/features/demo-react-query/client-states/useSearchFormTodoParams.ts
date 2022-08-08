import {useClientState} from 'bases/react-query/useClientState';
import {ListTodoParams} from 'features/sandbox/apis/model';

export const useSearchFormTodoParams = () => {
  return useClientState<ListTodoParams>(['demo-react-query', 'search-form-todo', 'params']);
};
