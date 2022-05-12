import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {AccountContext, useAccountContext} from 'context/useAccountContext';
import {AppInitialDataWithoutAccountData} from 'framework/initialize';
import React, {useEffect, useMemo} from 'react';
import {DevSettings} from 'react-native';
import {LoginScreen, ProfileRegistrationScreen} from 'screens';

import {AuthenticatedStackNav, useAuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';
import {RootStackParamList} from './types';
import {useDefaultScreenOptions} from './useDefaultScreenOptions';

const nav = createNativeStackNavigator<RootStackParamList>();

const invisibleHeaderOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const getInitialRouteName = (account: AccountContext) => {
  if (account.isLoggedIn) {
    return AuthenticatedStackNav.name;
  }
  return LoginScreen.name;
};

const useRootStackNavigator = (initialData: AppInitialDataWithoutAccountData) => {
  const account = useAccountContext();
  const authorizedInitialRouteName = useMemo(() => getInitialRouteName(account), [account]);
  const authenticatedStackNav = useAuthenticatedStackNav(initialData);
  const defaultScreenOptions = useDefaultScreenOptions();

  return (
    <nav.Navigator screenOptions={defaultScreenOptions} initialRouteName={authorizedInitialRouteName}>
      {account.isLoggedIn ? (
        <nav.Group screenOptions={invisibleHeaderOptions}>
          <nav.Screen {...authenticatedStackNav} />
        </nav.Group>
      ) : (
        <>
          <nav.Screen {...LoginScreen} />
          <nav.Screen {...ProfileRegistrationScreen} />
        </>
      )}
      <nav.Group screenOptions={invisibleHeaderOptions}>
        <nav.Screen {...DemoStackNav} />
      </nav.Group>
    </nav.Navigator>
  );
};

export const RootStackNav: React.FC<{initialData: AppInitialDataWithoutAccountData}> = ({initialData}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Go to Demo', () => {
        navigation.navigate('DemoStackNav', {screen: 'Demo'});
      });
    }
  }, [navigation]);

  return useRootStackNavigator(initialData);
};
