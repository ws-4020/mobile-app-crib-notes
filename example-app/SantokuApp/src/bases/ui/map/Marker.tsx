import React from 'react';
import {Marker as RNMMarker, MarkerProps as RNMMarkerProps} from 'react-native-maps';

// iOSでGoogle Mapのみで指定できるProps（tappable, tracksInfoWindowChanges）を削除する
export type MarkerProps = Omit<RNMMarkerProps, 'tappable' | 'tracksInfoWindowChanges'>;

export const Marker: React.FC<MarkerProps> = (props: MarkerProps) => {
  return <RNMMarker {...props} testID="Marker" />;
};
