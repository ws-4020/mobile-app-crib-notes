import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppInitialDataWithoutAccountData,
  InitialDataDependingNavigationComponent,
  withInitialDataWithoutAccountData,
} from 'framework/initialize';
import React, {useMemo} from 'react';

import {MainTabNav, useMainTabNav} from './MainTabNav';
import {AuthenticatedStackParamList, RootStackParamList} from './types';

const nav = createNativeStackNavigator<AuthenticatedStackParamList>();

const ScreenName = 'AuthenticatedStackNav';
export const AuthenticatedStackNav = {
  name: ScreenName as typeof ScreenName,
};
const getInitialRouteName = (initialData: AppInitialDataWithoutAccountData) => {
  return MainTabNav.name;
};

const Component: InitialDataDependingNavigationComponent = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const mainTabNav = useMainTabNav(initialData);

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen {...mainTabNav} />
    </nav.Navigator>
  );
};

export const useAuthenticatedStackNav: (
  initialData: AppInitialDataWithoutAccountData,
) => NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = initialData => {
  return useMemo(
    () => ({
      component: withInitialDataWithoutAccountData(initialData, Component),
      name: AuthenticatedStackNav.name,
      options: {
        headerShown: false,
      },
    }),
    [initialData],
  );
};
