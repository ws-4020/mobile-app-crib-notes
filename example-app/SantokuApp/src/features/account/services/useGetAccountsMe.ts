import {useGetAccountsMe as useGetAccountsMeApi} from 'features/backend/apis/account/account';

export const useGetAccountsMe = (options?: {query?: {enabled?: boolean}}) => {
  return useGetAccountsMeApi(options);
};
