import React, {forwardRef} from 'react';
import RNMMapView, {MapViewProps as RNMMapViewProps, PROVIDER_DEFAULT} from 'react-native-maps';

// 現状の設定ではiOSでGoogleマップを使用できないため
// providerをデフォルト（AndroidはGoogleマップ、iOSはMapKit）に固定する
const provider = PROVIDER_DEFAULT;

// Propsから固定したProp（provider）とiOSのGoogle Mapでのみ指定できるProps（paddingAdjustmentBehaviorとzoomTapEnabled）を削除する
export type MapViewProps = Omit<RNMMapViewProps, 'provider' | 'paddingAdjustmentBehavior' | 'zoomTapEnabled'>;

export interface MapViewRef extends RNMMapView {}

export const MapView = forwardRef<RNMMapView, MapViewProps>(function MapView(props, ref) {
  return <RNMMapView provider={provider} {...props} ref={ref}  />;
});
