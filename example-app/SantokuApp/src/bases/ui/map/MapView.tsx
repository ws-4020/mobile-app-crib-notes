import React from 'react';
import RNMMapView, {MapViewProps as RNMMapViewProps, PROVIDER_DEFAULT} from 'react-native-maps';

// providerをデフォルト（AndroidはGoogle Map、iOSはMapKit）に固定する
const provider = PROVIDER_DEFAULT;

// Propsから固定したProp（provider）とiOSのGoogle Mapでのみ指定できるProps（paddingAdjustmentBehaviorとzoomTapEnabled）を削除する
export type MapViewProps = Omit<RNMMapViewProps, 'provider' | 'paddingAdjustmentBehavior' | 'zoomTapEnabled'>;

export const MapView: React.FC<MapViewProps> = (props: MapViewProps) => {
  return <RNMMapView provider={provider} {...props} testID="MapView" />;
};
