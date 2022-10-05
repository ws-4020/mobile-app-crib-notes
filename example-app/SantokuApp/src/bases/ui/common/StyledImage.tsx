import {
  BoxProps,
  boxRestyleFunctions,
  createRestyleComponent,
  createRestyleFunction,
  ResponsiveValue,
} from '@shopify/restyle';
import {Image, ImageProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

const tintColor = createRestyleFunction({
  property: 'tintColor',
  styleProperty: 'tintColor',
  themeKey: 'colors',
});

export type StyledImageProps = BoxProps<RestyleTheme> &
  ImageProps & {tintColor?: ResponsiveValue<keyof RestyleTheme['colors'], RestyleTheme>};
export const StyledImage = createRestyleComponent<StyledImageProps, RestyleTheme>(
  [...boxRestyleFunctions, tintColor],
  Image,
);
