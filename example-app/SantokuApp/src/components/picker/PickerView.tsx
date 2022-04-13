import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useDeviceOrientation} from './useDeviceOrientation';

export type PickerViewProps = object;

export const PickerView: React.FC<PickerViewProps> = () => {
  const orientation = useDeviceOrientation();
  const {bottom} = useSafeAreaInsets();
  const height = useMemo(() => (orientation.portrait ? 215 : 162) + bottom, [bottom, orientation.portrait]);
  return (
    <View style={{height, paddingBottom: bottom, backgroundColor: 'white', borderWidth: 2, borderColor: 'red'}}>
      <View style={{flex: 1, backgroundColor: 'blue'}} />
    </View>
  );
};
