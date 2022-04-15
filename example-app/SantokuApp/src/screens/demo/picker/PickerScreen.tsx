import {SelectPicker} from 'components/picker/SelectPicker';
import {m} from 'framework/message';
import {DemoStackParamList} from 'navigation/types';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

const items = [
  {value: {a: '1'}, label: 'test1', key: '1', inputLabel: 'テスト1'},
  {value: {a: '2'}, label: 'test2', key: '2', inputLabel: 'テスト2'},
  {value: {a: '3'}, label: 'test3', key: '3', inputLabel: 'テスト3'},
];

const items2 = [
  {value: '1', label: 'test1', inputLabel: 'テスト1'},
  {value: '2', label: 'test2', inputLabel: 'テスト2'},
  {value: '3', label: 'test3', inputLabel: 'テスト3'},
];

const ScreenName = 'Picker';
const Screen: React.FC = () => {
  const [key, setKey] = useState<React.Key>();
  const [value, setValue] = useState<string>();
  return (
    <View style={styles.container}>
      <SelectPicker
        selectedItemKey={key}
        onSelectedItemChange={(index, value, key) => {
          setKey(key);
        }}
        items={items}
        placeholder={{value: undefined, label: 'please select...'}}
        onCancel={selectedItem => setValue(undefined)}
        pickerAccessoryProps={{cancelLabel: m('キャンセル'), doneLabel: m('閉じる')}}
        textInputProps={{rightIcon: <Icon name="expand-more" />}}
        useNativeAndroidPickerStyle
      />
      <SelectPicker
        selectedItemKey={value}
        onSelectedItemChange={(index, value, key) => {
          setValue(value);
        }}
        items={items2}
        placeholder={{value: undefined, label: 'please select...'}}
        onCancel={() => setValue(undefined)}
        pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('閉じる')}}
        textInputProps={{rightIcon: <Icon name="expand-more" />}}
        useNativeAndroidPickerStyle
        pickerProps={{mode: 'dropdown'}}
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
  },
});
