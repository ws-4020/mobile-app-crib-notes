import {useClientState} from 'bases/react-query/utils/useClientState';

export const useSearchBarTodoInputPage = () => {
  return useClientState(['demo-react-query', 'search-bar-todo', 'inputPage'], '');
};
