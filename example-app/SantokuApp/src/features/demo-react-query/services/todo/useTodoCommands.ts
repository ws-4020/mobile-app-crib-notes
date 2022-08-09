import {
  getGetTodoQueryKey,
  getListTodoByCursorQueryKey,
  getListTodoQueryKey,
  useDeleteTodo,
  usePostTodo,
  usePutTodo,
} from 'features/sandbox/apis/api';
import {useQueryClient} from 'react-query';

export const useTodoCommands = () => {
  const queryClient = useQueryClient();

  const {mutateAsync: create, isLoading: isCreating} = usePostTodo({
    mutation: {
      onSuccess: async () => {
        await queryClient.resetQueries(getListTodoQueryKey());
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
        await queryClient.resetQueries('Todo#useListDetails');
      },
    },
  });

  const {mutateAsync: save, isLoading: isSaving} = usePutTodo({
    mutation: {
      onSuccess: async response => {
        await queryClient.resetQueries(getListTodoQueryKey());
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
        await queryClient.resetQueries('Todo#useListDetails');
        await queryClient.resetQueries(getGetTodoQueryKey(response.data.id));
      },
    },
  });

  const {mutateAsync: remove, isLoading: isRemoving} = useDeleteTodo({
    mutation: {
      onSuccess: async () => {
        await queryClient.resetQueries(getListTodoQueryKey());
        await queryClient.resetQueries(getListTodoByCursorQueryKey());
        await queryClient.resetQueries('Todo#useListDetails');
      },
    },
  });

  return {
    create,
    isCreating,
    save,
    isSaving,
    remove,
    isRemoving,
    isProcessing: isCreating || isSaving || isRemoving,
  };
};
