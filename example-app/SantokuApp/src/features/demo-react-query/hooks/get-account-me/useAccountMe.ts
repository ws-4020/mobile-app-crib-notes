import {useGetAccountsMe} from 'features/account/hooks/useGetAccountsMe';

export const useAccountMe = () => {
  const {isLoading, isRefetching, isError, data} = useGetAccountsMe();
  return {isLoading, isRefetching, isError, data};
};
