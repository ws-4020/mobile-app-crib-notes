import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native-appearance';

import {AppTheme, darkModeAppTheme, lightModeAppTheme} from './AppTheme';

const defaultAppTheme = lightModeAppTheme;

export const useAppTheme = () => {
  const [appTheme, setAppTheme] = useState<AppTheme>(defaultAppTheme);
  const colorScheme = useColorScheme();

  useEffect(() => {
    setAppTheme(colorScheme === 'dark' ? darkModeAppTheme : lightModeAppTheme);
  }, [colorScheme]);

  return appTheme;
};
