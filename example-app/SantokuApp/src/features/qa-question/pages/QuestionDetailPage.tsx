import {m} from 'bases/message/Message';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {Fab} from 'bases/ui/fab/Fab';
import React, {useCallback, useRef} from 'react';
import {ActivityIndicator, Platform, ScrollView} from 'react-native';

import {AnswerDetail} from '../components/AnswerDetail';
import {QuestionDetail} from '../components/QuestionDetail';
import {useQuestion} from '../services/useQuestion';
import {useTags} from '../services/useTags';

// TODO: QuestionId
type QuestionDetailPageProps = object;
export const QuestionDetailPage: React.VFC<QuestionDetailPageProps> = () => {
  const {data: question, isFetching: isQuestionFetching} = useQuestion('1');
  const {data: tags} = useTags();
  const ref = useRef<ScrollView>();

  const scrollToTop = useCallback(() => ref.current?.scrollTo({y: 0, animated: true}), []);

  if (isQuestionFetching) {
    // TODO: StyledActivityIndicatorに変更する
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }

  if (!question) {
    // TODO: BundleMessageに定義
    return <Text>{m('質問は削除されました')}</Text>;
  }

  return (
    <StyledSafeAreaView flex={1} backgroundColor="orange2">
      <StyledScrollView ref={ref} showsVerticalScrollIndicator={false}>
        <QuestionDetail {...question.question} tags={tags} />
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
            <>
              <AnswerDetail
                title=""
                details={answer.answer?.content ?? ''}
                userNickname={answer.answer?.profile?.nickname ?? ''}
                userDetails={`${question.question.question.profile?.points ?? 0}/${
                  question.question.question.profile?.totalPoints ?? 0
                }`}
              />
              <Box py="p8" />
            </>
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
