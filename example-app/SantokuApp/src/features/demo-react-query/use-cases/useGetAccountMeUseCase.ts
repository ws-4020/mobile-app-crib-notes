import {useGetAccountsMe} from 'features/account/services/useGetAccountsMe';

export const useGetAccountMeUseCase = () => {
  const {isLoading, isRefetching, isError, data} = useGetAccountsMe();
  return {isLoading, isRefetching, isError, data};
};
