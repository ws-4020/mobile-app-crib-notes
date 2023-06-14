import messaging from '@react-native-firebase/messaging';
import {useQuery} from 'react-query';

const getFcmToken = () => {
  return messaging().getToken();
};

export const useGetFcmToken = () => {
  const query = useQuery(['demo', 'push-notification', 'getFcmToken'], getFcmToken);
  return {...query, fcmToken: query.data};
};
