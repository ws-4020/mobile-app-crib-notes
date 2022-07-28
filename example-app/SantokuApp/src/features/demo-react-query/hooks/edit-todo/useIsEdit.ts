import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useIsEdit = () => {
  return useClientState(['demo-react-query', 'edit-todo', 'isEdit'], false);
};
