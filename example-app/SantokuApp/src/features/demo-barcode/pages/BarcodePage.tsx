import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {log} from 'bases/logging';
import {Barcode, Format} from 'bases/ui/barcode/Barcode';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import React, {useCallback, useMemo} from 'react';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {SpecAndSourceCodeLink} from '../../demo-github-link/components/SpecAndSourceCodeLink';
import {formInitialValues, useBarcodeForm} from '../forms/useBarcodeForm';

const formatItems: Item<Format>[] = [
  {value: 'CODE128', label: 'CODE128'},
  {value: 'CODE128AUTO', label: 'CODE128AUTO'},
];
export const BarcodePage: React.FC = () => {
  const frame = useSafeAreaFrame();
  const maxSize = useMemo(() => Math.trunc(frame.width) - 32, [frame.width]);
  const {form, setFormSize, validateForm} = useBarcodeForm(maxSize);

  const onSelectedFormatChange = useCallback(
    (selectedItem?: Item<Format>) => form.setFieldValue('format', selectedItem?.value ?? formInitialValues.format),
    [form],
  );

  return (
    <Box flex={1} p="p16">
      <StyledScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>
        <StyledSafeAreaView>
          <SpecAndSourceCodeLink feature="barcode" />
          <Text>
            {`
バーコードを生成し、表示します。
フォーマットは、CODE128、CODE128AUTOのいずれかを指定します。
        `}
          </Text>
          <StyledSpace height="p32" />
          <StyledColumn space="p16">
            <StyledColumn space="p4">
              <Text>フォーマット:</Text>
              <SelectPicker
                selectedItemKey={form.values.format}
                items={formatItems}
                onSelectedItemChange={onSelectedFormatChange}
                textInputComponent={
                  <StyledTextInput value={form.values.format} borderBottomWidth={1} editable={false} />
                }
              />
            </StyledColumn>
            <StyledColumn space="p4">
              {/* TODO: 複数のキャラクタセットを入力できるようにする */}
              <Text>バーコードに設定するデータ:</Text>
              <StyledTextInput
                value={form.values.data}
                borderBottomWidth={1}
                onChangeText={form.handleChange('data')}
                errorMessage={form.errors.data}
                placeholder="値を入力してください"
              />
            </StyledColumn>
          </StyledColumn>
          {form.values.data && (
            <Barcode
              // value={`${String.fromCharCode(210)}1234567890123456${String.fromCharCode(206)}123`}
              value={form.values.data}
              format={form.values.format}
              onError={e =>
                log.error(new ApplicationError('Failed to generate barcode.', e, 'BarcodeError'), 'BarcodeError')
              }
            />
          )}
        </StyledSafeAreaView>
      </StyledScrollView>
    </Box>
  );
};
