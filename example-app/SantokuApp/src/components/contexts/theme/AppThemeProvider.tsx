import React from 'react';
import {ThemeProvider} from 'react-native-elements';

import {getReactNativeElementsTheme} from './ReactNativeElementsTheme';
import {useAppTheme} from './useAppTheme';

const AppThemeProvider: React.FC = ({children}) => {
  const appTheme = useAppTheme();
  const reactNativeElementsTheme = getReactNativeElementsTheme(appTheme);

  return <ThemeProvider theme={reactNativeElementsTheme}>{children}</ThemeProvider>;
};

export {AppThemeProvider};
