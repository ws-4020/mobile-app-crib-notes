import {Box} from 'bases/ui/common';
import {Question} from 'features/backend/apis/model';
import React from 'react';

import {QuestionListCard} from './QuestionListCard';

export type QuestionListProps = {
  data?: Question[];
  navigateToQuestionDetail: (questionId: string) => void;
};

export const QuestionList: React.VFC<QuestionListProps> = ({data, navigateToQuestionDetail}) => {
  return (
    <Box>
      {data?.map(item => (
        <Box key={item.questionId}>
          <QuestionListCard question={item} navigateToQuestionDetail={navigateToQuestionDetail} />
          <Box py="p8" />
        </Box>
      ))}
    </Box>
  );
};
