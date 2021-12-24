import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

export type NavigationArgs = [screen: any] | [screen: any, params: object | undefined];

type NavigationContainerContextValue = {
  isReady: boolean;
  setReservedNavigationArgs: React.Dispatch<any>;
};

const defaultNavigationContainerContextValue: NavigationContainerContextValue = {
  isReady: false,
  setReservedNavigationArgs: () => {},
};

export const NavigationContainerContext = createContext<NavigationContainerContextValue>(
  defaultNavigationContainerContextValue,
);

export const WithNavigationContainer: React.FC = ({children}) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [reservedNavigationArgs, setReservedNavigationArgs] = useState<NavigationArgs | undefined>();
  const navigationContainerRef = createNavigationContainerRef();

  const contextValue = useMemo(() => {
    return {
      isReady,
      setReservedNavigationArgs,
    };
  }, [isReady, setReservedNavigationArgs]);

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
