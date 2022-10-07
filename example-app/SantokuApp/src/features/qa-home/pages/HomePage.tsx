import {useFocusEffect} from '@react-navigation/native';
import {isGetFcmTokenError} from 'bases/firebase/messaging/getFcmToken';
import {isRequestPushPermissionError} from 'bases/firebase/messaging/requestPushPermission';
import {log} from 'bases/logging';
import {m} from 'bases/message/Message';
import {Box, StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {Fab} from 'bases/ui/fab/Fab';
import {AddIllustration} from 'bases/ui/illustration/AddIllustration';
import {ExpandLessIllustration} from 'bases/ui/illustration/ExpandLessIllustration';
import {FilterAltIllustration} from 'bases/ui/illustration/FilterAltIllustration';
import {LocalOfferIllustration} from 'bases/ui/illustration/LocalOfferIllustration';
import {NotificationsIllustration} from 'bases/ui/illustration/NotificationsIllustration';
import {SearchIllustration} from 'bases/ui/illustration/SearchIllustration';
import {SettingsIllustration} from 'bases/ui/illustration/SettingsIllustration';
import {SortIllustration} from 'bases/ui/illustration/SortIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {GetListQuestionsSort} from 'features/backend/apis/model';
import {EventList} from 'features/qa-event/components/EventList';
import {useEvents} from 'features/qa-event/services/useEvents';
import {QuestionList} from 'features/qa-question/components/QuestionList';
import {SingleSelectableSortSheet} from 'features/qa-question/components/SingleSelectableSortSheet';
import {SingleSelectableTagSheet} from 'features/qa-question/components/SingleSelectableTagSheet';
import {useQuestions} from 'features/qa-question/services/useQuestions';
import {useTags} from 'features/qa-question/services/useTags';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Platform, RefreshControl, ScrollView} from 'react-native';

import {StyledActivityIndicator} from '../../../bases/ui/common/StyledActivityIndicator';
import {useRequestPermissionAndRegisterToken} from '../services/useRequestPermissionAndRegisterToken';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

const HeaderLeft = () => (
  <Box px="p16">
    <StyledTouchableOpacity onPress={showUnderDevelopment}>
      <SearchIllustration />
    </StyledTouchableOpacity>
    <Box py="p4" />
  </Box>
);

const HeaderRight = () => (
  <Box px="p24">
    <Box flexDirection="row" alignItems="center">
      <StyledTouchableOpacity onPress={showUnderDevelopment}>
        <NotificationsIllustration />
      </StyledTouchableOpacity>
      <Box px="p8" />
      <StyledTouchableOpacity onPress={showUnderDevelopment}>
        <SettingsIllustration />
      </StyledTouchableOpacity>
    </Box>
    <Box py="p4" />
  </Box>
);

export type HomePageProps = {
  navigateToQuestionAndEventPost: () => void;
  navigateToQuestionDetail: (questionId: string) => void;
  setNavigationOptions: (options: {headerLeft: () => React.ReactNode; headerRight: () => React.ReactNode}) => void;
};

