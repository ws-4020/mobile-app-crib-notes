import {m} from 'bases/message/Message';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import React, {useCallback, useMemo, useRef} from 'react';
import {Input} from 'react-native-elements';
import {MapType} from 'react-native-maps';

type PickerItemType = {
  mapType: MapType;
};

const pickerItems: Item<PickerItemType>[] = [
  {value: {mapType: 'standard'}, label: 'standard', key: 'standard', inputLabel: 'standard'},
  {value: {mapType: 'satellite'}, label: 'satellite', key: 'satellite', inputLabel: 'satellite'},
  {value: {mapType: 'hybrid'}, label: 'hybrid', key: 'hybrid', inputLabel: 'hybrid'},
];

type MapTypePickerProps = {
  mapType: MapType;
  setMapType: (mapType: MapType) => void;
};
export const MapTypePicker: React.FC<MapTypePickerProps> = ({mapType, setMapType}) => {
  const itemsKey = pickerItems.find(item => item.value.mapType === mapType)?.key ?? 'standard';
  const canceledKey = useRef<React.Key>();
  const onSelectedItemChange = useCallback(
    (selectedItem?: Item<PickerItemType>) => {
      setMapType(selectedItem?.value.mapType ?? 'standard');
    },
    [setMapType],
  );
  const inputValue = useMemo(
    () => pickerItems.find(item => item.key === itemsKey)?.inputLabel ?? 'standard',
    [itemsKey],
  );
  const onCancel = useCallback(() => {
    setMapType(pickerItems.find(item => item.key === canceledKey.current)?.value.mapType ?? 'standard');
  }, [setMapType]);
  const acceptCurrentSelection = useCallback((selectedItem?: Item<PickerItemType>) => {
    canceledKey.current = selectedItem?.key;
  }, []);

  return (
    <SelectPicker
      selectedItemKey={itemsKey}
      onSelectedItemChange={onSelectedItemChange}
      items={pickerItems}
      onDismiss={acceptCurrentSelection}
      onCancel={onCancel}
      onDone={acceptCurrentSelection}
      pickerAccessoryProps={{cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
      textInputComponent={<Input value={inputValue} editable={false} />}
    />
  );
};
