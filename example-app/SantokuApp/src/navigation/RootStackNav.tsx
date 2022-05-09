import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React, {useEffect, useMemo} from 'react';
import {DevSettings} from 'react-native';
import {LoginScreen, ProfileRegistrationScreen, TermsOfServiceAgreementScreen} from 'screens';

import {useAccountContext} from '../context/useAccountContext';
import {AppInitialData} from '../framework/initialize/types';
import {AuthenticatedStackNav, useAuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';
import {RootStackParamList} from './types';
import {useDefaultScreenOptions} from './useDefaultScreenOptions';

const nav = createNativeStackNavigator<RootStackParamList>();

const invisibleHeaderOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const getInitialRouteName = (initialData: AppInitialData) => {
  return AuthenticatedStackNav.name;
};

const useRootStackNavigator = (initialData: AppInitialData) => {
  const authorizedInitialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const authenticatedStackNav = useAuthenticatedStackNav(initialData);
  const account = useAccountContext();
  const defaultScreenOptions = useDefaultScreenOptions();

  return (
    <nav.Navigator
      key="authorizedNav"
      screenOptions={defaultScreenOptions}
      initialRouteName={authorizedInitialRouteName}>
      {account.isLoggedIn ? (
        <nav.Group screenOptions={invisibleHeaderOptions}>
          <nav.Screen {...authenticatedStackNav} />
        </nav.Group>
      ) : (
        <>
          <nav.Screen {...LoginScreen} />
          <nav.Screen {...ProfileRegistrationScreen} />
          <nav.Screen {...TermsOfServiceAgreementScreen} />
        </>
      )}
      <nav.Group screenOptions={invisibleHeaderOptions}>
        <nav.Screen {...DemoStackNav} />
      </nav.Group>
    </nav.Navigator>
  );
};

export const RootStackNav: React.FC<{initialData: AppInitialData}> = ({initialData}) => {
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
