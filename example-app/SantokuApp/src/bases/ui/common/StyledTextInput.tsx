import {
  BoxProps,
  boxRestyleFunctions,
  createRestyleComponent,
  TextProps,
  textRestyleFunctions,
  useTheme,
} from '@shopify/restyle';
import React from 'react';
import {TextInput as RNTextInput, TextInputProps as RNTextInputProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';
import {Box, Text} from './index';

export type TextInputProps = TextProps<RestyleTheme> &
  BoxProps<RestyleTheme> &
  RNTextInputProps & {errorMessage?: string};
const RestyleTextInput = createRestyleComponent<TextInputProps, RestyleTheme>(
  [...textRestyleFunctions, ...boxRestyleFunctions],
  RNTextInput,
);
export const StyledTextInput: React.FC<TextInputProps> = ({errorMessage, ...rest}) => {
  const {colors} = useTheme<RestyleTheme>();
  return (
    <Box>
      <RestyleTextInput placeholderTextColor={colors.placeholder} {...rest} />
      {errorMessage && <Text color="errorText">{errorMessage}</Text>}
    </Box>
  );
};
