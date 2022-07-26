import {createUseContextAndProvider} from 'bases/core/contexts/createUseContextAndProvider';
import React from 'react';

export type LoadingOverlayContextType = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export const [useLoadingOverlay, LoadingOverlayContextProvider] =
  createUseContextAndProvider<LoadingOverlayContextType>();
