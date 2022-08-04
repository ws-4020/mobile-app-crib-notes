import {useFocusEffect} from '@react-navigation/core';
import {HomePage} from 'features/home/pages/HomePage';
import {useShowTermsAgreementOverlayUseCase} from 'features/terms/use-cases/useShowTermsAgreementOverlayUseCase';
import React from 'react';

export const HomeScreen: React.FC = () => {
  // 利用規約に未同意の場合は、利用規約を表示します。
  const showTermsAgreementOverlay = useShowTermsAgreementOverlayUseCase();
  useFocusEffect(showTermsAgreementOverlay);

  return <HomePage />;
};
