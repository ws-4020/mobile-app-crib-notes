import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TermsOfServiceAgreementScreen} from 'screens';
import {InitialScreen} from 'screens/initial';

import {AuthenticatedStackNav} from './AuthenticatedStackNav';
import {DemoStackNav} from './DemoStackNav';

const nav = createNativeStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator
      initialRouteName={InitialScreen.name}
      screenOptions={{
        headerShown: false,
      }}>
      <nav.Screen {...InitialScreen} />
      <nav.Screen {...TermsOfServiceAgreementScreen} />
      <nav.Screen {...AuthenticatedStackNav} />
      {__DEV__ && <nav.Screen {...DemoStackNav} />}
    </nav.Navigator>
  );
};
