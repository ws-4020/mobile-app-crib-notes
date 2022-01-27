// import {ActivityIndicator, Overlay, OverlayProps} from '@sc/react-native-components';
import {createUseContextAndProvider} from 'framework/utilities';
import React, {useMemo, useState} from 'react';

import {LoadingOverlay} from './LoadingOverlay';

type LoadingOverlayContextType = {
  show: () => void;
  hide: () => void;
};

const [useLoadingOverlay, LoadingOverlayContextProvider] = createUseContextAndProvider<LoadingOverlayContextType>();

const WithLoadingOverlay: React.FC = ({children}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const loadingOverlayContext = useMemo<LoadingOverlayContextType>(
    () => ({
      show: () => {
        if (!isVisible) {
          setIsVisible(true);
        }
      },
      hide: () => {
        if (isVisible) {
          setIsVisible(false);
        }
      },
    }),
    [isVisible],
  );
  return (
    <LoadingOverlayContextProvider value={loadingOverlayContext}>
      <LoadingOverlay isVisible={isVisible}>{children}</LoadingOverlay>
    </LoadingOverlayContextProvider>
  );
};

export {WithLoadingOverlay, useLoadingOverlay};
