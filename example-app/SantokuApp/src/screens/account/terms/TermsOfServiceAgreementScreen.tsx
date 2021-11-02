import React from 'react';
import {useNavigateToAuthenticatedStackScreen} from 'screens/useNavigateToScreen';

import {TermsOfServiceAgreementTemplate} from './TermsOfServiceAgreementTemplate';

const ScreenName = 'TermsOfServiceAgreement';
const Screen: React.FC = () => {
  const onGoToHomeScreen = useNavigateToAuthenticatedStackScreen('Home');

  return <TermsOfServiceAgreementTemplate testID="TermsOfServiceAgreementScreen" onGoToHomeScreen={onGoToHomeScreen} />;
};

export const TermsOfServiceAgreementScreen = {
  component: Screen,
  name: ScreenName,
  option: {
    title: '利用規約',
    presentation: 'formSheet' as const,
  },
};
