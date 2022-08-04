import {useClientState} from 'bases/react-query/utils/useClientState';

export const useEditTodoTitle = () => {
  return useClientState<string>(['demo-react-query', 'edit-todo', 'title']);
};
