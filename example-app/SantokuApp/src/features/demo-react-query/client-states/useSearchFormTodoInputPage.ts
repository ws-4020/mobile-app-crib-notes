import {useClientState} from 'bases/react-query/useClientState';

export const useSearchFormTodoInputPage = () => {
  return useClientState(['demo-react-query', 'search-form-todo', 'inputPage'], '');
};
