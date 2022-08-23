import {createText, TextProps, useTheme} from '@shopify/restyle';
import React from 'react';
import {TextInput as RNTextInput, TextInputProps as RNTextInputProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

const RestyleTextInput = createText<RestyleTheme, RNTextInputProps>(RNTextInput);
export type TextInputProps = TextProps<RestyleTheme> & RNTextInputProps;
export const StyledTextInput: React.FC<TextInputProps> = props => {
  const {colors} = useTheme<RestyleTheme>();
  return <RestyleTextInput placeholderTextColor={colors.placeholder} {...props} />;
};
