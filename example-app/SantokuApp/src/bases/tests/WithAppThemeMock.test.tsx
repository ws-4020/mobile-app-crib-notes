import {AppThemeContextProvider} from 'bases/ui/contexts/useAppTheme';
import React from 'react';
import {ThemeProvider} from 'react-native-elements';

import {AppTheme} from '../ui/types/AppTheme';

const appTheme: AppTheme = {
  name: 'lightTheme',
  colors: {
    background: '#ffffff',
    backgroundHeader: '#fafafa',
    backgroundBottomTab: '#fafafa',
    backgroundSnackbar: '#404040',
    text: '#212935',
    textInverted: '#ffffff',
    textStrong: '#000000',
    textWeak: '#9e9e9e',
    border: '#e0e0e0',
    borderStrong: '#9e9e9e',
    primary: '#3a6be8',
    primaryVariant: '#85a3f1',
    secondary: '#e8b73a',
    secondaryVariant: '#f8f3dd',
    inactive: '#e0e0e0',
    danger: '#d33246',
    error: '#d33246',
    warning: '#e8b73a',
  },
};
const getReactNativeElementsTheme = (appTheme: AppTheme) => {
  const colors = appTheme.colors;
  return {
    // Buttonはタイプによってスタイルが変わるのでここでは設定しない
    Text: {
      style: {
        color: colors.text,
      },
      h1Style: {
        color: colors.textStrong,
      },
      h2Style: {
        color: colors.textStrong,
      },
      h3Style: {
        color: colors.textStrong,
      },
      h4Style: {
        color: colors.textStrong,
      },
    },
    Input: {
      style: {
        fontSize: 17,
        color: colors.text,
        includeFontPadding: false,
      },
      labelStyle: {
        fontSize: 15,
        fontWeight: 'normal',
        color: colors.text,
      },
      containerStyle: {
        paddingHorizontal: 0,
      },
      inputContainerStyle: {
        borderBottomColor: colors.borderStrong,
        borderBottomWidth: 2,
      },
      errorStyle: {
        fontSize: 12,
        color: colors.error,
        includeFontPadding: false,
      },
    },
  };
};

const WithAppThemeMock: React.FC = ({children}) => {
  const reactNativeElementsTheme = getReactNativeElementsTheme(appTheme);

  return (
    <AppThemeContextProvider value={appTheme}>
      <ThemeProvider theme={reactNativeElementsTheme}>{children}</ThemeProvider>
    </AppThemeContextProvider>
  );
};

export {WithAppThemeMock};
