import {AxiosResponse} from 'axios';
import {QuestionAndAnswer} from 'features/backend/apis/model';
import {getGetDetailQuestionQueryKey} from 'features/backend/apis/question/question';
import {useQueryClient} from 'react-query';

export const useQuestionCommands = () => {
  const queryClient = useQueryClient();

  const setQuestion = (
    questionId: string,
    updater: (data?: AxiosResponse<QuestionAndAnswer>) => AxiosResponse<QuestionAndAnswer> | undefined,
  ) => {
    queryClient.setQueryData<AxiosResponse<QuestionAndAnswer> | undefined>(
      getGetDetailQuestionQueryKey(questionId),
      updater,
    );
  };

  const addQuestionLikes = (questionId: string, num: number) =>
    setQuestion(questionId, data => {
      if (data) {
        return {
          ...data,
          data: {
            ...data.data,
            question: {
              ...data.data.question,
              question: {...data.data.question.question, likes: data.data.question.question.likes + num},
            },
          },
        };
      }
      return undefined;
    });

  return {
    setQuestion,
    addQuestionLikes,
  };
};
