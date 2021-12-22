<<<<<<< HEAD
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useInitializeContext} from 'components/initialize';
import React, {useEffect} from 'react';
import {DevSettings} from 'react-native';
=======
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useInitializeContext} from 'components/initialize';
import React from 'react';
>>>>>>> 24aae025f... 通知受信時の画面遷移をNavigationContainerがReadyになってから実施するように修正
import {TermsOfServiceAgreementScreen} from 'screens';

import {AuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';
import {RootStackParamList} from './types';

const nav = createNativeStackNavigator<RootStackParamList>();
const name = 'RootStackNav';

export const RootStackNav: React.FC = () => {
  const {navigatorOptions, reservedNavigation, clearReservedNavigation} = useInitializeContext();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    DevSettings.addMenuItem('Go to Demo', () => {
      navigation.navigate('DemoStackNav', {screen: 'Demo'});
    });
  }, [navigation]);

  useEffect(() => {
    if (reservedNavigation) {
      navigation.navigate(reservedNavigation.screen, reservedNavigation.params);
      clearReservedNavigation();
    }
  }, [navigation, reservedNavigation, clearReservedNavigation]);

  return (
    <nav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      {...navigatorOptions[name]}>
      <nav.Screen {...TermsOfServiceAgreementScreen} />
      <nav.Screen {...AuthenticatedStackNav} />
      <nav.Screen {...DemoStackNav} />
    </nav.Navigator>
  );
};
