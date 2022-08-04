import {useClientState} from 'bases/react-query/utils/useClientState';

export const useEditTodoIsEdit = () => {
  return useClientState(['demo-react-query', 'edit-todo', 'isEdit'], false);
};
