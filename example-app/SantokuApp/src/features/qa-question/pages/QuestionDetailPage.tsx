import {m} from 'bases/message/Message';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {StyledActivityIndicator} from 'bases/ui/common/StyledActivityIndicator';
import {Fab} from 'bases/ui/fab/Fab';
import {useAccountQuestionLikes} from 'features/account/services/account/useAccountQuestionLikes';
import React, {useCallback, useRef} from 'react';
import {Platform, ScrollView} from 'react-native';

import {AnswerDetail} from '../components/AnswerDetail';
import {QuestionDetailCard} from '../components/QuestionDetailCard';
import {useQuestion} from '../services/useQuestion';

type QuestionDetailPageProps = {
  questionId: string;
};
export const QuestionDetailPage: React.VFC<QuestionDetailPageProps> = ({questionId}) => {
  const {data: question, isLoading: isQuestionLoading} = useQuestion(questionId);
  const {data: questionLikes} = useAccountQuestionLikes(questionId);
  const ref = useRef<ScrollView>();

  const scrollToTop = useCallback(() => ref.current?.scrollTo({y: 0, animated: true}), []);

  if (isQuestionLoading) {
    return (
      <Box flex={1} backgroundColor="orange2" justifyContent="center" alignItems="center">
        <StyledActivityIndicator />
      </Box>
    );
  }

  if (!question) {
    return <Text>{m('質問は削除されました')}</Text>;
  }

  return (
    <StyledSafeAreaView flex={1} backgroundColor="orange2">
      <StyledScrollView ref={ref} showsVerticalScrollIndicator={false}>
        <QuestionDetailCard
          {...question.question}
          liked={questionLikes?.liked}
          likedCommentIds={questionLikes?.commentId}
        />
        <Box px="p24" py="p32" flexDirection="row" justifyContent="flex-start" alignItems="center">
          <Text variant="font20Bold" lineHeight={24}>
            {m('回答')}
          </Text>
          <Box px="p8" />
          <Text variant="font14Bold" lineHeight={24}>
            {question.answerList.length}
            {m('件')}
          </Text>
        </Box>
        {question.answerList.map(answer => {
          return (
            <Box key={answer.answer?.answerId}>
              <AnswerDetail
                title=""
                details={answer.answer?.content ?? ''}
                userNickname={answer.answer?.profile?.nickname ?? ''}
                userDetails={`${question.question.question.profile?.points ?? 0}/${
                  question.question.question.profile?.totalPoints ?? 0
                }`}
              />
              <Box py="p8" />
            </Box>
          );
        })}
      </StyledScrollView>
      <Box position="absolute" right={8} bottom={32} flexDirection="column" justifyContent="center" alignItems="center">
        {Platform.OS === 'android' && (
          <Fab size="small" color="white" onPress={scrollToTop}>
            <Text>^</Text>
          </Fab>
        )}
        <Fab>
          <Text>c</Text>
        </Fab>
      </Box>
    </StyledSafeAreaView>
  );
};
