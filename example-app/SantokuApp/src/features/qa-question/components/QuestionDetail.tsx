import {m} from 'bases/message/Message';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {ChatBubbleOutlineIllustration} from 'bases/ui/illustration/ChatBubbleOutlineIllustration';
import {DoneIllustration} from 'bases/ui/illustration/DoneIllustration';
import {MoreVertIllustration} from 'bases/ui/illustration/MoreVertIllustration';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {TagIllustration} from 'bases/ui/illustration/TagIllustration';
import {ThumbUpIllustration} from 'bases/ui/illustration/ThumbUpIllustration';
import {VisibilityIllustration} from 'bases/ui/illustration/VisibilityIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {QuestionAndAnswerQuestion, Tag} from 'features/backend/apis/model';
import React, {FC, useMemo} from 'react';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type PostQuestionProps = QuestionAndAnswerQuestion & {tags?: Tag[]};

export const QuestionDetail: FC<PostQuestionProps> = ({
  question: {title, content, likes, views, tags: questionTagIds, profile},
  commentList,
  tags,
}) => {
  const questionTags = useMemo(() => {
    if (!tags) {
      return [];
    }
    return questionTagIds.map(tagId => tags.find(tag => tag.tagId === tagId));
  }, [questionTagIds, tags]);

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
        <Box flexDirection="column" marginLeft="p16">
          <Text lineHeight={22} fontWeight="600" fontSize={18}>
            {profile?.nickname}
          </Text>
          <Text>
            {profile?.points}/{profile?.totalPoints}
          </Text>
        </Box>
        <Box flex={1} flexDirection="column">
          <Box flex={1} />
          <Box flexDirection="row" justifyContent="flex-end" alignItems="flex-end" px="p8">
            <DoneIllustration color="blue" />
            <Box px="p4" />
            <Text variant="font14Bold" lineHeight={20} color="blue">
              {m('解決済み')}
            </Text>
          </Box>
        </Box>
        <Box />
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <MoreVertIllustration />
        </StyledTouchableOpacity>
      </Box>
      <Box py="p12" />
      <Text fontSize={22} fontWeight="700" lineHeight={34} textDecorationLine="underline">
        {title}
      </Text>
      <Box py="p8" />
      <Text fontSize={14} lineHeight={28}>
        {content}
      </Text>
      <Box py="p4" />
      <Box alignItems="flex-end">
        <Text fontSize={14} fontWeight="600" lineHeight={20} color="grey1">
          20時間前
        </Text>
      </Box>
      <Box py="p4" />
      <Box flexDirection="row" justifyContent="flex-start" alignItems="flex-end">
        <StyledTouchableOpacity flexDirection="row" alignItems="center">
          <ThumbUpIllustration color="blue" />
        </StyledTouchableOpacity>
        <Box px="p8" />
        <Text fontSize={40} fontWeight="600">
          {likes}
        </Text>
        <Box flex={1} />
        <Box flexDirection="row">
          <StyledTouchableOpacity flexDirection="row" alignItems="center">
            <VisibilityIllustration />
            <Box px="p4" />
            <Text fontSize={14} lineHeight={20}>
              {views}
            </Text>
          </StyledTouchableOpacity>
          <Box px="p4" />
          <StyledTouchableOpacity flexDirection="row" alignItems="center">
            <ChatBubbleOutlineIllustration />
            <Box px="p4" />
            <Text fontSize={14} lineHeight={20}>
              {commentList.length}
            </Text>
          </StyledTouchableOpacity>
        </Box>
      </Box>
      <Box py="p16" />
      <Box flexDirection="row">
        <TagIllustration />
        <Box flexDirection="row" alignItems="center">
          <Box px="p8" />
          <Text>
            {questionTags?.map(tag => (
              // TODO: key
              <Box key={tag?.tagId} flexDirection="row">
                <Text textDecorationLine="underline">{tag?.tagName}</Text>
                <Box px="p4" />
              </Box>
            ))}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
