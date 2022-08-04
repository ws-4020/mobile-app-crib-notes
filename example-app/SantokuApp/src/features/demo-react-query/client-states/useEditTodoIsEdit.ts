import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useEditTodoIsEdit = () => {
  return useClientState(['demo-react-query', 'edit-todo', 'isEdit'], false);
};
