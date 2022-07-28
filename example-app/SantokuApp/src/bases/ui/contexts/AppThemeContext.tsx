import React, {useMemo} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeProvider} from 'react-native-elements';

import {darkModeAppTheme, lightModeAppTheme} from '../constants/AppTheme';
import {getReactNativeElementsTheme} from '../utils/ReactNativeElementsTheme';
import {AppThemeContextProvider} from './useAppTheme';

const getAppTheme = (colorScheme: ColorSchemeName) => (colorScheme === 'dark' ? darkModeAppTheme : lightModeAppTheme);

const WithAppTheme: React.FC = ({children}) => {
  const colorScheme = useColorScheme();
  const appTheme = getAppTheme(colorScheme);
  const reactNativeElementsTheme = useMemo(() => getReactNativeElementsTheme(appTheme), [appTheme]);

  return (
    <AppThemeContextProvider value={appTheme}>
      <ThemeProvider theme={reactNativeElementsTheme}>{children}</ThemeProvider>
    </AppThemeContextProvider>
  );
};

export {WithAppTheme};
