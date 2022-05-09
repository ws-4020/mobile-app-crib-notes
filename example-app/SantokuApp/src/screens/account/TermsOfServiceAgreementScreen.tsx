import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSetAccountContext} from 'context/useSetAccountContext';
import {m} from 'framework';
import {RootStackParamList} from 'navigation/types';
import React, {useCallback} from 'react';
import {useGetTerms} from 'service';

import {TermsOfServiceAgreementTemplate} from './TermsOfServiceAgreementTemplate';

const ScreenName = 'TermsOfServiceAgreement';

const Screen: React.FC<NativeStackScreenProps<RootStackParamList, typeof ScreenName>> = ({route}) => {
  const {data} = useGetTerms();
  const setAccountContext = useSetAccountContext();
  const onAgreed = useCallback(() => {
    setAccountContext(route.params);
  }, [route.params, setAccountContext]);
  return <TermsOfServiceAgreementTemplate termsOfService={data?.data} onAgreed={onAgreed} />;
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
