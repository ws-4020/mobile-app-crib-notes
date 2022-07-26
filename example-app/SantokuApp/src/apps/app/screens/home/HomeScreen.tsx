import {useFocusEffect} from '@react-navigation/core';
import {HomeStackParamList} from 'apps/app/navigators/types';
import {m} from 'bases/message/utils/Message';
import {HomePage} from 'features/home/components/HomePage';
import {useShowTermsAgreementOverlayUseCase} from 'features/terms/hooks/useShowTermsAgreementOverlayUseCase';
import React from 'react';

const ScreenName = 'Home';
const Screen: React.FC = () => {
  // 利用規約に未同意の場合は、利用規約を表示します。
  const showTermsAgreementOverlay = useShowTermsAgreementOverlayUseCase();
  useFocusEffect(showTermsAgreementOverlay);

  return <HomePage />;
};

// Navigatorに登録する情報
export const HomeScreen: StackScreenConfig<HomeStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: () => ({
    title: m('ホーム'),
  }),
};
