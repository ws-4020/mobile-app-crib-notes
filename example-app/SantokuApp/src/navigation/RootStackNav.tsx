import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  Home,
  Instructions,
  AppInfo,
  Demo,
  AppState,
  ErrorCase,
  ErrorInEventHandler,
  ErrorInUseEffect,
  ErrorInUseEffectSyncProcess,
  ErrorInUseEffectAsyncProcess,
  ErrorInReactComponent,
  ErrorInNativeModule,
} from 'screens';

const nav = createStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={Home.name}>
      <nav.Screen {...Home} />
      <nav.Screen {...Instructions} />
      <nav.Screen {...AppInfo} />
      <nav.Screen {...Demo} />
      <nav.Screen {...AppState} />
      <nav.Screen {...ErrorCase} />
      <nav.Screen {...ErrorInEventHandler} />
      <nav.Screen {...ErrorInUseEffect} />
      <nav.Screen {...ErrorInUseEffectSyncProcess} />
      <nav.Screen {...ErrorInUseEffectAsyncProcess} />
      <nav.Screen {...ErrorInReactComponent} />
      <nav.Screen {...ErrorInNativeModule} />
    </nav.Navigator>
  );
};
