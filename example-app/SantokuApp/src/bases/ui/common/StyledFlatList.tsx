import {BoxProps, createBox} from '@shopify/restyle';
import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

export const BaseFlatList = createBox<RestyleTheme, FlatListProps<any>>(FlatList);

type StyledFlatListProps<T> = BoxProps<RestyleTheme> & FlatListProps<T>;
const StyledFlatListComponent = <T extends unknown>(
  {children, ...rest}: StyledFlatListProps<T>,
  ref: React.ForwardedRef<FlatList>,
) => (
  <BaseFlatList ref={ref} {...rest}>
    {children}
  </BaseFlatList>
);

export const StyledFlatList = React.forwardRef(StyledFlatListComponent) as <T>(
  props: BoxProps<RestyleTheme> & FlatListProps<T> & {ref?: React.ForwardedRef<FlatList>},
) => ReturnType<typeof StyledFlatListComponent>;
