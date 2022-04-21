import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, View, GestureResponderEvent, Platform, ColorValue, KeyboardTypeOptions} from 'react-native';

import {IconButton} from '../button';
import {TextInput, TextInputProps} from './TextInput';

export type RightIconsProps = {
  color: ColorValue | number | undefined;
  showClearButton?: boolean;
  onClearButtonPress?: (e: GestureResponderEvent) => void;
  clearButtonSize?: number;
  handlePasswordVisibility: () => void;
  passwordVisible: boolean;
  passwordVisibilityButtonSize?: number;
};

const RightIcons: React.FC<RightIconsProps> = ({
  color,
  showClearButton,
  onClearButtonPress,
  clearButtonSize,
  handlePasswordVisibility,
  passwordVisible,
  passwordVisibilityButtonSize,
}) => {
  const passwordVisibilityIconName = passwordVisible ? 'visibility' : 'visibility-off';

  // 入力したときに高さが変化してしまわないように、表示/非表示をwidthで切り替える
  const clearButtonStyle = useMemo(() => {
    const width = showClearButton ? undefined : 0;
    return {width};
  }, [showClearButton]);

  return (
    <View style={styles.iconContainer}>
      <IconButton
        color={color}
        type="material"
        name="cancel"
        size={clearButtonSize}
        onPress={onClearButtonPress}
        style={clearButtonStyle}
      />
      <View style={styles.iconBetween} />
      <IconButton
        color={color}
        type="material"
        name={passwordVisibilityIconName}
        size={passwordVisibilityButtonSize}
        onPress={handlePasswordVisibility}
      />
    </View>
  );
};

const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility(v => !v);
  }, []);
  return {
    passwordVisible: passwordVisibility,
    togglePasswordVisibility,
  };
};

export type PasswordTextInputProps = Omit<TextInputProps, 'iconSize'> & {
  clearButtonSize?: number;
  passwordVisibilityButtonSize?: number;
};

export const PasswordTextInput: React.FC<PasswordTextInputProps> = React.forwardRef(
  ({showClearButton, onClearButtonPress, clearButtonSize, passwordVisibilityButtonSize, iconColor, ...props}, ref) => {
    const {passwordVisible, togglePasswordVisibility} = useTogglePasswordVisibility();

    const keyboardType = Platform.select<KeyboardTypeOptions>({
      ios: 'ascii-capable',
      android: passwordVisible ? 'visible-password' : undefined,
    });

    return (
      <TextInput
        ref={ref}
        secureTextEntry={!passwordVisible}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        autoCorrect={false}
        rightIcon={
          <RightIcons
            clearButtonSize={clearButtonSize}
            showClearButton={showClearButton}
            onClearButtonPress={onClearButtonPress}
            passwordVisibilityButtonSize={passwordVisibilityButtonSize}
            handlePasswordVisibility={togglePasswordVisibility}
            passwordVisible={passwordVisible}
            color={iconColor}
          />
        }
        {...props}
      />
    );
  },
);

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
  },
  iconBetween: {
    marginRight: 5,
  },
});
