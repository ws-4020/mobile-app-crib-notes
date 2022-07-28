import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useDescription = () => {
  return useClientState<string>(['demo-react-query', 'create-todo', 'description']);
};
