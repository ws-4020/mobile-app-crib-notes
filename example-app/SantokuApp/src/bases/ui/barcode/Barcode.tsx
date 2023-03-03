import CODE128 from 'jsbarcode/src/barcodes/CODE128/CODE128';
import CODE128AUTO from 'jsbarcode/src/barcodes/CODE128/CODE128_AUTO';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Path, Svg} from 'react-native-svg';

export type Format = 'CODE128' | 'CODE128AUTO';
const ENCODERS = {
  CODE128,
  CODE128AUTO,
};

// TODO: コードセットの定数をexport
// TODO: Textコンポーネントを指定できるようにする
export type BarcodeProps = {
  value: string;
  width?: number;
  maxWidth?: number;
  height?: number;
  format?: Format;
  lineColor?: string;
  background?: string;
  text?: React.ReactNode;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onError?: (err: any) => void;
};

const initialBarcode = {
  bars: '',
  barCodeWidth: 0,
};

const drawRect = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y}h${width}v${height}h-${width}z`;
};

const drawSvgBarCode = (binary: string, width: number, height: number, barCodeWidth: number, maxWidth?: number) => {
  const rects = [];

  const singleBarWidth = maxWidth && barCodeWidth > maxWidth ? maxWidth / binary.length : width;
  let barWidth = 0;
  let x = 0;
  const yFrom = 0;

  for (let b = 0; b < binary.length; b++) {
    x = b * singleBarWidth;
    if (binary[b] === '1') {
      barWidth++;
    } else if (barWidth > 0) {
      rects[rects.length] = drawRect(x - singleBarWidth * barWidth, yFrom, singleBarWidth * barWidth, height);
      barWidth = 0;
    }
  }

  if (barWidth > 0) {
    rects[rects.length] = drawRect(x - singleBarWidth * (barWidth - 1), yFrom, singleBarWidth * barWidth, height);
  }

  return rects;
};

export const Barcode: React.FC<BarcodeProps> = ({
  value = '',
  width = 2,
  maxWidth,
  height = 100,
  format = 'CODE128',
  lineColor = '#000000',
  background = '#FFFFFF',
  text,
  textStyle,
  style,
  onError,
}) => {
  const getEncoder = useCallback(() => {
    const encoder = new ENCODERS[format](value, {
      width,
      format,
      height,
      lineColor,
      background,
    });
    if (!encoder.valid()) {
      if (onError) {
        throw new Error('Invalid barcode for selected format.');
      }
    }
    return encoder;
  }, [background, format, height, lineColor, onError, value, width]);

  const {bars, barCodeWidth} = useMemo(() => {
    try {
      const encoder = getEncoder();
      const encoded = encoder.encode();
      const barCodeWidth = encoded.data.length * width;
      return {
        bars: drawSvgBarCode(encoded.data, width, height, barCodeWidth, maxWidth).join(' '),
        barCodeWidth: maxWidth && barCodeWidth > maxWidth ? maxWidth : barCodeWidth,
      };
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
    return initialBarcode;
  }, [getEncoder, width, height, maxWidth, onError]);

  return (
    <View style={StyleSheet.flatten([styles.container, {backgroundColor: background}, style])}>
      <Svg height={height} width={barCodeWidth} fill={lineColor}>
        <Path d={bars} />
      </Svg>
      {text && <Text style={StyleSheet.flatten([styles.textStyle, textStyle])}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
});
