import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TeamDetailScreen} from 'screens';

import {MainTabParamList, TeamStackParamList} from './types';
import {useNavigationContainerContext} from './WithNavigationContainer';

const nav = createNativeStackNavigator<TeamStackParamList>();

const name = 'TeamStackNav';
const Screen: React.FC = () => {
  const {navigatorOptions} = useNavigationContainerContext();
  return (
    <nav.Navigator {...navigatorOptions[name]}>
      <nav.Screen {...TeamDetailScreen} />
    </nav.Navigator>
  );
};

export const TeamStackNav: TabScreenConfig<MainTabParamList, typeof name> = {
  component: Screen,
  name,
};
