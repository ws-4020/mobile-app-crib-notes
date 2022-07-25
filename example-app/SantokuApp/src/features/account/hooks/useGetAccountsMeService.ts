import {useGetAccountsMe} from 'features/backend/apis/account/account';

export const useGetAccountsMeService = (options?: {query?: {enabled?: boolean}}) => {
  return useGetAccountsMe(options);
};
