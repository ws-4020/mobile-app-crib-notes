import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useSearchBarTodoInputPage = () => {
  return useClientState(['demo-react-query', 'search-bar-todo', 'inputPage'], '');
};
