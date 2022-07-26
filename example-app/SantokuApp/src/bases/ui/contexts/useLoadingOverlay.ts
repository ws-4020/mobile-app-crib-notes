import React from 'react';

import {createUseContextAndProvider} from '../../core/contexts/createUseContextAndProvider';

export type LoadingOverlayContextType = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export const [useLoadingOverlay, LoadingOverlayContextProvider] =
  createUseContextAndProvider<LoadingOverlayContextType>();
