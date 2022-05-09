import {CommonActions} from '@react-navigation/core';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {m} from 'framework';
import {InitialDataDependingComponent, withInitialData} from 'framework/initialize';
import {AppInitialData} from 'framework/initialize/types';
import {AuthenticatedStackParamList} from 'navigation/types';
import React, {useCallback, useMemo} from 'react';

import {TermsOfServiceAgreementTemplate} from './TermsOfServiceAgreementTemplate';

const ScreenName = 'InitialTermsOfServiceAgreement';

export const InitialTermsOfServiceAgreementScreen = {
  name: ScreenName as typeof ScreenName,
};

const Component: InitialDataDependingComponent = ({initialData}) => {
  const navigation = useNavigation<NavigationProp<AuthenticatedStackParamList>>();

  const onGoToHomeScreen = useCallback(
    () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'MainTabNav'}],
        }),
      ),
    [navigation],
  );
  return (
    <TermsOfServiceAgreementTemplate
      termsOfService={initialData.accountData.terms?.termsOfService}
      onAgreed={onGoToHomeScreen}
    />
  );
};

export const useInitialTermsOfServiceAgreementScreen: (
  initialData: AppInitialData,
) => NativeStackScreenConfig<AuthenticatedStackParamList, typeof ScreenName> = initialData => {
  return useMemo(
    () => ({
      component: withInitialData(initialData, Component),
      name: ScreenName,
      options: {
        title: m('利用規約'),
      },
    }),
    [initialData],
  );
};
