import {useListTodoByCursorInfinite as useListTodoByCursorInfiniteApi} from 'features/sandbox/apis/api';
import {ListTodoByCursorParams} from 'features/sandbox/apis/model';

export const useListTodoByCursorInfinite = (params?: ListTodoByCursorParams) => {
  return useListTodoByCursorInfiniteApi(params, {
    query: {
      getNextPageParam: lastPage => {
        return lastPage.data.nextCursor;
      },
    },
  });
};
