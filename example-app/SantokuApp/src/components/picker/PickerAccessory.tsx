import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TouchableOpacity, View, ViewStyle} from 'react-native';

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
  deleteTextComponent?: React.ReactNode;
  cancelTextComponent?: React.ReactNode;
  doneTextComponent?: React.ReactNode;
};

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
  deleteTextComponent,
  cancelTextComponent,
  doneTextComponent,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, pickerAccessoryStyle])} testID="PickerAccessory">
      {deleteLabel && (
        <>
          <TouchableOpacity onPress={onDelete} testID="deleteLink">
            {deleteTextComponent ? (
              deleteTextComponent
            ) : (
              <Text style={StyleSheet.flatten([styles.deleteTextStyle, deleteTextStyle])} {...deleteTextProps}>
                {deleteLabel}
              </Text>
            )}
          </TouchableOpacity>
          <View style={{flex: 1}} />
        </>
      )}
      {cancelLabel && (
        <TouchableOpacity onPress={onCancel} testID="cancelLink">
          {cancelTextComponent ? (
            cancelTextComponent
          ) : (
            <Text style={StyleSheet.flatten([styles.cancelTextStyle, cancelTextStyle])} {...cancelTextProps}>
              {cancelLabel}
            </Text>
          )}
        </TouchableOpacity>
      )}
      {doneLabel && (
        <TouchableOpacity onPress={onDone} testID="doneLink">
          {doneTextComponent ? (
            doneTextComponent
          ) : (
            <Text style={StyleSheet.flatten([styles.doneTextStyle, doneTextStyle])} {...doneTextProps}>
              {doneLabel}
            </Text>
          )}
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