export const HomePage: React.VFC<HomePageProps> = ({
  navigateToQuestionAndEventPost,
  navigateToQuestionDetail,
  setNavigationOptions,
}) => {
  const {requestPermissionAndRegisterToken: callRequestPermissionAndRegisterToken} =
    useRequestPermissionAndRegisterToken();
  // Push通知の許可ダイアログ表示とFCM登録トークンの登録・更新
  const requestPermissionAndRegisterToken = useCallback(async () => {
    try {
      await callRequestPermissionAndRegisterToken();
    } catch (e) {
      // Push通知のパーミッションリクエストに失敗した場合、Firebase Crashlyticsにエラーログを送信して、ユーザにはスナックバーでPush通知の受信ができない旨を伝える
      if (isRequestPushPermissionError(e)) {
        log.error(
          m('app.push.notification.requestPushPermissionError', String(e)),
          'app.push.notification.requestPushPermissionError',
        );
        Snackbar.show(m('app.push.notification.プッシュ通知の設定エラー'));
      }
      // FCMの登録トークンの取得に失敗した場合、Firebase Crashlyticsにエラーログを送信して、ユーザにはスナックバーでPush通知の受信ができない旨を伝える
      if (isGetFcmTokenError(e)) {
        log.error(m('app.push.notification.getFcmTokenError', String(e)), 'app.push.notification.getFcmTokenError');
        Snackbar.show(m('app.push.notification.プッシュ通知の設定エラー'));
      }
    }
  }, [callRequestPermissionAndRegisterToken]);

  useEffect(() => {
    requestPermissionAndRegisterToken().catch(() => {
      // requestPermissionAndRegisterTokenでエラーハンドリングを実施しているので、ここでは特に何もしない
    });
  }, [requestPermissionAndRegisterToken]);

  React.useLayoutEffect(() => {
    setNavigationOptions({
      headerLeft: () => <HeaderLeft />,
      headerRight: () => <HeaderRight />,
    });
  }, [setNavigationOptions]);

  const {
    data: events,
    isLoading: isEventsLoading,
    isRefetching: isEventsRefetching,
    isPreviousData: isEventsPreviousData,
    invalidate: invalidateEvents,
  } = useEvents({target: 'active'});
  const {
    data: questions,
    isLoading: isQuestionsLoading,
    isRefetching: isQuestionsRefetching,
    isPreviousData: isQuestionsPreviousData,
    setListParams: setQuestionsParams,
    invalidate: invalidateQuestions,
  } = useQuestions();

  const invalidateEventsAndQuestions = useCallback(() => {
    Promise.all([invalidateEvents(), invalidateQuestions()]).catch(() => {
      // 個別にエラーハンドリングは実施しない
    });
  }, [invalidateEvents, invalidateQuestions]);
  const isEventsAndQuestionsRefetching = useMemo(
    () => (isEventsRefetching || isQuestionsRefetching) && !(isEventsPreviousData || isQuestionsPreviousData),
    [isEventsPreviousData, isEventsRefetching, isQuestionsPreviousData, isQuestionsRefetching],
  );

  useFocusEffect(invalidateEventsAndQuestions);

  const [selectedSort, setSelectedSort] = useState<GetListQuestionsSort>();
  const [isVisibleSortSheet, setIsVisibleSortSheet] = useState<boolean>(false);
  const showSortSheet = useCallback(() => {
    setIsVisibleSortSheet(true);
  }, []);
  const selectSort = useCallback(
    (sort?: GetListQuestionsSort) => {
      setSelectedSort(sort);
      setIsVisibleSortSheet(false);
      setQuestionsParams(prevState => ({...prevState, sort}));
    },
    [setQuestionsParams],
  );
  const sortIconColor = useMemo(() => (selectedSort ? 'blue' : 'black'), [selectedSort]);

  const {data: tags} = useTags();
  const [selectedTagId, setSelectedTagId] = useState<string>();
  const [isVisibleTagSheet, setIsVisibleTagSheet] = useState<boolean>(false);
  const showTagSheet = useCallback(() => {
    setIsVisibleTagSheet(true);
  }, []);
  const selectTag = useCallback(
    (tagId?: string) => {
      setSelectedTagId(tagId);
      setIsVisibleTagSheet(false);
      setQuestionsParams(prevState => ({...prevState, tag: tagId}));
    },
    [setQuestionsParams],
  );
  const tagIconColor = useMemo(() => (selectedTagId ? 'blue' : 'black'), [selectedTagId]);

  const scrollViewRef = useRef<ScrollView>();
  const scrollToTop = useCallback(() => scrollViewRef.current?.scrollTo({y: 0, animated: true}), []);

  return (
    <Box flex={1}>
      <StyledScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        testID="HomePage"
        refreshControl={
          <RefreshControl refreshing={isEventsAndQuestionsRefetching} onRefresh={invalidateEventsAndQuestions} />
        }>
        <Box px="p24" py="p32" flexDirection="row" justifyContent="flex-start" alignItems="center">
          <Text variant="font20Bold" lineHeight={24} letterSpacing={0.18}>
            {m('募集中のイベント')}
          </Text>
        </Box>
        {isEventsLoading ? <StyledActivityIndicator /> : <EventList data={events} />}
        <Box px="p24" py="p32" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Text variant="font20Bold" lineHeight={24} letterSpacing={0.18}>
            {m('質問')}
          </Text>
          <Box flexDirection="row" alignItems="center">
            <StyledTouchableOpacity onPress={showSortSheet}>
              <SortIllustration color={sortIconColor} />
            </StyledTouchableOpacity>
            <Box p="p16" />
            <StyledTouchableOpacity onPress={showUnderDevelopment}>
              <FilterAltIllustration />
            </StyledTouchableOpacity>
            <Box p="p16" />
            <StyledTouchableOpacity onPress={showTagSheet}>
              <LocalOfferIllustration color={tagIconColor} />
            </StyledTouchableOpacity>
          </Box>
        </Box>
        {isQuestionsLoading ? (
          <StyledActivityIndicator />
        ) : (
          <QuestionList data={questions} navigateToQuestionDetail={navigateToQuestionDetail} />
        )}
      </StyledScrollView>
      <Box position="absolute" right={8} bottom={32} flexDirection="column" justifyContent="center" alignItems="center">
        {Platform.OS === 'android' && (
          <Fab size="small" color="white" onPress={scrollToTop}>
            <ExpandLessIllustration />
          </Fab>
        )}
        <Fab onPress={navigateToQuestionAndEventPost}>
          <AddIllustration />
        </Fab>
      </Box>
      <SingleSelectableSortSheet
        isVisible={isVisibleSortSheet}
        initialSelectedSort={selectedSort}
        select={selectSort}
      />
      <SingleSelectableTagSheet
        tags={tags}
        isVisible={isVisibleTagSheet}
        initialSelectedTagId={selectedTagId}
        select={selectTag}
      />
    </Box>
  );
};
