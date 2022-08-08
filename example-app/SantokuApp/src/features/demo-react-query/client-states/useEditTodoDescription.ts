import {useClientState} from 'bases/react-query/useClientState';

export const useEditTodoDescription = () => {
  return useClientState<string>(['demo-react-query', 'edit-todo', 'description']);
};
