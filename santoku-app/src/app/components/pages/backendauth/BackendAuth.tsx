import {NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BackendAuthContextProvider, useBackendAuthContext} from '../../../context/BackendAuthContext';
import React, {useCallback, useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import {BackendAuthAuthed} from './BackendAuthAuthed';
import {BackendAuthUnauthed} from './BackendAuthUnauthed';
import {BackendAuthSignIn} from './BackendAuthSignIn';

type MainStackParamList = {
  BackendAuthAuthed: undefined;
  BackendAuthUnauthed: undefined;
};

const mainNav = createStackNavigator<MainStackParamList>();
const BackendAuthMainStackNav: React.FC = () => {
  const authContext = useBackendAuthContext();
  return (
    <mainNav.Navigator screenOptions={{headerShown: false}}>
      {authContext.isLoggedIn ? (
        <mainNav.Screen name="BackendAuthAuthed" component={BackendAuthAuthed} />
      ) : (
        <mainNav.Screen name="BackendAuthUnauthed" component={BackendAuthUnauthed} />
      )}
    </mainNav.Navigator>
  );
};

type RootStackParamList = {
  BackendAuthMain: NavigatorScreenParams<MainStackParamList>;
  BackendAuthSignIn: undefined;
};

const rootNav = createStackNavigator<RootStackParamList>();
const BackendAuthRootStackNav: React.FC = () => {
  return (
    <BackendAuthContextProvider>
      <rootNav.Navigator screenOptions={{headerShown: false}} mode="modal">
        <rootNav.Screen name="BackendAuthMain" component={BackendAuthMainStackNav} />
        <rootNav.Screen
          name="BackendAuthSignIn"
          component={BackendAuthSignIn}
          options={{
            headerShown: false,
            headerTransparent: true,
          }}
        />
      </rootNav.Navigator>
    </BackendAuthContextProvider>
  );
};

const BackendAuth: React.FC = () => {
  const navigation = useNavigation();

  const handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (nextAppState !== 'active') {
        navigation.navigate('BackendAuthSignIn');
      }
    },
    [navigation],
  );

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [handleAppStateChange]);

  return (
    <BackendAuthContextProvider>
      <BackendAuthRootStackNav />
    </BackendAuthContextProvider>
  );
};

export default BackendAuth;
