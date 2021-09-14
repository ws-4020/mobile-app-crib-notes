import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  HomeScreen,
  InstructionsScreen,
  AppInfoScreen,
  DemoScreen,
  AppStateScreen,
  ErrorCaseScreen,
  ErrorInEventHandlerScreen,
  ErrorInUseEffectScreen,
  ErrorInUseEffectSyncProcessScreen,
  ErrorInUseEffectAsyncProcessScreen,
  ErrorInReactComponentScreen,
  ErrorInNativeModuleScreen,
} from 'screens';

const nav = createStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={HomeScreen.name}>
      <nav.Screen {...HomeScreen} />
      <nav.Screen {...InstructionsScreen} />
      <nav.Screen {...AppInfoScreen} />
      <nav.Screen {...DemoScreen} />
      <nav.Screen {...AppStateScreen} />
      <nav.Screen {...ErrorCaseScreen} />
      <nav.Screen {...ErrorInEventHandlerScreen} />
      <nav.Screen {...ErrorInUseEffectScreen} />
      <nav.Screen {...ErrorInUseEffectSyncProcessScreen} />
      <nav.Screen {...ErrorInUseEffectAsyncProcessScreen} />
      <nav.Screen {...ErrorInReactComponentScreen} />
      <nav.Screen {...ErrorInNativeModuleScreen} />
    </nav.Navigator>
  );
};
