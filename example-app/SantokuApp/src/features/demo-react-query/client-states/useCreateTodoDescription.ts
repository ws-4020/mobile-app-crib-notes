import {useClientState} from 'bases/react-query/utils/useClientState';

export const useCreateTodoDescription = () => {
  return useClientState<string>(['demo-react-query', 'create-todo', 'description']);
};
