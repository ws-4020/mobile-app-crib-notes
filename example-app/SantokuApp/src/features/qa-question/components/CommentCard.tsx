import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {ThumbUpIllustration} from 'bases/ui/illustration/ThumbUpIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {Comment} from 'features/backend/apis/model';
import React, {FC, useMemo} from 'react';

import {DiffDaysOrHours} from './DiffDaysOrHours';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type CommentProps = Comment & {liked?: boolean};

export const CommentCard: FC<CommentProps> = ({content, likes, profile, datetime, liked}) => {
  const likeColor = useMemo(() => (liked ? 'blue' : 'grey1'), [liked]);
  return (
    <Box flex={1} flexDirection="row">
      <Box>
        <Box flexDirection="row" alignItems="center">
          <StyledTouchableOpacity onPress={showUnderDevelopment}>
            <ThumbUpIllustration size="p24" color={likeColor} />
          </StyledTouchableOpacity>
          <Box px="p4" />
          <Text>{likes}</Text>
        </Box>
      </Box>
      <Box px="p8" />
      <Box flex={1} flexDirection="column">
        <Text>{content}</Text>
        <Box py="p8" />
        <Box flexDirection="row">
          <Text variant="font13Bold" textDecorationLine="underline">
            {profile?.nickname}
          </Text>
          <Box flex={1} />
          <DiffDaysOrHours datetime={datetime} />
        </Box>
      </Box>
    </Box>
  );
};
