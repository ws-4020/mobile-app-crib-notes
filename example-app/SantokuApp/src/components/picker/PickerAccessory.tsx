import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Text, TextProps} from 'react-native-elements';

export type PickerAccessoryProps = {
  onDelete?: () => void;
  onCancel?: () => void;
  onDone?: () => void;
  deleteTextProps?: TextProps;
  cancelTextProps?: TextProps;
  doneTextProps?: TextProps;
  deleteLabel?: string;
  cancelLabel?: string;
  doneLabel?: string;
  pickerAccessoryStyle?: StyleProp<ViewStyle>;
};

// TODO: Textコンポーネントを指定できるようにする

export const PickerAccessory: React.FC<PickerAccessoryProps> = ({
  onDelete,
  onCancel,
  onDone,
  pickerAccessoryStyle,
  deleteTextProps: {style: deleteTextStyle, ...deleteTextProps} = {},
  cancelTextProps: {style: cancelTextStyle, ...cancelTextProps} = {},
  doneTextProps: {style: doneTextStyle, ...doneTextProps} = {},
  deleteLabel,
  cancelLabel,
  doneLabel,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, pickerAccessoryStyle])}>
      {deleteLabel && (
        <>
          <TouchableOpacity onPress={onDelete}>
            <Text style={StyleSheet.flatten([styles.deleteTextStyle, deleteTextStyle])} {...deleteTextProps}>
              {deleteLabel}
            </Text>
          </TouchableOpacity>
          <View style={{flex: 1}} />
        </>
      )}
      {cancelLabel && (
        <TouchableOpacity onPress={onCancel}>
          <Text style={StyleSheet.flatten([styles.cancelTextStyle, cancelTextStyle])} {...cancelTextProps}>
            {cancelLabel}
          </Text>
        </TouchableOpacity>
      )}
      {doneLabel && (
        <TouchableOpacity onPress={onDone}>
          <Text style={StyleSheet.flatten([styles.doneTextStyle, doneTextStyle])} {...doneTextProps}>
            {doneLabel}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  deleteTextStyle: {
    color: '#d9545e',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  cancelTextStyle: {
    color: '#4577CC',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  doneTextStyle: {
    color: '#4577CC',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
