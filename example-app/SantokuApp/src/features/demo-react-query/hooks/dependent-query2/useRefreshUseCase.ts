import {useItemInfo} from './useItemInfo';

export const useRefreshUseCase = () => {
  const {refetch} = useItemInfo();
  return {refresh: refetch};
};
