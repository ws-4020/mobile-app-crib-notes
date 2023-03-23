import {tryAddPlus} from 'bases/core/utils/tryAddPlus';
import {Box, Text} from 'bases/ui/common';
import {QuestionAnswerIllustration} from 'bases/ui/illustration/QuestionAnswerIllustration';
import React from 'react';

type CommentWithCountProps = {
  count: number;
};
export const CommentWithCount: React.FC<CommentWithCountProps> = ({count}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      <QuestionAnswerIllustration color="grey1" />
      <Box px="p4" />
      <Text fontSize={14} lineHeight={20} letterSpacing={0.25}>
        {tryAddPlus(count, 999)}
      </Text>
    </Box>
  );
};
