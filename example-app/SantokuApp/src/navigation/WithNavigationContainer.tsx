import {createNavigationContainerRef, DefaultRouterOptions, NavigationContainer} from '@react-navigation/native';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

export type NavigationArgs = [screen: any] | [screen: any, params: object | undefined];

export type NavigatorOptions = {
  [navigatorName: string]: DefaultRouterOptions;
};

type NavigationContainerContextValue = {
  isReady: boolean;
  navigatorOptions: NavigatorOptions;
  setNavigatorOptions: React.Dispatch<any>;
  setReservedNavigationArgs: React.Dispatch<any>;
};

const defaultNavigationContainerContextValue: NavigationContainerContextValue = {
  isReady: false,
  navigatorOptions: {},
  setNavigatorOptions: () => {},
  setReservedNavigationArgs: () => {},
};

export const NavigationContainerContext = createContext<NavigationContainerContextValue>(
  defaultNavigationContainerContextValue,
);

export const WithNavigationContainer: React.FC = ({children}) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [reservedNavigationArgs, setReservedNavigationArgs] = useState<NavigationArgs | undefined>();
  const [navigatorOptions, setNavigatorOptions] = useState<NavigatorOptions>(
    defaultNavigationContainerContextValue.navigatorOptions,
  );
  const navigationContainerRef = createNavigationContainerRef();

  const contextValue = useMemo(() => {
    return {
      isReady,
      navigatorOptions,
      setNavigatorOptions,
      setReservedNavigationArgs,
    };
  }, [isReady, navigatorOptions]);

  useEffect(() => {
    if (reservedNavigationArgs && isReady && navigationContainerRef.isReady()) {
      navigationContainerRef.navigate(...reservedNavigationArgs);
      setReservedNavigationArgs(undefined);
    }
  }, [isReady, reservedNavigationArgs, navigationContainerRef]);

  return (
    <NavigationContainerContext.Provider value={contextValue}>
      <NavigationContainer
        ref={navigationContainerRef}
        onReady={() => {
          setIsReady(true);
        }}
        // TODO: DeepLink設定
      >
        {children}
      </NavigationContainer>
    </NavigationContainerContext.Provider>
  );
};

export const useNavigationContainerContext = () => {
  return useContext(NavigationContainerContext);
};
