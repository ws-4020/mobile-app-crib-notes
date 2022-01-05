import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from 'screens';

import {HomeStackParamList, MainTabParamList} from './types';
import {useNavigationContainerContext} from './WithNavigationContainer';

const nav = createNativeStackNavigator<HomeStackParamList>();

const name = 'HomeStackNav';
const Screen: React.FC = () => {
  const {navigatorOptions} = useNavigationContainerContext();
  return (
    <nav.Navigator {...navigatorOptions[name]}>
      <nav.Screen {...HomeScreen} />
    </nav.Navigator>
  );
};

export const HomeStackNav: TabScreenConfig<MainTabParamList, typeof name> = {
  component: Screen,
  name,
};
