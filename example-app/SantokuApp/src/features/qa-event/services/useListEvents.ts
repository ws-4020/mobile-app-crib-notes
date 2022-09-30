import {useGetEvents} from 'features/backend/apis/event/event';

export const useListEvents = () => {
  const query = useGetEvents({target: 'all'});
  return {...query, data: query.data?.data};
};
