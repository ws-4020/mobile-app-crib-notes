import {useClientState} from 'bases/react-query/utils/useClientState';

export const useSearchFormTodoInputPage = () => {
  return useClientState(['demo-react-query', 'search-form-todo', 'inputPage'], '');
};
