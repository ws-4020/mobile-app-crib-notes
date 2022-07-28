import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'apps/app/navigators/types';
import {LoginPage} from 'features/account/components/LoginPage';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import React, {useCallback, useMemo} from 'react';

export const LoginScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'Login'>> = ({
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
