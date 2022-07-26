import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'apps/app/navigators/types';
import {m} from 'bases/message/utils/Message';
import {LoginPage} from 'features/account/components/LoginPage';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import React, {useCallback, useMemo} from 'react';

const ScreenName = 'Login';

const Screen: React.FC<NativeStackScreenProps<RootStackParamList, typeof ScreenName>> = ({
  navigation: reactNavigation,
}) => {
  const goToProfileRegistration = useCallback(
    (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
      reactNavigation.navigate('ProfileRegistration', termsOfServiceAgreementStatus);
    },
    [reactNavigation],
  );
  const navigation = useMemo(() => ({createAccount: goToProfileRegistration}), [goToProfileRegistration]);

  return <LoginPage navigation={navigation} />;
};

export const LoginScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    title: m('ログイン'),
    animation: 'fade',
  },
};
