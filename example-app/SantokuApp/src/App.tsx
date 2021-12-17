import {WithInitializeContext} from 'components/initialize';
import {RootStackNav} from 'navigation';
import React from 'react';

import {WithSnackbar} from './components/snackbar/';
import {WithAppTheme} from './components/theme';
import {WithNavigationContainer} from './navigation/WithNavigationContainer';

export const App = () => {
  return (
    <WithInitializeContext>
      <WithAppTheme>
        <WithSnackbar>
          <WithNavigationContainer>
            <RootStackNav />
          </WithNavigationContainer>
        </WithSnackbar>
      </WithAppTheme>
    </WithInitializeContext>
  );
};
