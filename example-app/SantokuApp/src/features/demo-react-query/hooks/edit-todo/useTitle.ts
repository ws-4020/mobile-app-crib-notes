import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useTitle = () => {
  return useClientState<string>(['demo-react-query', 'edit-todo', 'title']);
};
