import {NavigationContainer} from '@react-navigation/native';
import {WithInitializeContext} from 'components/initialize';
import {RootStackNav} from 'navigation';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {WithSnackbar} from './components/snackbar/';
import {WithAppTheme} from './components/theme';

export const App = () => {
  return (
    <GestureHandlerRootView>
      <WithInitializeContext>
        <WithAppTheme>
          <WithSnackbar>
            <NavigationContainer>
              <RootStackNav />
            </NavigationContainer>
          </WithSnackbar>
        </WithAppTheme>
      </WithInitializeContext>
    </GestureHandlerRootView>
  );
};
