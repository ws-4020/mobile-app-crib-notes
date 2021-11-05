import React, {createContext} from 'react';
import {useColorScheme} from 'react-native-appearance';
import {ThemeProvider} from 'react-native-elements';

import {AppTheme, darkModeAppTheme, lightModeAppTheme} from './AppTheme';
import {getReactNativeElementsTheme} from './ReactNativeElementsTheme';

const defaultAppTheme = lightModeAppTheme;
const AppThemeContext = createContext<AppTheme>(defaultAppTheme);

const AppThemeProvider: React.FC = ({children}) => {
  const colorScheme = useColorScheme();
  const appTheme = colorScheme === 'dark' ? darkModeAppTheme : lightModeAppTheme;
  const reactNativeElementsTheme = getReactNativeElementsTheme(appTheme);

  return (
    <AppThemeContext.Provider value={appTheme}>
      <ThemeProvider theme={reactNativeElementsTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export {AppThemeContext, AppThemeProvider};
