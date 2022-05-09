import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';

import {InitialDataDependingComponent, withInitialData} from '../framework/initialize';
import {AppInitialData} from '../framework/initialize/types';
import {InitialTermsOfServiceAgreementScreen, useInitialTermsOfServiceAgreementScreen} from '../screens';
import {MainTabNav, useMainTabNav} from './MainTabNav';
import {AuthenticatedStackParamList, RootStackParamList} from './types';

const nav = createNativeStackNavigator<AuthenticatedStackParamList>();

const ScreenName = 'AuthenticatedStackNav';
export const AuthenticatedStackNav = {
  name: ScreenName as typeof ScreenName,
};
const getInitialRouteName = (initialData: AppInitialData) => {
  if (initialData.accountData.terms?.termsOfServiceAgreementStatus?.hasAgreedValidTermsOfService === false) {
    return InitialTermsOfServiceAgreementScreen.name;
  }
  return MainTabNav.name;
};

const Component: InitialDataDependingComponent = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const mainTabNav = useMainTabNav(initialData);
  const initialTermsOfServiceAgreementScreen = useInitialTermsOfServiceAgreementScreen(initialData);

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen {...mainTabNav} />
      <nav.Screen {...initialTermsOfServiceAgreementScreen} />
    </nav.Navigator>
  );
};

export const useAuthenticatedStackNav: (
  initialData: AppInitialData,
) => NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = initialData => {
  return useMemo(
    () => ({
      component: withInitialData(initialData, Component),
      name: AuthenticatedStackNav.name,
      options: {
        headerShown: false,
      },
    }),
    [initialData],
  );
};
