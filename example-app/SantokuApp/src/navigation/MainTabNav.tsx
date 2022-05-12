import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useMemo} from 'react';

import {
  AppInitialDataWithoutAccountData,
  InitialDataDependingNavigationComponent,
  withInitialDataWithoutAccountData,
} from '../framework/initialize';
import {HomeStackNav} from './HomeStackNav';
import {TeamStackNav} from './TeamStackNav';
import {AuthenticatedStackParamList, MainTabParamList} from './types';

const nav = createBottomTabNavigator<MainTabParamList>();

const ScreenName = 'MainTabNav';
export const MainTabNav = {
  name: ScreenName as typeof ScreenName,
};
const getInitialRouteName = (initialData: AppInitialDataWithoutAccountData) => {
  return HomeStackNav.name;
};
const Component: InitialDataDependingNavigationComponent = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen {...HomeStackNav} />
      <nav.Screen {...TeamStackNav} />
    </nav.Navigator>
  );
};

export const useMainTabNav: (
  initialData: AppInitialDataWithoutAccountData,
) => NativeStackScreenConfig<AuthenticatedStackParamList, typeof ScreenName> = initialData => {
  return useMemo(
    () => ({
      component: withInitialDataWithoutAccountData(initialData, Component),
      name: MainTabNav.name,
      options: {
        headerShown: false,
      },
    }),
    [initialData],
  );
};
