import React, {useMemo, useState} from 'react';

import {FullWindowOverlay} from '../components/overlay/FullWindowOverlay';
import {LoadingOverlay} from '../components/overlay/loading/LoadingOverlay';
import {LoadingOverlayContextProvider, LoadingOverlayContextType} from './useLoadingOverlay';

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

export {WithLoadingOverlay};
