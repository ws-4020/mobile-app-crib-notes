import {
  BoxProps,
  boxRestyleFunctions,
  ColorProps,
  createRestyleComponent,
  createVariant,
  TextShadowProps,
  TypographyProps,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';
import {Text} from './index';

const variant = createVariant<RestyleTheme, 'buttonVariants'>({themeKey: 'buttonVariants'});
type BaseButtonProps = VariantProps<RestyleTheme, 'buttonVariants'> & BoxProps<RestyleTheme> & TouchableOpacityProps;
const BaseButton = createRestyleComponent<BaseButtonProps, RestyleTheme>(
  [variant, ...boxRestyleFunctions],
  TouchableOpacity,
);
type TextVariantsProps = Exclude<keyof RestyleTheme['textVariants'], 'defaults'>;

export type ButtonProps = BaseButtonProps & {
  title?: string;
  isLoading?: boolean;
  textVariant?: TextVariantsProps;
} & ColorProps<RestyleTheme> &
  TypographyProps<RestyleTheme> &
  TextShadowProps<RestyleTheme>;
export const StyledButton: React.FC<ButtonProps> = ({
  title,
  isLoading,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textDecorationLine,
  textDecorationStyle,
  textTransform,
  textShadowOffset,
  textShadowRadius,
  textVariant = 'button',
  children,
  ...rest
}) => {
  return (
    <BaseButton {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : children ? (
        children
      ) : (
        <Text
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontStyle={fontStyle}
          fontWeight={fontWeight}
          letterSpacing={letterSpacing}
          lineHeight={lineHeight}
          textAlign={textAlign}
          textDecorationLine={textDecorationLine}
          textDecorationStyle={textDecorationStyle}
          textTransform={textTransform}
          textShadowOffset={textShadowOffset}
          textShadowRadius={textShadowRadius}
          variant={textVariant}>
          {title}
        </Text>
      )}
    </BaseButton>
  );
};
