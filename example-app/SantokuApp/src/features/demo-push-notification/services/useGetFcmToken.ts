import {useQuery} from '@tanstack/react-query';
import {getFcmToken} from 'bases/firebase/messaging/getFcmToken';

export const useGetFcmToken = () => {
  const query = useQuery(['demo', 'push-notification', 'getFcmToken'], getFcmToken);
  return {...query, fcmToken: query.data};
};
