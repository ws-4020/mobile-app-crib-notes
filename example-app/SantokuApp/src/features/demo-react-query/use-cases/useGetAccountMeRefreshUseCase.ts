import {useGetAccountsMe} from 'features/account/services/useGetAccountsMe';

export const useGetAccountMeRefreshUseCase = () => {
  const {refetch} = useGetAccountsMe();
  return {refreshAccountMe: refetch};
};
