import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Overlay, OverlayProps} from 'react-native-elements';

import {FullWindowOverlay} from '../FullWindowOverlay';

const LoadingOverlay: React.FC<OverlayProps> = ({children, ...props}) => {
  const overlayProps = {
    fullScreen: true,
    overlayStyle: styles.overlay,
    backdropStyle: styles.backdrop,
    ...props,
  } as OverlayProps;
  return (
    <>
      {children}
      <FullWindowOverlay>
        <Overlay {...overlayProps}>
          <ActivityIndicator size="large" color="#0000ff" />
        </Overlay>
      </FullWindowOverlay>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  backdrop: {
    opacity: 0.2,
  },
});

export {LoadingOverlay};
