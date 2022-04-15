import {log} from 'framework/logging';
import React from 'react';
import {Platform} from 'react-native';

import {SelectPickerItemsPropsIOS} from './SelectPickerItems.ios';

export type SelectPickerItemsProps<ItemT> = SelectPickerItemsPropsIOS<ItemT>;

export const SelectPickerItems = <ItemT extends unknown>(props: SelectPickerItemsProps<ItemT>) => {
  React.useEffect(() => {
    log.warn(`SelectPickerItems is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
