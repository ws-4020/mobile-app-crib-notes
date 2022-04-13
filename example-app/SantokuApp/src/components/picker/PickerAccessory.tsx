import React from 'react';
import {View} from 'react-native';

export type PickerAccessoryProps = object;

export const PickerAccessory: React.FC<PickerAccessoryProps> = ({children}) => {
  return <View style={{height: 50, backgroundColor: 'green'}}>{children}</View>;
};
