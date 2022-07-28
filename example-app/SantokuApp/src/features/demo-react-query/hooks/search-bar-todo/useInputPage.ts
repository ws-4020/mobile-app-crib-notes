import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useInputPage = () => {
  return useClientState(['demo-react-query', 'search-bar-todo', 'inputPage'], '');
};
