import {AppNavigatorOptions} from 'navigation/types';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

import {initialize, hideSplashScreen} from './initialize';

type InitializeContextValue = {
  initialized: boolean;
  navigatorOptions: AppNavigatorOptions;
};

const defaultInitializeContextValue: InitializeContextValue = {
  initialized: false,
  navigatorOptions: {},
};

export const InitializeContext = createContext<InitializeContextValue>(defaultInitializeContextValue);

export const WithInitializeContext: React.FC = ({children}) => {
  const [error, setError] = useState<unknown>();
  const [initialized, setInitialized] = useState<boolean>(defaultInitializeContextValue.initialized);
  const [navigatorOptions, setNavigatorOptions] = useState<AppNavigatorOptions>(
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
      .then((navigatorOptions: AppNavigatorOptions) => {
        setNavigatorOptions(navigatorOptions);
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
    return <InitializeContext.Provider value={contextValue}>{children}</InitializeContext.Provider>;
  } else {
    return null;
  }
};

export const useInitializeContext = () => {
  return useContext(InitializeContext);
};
