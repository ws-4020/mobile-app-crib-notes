import {GetListQuestionsParams} from 'features/backend/apis/model';
import {getGetListQuestionsQueryKey, useGetListQuestions} from 'features/backend/apis/question/question';
import {useCallback, useState} from 'react';
import {useQueryClient} from 'react-query';

export const useQuestions = (
  initialParams?: GetListQuestionsParams,
  initialQueryOptions: {keepPreviousData: boolean} = {keepPreviousData: true},
) => {
  const queryClient = useQueryClient();
  const [listParams, setListParams] = useState(initialParams);
  const [queryOption, setQueryOption] = useState(initialQueryOptions);
  const query = useGetListQuestions(listParams, {query: queryOption});
  const invalidate = useCallback(
    () => queryClient.invalidateQueries(getGetListQuestionsQueryKey(listParams)),
    [listParams, queryClient],
  );
  return {...query, data: query.data?.data, listParams, setListParams, queryOption, setQueryOption, invalidate};
};
