import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Overlay, OverlayProps} from './Overlay';

const LoadingOverlay: React.FC<OverlayProps> = ({children, ...props}) => {
  return (
    <Overlay {...props}>
      <ActivityIndicator size="large" color="#0000ff" />
    </Overlay>
  );
};

export {LoadingOverlay};
