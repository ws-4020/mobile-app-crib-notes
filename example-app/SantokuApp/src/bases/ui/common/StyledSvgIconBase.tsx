import {createRestyleComponent, createVariant, spacing, SpacingProps, VariantProps} from '@shopify/restyle';
import {Svg, SvgProps} from 'react-native-svg';

import {Theme} from '../theme/theme';

const themeKey = 'sizeVariants';
const property = 'size';
const variants = createVariant<Theme, typeof themeKey, typeof property>({property, themeKey});
export type StyledSvgIconBaseProps = SpacingProps<Theme> &
  VariantProps<Theme, typeof themeKey, typeof property> &
  Omit<SvgProps, 'color' | 'width' | 'height'>;
export const StyledSvgIconBase = createRestyleComponent<StyledSvgIconBaseProps, Theme>([variants, spacing], Svg);
