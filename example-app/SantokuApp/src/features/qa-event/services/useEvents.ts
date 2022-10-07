import {getGetEventsQueryKey, useGetEvents} from 'features/backend/apis/event/event';
import {GetEventsParams} from 'features/backend/apis/model';
import {useCallback, useState} from 'react';
import {useQueryClient} from 'react-query';

export const useEvents = (initialParams: GetEventsParams) => {
  const queryClient = useQueryClient();
  const [listParams, setListParams] = useState(initialParams);
  const query = useGetEvents(listParams);
  const invalidate = useCallback(
    () => queryClient.invalidateQueries(getGetEventsQueryKey(listParams)),
    [listParams, queryClient],
  );
  return {...query, data: query.data?.data, listParams, setListParams, invalidate};
};
