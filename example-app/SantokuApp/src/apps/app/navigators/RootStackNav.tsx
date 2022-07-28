import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {m} from 'bases/message/utils/Message';
import {AccountContext, useAccountContext} from 'features/account/contexts/useAccountContext';
import React, {useEffect, useMemo} from 'react';
import {DevSettings} from 'react-native';

import {LoginScreen} from '../screens/account/LoginScreen';
import {ProfileRegistrationScreen} from '../screens/account/ProfileRegistrationScreen';
import {AppInitialData} from '../types/AppInitialData';
import {useAuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';
import {RootStackParamList} from './types';
import {useDefaultScreenOptions} from './useDefaultScreenOptions';

const nav = createNativeStackNavigator<RootStackParamList>();

const invisibleHeaderOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const getInitialRouteName = (account: AccountContext) => {
  if (account.isLoggedIn) {
    return 'AuthenticatedStackNav';
  }
  return 'Login';
};

const useRootStackNavigator = (initialData: AppInitialData) => {
  const account = useAccountContext();
  const initialRouteName = useMemo(() => getInitialRouteName(account), [account]);
  const authenticatedStackNav = useAuthenticatedStackNav(initialData);
  const defaultScreenOptions = useDefaultScreenOptions();

  return (
    <nav.Navigator screenOptions={defaultScreenOptions} initialRouteName={initialRouteName}>
      {account.isLoggedIn ? (
        <nav.Group screenOptions={invisibleHeaderOptions}>
          <nav.Screen
            name="AuthenticatedStackNav"
            component={authenticatedStackNav}
            options={{
              headerShown: false,
            }}
          />
        </nav.Group>
      ) : (
        <>
          <nav.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: m('ログイン'),
              animation: 'fade',
            }}
          />
          <nav.Screen
            name="ProfileRegistration"
            component={ProfileRegistrationScreen}
            options={{
              title: m('プロフィール登録'),
              animation: 'slide_from_bottom',
            }}
          />
        </>
      )}
      <nav.Group screenOptions={invisibleHeaderOptions}>
        <nav.Screen
          {...DemoStackNav}
          name="DemoStackNav"
          component={DemoStackNav}
          options={{
            presentation: 'formSheet' as const,
          }}
        />
      </nav.Group>
    </nav.Navigator>
  );
};

export const RootStackNav: React.FC<{initialData: AppInitialData}> = ({initialData}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Go to Demo', () => {
        navigation.navigate('DemoStackNav', {screen: 'DemoMenu'});
      });
    }
  }, [navigation]);

  return useRootStackNavigator(initialData);
};
