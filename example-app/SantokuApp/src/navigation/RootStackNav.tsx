import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React, {useEffect, useMemo} from 'react';
import {DevSettings} from 'react-native';
import {LoginScreen, TermsOfServiceAgreementScreen, useTermsOfServiceAgreementScreen} from 'screens';

import {useAccountContext} from '../context/useAccountContext';
import {AppInitialData} from '../framework/initialize/types';
import {AuthenticatedStackNav, useAuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';
import {RootStackParamList} from './types';

const nav = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const getAuthorizedInitialRouteName = (initialData: AppInitialData) => {
  if (!initialData.accountData.terms?.termsOfServiceAgreementStatus?.hasAgreedValidTermsOfService) {
    return TermsOfServiceAgreementScreen.name;
  }
  return AuthenticatedStackNav.name;
};

const getUnauthorizedInitialRouteName = (initialData: AppInitialData) => {
  return LoginScreen.name;
};

const useRootStackNavigator = (initialData: AppInitialData) => {
  const authorizedInitialRouteName = useMemo(() => getAuthorizedInitialRouteName(initialData), [initialData]);
  const unauthorizedInitialRouteName = useMemo(() => getUnauthorizedInitialRouteName(initialData), [initialData]);
  const authenticatedStackNav = useAuthenticatedStackNav(initialData);
  const termsOfServiceAgreementScreen = useTermsOfServiceAgreementScreen(initialData);
  const account = useAccountContext();

  return account.isLoggedIn ? (
    <nav.Navigator screenOptions={screenOptions} initialRouteName={authorizedInitialRouteName}>
      <nav.Screen {...authenticatedStackNav} />
      <nav.Screen {...termsOfServiceAgreementScreen} />
      <nav.Screen {...DemoStackNav} />
    </nav.Navigator>
  ) : (
    <nav.Navigator initialRouteName={unauthorizedInitialRouteName}>
      <nav.Screen {...LoginScreen} />
      <nav.Screen {...DemoStackNav} />
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
