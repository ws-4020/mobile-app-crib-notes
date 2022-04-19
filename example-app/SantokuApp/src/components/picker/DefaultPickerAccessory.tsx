import React from 'react';
import {StyleSheet, TextProps, TouchableOpacityProps, View, ViewProps} from 'react-native';

import {PickerAccessoryButton} from './PickerAccessoryButton';

export type DefaultPickerAccessoryProps = {
  pickerAccessoryContainerProps?: ViewProps;
  onDelete?: () => void;
  deleteLabel?: string;
  deleteTextProps?: TextProps;
  deleteTextComponent?: React.ReactNode;
  deleteTouchableContainerProps?: TouchableOpacityProps;
  onCancel?: () => void;
  cancelLabel?: string;
  cancelTextProps?: TextProps;
  cancelTextComponent?: React.ReactNode;
  cancelTouchableContainerProps?: TouchableOpacityProps;
  onDone?: () => void;
  doneLabel?: string;
  doneTextProps?: TextProps;
  doneTextComponent?: React.ReactNode;
  doneTouchableContainerProps?: TouchableOpacityProps;
};

export const DefaultPickerAccessory: React.FC<DefaultPickerAccessoryProps> = ({
  pickerAccessoryContainerProps: {style, ...pickerAccessoryContainerProps} = {},
  onDelete,
  deleteTextProps,
  deleteLabel,
  deleteTextComponent,
  deleteTouchableContainerProps,
  onCancel,
  cancelTextProps,
  cancelLabel,
  cancelTextComponent,
  cancelTouchableContainerProps,
  onDone,
  doneTextProps,
  doneLabel,
  doneTextComponent,
  doneTouchableContainerProps,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])} {...pickerAccessoryContainerProps}>
      {(deleteLabel || deleteTextComponent) && (
        <>
          <PickerAccessoryButton
            onPress={onDelete}
            defaultStyle={styles.deleteTextStyle}
            textProps={deleteTextProps}
            textComponent={deleteTextComponent}
            touchableContainerProps={deleteTouchableContainerProps}
            label={deleteLabel}
          />
          <View style={styles.flex} />
        </>
      )}
      {(cancelLabel || cancelTextComponent) && (
        <PickerAccessoryButton
          onPress={onCancel}
          defaultStyle={styles.cancelTextStyle}
          textProps={cancelTextProps}
          textComponent={cancelTextComponent}
          touchableContainerProps={cancelTouchableContainerProps}
          label={cancelLabel}
        />
      )}
      {(doneLabel || doneTextComponent) && (
        <PickerAccessoryButton
          onPress={onDone}
          defaultStyle={styles.doneTextStyle}
          textProps={doneTextProps}
          textComponent={doneTextComponent}
          touchableContainerProps={doneTouchableContainerProps}
          label={doneLabel}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  flex: {
    flex: 1,
  },
});
