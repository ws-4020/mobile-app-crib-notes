import {createUseContextAndProvider} from 'framework/utilities';
import {AppNavigatorOptions} from 'navigation/types';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {initialize, hideSplashScreen, NavigatorOptions, NavigationArgs} from './initialize';

type InitializeContextValue = {
  initialized: boolean;
  navigatorOptions: AppNavigatorOptions;
  reservedSnackbarMessage: string | undefined;
  reservedNavigation: NavigationArgs | undefined;
  clearReservedSnackbarMessage: () => void;
  clearReservedNavigation: () => void;
};

const [useInitializeContext, InitializeContextProvider] = createUseContextAndProvider<InitializeContextValue>();

const WithInitializeContext: React.FC = ({children}) => {
  const [error, setError] = useState<unknown>();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [navigatorOptions, setNavigatorOptions] = useState<AppNavigatorOptions>({});
  const [reservedSnackbarMessage, setReservedSnackbarMessage] = useState<string>();
  const [reservedNavigation, setReservedNavigation] = useState<NavigationArgs | undefined>();

  const clearReservedSnackbarMessage = useCallback(() => {
    setReservedSnackbarMessage(undefined);
  }, []);

  const clearReservedNavigation = useCallback(() => {
    setReservedNavigation(undefined);
  }, []);

  const contextValue = useMemo(() => {
    return {
      initialized,
      navigatorOptions,
      reservedSnackbarMessage,
      reservedNavigation,
      clearReservedSnackbarMessage,
      clearReservedNavigation,
    };
  }, [
    initialized,
    navigatorOptions,
    reservedSnackbarMessage,
    reservedNavigation,
    clearReservedSnackbarMessage,
    clearReservedNavigation,
  ]);

  useEffect(() => {
    initialize(setNavigatorOptions, setReservedSnackbarMessage, setReservedNavigation)
      .then(() => {
        setInitialized(true);
        hideSplashScreen().catch(() => {});
      })
      .catch(e => {
        setError(e);
      });
  }, []);

  useEffect(() => {
    if (error) {
      // 初期化処理に失敗した場合はアプリをクラッシュ扱いで終了
      throw error;
    }
  }, [error]);

  if (initialized) {
    return <InitializeContextProvider value={contextValue}>{children}</InitializeContextProvider>;
  } else {
    return null;
  }
};

export {useInitializeContext, WithInitializeContext};
