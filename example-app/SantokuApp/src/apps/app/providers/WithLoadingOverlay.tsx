import {FullWindowOverlay} from 'bases/ui/components/overlay/FullWindowOverlay';
import {LoadingOverlay} from 'bases/ui/components/overlay/loading/LoadingOverlay';
import {LoadingOverlayContextProvider, LoadingOverlayContextType} from 'bases/ui/contexts/useLoadingOverlay';
import React, {useMemo, useState} from 'react';

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
