import {useTodoDetails} from '../services/useTodoDetails';

export const useDependentQuery3Refresh = () => {
  const {refetch} = useTodoDetails();
  return {refresh: refetch};
};
