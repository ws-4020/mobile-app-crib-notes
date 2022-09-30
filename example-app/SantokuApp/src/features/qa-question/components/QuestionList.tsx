import React from 'react';
import {Box, Text, StyledTouchableOpacity} from 'bases/ui/common';
import {CardEvent} from './CardEvent';
import {Question} from 'features/backend/apis/model';

type ToolbarButtonProps = {
  leftAsset?: React.ReactNode;
  onPress?: () => void;
};

const ToolbarButton: React.FC<ToolbarButtonProps> = ({leftAsset, onPress}) => {
  return <StyledTouchableOpacity onPress={onPress}>{leftAsset}</StyledTouchableOpacity>;
};

export type QuestionListProps = {
  data?: Question[];
  onEvent?: (questionId: string) => void;
};

export const QuestionList: React.VFC<QuestionListProps> = ({data, onEvent}) => {
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
          <ToolbarButton
            leftAsset={
              <Text padding="p8" marginLeft="p8">
                Order
              </Text>
            }
            onPress={() => console.log('on press')}
          />
          <ToolbarButton
            leftAsset={
              <Text padding="p8" marginLeft="p8">
                Filter
              </Text>
            }
            onPress={() => console.log('on press')}
          />
          <ToolbarButton
            leftAsset={
              <Text padding="p8" marginLeft="p8">
                Tag
              </Text>
            }
          />
        </Box>
      </Box>
      {data?.map(item => (
        <CardEvent
          key={item.questionId}
          title={item.title}
          details={item.content}
          userNickname={item.profile?.nickname}
          userDetails="5/5"
          likeCount={item.likes}
          onPress={() => onEvent?.(item.questionId)}
        />
      ))}
    </Box>
  );
};
