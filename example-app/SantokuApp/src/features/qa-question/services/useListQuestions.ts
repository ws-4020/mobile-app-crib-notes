import {useGetListQuestions} from 'features/backend/apis/question/question';

export const useListQuestions = () => {
  const query = useGetListQuestions();
  return {...query, data: query.data?.data};
};
