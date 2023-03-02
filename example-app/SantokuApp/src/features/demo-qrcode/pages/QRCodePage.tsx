import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {log} from 'bases/logging';
import {Box, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import {QRCode} from 'bases/ui/qrcode/QRCode';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import React, {useCallback, useMemo, useState} from 'react';

type ErrorCorrectionLevelType = 'L' | 'M' | 'Q' | 'H';
const errorCorrectionLevelItems: Item<ErrorCorrectionLevelType>[] = [
  {value: 'L', label: 'L'},
  {value: 'M', label: 'M'},
  {value: 'Q', label: 'Q'},
  {value: 'H', label: 'H'},
];
export const QRCodePage: React.FC = () => {
  const [value, setValue] = useState('0123456789');
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<ErrorCorrectionLevelType>('M');
  const [size, setSize] = useState('200');
  const sizeNum = useMemo(() => {
    const num = Number(size);
    return isNaN(num) ? 0 : num;
  }, [size]);

  const onSelectedErrorLevelChange = useCallback((selectedItem?: Item<ErrorCorrectionLevelType>) => {
    setErrorCorrectionLevel(selectedItem?.value ?? 'M');
  }, []);

  return (
    <Box flex={1} p="p16">
      <SpecAndSourceCodeLink feature="qrcode" />
      <Text>
        {`
モデル2のQRコードを生成し、表示します。
エンコーディングモードやシンボルバージョン、マスキングパターンは設定するデータや誤り訂正レベルに応じて自動計算します。
        `}
      </Text>
      <StyledSpace height="p32" />
      <StyledColumn space="p16">
        <StyledColumn space="p4">
          <Text>QRコードに設定するデータ:</Text>
          <StyledTextInput
            value={value}
            borderBottomWidth={1}
            onChangeText={setValue}
            placeholder="値を入力してください"
          />
        </StyledColumn>
        <StyledColumn space="p4">
          <Text>誤り訂正レベル:</Text>
          <SelectPicker
            selectedItemKey={errorCorrectionLevel}
            items={errorCorrectionLevelItems}
            onSelectedItemChange={onSelectedErrorLevelChange}
            textInputComponent={<StyledTextInput value={errorCorrectionLevel} borderBottomWidth={1} editable={false} />}
          />
        </StyledColumn>
        <StyledColumn space="p4">
          <Text>サイズ:</Text>
          <StyledTextInput
            value={size}
            keyboardType="numeric"
            borderBottomWidth={1}
            onChangeText={setSize}
            placeholder="サイズを入力してください"
          />
        </StyledColumn>
      </StyledColumn>
      <StyledSpace height="p48" />
      {value && (
        <Box alignSelf="center">
          <QRCode
            value={value}
            ecl={errorCorrectionLevel}
            size={sizeNum}
            onError={(e: unknown) => log.error(new ApplicationError('Failed to generate qrcode.', e), 'QRCodeError')}
          />
        </Box>
      )}
    </Box>
  );
};
