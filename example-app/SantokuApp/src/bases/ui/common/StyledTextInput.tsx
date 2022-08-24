import {createText, TextProps, useTheme} from '@shopify/restyle';
import React from 'react';
import {TextInput as RNTextInput, TextInputProps as RNTextInputProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';
import {Box, Text} from './index';

const RestyleTextInput = createText<RestyleTheme, RNTextInputProps>(RNTextInput);
export type TextInputProps = TextProps<RestyleTheme> & RNTextInputProps & {errorMessage?: string};
export const StyledTextInput: React.FC<TextInputProps> = ({errorMessage, ...rest}) => {
  const {colors} = useTheme<RestyleTheme>();
  return (
    <Box>
      <RestyleTextInput placeholderTextColor={colors.placeholder} {...rest} />
      {errorMessage && <Text color="errorText">{errorMessage}</Text>}
    </Box>
  );
};
