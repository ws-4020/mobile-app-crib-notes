import React from 'react';
import {GestureResponderEvent, StyleSheet} from 'react-native';
import {Button as RNEButton} from 'react-native-elements';

type ButtonSizeType = 'small' | 'middle' | 'large' | 'full';

type ButtonWidthSize = {
  [K in ButtonSizeType]: number | string;
};

const buttonWidthSizes: ButtonWidthSize = {
  small: 90,
  middle: 140,
  large: 200,
  full: '100%',
};

type Props = {
  title: string;
  type?: 'solid' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  size?: ButtonSizeType;
};

export const Button: React.FC<Props> = (props) => {
  const {size, ...buttonProps} = props;
  const style = StyleSheet.flatten([styles.button, {width: buttonWidthSizes[props.size ?? 'small']}]);

  return <RNEButton {...buttonProps} raised buttonStyle={style} containerStyle={style} />;
};

Button.defaultProps = {
  type: 'solid',
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 50,
  },
});
