import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {log} from 'bases/logging';
import {Barcode, CHARACTER_SET, Format, START_CHARACTER_SET} from 'bases/ui/barcode/Barcode';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {AddIllustration} from 'bases/ui/illustration/AddIllustration';
import {RemoveIllustration} from 'bases/ui/illustration/RemoveIllustration';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import React, {useCallback, useMemo, useState} from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {SpecAndSourceCodeLink} from '../../demo-github-link/components/SpecAndSourceCodeLink';
import {formInitialValues, useBarcodeForm} from '../forms/useBarcodeForm';
import {BarcodeCharacter} from '../types/barcodeCharacter';

const formatItems: Item<Format>[] = [
  {value: 'CODE128', label: 'CODE128'},
  {value: 'CODE128AUTO', label: 'CODE128AUTO'},
];

const characterSet: Item<BarcodeCharacter>[] = [
  {value: 'CODE-A', label: 'CODE-A'},
  {value: 'CODE-B', label: 'CODE-B'},
  {value: 'CODE-C', label: 'CODE-C'},
];

const initialLineWidth = Number(formInitialValues.lineWidth);
export const BarcodePage: React.FC = () => {
  const frame = useSafeAreaFrame();
  const maxSize = useMemo(() => Math.trunc(frame.width) - 32, [frame.width]);
  const {form, setFormLineWidth, validateForm} = useBarcodeForm();
  const [lineWidth, setLineWidth] = useState(initialLineWidth);

  const onSelectedFormatChange = useCallback(
    (selectedItem?: Item<Format>) => form.setFieldValue('format', selectedItem?.value),
    [form],
  );

  const setLineWidthAndValidate = useCallback(
    async (value: string) => {
      await setFormLineWidth(value);
      // validateFieldだとバリデーションの結果が返却されないので、validateFormを使う
      const errors = await validateForm({lineWidth: value});
      if (!errors.lineWidth) {
        setLineWidth(Number(value));
      }
    },
    [setFormLineWidth, validateForm],
  );

  const data = useMemo(() => {
    if (form.values.format === 'CODE128AUTO') {
      return form.errors.code128AutoData ? undefined : form.values.code128AutoData;
    } else {
      return form.errors.code128Data
        ? undefined
        : form.values.code128Data
            .map(
              (d, index) => `${index === 0 ? START_CHARACTER_SET[d.character] : CHARACTER_SET[d.character]}${d.value}`,
            )
            .join('');
    }
  }, [
    form.errors.code128AutoData,
    form.errors.code128Data,
    form.values.code128AutoData,
    form.values.code128Data,
    form.values.format,
  ]);

  const text = useMemo(() => {
    if (form.values.format === 'CODE128AUTO') {
      return form.errors.code128AutoData ? undefined : form.values.code128AutoData;
    } else {
      return form.errors.code128Data ? undefined : form.values.code128Data.map(d => d.value).join('');
    }
  }, [
    form.errors.code128AutoData,
    form.errors.code128Data,
    form.values.code128AutoData,
    form.values.code128Data,
    form.values.format,
  ]);

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
              <Text>バーコードに設定するデータ:</Text>
              <BarcodeDataInput form={form} />
            </StyledColumn>
            <StyledColumn space="p4">
              <Text>{`ライン幅:
（表示領域を超える場合は自動的に小さくします）`}</Text>
              <StyledTextInput
                value={form.values.lineWidth}
                keyboardType="numeric"
                borderBottomWidth={1}
                onChangeText={setLineWidthAndValidate}
                errorMessage={form.errors.lineWidth}
                placeholder="ライン幅を入力してください"
              />
            </StyledColumn>
          </StyledColumn>
          <StyledSpace height="p48" />
          {data && (
            <Box alignSelf="center">
              <Barcode
                value={data}
                text={text}
                format={form.values.format}
                lineWidth={lineWidth}
                maxWidth={maxSize}
                onError={e =>
                  log.error(new ApplicationError('Failed to generate barcode.', e, 'BarcodeError'), 'BarcodeError')
                }
              />
            </Box>
          )}
        </StyledSafeAreaView>
      </StyledScrollView>
    </Box>
  );
};

const BarcodeDataInput: React.FC<Pick<ReturnType<typeof useBarcodeForm>, 'form'>> = ({form}) => {
  const push = useCallback(async () => {
    await form.setFieldValue('code128Data', [
      ...form.values.code128Data,
      {
        character: formInitialValues.code128Data[0].character,
        value: formInitialValues.code128Data[0].value,
      },
    ]);
  }, [form]);

  return form.values.format === 'CODE128AUTO' ? (
    <StyledTextInput
      value={form.values.code128AutoData}
      borderBottomWidth={1}
      onChangeText={form.handleChange('code128AutoData')}
      errorMessage={form.errors.code128AutoData}
      placeholder="値を入力してください"
    />
  ) : (
    <StyledColumn space="p16">
      {form.values.code128Data.map((d, index) => {
        const onSelectedCharacterSetChange = (selectedItem?: Item<string>) =>
          form.setFieldValue(
            `code128Data[${index}].character`,
            selectedItem?.value ?? formInitialValues.code128Data[0].character,
          );
        const remove = async () => {
          form.values.code128Data.splice(index, 1);
          await form.setFieldValue('code128Data', [...form.values.code128Data]);
        };

        return (
          <StyledRow key={`barcode-data-${index}`} space="p8">
            <Box flex={1}>
              <SelectPicker
                selectedItemKey={form.values.code128Data[index].character}
                items={characterSet}
                onSelectedItemChange={onSelectedCharacterSetChange}
                textInputComponent={
                  <StyledTextInput
                    value={form.values.code128Data[index].character}
                    borderBottomWidth={1}
                    editable={false}
                  />
                }
              />
            </Box>
            <Box flex={3}>
              <StyledTextInput
                value={form.values.code128Data[index].value}
                borderBottomWidth={1}
                onChangeText={form.handleChange(`code128Data[${index}].value`)}
                errorMessage={form.getFieldMeta(`code128Data[${index}].value`).error}
                placeholder="値を入力してください"
              />
            </Box>
            <StyledRow flex={1} space="p8">
              {index !== 0 ? (
                <Pressable onPress={remove}>
                  <RemoveIllustration color="textRed" />
                </Pressable>
              ) : (
                <StyledSpace width="p24" />
              )}
              {index === form.values.code128Data.length - 1 ? (
                <Pressable onPress={push}>
                  <AddIllustration color="blue" />
                </Pressable>
              ) : (
                <StyledSpace width="p24" />
              )}
            </StyledRow>
          </StyledRow>
        );
      })}
    </StyledColumn>
  );
};
