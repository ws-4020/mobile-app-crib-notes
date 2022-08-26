import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {Fab} from 'bases/ui/fab/Fab';
import React, {useCallback, useEffect, useRef} from 'react';
import {ActivityIndicator, Platform, ScrollView} from 'react-native';

import {PostQuestion} from '../components/PostQuestion';
import {useQuestion} from '../services/useQuestion';

type QuestionDetailPageProps = {
  setMainTabShown: (shown: boolean) => void;
};
export const QuestionDetailPage: React.VFC<QuestionDetailPageProps> = ({setMainTabShown}) => {
  const {data, isFetching} = useQuestion('1');
  const ref = useRef<ScrollView>();
  useEffect(() => {
    setMainTabShown(false);
    return () => setMainTabShown(true);
  }, [setMainTabShown]);

  const scrollToTop = useCallback(() => ref.current?.scrollTo({y: 0, animated: true}), []);

  if (isFetching) {
    // TODO: StyledActivityIndicatorに変更する
    return <ActivityIndicator />;
  }

  if (!data) {
    // TODO: BundleMessageに定義
    return <Text>質問は削除されました</Text>;
  }

  return (
    <StyledSafeAreaView flex={1} backgroundColor="orange2">
      <StyledScrollView ref={ref} showsVerticalScrollIndicator={false}>
        <PostQuestion
          title={data.question.question.title}
          details={data.question.question.content}
          userNickname={data.question.question.profile?.nickname ?? ''}
          userDetails={`${data.question.question.profile?.points ?? 0}/${
            data.question.question.profile?.totalPoints ?? 0
          }`}
        />
        <PostQuestion
          title={data.question.question.title}
          details={data.question.question.content}
          userNickname={data.question.question.profile?.nickname ?? ''}
          userDetails={`${data.question.question.profile?.points ?? 0}/${
            data.question.question.profile?.totalPoints ?? 0
          }`}
        />
        <PostQuestion
          title={data.question.question.title}
          details={data.question.question.content}
          userNickname={data.question.question.profile?.nickname ?? ''}
          userDetails={`${data.question.question.profile?.points ?? 0}/${
            data.question.question.profile?.totalPoints ?? 0
          }`}
        />
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
