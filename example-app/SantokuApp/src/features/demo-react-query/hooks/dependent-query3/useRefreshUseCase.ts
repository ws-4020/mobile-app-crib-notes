import {useTodoDetails} from '../todo/useTodoDetails';

export const useRefreshUseCase = () => {
  const {refetch} = useTodoDetails();
  return {refresh: refetch};
};
