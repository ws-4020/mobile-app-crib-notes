import {SelectPicker} from 'components/picker/SelectPicker';
import {m} from 'framework/message';
import {DemoStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

import {usePickerScreenUseCase} from './usePickerScreenUseCase';

const ScreenName = 'Picker';
const Screen: React.FC = () => {
  const {
    items1,
    items1Key,
    onSelectedItemChangeForItem1,
    onDismissForItem1,
    onDeleteForItem1,
    onCancelForItem1,
    onDoneForItem1,
    items2,
    items2Value,
    onSelectedItemChangeForItem2,
    items3,
    items3Key,
    onSelectedItemChangeForItem3,
  } = usePickerScreenUseCase();

  return (
    <View style={styles.container}>
      <Text>■deleteLabel/cancelLabel/doneLabelを指定</Text>
      <SelectPicker
        selectedItemKey={items1Key}
        onSelectedItemChange={onSelectedItemChangeForItem1}
        items={items1}
        placeholder={{value: {a: undefined}, label: 'please select...'}}
        onDismiss={onDismissForItem1}
        onDelete={onDeleteForItem1}
        onCancel={onCancelForItem1}
        onDone={onDoneForItem1}
        pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
        textInputProps={{rightIcon: <Icon name="expand-more" />}}
        useNativeAndroidPickerStyle
      />
      <Text>■useNativeAndroidPickerStyle: true</Text>
      <SelectPicker
        selectedItemKey={items2Value}
        onSelectedItemChange={onSelectedItemChangeForItem2}
        items={items2}
        placeholder={{value: '', label: 'please select...'}}
        useNativeAndroidPickerStyle
        pickerProps={{mode: 'dropdown'}}
      />
      <Text>■useNativeAndroidPickerStyle: false</Text>
      <SelectPicker
        selectedItemKey={items3Key}
        onSelectedItemChange={onSelectedItemChangeForItem3}
        items={items3}
        placeholder={{value: undefined, label: 'please select...'}}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  );
};

export const PickerScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dateMonthContainer: {
    flexDirection: 'row',
  },
  dateMonthPicker: {
    width: '50%',
  },
});
