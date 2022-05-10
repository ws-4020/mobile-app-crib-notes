import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {m} from 'framework';
import {RootStackParamList} from 'navigation/types';
import React from 'react';

import {TermsOfServiceAgreementTemplate} from './TermsOfServiceAgreementTemplate';
import {useOnAgreedTermsOfService} from './usecases';

const ScreenName = 'TermsOfServiceAgreement';

const Screen: React.FC<NativeStackScreenProps<RootStackParamList, typeof ScreenName>> = ({route}) => {
  const onAgreed = useOnAgreedTermsOfService(route.params.account);
  return <TermsOfServiceAgreementTemplate termsOfService={route.params.termsOfService} onAgreed={onAgreed} />;
};

export const TermsOfServiceAgreementScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    headerShown: true,
    title: m('利用規約'),
    animation: 'slide_from_bottom',
  },
};
