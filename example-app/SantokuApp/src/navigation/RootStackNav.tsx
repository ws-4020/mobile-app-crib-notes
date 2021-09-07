import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home, Instructions, ApplicationInfo} from 'screens';

import {ErrorCase} from '../screens/error/ErrorCase';
import {ErrorInEventHandler} from '../screens/error/ErrorInEventHandler';
import {ErrorInNativeModule} from '../screens/error/ErrorInNativeModules';
import {ErrorInReactComponent} from '../screens/error/ErrorInReactComponent';
import {ErrorInUseEffectAsyncProcess} from '../screens/error/ErrorInUseEffectAsyncProcess';
import {ErrorInUseEffectSyncProcess} from '../screens/error/ErrorInUseEffectSyncProcess';

const nav = createStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={Home.name}>
      <nav.Screen name="Home" component={Home} options={{headerShown: false}} />
      <nav.Screen name="Instructions" component={Instructions} />
      <nav.Screen name="AppInfo" component={ApplicationInfo} options={{title: 'Application Information'}} />
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <nav.Screen name={ErrorCase.ScreenName} component={ErrorCase.Screen} />
      <nav.Screen name={ErrorInEventHandler.ScreenName} component={ErrorInEventHandler.Screen} />
      <nav.Screen name={ErrorInUseEffectSyncProcess.ScreenName} component={ErrorInUseEffectSyncProcess.Screen} />
      <nav.Screen name={ErrorInUseEffectAsyncProcess.ScreenName} component={ErrorInUseEffectAsyncProcess.Screen} />
      <nav.Screen name={ErrorInReactComponent.ScreenName} component={ErrorInReactComponent.Screen} />
      <nav.Screen name={ErrorInNativeModule.ScreenName} component={ErrorInNativeModule.Screen} />
    </nav.Navigator>
  );
};
