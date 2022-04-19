import React from 'react';
import {StyleSheet, Text, TextProps, TouchableOpacity, View, ViewProps} from 'react-native';

export type PickerAccessoryProps = {
  pickerAccessoryContainerProps?: ViewProps;
  onDelete?: () => void;
  deleteLabel?: string;
  deleteTextProps?: TextProps;
  onCancel?: () => void;
  cancelLabel?: string;
  cancelTextProps?: TextProps;
  onDone?: () => void;
  doneLabel?: string;
  doneTextProps?: TextProps;
  deleteTextComponent?: React.ReactNode;
  cancelTextComponent?: React.ReactNode;
  doneTextComponent?: React.ReactNode;
};

export const PickerAccessory: React.FC<PickerAccessoryProps> = ({
  pickerAccessoryContainerProps: {style, ...pickerAccessoryContainerProps} = {},
  onDelete,
  onCancel,
  onDone,
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
    <View style={StyleSheet.flatten([styles.container, style])} {...pickerAccessoryContainerProps}>
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
