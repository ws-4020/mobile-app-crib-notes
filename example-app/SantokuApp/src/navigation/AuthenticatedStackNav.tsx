import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {MainTabNav} from './MainTabNav';
import {AuthenticatedStackParamList, RootStackParamList} from './types';
import {useNavigationContainerContext} from './WithNavigationContainer';

const nav = createNativeStackNavigator<AuthenticatedStackParamList>();

const name = 'AuthenticatedStackNav';
const Screen: React.FC = () => {
  const {navigatorOptions} = useNavigationContainerContext();

  return (
    <nav.Navigator {...navigatorOptions[name]}>
      <nav.Screen {...MainTabNav} />
    </nav.Navigator>
  );
};

export const AuthenticatedStackNav: NativeStackScreenConfig<RootStackParamList, typeof name> = {
  component: Screen,
  name,
};
