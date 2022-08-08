import {useGetAccountsMe} from 'features/account/services/useGetAccountsMe';

export const useGetAccountMe = () => {
  const {isLoading, isRefetching, isError, data} = useGetAccountsMe();
  return {isLoading, isRefetching, isError, data};
};
