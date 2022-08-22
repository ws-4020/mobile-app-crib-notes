import {createBox, createText} from '@shopify/restyle';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
  ScrollView,
  ScrollViewProps,
  SafeAreaView,
  TextInput,
  TextInputBase,
  TextInputProps,
} from 'react-native';

import {Theme} from '../theme/theme';

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const StyledTouchableOpacity = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);
export const StyledSafeAreaView = createBox<Theme, ViewProps>(SafeAreaView);
export const StyledScrollView = createBox<Theme, ScrollViewProps>(ScrollView);
export const StyledTextInputBase = createBox<Theme, TextInputProps>(TextInputBase);
export const StyledTextInput = createBox<Theme, TextInputProps>(TextInput);
