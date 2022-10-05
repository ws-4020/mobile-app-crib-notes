import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import {HomeIllustration} from 'bases/ui/illustration/HomeIllustration';
import {PeopleIllustration} from 'bases/ui/illustration/PeopleIllustration';
import React, {useMemo} from 'react';

import {RestyleTheme} from '../../../bases/ui/theme/restyleTheme';
import {withInitialData} from '../components/withInitialData';
import {HomeStackNav} from './HomeStackNav';
import {TeamStackNav} from './TeamStackNav';
import {MainTabParamList} from './types';

const nav = createBottomTabNavigator<MainTabParamList>();

const getInitialRouteName = (initialData: AppInitialData): keyof MainTabParamList => {
  return 'HomeStackNav';
};
type Props = {
  initialData: AppInitialData;
};
const Component: React.FC<Props> = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const theme = useTheme<RestyleTheme>();

  return (
    <nav.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.colors.orange1},
      }}>
      <nav.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{
          tabBarAccessibilityLabel: 'Home',
          tabBarLabel: 'ホーム',
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.grey2,
          headerShown: false,
          tabBarIcon: ({focused}) => <HomeIllustration tintColor={focused ? undefined : 'grey2'} />,
        }}
      />
      <nav.Screen
        name="TeamStackNav"
        component={TeamStackNav}
        options={{
          tabBarAccessibilityLabel: 'Team',
          tabBarLabel: 'デモ',
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.grey2,
          headerShown: false,
          tabBarIcon: ({focused}) => <PeopleIllustration color={focused ? 'white' : 'grey2'} />,
        }}
      />
    </nav.Navigator>
  );
};

export const useMainTabNav = (initialData: AppInitialData) => {
  return useMemo(() => withInitialData(initialData, Component), [initialData]);
};
