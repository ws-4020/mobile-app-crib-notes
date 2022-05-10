import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TermsContext, useTermsContext} from 'context/useTermsContext';
import {InitialDataDependingComponent, withInitialData} from 'framework/initialize';
import {AppInitialData} from 'framework/initialize/types';
import React, {useMemo} from 'react';

import {TermsOfServiceAgreementScreen} from '../screens';
import {MainTabNav, useMainTabNav} from './MainTabNav';
import {AuthenticatedStackParamList, RootStackParamList} from './types';

const nav = createNativeStackNavigator<AuthenticatedStackParamList>();

const ScreenName = 'AuthenticatedStackNav';
export const AuthenticatedStackNav = {
  name: ScreenName as typeof ScreenName,
};
const getInitialRouteName = (initialData: AppInitialData, terms: TermsContext) => {
  if (!terms.termsOfServiceAgreementStatus?.hasAgreedValidTermsOfService) {
    return TermsOfServiceAgreementScreen.name;
  }
  return MainTabNav.name;
};

const Component: InitialDataDependingComponent = ({initialData}) => {
  const terms = useTermsContext();
  const initialRouteName = useMemo(() => getInitialRouteName(initialData, terms), [initialData, terms]);
  const mainTabNav = useMainTabNav(initialData);

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen {...mainTabNav} />
      <nav.Screen {...TermsOfServiceAgreementScreen} />
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
