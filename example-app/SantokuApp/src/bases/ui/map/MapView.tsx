import React, {forwardRef} from 'react';
import RNMMapView, {MapViewProps as RNMMapViewProps, PROVIDER_DEFAULT} from 'react-native-maps';

// providerをデフォルト（AndroidはGoogle Map、iOSはMapKit）に固定する
const provider = PROVIDER_DEFAULT;

// Propsから固定したProp（provider）とiOSのGoogle Mapでのみ指定できるProps（paddingAdjustmentBehaviorとzoomTapEnabled）を削除する
export type MapViewProps = Omit<RNMMapViewProps, 'provider' | 'paddingAdjustmentBehavior' | 'zoomTapEnabled'>;

export const MapView = forwardRef<RNMMapView, MapViewProps>(function MapView(props, ref) {
  return <RNMMapView provider={provider} {...props} ref={ref} testID="MapView" />;
});
