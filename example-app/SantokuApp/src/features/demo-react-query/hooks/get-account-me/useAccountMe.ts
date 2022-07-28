import {useGetAccountsMeService} from 'features/account/hooks/useGetAccountsMeService';

export const useAccountMe = () => {
  const {isLoading, isRefetching, isError, data} = useGetAccountsMeService();
  return {isLoading, isRefetching, isError, data};
};
