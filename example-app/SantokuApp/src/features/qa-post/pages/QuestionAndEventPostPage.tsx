import {m} from 'bases/message/Message';
import {Box, StyledSafeAreaView, StyledTouchableOpacity} from 'bases/ui/common';
import {StyledButton} from 'bases/ui/common/StyledButton';
import {TagIllustration} from 'bases/ui/illastration/TagIllustration';
import {Spacer} from 'bases/ui/spacer/Spacer';
import {Tab} from 'bases/ui/tab/Tab';
import {TabBar} from 'bases/ui/tab/TabBar';
import {EventPost} from 'features/qa-event/components/EventPost';
import {QuestionPost} from 'features/qa-question/components/QuestionPost';
import {QuestionFormValues, useQuestionForm} from 'features/qa-question/forms/useQuestionForm';
import React, {useCallback, useState} from 'react';
import {Alert} from 'react-native';

type QuestionAndEventPostPageProps = {
  setNavigationOptions: (options: {headerRight: () => React.ReactNode}) => void;
};

export const QuestionAndEventPostPage: React.VFC<QuestionAndEventPostPageProps> = ({setNavigationOptions}) => {
  const [isVisibleTagSheet, setIsVisibleTagSheet] = useState<boolean>(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const postQuestion = useCallback(async (values: QuestionFormValues) => {
    // TODO: Backendに投稿します。
  }, []);

  const {
    form: questionForm,
    reset: resetQuestionForm,
    setContent: setQuestionContent,
    setTags: setQuestionTags,
    setBeginner: setQuestionBeginner,
  } = useQuestionForm({onSubmit: postQuestion});

  const showTagSheet = useCallback(() => {
    setIsVisibleTagSheet(true);
  }, []);

  const changeTab = useCallback(
    (index: number) => {
      if (questionForm.values.title || questionForm.values.content) {
        Alert.alert('入力中です。', '入力内容が保存されています。入力内容を破棄してタブを切り替えますか？', [
          {text: 'Cancel'},
          {
            text: 'OK',
            onPress: () => {
              setSelectedTabIndex(index);
              resetQuestionForm();
            },
          },
        ]);
        return;
      }
      setSelectedTabIndex(index);
      resetQuestionForm();
    },
    [resetQuestionForm, questionForm.values.content, questionForm.values.title],
  );

  const post = useCallback(() => {
    if (selectedTabIndex === 0) {
      questionForm.submitForm().catch(() => {
        // エラーハンドリングはpostQuestionで実施しているので、ここでは何もしない
      });
    }
  }, [questionForm, selectedTabIndex]);

  React.useLayoutEffect(() => {
    setNavigationOptions({
      headerRight: () => {
        return (
          <Box flexDirection="row" alignItems="center">
            {selectedTabIndex === 0 && (
              <StyledTouchableOpacity onPress={showTagSheet} p="p8">
                <TagIllustration padding="p8" />
              </StyledTouchableOpacity>
            )}
            <Spacer widthRatio={0.05} />
            <StyledButton title={m('投稿')} onPress={post} />
          </Box>
        );
      },
    });
  }, [post, selectedTabIndex, setNavigationOptions, showTagSheet]);

  return (
    <StyledSafeAreaView flex={1} backgroundColor="white" testID="QuestionAndEventPostPage">
      <TabBar selectedIndex={selectedTabIndex} onChange={changeTab}>
        <Tab text={m('質問を投稿')}>
          <QuestionPost
            isVisibleTagSheet={isVisibleTagSheet}
            form={questionForm}
            reset={resetQuestionForm}
            setContent={setQuestionContent}
            setTags={setQuestionTags}
            setBeginner={setQuestionBeginner}
          />
        </Tab>
        <Tab text={m('イベントを告知')}>
          <EventPost />
        </Tab>
      </TabBar>
    </StyledSafeAreaView>
  );
};
