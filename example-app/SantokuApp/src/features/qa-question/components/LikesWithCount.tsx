import {Box, Text} from 'bases/ui/common';
import {ThumbUpIllustration} from 'bases/ui/illustration/ThumbUpIllustration';
import React from 'react';

type LikesWithCountProps = {
  count: number;
};
export const LikesWithCount: React.FC<LikesWithCountProps> = ({count}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      <ThumbUpIllustration color="grey1" size="p24" />
      <Box px="p4" />
      <Text fontSize={14} fontWeight="400" letterSpacing={0.25}>
        {count}
      </Text>
    </Box>
  );
};
