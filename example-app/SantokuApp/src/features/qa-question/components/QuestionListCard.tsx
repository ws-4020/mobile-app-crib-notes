import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {BeginnerMarkIllustration} from 'bases/ui/illustration/BeginnerMarkIllustration';
import {MoreVertIllustration} from 'bases/ui/illustration/MoreVertIllustration';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {Question} from 'features/backend/apis/model';
import React, {FC, useCallback} from 'react';
import {Pressable} from 'react-native';

import {StyledImage} from '../../../bases/ui/common/StyledImage';
import {AnswerWithCount} from './CommentsWithCount';
import {DiffDaysOrHours} from './DiffDaysOrHours';
import {LikeWithCount} from './LikeWithCount';
import {ViewsWithCount} from './ViewsWithCount';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type QuestionListCardProps = {
  question: Question;
  navigateToQuestionDetail: (questionId: string) => void;
};

export const QuestionListCard: FC<QuestionListCardProps> = ({
  question: {questionId, title, content, likes, views, beginner, datetime, profile},
  navigateToQuestionDetail,
}) => {
  const toQuestionDetail = useCallback(() => {
    navigateToQuestionDetail(questionId);
  }, [navigateToQuestionDetail, questionId]);
  return (
    <Box
      backgroundColor="white"
      px="p24"
      pt="p24"
      pb="p16"
      shadowOffset={{width: 4, height: 4}}
      shadowColor="black"
      shadowOpacity={0.25}
      elevation={1}>
      <Box flexDirection="row" alignItems="center">
        {profile?.avatarImageUrl ? (
          // TODO: sizeだけを指定するAvator部品を作成した方がいいかも
          <StyledImage source={{uri: profile.avatarImageUrl}} width={40} height={40} borderRadius="p20" />
        ) : (
          <PersonIllustration size="p40" />
        )}
        <Box px="p8" />
        <Box flex={1} flexDirection="column">
          <Text variant="font18SemiBold" lineHeight={22} letterSpacing={0.15} color="black2">
            {profile?.nickname}
          </Text>
          <Box flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text variant="font14Regular" lineHeight={24} letterSpacing={0.25} color="black2">
              {profile?.points}/{profile?.totalPoints}
            </Text>
          </Box>
        </Box>
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <MoreVertIllustration />
        </StyledTouchableOpacity>
      </Box>
      <Box py="p12" />
      <Pressable onPress={toQuestionDetail}>
        <Text
          variant="font22Bold"
          textDecorationLine="underline"
          lineHeight={34}
          letterSpacing={0.18}
          numberOfLines={3}
          ellipsizeMode="tail">
          {beginner && (
            <>
              <BeginnerMarkIllustration />
              <Box px="p4" />
            </>
          )}
          {title}
        </Text>
      </Pressable>
      <Box py="p8" />
      <Text variant="font14Regular" lineHeight={28} letterSpacing={0.25} numberOfLines={2} ellipsizeMode="tail">
        {content}
      </Text>
      <Box py="p8" />
      <Box flexDirection="row" alignItems="flex-end">
        <DiffDaysOrHours datetime={datetime} />
        <Box flex={1} />
        <ViewsWithCount count={views} />
        <Box px="p8" />
        <LikeWithCount count={likes} />
        <Box px="p8" />
        <AnswerWithCount count={views} />
      </Box>
    </Box>
  );
};
