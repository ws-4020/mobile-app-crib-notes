import {useGetAccountsMeService} from 'features/account/hooks/useGetAccountsMeService';

export const useRefreshAccountMeUseCase = () => {
  const {refetch} = useGetAccountsMeService();
  return {refreshAccountMe: refetch};
};
