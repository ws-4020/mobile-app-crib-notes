import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';

export type PickerAccessoryButtonProps = {
  onPress?: () => unknown;
  defaultStyle: StyleProp<TextStyle>;
  textProps?: TextProps;
  TextComponent?: React.ComponentType;
  touchableContainerProps?: Omit<TouchableOpacityProps, 'onPress'>;
  label: string;
};
const PickerAccessoryButtonComponent: React.FC<PickerAccessoryButtonProps> = ({
  onPress,
  defaultStyle,
  textProps: {style: textStyle, ...textProps} = {},
  TextComponent = Text,
  touchableContainerProps,
  label,
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...touchableContainerProps}>
      <TextComponent style={StyleSheet.flatten([defaultStyle, textStyle])} {...textProps}>
        {label}
      </TextComponent>
    </TouchableOpacity>
  );
};
export const PickerAccessoryButton = React.memo(PickerAccessoryButtonComponent);
