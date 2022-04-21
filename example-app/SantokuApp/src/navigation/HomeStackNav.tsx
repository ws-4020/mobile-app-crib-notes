import {Ionicons} from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from 'screens';

import {HomeStackParamList, MainTabParamList} from './types';
import {useLogoutButton} from './useLogoutButton';

const nav = createNativeStackNavigator<HomeStackParamList>();

const ScreenName = 'HomeStackNav';
const Screen: React.FC = () => {
  const {LogoutButton} = useLogoutButton();
  return (
    <nav.Navigator screenOptions={{headerRight: LogoutButton}}>
      <nav.Screen {...HomeScreen} />
    </nav.Navigator>
  );
};

export const HomeStackNav: TabScreenConfig<MainTabParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    tabBarAccessibilityLabel: 'Home',
    tabBarShowLabel: false,
    headerShown: false,
    tabBarIcon: ({color}) => <Ionicons name="md-home" size={30} color={color} />,
  },
};
