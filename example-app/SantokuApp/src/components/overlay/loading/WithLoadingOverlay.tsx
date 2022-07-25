import {createUseContextAndProvider} from 'bases/utilities';
import React, {useMemo, useState} from 'react';

import {FullWindowOverlay} from '../FullWindowOverlay';
import {LoadingOverlay} from './LoadingOverlay';

type LoadingOverlayContextType = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const [useLoadingOverlay, LoadingOverlayContextProvider] = createUseContextAndProvider<LoadingOverlayContextType>();

const WithLoadingOverlay: React.FC = ({children}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const loadingOverlayContext = useMemo<LoadingOverlayContextType>(() => ({setVisible}), []);
  return (
    <LoadingOverlayContextProvider value={loadingOverlayContext}>
      {children}
      <FullWindowOverlay>
        <LoadingOverlay visible={visible} />
      </FullWindowOverlay>
    </LoadingOverlayContextProvider>
  );
};

export {WithLoadingOverlay, useLoadingOverlay};
