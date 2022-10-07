import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {Question} from 'features/backend/apis/model';
import React from 'react';

import {QuestionListCard} from './QuestionListCard';

export type QuestionListProps = {
  data?: Question[];
  navigateToQuestionDetail: (questionId: string) => void;
};

export const QuestionList: React.VFC<QuestionListProps> = ({data, navigateToQuestionDetail}) => {
  return (
    <StyledColumn space="p16">
      {data?.map(item => (
        <QuestionListCard key={item.questionId} question={item} navigateToQuestionDetail={navigateToQuestionDetail} />
      ))}
    </StyledColumn>
  );
};
