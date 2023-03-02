import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {log} from 'bases/logging';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import {QRCode} from 'bases/ui/qrcode/QRCode';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import React, {useCallback, useMemo, useState} from 'react';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

type ErrorCorrectionLevelType = 'L' | 'M' | 'Q' | 'H';
const errorCorrectionLevelItems: Item<ErrorCorrectionLevelType>[] = [
  {value: 'L', label: 'L'},
  {value: 'M', label: 'M'},
  {value: 'Q', label: 'Q'},
  {value: 'H', label: 'H'},
];
export const QRCodePage: React.FC = () => {
  const frame = useSafeAreaFrame();
  const [value, setValue] = useState('0123456789');
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<ErrorCorrectionLevelType>('M');
  const [size, setSize] = useState('200');
  const [sizeError, setSizeError] = useState<string>();
  const setSizeAndValidate = useCallback(
    (size: string) => {
      setSize(size);
      const num = Number(size);
      if (isNaN(num)) {
        setSizeError('数値を入力してください');
        return;
      }
      // 画面の横幅 - 左右の余白（16 * 2）
      const maxSize = Math.trunc(frame.width) - 32;
      if (maxSize < num) {
        setSizeError(`サイズの最大値は${maxSize.toString()}です`);
        return;
      }
      setSizeError(undefined);
    },
    [frame.width],
  );
  const sizeNum = useMemo(() => {
    return sizeError ? 0 : Number(size);
  }, [size, sizeError]);

  const onSelectedErrorCorrectionLevelChange = useCallback((selectedItem?: Item<ErrorCorrectionLevelType>) => {
    setErrorCorrectionLevel(selectedItem?.value ?? 'M');
  }, []);

  return (
    <Box flex={1} p="p16">
      <StyledScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>
        <StyledSafeAreaView>
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
                onSelectedItemChange={onSelectedErrorCorrectionLevelChange}
                textInputComponent={
                  <StyledTextInput value={errorCorrectionLevel} borderBottomWidth={1} editable={false} />
                }
              />
            </StyledColumn>
            <StyledColumn space="p4">
              <Text>サイズ:</Text>
              <StyledTextInput
                value={size}
                keyboardType="numeric"
                borderBottomWidth={1}
                errorMessage={sizeError}
                onChangeText={setSizeAndValidate}
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
                onError={(e: unknown) =>
                  log.error(new ApplicationError('Failed to generate qrcode.', e), 'QRCodeError')
                }
              />
            </Box>
          )}
        </StyledSafeAreaView>
      </StyledScrollView>
    </Box>
  );
};
