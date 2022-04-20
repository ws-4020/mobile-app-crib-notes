import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {SelectPickerProps} from './SelectPicker';
import {SelectPickerItems} from './SelectPickerItems';
import {useSelectPickerAndroidUseCase} from './useSelectPickerAndroidUseCase';

type SelectPickerPropsAndroid<ItemT> = Omit<
  SelectPickerProps<ItemT>,
  'headerComponent' | 'backdropProps' | 'containerProps' | 'pickerAccessoryProps' | 'pickerItemsContainerProps'
>;

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerPropsAndroid<ItemT>) => {
  const {inputValue, onValueChange} = useSelectPickerAndroidUseCase<ItemT>(props);
  const {
    items,
    selectedItemKey,
    placeholder,
    textInputProps,
    keyExtractor,
    pickerItemsComponent,
    textInputComponent,
    pickerProps,
  } = props;

  return (
    <>
      {pickerItemsComponent ? (
        pickerItemsComponent
      ) : (
        <View>
          {textInputComponent ? (
            textInputComponent
          ) : (
            // テキスト入力とスタイルを合わせるために、TextではなくInputを使用する
            <Input placeholder={placeholder} value={inputValue} editable={false} {...textInputProps} />
          )}
          <SelectPickerItems
            selectedValue={selectedItemKey}
            items={items}
            onValueChange={onValueChange}
            keyExtractor={keyExtractor}
            style={styles.headlessPicker}
            {...pickerProps}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headlessPicker: {
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'transparent',
    backgroundColor: 'transparent',
  },
});
