import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import React, {useMemo} from 'react';

import {MainTabNav, useMainTabNav} from './MainTabNav';
import {AuthenticatedStackParamList, RootStackParamList} from './types';

const nav = createNativeStackNavigator<AuthenticatedStackParamList>();

const ScreenName = 'AuthenticatedStackNav';
export const AuthenticatedStackNav = {
  name: ScreenName as typeof ScreenName,
};
const getInitialRouteName = (initialData: AppInitialData) => {
  return MainTabNav.name;
};

type Props = {
  initialData: AppInitialData;
}
const Component: React.FC<Props> = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const mainTabNav = useMainTabNav(initialData);

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen {...mainTabNav} />
    </nav.Navigator>
  );
};

export const useAuthenticatedStackNav: (
  initialData: AppInitialData,
) => NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = initialData => {
  return useMemo(
    () => ({
      component: (props: any) => <Component initialData={initialData} {...props} />,
      name: AuthenticatedStackNav.name,
      options: {
        headerShown: false,
      },
    }),
    [initialData],
  );
};
