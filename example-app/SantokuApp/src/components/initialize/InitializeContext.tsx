import {log} from 'framework/logging';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

import {initialize, hideSplashScreen, showErrorDialog, NavigatorOptions} from './Initialize';

type InitializeContextValue = {
  initialized: boolean;
  navigatorOptions: NavigatorOptions;
};

const defaultInitializeContextValue: InitializeContextValue = {
  initialized: false,
  navigatorOptions: {},
};

export const InitializeContext = createContext<InitializeContextValue>(defaultInitializeContextValue);

export const WithInitializeContext: React.FC = ({children}) => {
  const [initialized, setInitialized] = useState<boolean>(defaultInitializeContextValue.initialized);
  const [navigatorOptions, setNavigatorOptions] = useState<NavigatorOptions>(
    defaultInitializeContextValue.navigatorOptions,
  );
  const contextValue = useMemo(() => {
    return {
      initialized,
      navigatorOptions,
    };
  }, [initialized, navigatorOptions]);

  useEffect(() => {
    initialize()
      .then((navigatorOptions: NavigatorOptions) => {
        setNavigatorOptions(navigatorOptions);
        setInitialized(true);
        hideSplashScreen().catch(() => {
          log.error('Failed to hide splash screen.', 'HideSplashScreenFailure');
        });
      })
      .catch(() => {
        log.error('Failed to initialize.', 'InitializeFailure');
        showErrorDialog();
      });
  }, []);

  if (initialized) {
    return <InitializeContext.Provider value={contextValue}>{children}</InitializeContext.Provider>;
  } else {
    return <InitializeContext.Provider value={contextValue} />;
  }
};

export const useInitializeContext = () => {
  return useContext(InitializeContext);
};
