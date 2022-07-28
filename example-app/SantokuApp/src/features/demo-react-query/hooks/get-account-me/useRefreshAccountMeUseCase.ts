import {useGetAccountsMe} from 'features/account/hooks/useGetAccountsMe';

export const useRefreshAccountMeUseCase = () => {
  const {refetch} = useGetAccountsMe();
  return {refreshAccountMe: refetch};
};
