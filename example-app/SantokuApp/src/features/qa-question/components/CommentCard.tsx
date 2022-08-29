import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {ScheduleIllustration} from 'bases/ui/illustration/ScheduleIllustration';
import {ThumbUpIllustration} from 'bases/ui/illustration/ThumbUpIllustration';
import {Comment} from 'features/backend/apis/model';
import React, {FC} from 'react';

export type CommentProps = Comment;

export const CommentCard: FC<CommentProps> = ({content, likes, profile, datetime}) => {
  return (
    <Box flex={1} flexDirection="row">
      <Box>
        <Box flexDirection="row" alignItems="center">
          {/* TODO: タップ時の処理 */}
          <StyledTouchableOpacity>
            <ThumbUpIllustration size="p24" color="grey1" />
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
          <Text>{profile?.nickname}</Text>
          <Box flex={1} />
          <ScheduleIllustration />
          <Box px="p4" />
          {/* TODO: 日付変換 */}
          <Text>20時間前</Text>
        </Box>
      </Box>
    </Box>
  );
};
