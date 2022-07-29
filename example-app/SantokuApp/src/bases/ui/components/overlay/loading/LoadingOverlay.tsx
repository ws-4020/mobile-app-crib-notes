import React, {useMemo, useState} from 'react';

import {FullWindowOverlay} from '../FullWindowOverlay';
import {LoadingOverlayComponent} from './LoadingOverlayComponent';

type LoadingOverlayType = {
  visible: (visible: boolean) => void;
};

let LoadingOverlay: LoadingOverlayType = {
  visible: () => {
    throw new Error('WithSnackbar is required.');
  },
};

const WithLoadingOverlay: React.FC = ({children}) => {
  const [visible, setVisible] = useState<boolean>(false);
  LoadingOverlay = useMemo<LoadingOverlayType>(() => ({visible: (visible: boolean) => setVisible(visible)}), []);
  return (
    <>
      {children}
      <FullWindowOverlay>
        <LoadingOverlayComponent visible={visible} />
      </FullWindowOverlay>
    </>
  );
};

export {WithLoadingOverlay, LoadingOverlay};
