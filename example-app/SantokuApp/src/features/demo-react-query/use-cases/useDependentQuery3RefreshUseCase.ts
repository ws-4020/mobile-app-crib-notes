import {useTodoDetails} from '../services/useTodoDetails';

export const useDependentQuery3RefreshUseCase = () => {
  const {refetch} = useTodoDetails();
  return {refresh: refetch};
};
