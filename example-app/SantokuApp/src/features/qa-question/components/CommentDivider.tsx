import {Box} from 'bases/ui/common';
import React from 'react';

export const CommentDivider: React.FC<React.PropsWithChildren<unknown>> = () => {
  return <Box flex={1} height={1} px="p16" backgroundColor="grey2" />;
};
