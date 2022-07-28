import {useItemQuery} from './useItemQuery';

export const useRefreshUseCase = () => {
  const {refetch} = useItemQuery();
  return {refresh: refetch};
};
