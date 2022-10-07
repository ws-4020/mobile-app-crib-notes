import {GetListQuestionsParams} from 'features/backend/apis/model';
import {getGetListQuestionsQueryKey, useGetListQuestions} from 'features/backend/apis/question/question';
import {useCallback, useState} from 'react';
import {useQueryClient} from 'react-query';

export const useQuestions = (initialParams?: GetListQuestionsParams) => {
  const queryClient = useQueryClient();
  const [listParams, setListParams] = useState(initialParams);
  const query = useGetListQuestions(listParams, {query: {keepPreviousData: true}});
  const invalidate = useCallback(
    () => queryClient.invalidateQueries(getGetListQuestionsQueryKey(), undefined, {throwOnError: true}),
    [queryClient],
  );
  return {...query, data: query.data?.data, listParams, setListParams, invalidate};
};
