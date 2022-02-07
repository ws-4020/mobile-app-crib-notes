import {createUseContextAndProvider} from 'framework/utilities';
import React, {useMemo, useState} from 'react';

import {LoadingOverlay} from './LoadingOverlay';

type LoadingOverlayContextType = {
  show: () => void;
  hide: () => void;
};

const [useLoadingOverlay, LoadingOverlayContextProvider] = createUseContextAndProvider<LoadingOverlayContextType>();

const WithLoadingOverlay: React.FC = ({children}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const loadingOverlayContext = useMemo<LoadingOverlayContextType>(
    () => ({
      show: () => {
        setVisible(true);
      },
      hide: () => {
        setVisible(false);
      },
    }),
    [],
  );
  return (
    <LoadingOverlayContextProvider value={loadingOverlayContext}>
      <LoadingOverlay visible={visible}>{children}</LoadingOverlay>
    </LoadingOverlayContextProvider>
  );
};

export {WithLoadingOverlay, useLoadingOverlay};
