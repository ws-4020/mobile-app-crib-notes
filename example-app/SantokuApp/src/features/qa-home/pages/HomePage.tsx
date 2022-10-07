import {isGetFcmTokenError} from 'bases/firebase/messaging/getFcmToken';
import {isRequestPushPermissionError} from 'bases/firebase/messaging/requestPushPermission';
import {useFocusEffect} from 'bases/focus-manager/useFocusEffect';
import {log} from 'bases/logging';
import {m} from 'bases/message/Message';
import {Box, StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledActivityIndicator} from 'bases/ui/common/StyledActivityIndicator';
import {StyledRow} from 'bases/ui/common/StyledRow';
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
import {QuestionList} from 'features/qa-question/components/QuestionList';
import {SingleSelectableSortSheet} from 'features/qa-question/components/SingleSelectableSortSheet';
import {SingleSelectableTagSheet} from 'features/qa-question/components/SingleSelectableTagSheet';
import {useTags} from 'features/qa-question/services/useTags';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Platform, RefreshControl, ScrollView} from 'react-native';

import {useEventsAndQuestions} from '../services/useEventsAndQuestions';
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
  setHeader: (options: {headerLeft: () => React.ReactNode; headerRight: () => React.ReactNode}) => void;
};

export const HomePage: React.VFC<HomePageProps> = ({
  navigateToQuestionAndEventPost,
  navigateToQuestionDetail,
  setHeader,
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
    setHeader({
      headerLeft: () => <HeaderLeft />,
      headerRight: () => <HeaderRight />,
    });
  }, [setHeader]);

  const {
    events,
    questions,
    refresh,
    pullToRefresh,
    setQuestionsParams,
    isLoading,
    isRefreshing,
    isPullToRefreshing,
    isEventsLoading,
    isQuestionsLoading,
  } = useEventsAndQuestions({eventsParams: {target: 'active'}});
  useFocusEffect(refresh);

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
        refreshControl={<RefreshControl refreshing={isPullToRefreshing} onRefresh={pullToRefresh} />}>
        <Box px="p24" py="p32">
          <Text variant="font20Bold" lineHeight={24} letterSpacing={0.18}>
            {m('募集中のイベント')}
          </Text>
        </Box>
        {!isEventsLoading && <EventList data={events} />}
        <StyledRow px="p24" py="p32" justifyContent="space-between" alignItems="center">
          <Text variant="font20Bold" lineHeight={24} letterSpacing={0.18}>
            {m('質問')}
          </Text>
          <StyledRow space="p32" alignItems="center">
            <StyledTouchableOpacity onPress={showSortSheet}>
              <SortIllustration color={sortIconColor} />
            </StyledTouchableOpacity>
            <StyledTouchableOpacity onPress={showUnderDevelopment}>
              <FilterAltIllustration />
            </StyledTouchableOpacity>
            <StyledTouchableOpacity onPress={showTagSheet}>
              <LocalOfferIllustration color={tagIconColor} />
            </StyledTouchableOpacity>
          </StyledRow>
        </StyledRow>
        {!isQuestionsLoading && <QuestionList data={questions} navigateToQuestionDetail={navigateToQuestionDetail} />}
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
      {(isRefreshing || isLoading) && (
        <Box position="absolute" top={10} right={10}>
          <StyledActivityIndicator />
        </Box>
      )}
    </Box>
  );
};
