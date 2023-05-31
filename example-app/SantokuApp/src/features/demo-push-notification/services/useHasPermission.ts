import messaging from '@react-native-firebase/messaging';
import {useQuery} from 'react-query';

export const useHasPermission = () => {
  const query = useQuery(['demo', 'push-notification', 'hasPermission'], () => messaging().hasPermission());
  return {...query, permission: query.data};
};
