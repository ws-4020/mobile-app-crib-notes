import {useQuery} from 'react-query';

import {getFcmToken} from './getFcmToken';

export const useGetFcmToken = () => {
  const query = useQuery(['demo', 'push-notification', 'getFcmToken'], getFcmToken);
  return {...query, fcmToken: query.data};
};
