import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {ChatBubbleOutlineIllustration} from 'bases/ui/illustration/ChatBubbleOutlineIllustration';
import {MoreVertIllustration} from 'bases/ui/illustration/MoreVertIllustration';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {ThumbUpIllustration} from 'bases/ui/illustration/ThumbUpIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {QuestionAndAnswerAnswerListItem} from 'features/backend/apis/model';
import React, {FC, useCallback, useMemo, useState} from 'react';

import {AddCommentButton} from './AddCommentButton';
import {CommentCard} from './CommentCard';
import {CommentDivider} from './CommentDivider';
import {DiffDaysOrHours} from './DiffDaysOrHours';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type AnswerDetailCardProps = QuestionAndAnswerAnswerListItem & {
  liked?: boolean;
  likedCommentIds?: string[];
};

export const AnswerDetailCard: FC<AnswerDetailCardProps> = ({
  answer: {content, likes, datetime, comments, profile},
  commentList,
  liked,
  likedCommentIds,
}) => {
  const [isAnswerCommentsVisible, setIsAnswerCommentsVisible] = useState(false);
  const toggleAnswerCommentsVisible = useCallback(() => setIsAnswerCommentsVisible(prev => !prev), []);
  const likeAnswerColor = useMemo(() => (liked ? 'blue' : 'grey1'), [liked]);
  const chatBubbleOutlineIllustrationColor = useMemo(
    () => (isAnswerCommentsVisible ? 'blue' : 'grey1'),
    [isAnswerCommentsVisible],
  );

  return (
    <Box
      backgroundColor="white"
      px="p24"
      pt="p24"
      pb="p16"
      shadowOffset={{width: 2, height: 2}}
      shadowColor="black"
      shadowOpacity={0.1}
      elevation={1}>
      <Box flexDirection="row" alignItems="center">
        <PersonIllustration />
        <Box px="p8" />
        <Box flex={1} flexDirection="column">
          <Text lineHeight={22} fontWeight="600" fontSize={18}>
            {profile?.nickname}
          </Text>
          <Text>
            {profile?.points}/{profile?.totalPoints}
          </Text>
        </Box>
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <MoreVertIllustration />
        </StyledTouchableOpacity>
      </Box>
      <Box py="p8" />
      <Text fontSize={14} lineHeight={28}>
        {content}
      </Text>
      <Box py="p4" />
      <Box flexDirection="row" alignItems="flex-end">
        <Box flex={1} />
        <DiffDaysOrHours datetime={datetime} />
      </Box>
      <Box flexDirection="row" justifyContent="flex-start" alignItems="flex-end">
        <StyledTouchableOpacity flexDirection="row" alignItems="center" onPress={showUnderDevelopment}>
          <ThumbUpIllustration color={likeAnswerColor} />
        </StyledTouchableOpacity>
        <Box px="p8" />
        <Text fontSize={40} fontWeight="600">
          {likes}
        </Text>
        <Box flex={1} />
        <Box flexDirection="row">
          <StyledTouchableOpacity flexDirection="row" alignItems="center" onPress={toggleAnswerCommentsVisible}>
            <ChatBubbleOutlineIllustration color={chatBubbleOutlineIllustrationColor} />
          </StyledTouchableOpacity>
          <Box px="p4" />
          <Text fontSize={14} lineHeight={20}>
            {comments}
          </Text>
        </Box>
      </Box>
      {isAnswerCommentsVisible && (
        <>
          {commentList?.map(comment => (
            <Box key={comment.commentId}>
              <Box py="p8" />
              <CommentDivider />
              <Box py="p8" />
              <CommentCard {...comment} />
            </Box>
          ))}
          <Box py="p8" />
          <CommentDivider />
          <Box py="p8" />
          <AddCommentButton onPress={showUnderDevelopment} />
        </>
      )}
    </Box>
  );
};
