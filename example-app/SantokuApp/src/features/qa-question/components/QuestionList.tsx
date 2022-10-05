import {Box, Text} from 'bases/ui/common';
import {FilterAltIllustration} from 'bases/ui/illustration/FilterAltIllustration';
import {LocalOfferIllustration} from 'bases/ui/illustration/LocalOfferIllustration';
import {SortIllustration} from 'bases/ui/illustration/SortIllustration';
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
      <Box
        marginHorizontal="p16"
        marginTop="p32"
        marginBottom="p8"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text variant="font20Bold">質問</Text>
        <Box flexDirection="row">
          <SortIllustration />
          <Box p="p8" />
          <FilterAltIllustration />
          <Box p="p8" />
          <LocalOfferIllustration />
        </Box>
      </Box>
      {data?.map(item => (
        <Box key={item.questionId}>
          <QuestionListCard question={item} navigateToQuestionDetail={navigateToQuestionDetail} />
          <Box py="p8" />
        </Box>
      ))}
    </Box>
  );
};
