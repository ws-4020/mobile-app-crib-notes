import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native-appearance';

import {AppTheme, darkModeAppTheme, lightModeAppTheme} from './AppTheme';

const defaultAppTheme = lightModeAppTheme;

export const useAppTheme = () => {
  const [appTheme, setAppTheme] = useState<AppTheme>(defaultAppTheme);
  // TODO: 以下のIssueが修正されるReact Native v0.66.2以降へのバージョンアップ後に、
  // react-native-appearanceからreact-nativeのuseColorSchemeへ移行する
  // https://github.com/facebook/react-native/issues/28823
  const colorScheme = useColorScheme();

  useEffect(() => {
    setAppTheme(colorScheme === 'dark' ? darkModeAppTheme : lightModeAppTheme);
  }, [colorScheme]);

  return appTheme;
};
