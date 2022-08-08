import {useGetAccountsMe} from 'features/account/services/useGetAccountsMe';

export const useGetAccountMeRefresh = () => {
  const {refetch} = useGetAccountsMe();
  return {refreshAccountMe: refetch};
};
