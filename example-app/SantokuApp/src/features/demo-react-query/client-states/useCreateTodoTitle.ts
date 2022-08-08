import {useClientState} from 'bases/react-query/useClientState';

export const useCreateTodoTitle = () => {
  return useClientState<string>(['demo-react-query', 'create-todo', 'title']);
};
